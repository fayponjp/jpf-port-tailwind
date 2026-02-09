import WorkExperienceItem from './WorkExperienceItem';

export default function Resume() {
    return (
        <>
            <div className='flex flex-row items-center mb-2 pb-0.5'>
                <h3 className='mb-4 text-2xl'>
                    Resume
                </h3>
                <div className='flex grow h-px mb-2 bg-gray-500'></div>
            </div>

            <div className='grid grid-cols-[200px_1fr] rounded-2xl bg-(--glass-bg) p-4 px-16 py-12 shadow-2xl/20 shadow inset-shadow-sm inset-shadow-current/20 backdrop-blur-sm'>
                <div className='font-bold'>Work Experience</div>
                <div className='flex flex-col gap-4 border-l-2 border-l-gray-400 pl-4'>
                    <WorkExperienceItem
                        title='Freelance Developer'
                        dateRange='2025 -- current'
                        items={[
                            <div key='0'>
                                <p>
                                    <span className='font-bold italic'>
                                        Current Project
                                    </span>{' '}
                                    - Developing a Dictionary web app that aims
                                    to archive Filipino slang.{' '}
                                </p>
                                <p>
                                    It uses Supabase for the PostgreSQL database
                                    as well as for built-in authentication
                                    handling.
                                </p>
                                <p>Definitions are crowd-sourced.</p>
                            </div>,
                            <div key='1'>
                                Commissioned to develop an "IV Monitoring App". It involved creating an IV graphic that updated in real time, as well as a notification function.
                            </div>
                        ]}
                    />
                    <WorkExperienceItem 
                        title='Software Developer'
                        dateRange='2024'
                        company='Resonate CX'
                        items={[
                            <div key='0'>
                                <p>Resonate CX provides a software product that helps organizations or individuals to manage customer or employee experiences. My responsibilities were for configuration set up and work on the software product.</p>
                            </div>,
                            <div key='1'>
                                <p>Feature development, testing, bug fixes and code maintenance for the software product involved touching upon various aspects of the stack: </p>
                            </div>
                        ]}
                    />
                </div>
            </div>
        </>
    );
}
