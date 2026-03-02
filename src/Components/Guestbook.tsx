import { useEffect, useState } from 'react';
import { GuestbookAPI } from '../util/api';
import type { Message } from '../util/api';
import HCaptcha from '@hcaptcha/react-hcaptcha';

function GuestbookItem({ guest, guest_message }: Message) {
    return (
        <li>
            <div className='flex max-w-110 flex-col mb-4 text-xs/relaxed'>
                <p className='max-w-74'>{guest_message}</p>
                <span>-from <span className='font-semibold'>{guest}</span></span>
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (guestname && message) {
            GuestbookAPI.addGuestbookEntry({guest: guestname, guest_message: message, guest_email: guestEmail})
        }
    };

    const [guestbookData, setGuestbookData] = useState<Message[] | undefined>();
    async function loadGuestMessages() {
        const { data, error } = await GuestbookAPI.getGuestbook();

        if (data) {
            setGuestbookData(data);
        } else if (error) {
            console.error(error.message);
        }
    }

    const guestbookMap = guestbookData?.map((guestMessage, index) => (
        <GuestbookItem key={`guestbookitem-${index}`} {...guestMessage} />
    ));

    const [hasToken, setHasToken] = useState(false);
    const handleCaptchaVerification = (token: string) => {
        if (token) setHasToken(true);
    }

    useEffect(() => {
        loadGuestMessages();
    }, []);

    return (
        <div popover='auto' id='guestbook-popover' className='inset-[unset] right-5 mt-12 max-h-[75vh] max-w-[90vw] rounded-lg bg-white shadow-2xl lg:right-18'>
            <div className='animate-slide-in1 flex flex-col-reverse gap-6  lg:flex-row px-4 py-6'>
                <ul className='overflow-y-auto'>{guestbookMap}</ul>
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

                    <HCaptcha sitekey={import.meta.env.VITE_hCaptcha_sitekey} onVerify={(token) => handleCaptchaVerification(token)} />
                    <button disabled={!hasToken} className='cursor-pointer rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-default disabled:scale-100 bg-amber-300 p-2 text-gray-800 transition hover:scale-105'>
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
}
