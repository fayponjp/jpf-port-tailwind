export default function Guestbook() {
    return (
        <>
            {/* <div className='fixed z-30 h-screen w-screen bg-gray-600/90'></div> */}
            <div
                popover=''
                id='guestbook-popover'
                className={`z-30 rounded-lg bg-white lg:flex-row`}
            >
                <form className='flex flex-col p-4 gap-2'>
                    <label className='flex flex-col gap' htmlFor='guestbookUser'>
                        <span>Username</span>
                        <input
                            type='text'
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
                            type='email'
                            name='guestbookEmail'
                            id='guestbookEmail'
                            placeholder='Email'
                        />
                    </label>
                    <label className='flex flex-col gap' htmlFor='guestbookMessage'>
                        <span>Message</span>
                        <textarea name='guestbookMessage' id='guestbookMessage' rows={3}/>
                    </label>
                    <button className='border rounded border-green-700 text-green-700'>Submit</button>
                </form>
            </div>
        </>
    );
}
