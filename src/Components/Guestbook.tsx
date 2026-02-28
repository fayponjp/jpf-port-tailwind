import { useState } from 'react';

export default function Guestbook() {
    const [guestname, setGuestname] = useState<string | undefined>();
    const handleGuestnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuestname(e.target.value);
    }

    const [guestEmail, setGuestEmail] = useState<string | undefined>();
    const handleGuestEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuestEmail(e.target.value);
    }

    const [message, setMessage] = useState<string | undefined>();
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        console.log(guestname)
        console.log(guestEmail)
        console.log(message)
    };
    return (
        <>
            {/* <div className='fixed z-30 h-screen w-screen bg-gray-600/90'></div> */}
            <div
                popover=''
                id='guestbook-popover'
                className='animate-slide-in1 inset-[unset] right-5 z-30 mt-6 max-w-[90vw] rounded-lg bg-white shadow-2xl lg:right-18 lg:flex-row'
            >
                <form
                    className='flex flex-col gap-2 px-8 py-6'
                    onSubmit={handleSubmit}
                >
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
                    <button className='rounded bg-amber-300 text-gray-800 p-2 hover:scale-105 cursor-pointer transition'>
                        SUBMIT
                    </button>
                </form>
            </div>
        </>
    );
}
