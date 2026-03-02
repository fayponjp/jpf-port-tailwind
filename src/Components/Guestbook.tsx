import { useEffect, useState } from 'react';
import { GuestbookAPI } from '../util/api';
import type { Message } from '../util/api';
import HCaptcha from '@hcaptcha/react-hcaptcha';

function GuestbookItem({ guest, guest_message }: Message) {
    return (
        <li className='px-4 py-5 odd:bg-slate-50'>
            <div className='flex max-w-110 flex-col text-xs/relaxed'>
                <p className='max-w-74'>{guest_message}</p>
                <span className='text-right'>
                    - <span className='font-semibold'>{guest}</span>
                </span>
            </div>
        </li>
    );
}

export default function Guestbook() {
    const [guestname, setGuestname] = useState<string | undefined>();
    const handleGuestnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuestname(e.target.value);
    };

    const [guestEmail, setGuestEmail] = useState<string | undefined>();
    const handleGuestEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuestEmail(e.target.value);
    };

    const [message, setMessage] = useState<string | undefined>();
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const setEmptyInputs = () => {
        setGuestname('');
        setGuestEmail('');
        setMessage('');
    };

    const [isValidated, setIsValidated] = useState(false);
    const [validationError, setValidationError] = useState<
        string | undefined
    >();
    const handleCaptchaVerification = async (token: string) => {
        if (token) {
            try {
                const validated = await GuestbookAPI.validateHCaptcha(token);
                setIsValidated(validated);
            } catch (error: any) {
                setValidationError(error.message);
            }
        }
    };

    const [hasSubmitError, setHasSubmitError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPosted, setIsPosted] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (guestname && message) {
            setIsLoading(true);
            const addErr = await GuestbookAPI.addGuestbookEntry({
                guest: guestname,
                guest_message: message,
                guest_email: guestEmail,
            });

            if (addErr) {
                setHasSubmitError(true);
            } else {
                setIsValidated(false);
                setEmptyInputs();
                setIsPosted(true);
            }
            setIsLoading(false);
        }
    };

    const [guestbookData, setGuestbookData] = useState<Message[] | undefined>();
    async function loadGuestMessages() {
        const { data, error } = await GuestbookAPI.getGuestbook();

        if (data && data.length > 0) {
            setGuestbookData(data);
        } else if (error) {
            console.error(error.message);
        }
    }

    const guestbookMap = guestbookData ? (
        guestbookData.map((guestMessage, index) => (
            <GuestbookItem key={`guestbookitem-${index}`} {...guestMessage} />
        ))
    ) : (
        <p>No guestbook messages yet!</p>
    );

    useEffect(() => {
        loadGuestMessages();
    }, []);

    return (
        <div
            popover='auto'
            id='guestbook-popover'
            className='inset-[unset] right-5 mt-12 max-h-[75vh] max-w-[90vw] rounded-lg bg-white shadow-2xl lg:right-18'
        >
            <div className='animate-slide-in1 flex flex-col gap-6 px-4 py-6 lg:flex-row'>
                <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
                    <label
                        className='flex flex-col gap-1.5'
                        htmlFor='guestbookUser'
                    >
                        <span>Name*</span>
                        <input
                            type='text'
                            className='peer rounded border border-gray-300 p-1'
                            name='guestbookUser'
                            id='guestbookUser'
                            placeholder='hello, visitor!'
                            onChange={handleGuestnameChange}
                            required
                        />
                    </label>
                    <label
                        className='flex flex-col gap-1.5'
                        htmlFor='guestbookEmail'
                    >
                        <span>Email</span>
                        <input
                            type='email'
                            className='rounded border border-gray-300 p-1'
                            name='guestbookEmail'
                            id='guestbookEmail'
                            placeholder='Email'
                            onChange={handleGuestEmailChange}
                        />
                    </label>
                    <label
                        className='flex flex-col gap-1.5'
                        htmlFor='guestbookMessage'
                    >
                        <span>Message*</span>
                        <textarea
                            name='guestbookMessage'
                            placeholder='Messages will require approval before appearing!'
                            className='rounded border border-gray-300 p-1'
                            id='guestbookMessage'
                            rows={3}
                            onChange={handleMessageChange}
                            required
                        />
                    </label>

                    <HCaptcha
                        sitekey={import.meta.env.VITE_hCaptcha_sitekey}
                        onVerify={(token) => handleCaptchaVerification(token)}
                    />
                    <button
                        disabled={!isValidated}
                        className={`${isLoading ? 'animate-pulse' : undefined} cursor-pointer rounded bg-amber-300 p-2 text-gray-800 transition hover:scale-105 disabled:scale-100 disabled:cursor-default disabled:bg-gray-300 disabled:text-gray-500`}
                    >
                        SUBMIT
                    </button>
                    {validationError && (
                        <p className='max-w-70 text-red-500'>
                            There was an issue with your captcha validation.
                        </p>
                    )}
                    {hasSubmitError && (
                        <p className='max-w-70 text-red-500'>
                            There was an issue with message submission.
                        </p>
                    )}
                    {isPosted && (
                        <p className='max-w-70 text-green-500'>
                            Message posted and pending approval!
                        </p>
                    )}
                </form>
                <div className='flex flex-col gap-2'>
                    <h2>Guestbook</h2>
                    <ul className='max-h-90 overflow-y-auto rounded border border-gray-100'>
                        {guestbookMap}
                    </ul>
                </div>
            </div>
        </div>
    );
}
