import ResumeItem from './ResumeItem';
import SectionHeader from './SectionHeader';
export default function Resume() {
    return (
        <section id='resume'  className='lg:p-0 px-8 z-10'>
            <SectionHeader title='Resume' />
            <div className='flex gap-8 flex-col px-10 py-10 rounded-xl bg-white/70 shadow-2xl w-fit'>
                <div className='grid items-start lg:grid-cols-[1fr_5fr] lg:px-0'>
                    <div className='mb-2 text-2xl font-bold lg:mr-4 lg:text-base'>
                        Work Experience
                    </div>
                    <div className='flex flex-col gap-4 lg:border-l-2 lg:border-l-gray-200 lg:pl-6'>
                        <ResumeItem
                            title='Freelance Developer'
                            dateRange='2025 -- current'
                            items={[
                                <div key='0'>
                                    <p>
                                        <span className='font-bold italic'>
                                            Current Project
                                        </span>{' '}
                                        - Developing a Dictionary web app that
                                        aims to archive Filipino slang.{' '}
                                    </p>
                                    <p>
                                        It uses Supabase for the PostgreSQL
                                        database as well as for built-in
                                        authentication handling.
                                    </p>
                                    <p>Definitions are crowd-sourced.</p>
                                </div>,
                                <div key='1'>
                                    Commissioned to develop an "IV Monitoring
                                    App". It involved creating an IV graphic
                                    that updated in real time, notification functionality, and utility functions like activity logging and printing.
                                </div>,
                                <div key='2'>
                                    Created SPAs, landing pages, and components as commissions. Designs are provided via design tools (Figma, AdobeXD etc) or designed with client input.
                                </div>
                            ]}
                        />
                        <ResumeItem
                            title='Junior Software Developer'
                            dateRange='2024'
                            institution='Resonate CX'
                            items={[
                                <div key='0'>
                                    <p>
                                        My responsibilities were for
                                        configuration set up and work on (and
                                        with) the CX/EX software product and
                                        associated platform.
                                    </p>
                                </div>,
                                <div key='1'>
                                    <p>
                                        For configurations, I made use of a
                                        combination of the in-built
                                        configuration tools and manual
                                        configuration tweaks. This responsibilty
                                        largely consisted of knowledge about
                                        markup notation and parsing data.
                                    </p>
                                </div>,
                                <div key='2'>
                                    <p>
                                        Feature development, testing, bug fixes
                                        and code maintenance for the software
                                        product involved touching upon various
                                        aspects of the stack. This
                                        responsibility required familiarity with
                                        the .net platform and C#, web
                                        development, relational databases and
                                        database management systems.
                                    </p>
                                </div>,
                            ]}
                        />
                        <ResumeItem
                            title='Professional Services Team Lead'
                            dateRange='2022 -- 2023'
                            institution='Giant International Software Station, Inc/Encompass Technologies'
                            items={[
                                <div key='0'>
                                    <p>
                                        The Services department was responsible
                                        for customizations of the ERP/RAS that
                                        Encompass Technologies provides.
                                    </p>
                                </div>,
                                <div key='1'>
                                    <p>
                                        I served as liaision between Project
                                        Managers/CN Developer Team and the PH
                                        services developer team. I was also
                                        responsible for Software Project
                                        planning and development; as well as
                                        developer team training planning and
                                        execution.
                                    </p>
                                </div>,
                                <div key='2'>
                                    <p>Also responsible for training planning and execution for the useage of the reporting tools used on the platform for the PH team.</p>
                                </div>
                            ]}
                        />
                        <ResumeItem 
                            title='Professional Services Developer'
                            dateRange='2019 -- 2021'
                            institution='Giant International Software Station, Inc/Encompass Technologies'
                            items={[
                                <div key='0'>
                                    <p>Customization development involved creating Dashboards, Reports, and process automation. Skills required web development and testing knowledge; Cloud Function (AWS or Azure equivalents) development; an understanding of SQL and relational detabases; and RESTful API development and usage</p>
                                </div>
                            ]}
                        />
                    </div>
                </div>

                <div className='grid items-start lg:grid-cols-[1fr_5fr] lg:px-0'>
                    <div className='mb-2 text-2xl font-bold lg:mr-4 lg:text-base'>
                        Education
                    </div>
                    <div className='flex flex-col gap-4 lg:border-l-2 lg:border-l-gray-200 lg:pl-6'>
                        <ResumeItem
                            title='Bachelor of Science In Information Technology'
                            dateRange='2016 -- 2019'
                            institution='Saint Louis University, Baguio City, Philippines'
                            items={[<div key='0'></div>]}
                        />
                    </div>
                </div>

                <div className='grid items-start lg:grid-cols-[1fr_5fr] lg:px-0'>
                    <div className='mb-2 text-2xl font-bold lg:mr-4 lg:text-base'>
                        Skills
                    </div>
                    <div className='flex flex-col gap-4 lg:border-l-2 lg:border-l-gray-200 lg:pl-6 text-sm text-muted'>
                        <p>HTML/CSS/JavaScript, TypeScript, React, Tailwind CSS</p>
                        <p>SQL: MySQL and Snowflake, PostgreSQL via Supabase, Firebase</p>
                        <p>C#, Python</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
