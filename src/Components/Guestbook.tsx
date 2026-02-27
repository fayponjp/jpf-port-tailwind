export default function Guestbook() {
    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.currentTarget)
    }
    return (
        <>
            {/* <div className='fixed z-30 h-screen w-screen bg-gray-600/90'></div> */}
            <div
                popover=''
                id='guestbook-popover'
                className='z-30 lg:right-18 mt-6 right-5 inset-[unset] max-w-[90vw] shadow-2xl rounded-lg bg-white lg:flex-row animate-slide-in1'
            >
                <form className='flex flex-col px-8  py-6 gap-2' onSubmit={handleSubmit}>
                    <label className='flex flex-col gap' htmlFor='guestbookUser'>
                        <span>Username</span>
                        <input
                            type='text' className='border rounded border-gray-300 p-1'
                            name='guestbookUser'
                            id='guestbookUser'
                            required
                            placeholder='username'
                        />
                        <p className='invisible peer-required:visible text-red-600'>A username is required!</p>
                    </label>
                    <label className='flex flex-col gap' htmlFor='guestbookEmail'>
                        <span>Email</span>
                        <input 
                            type='email' className='border rounded border-gray-300 p-1'
                            name='guestbookEmail'
                            id='guestbookEmail'
                            placeholder='Email'
                        />
                    </label>
                    <label className='flex flex-col gap' htmlFor='guestbookMessage'>
                        <span>Message</span>
                        <textarea name='guestbookMessage' className='border rounded border-gray-300 p-1' id='guestbookMessage' rows={3}/>
                    </label>
                    <button className='border rounded border-green-700 text-green-700'>Submit</button>
                </form>
            </div>
        </>
    );
}
