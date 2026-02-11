import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquareLinkedin,
    faSquareGithub,
    faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import hills from './assets/hills.svg';
import mountainSvg from './assets/mountains.svg';

import Resume from './Components/Resume';
type ThemeType = 'baguio' | 'gui' | 'terminal';

function App() {
    const [theme, setTheme] = useState<ThemeType>('baguio');

    const handleThemeSelect = (e: string) => {
        setTheme(e as ThemeType);
        console.log(theme);
    };
    useEffect(() => {
        // theme change
    }, [theme]);

    const fbIconRef = useRef<HTMLAnchorElement | null>(null);
    const [fbIconCoords, setFbIconCoords] = useState<DOMRect | null>(null);

    function getCurrentCoords() {
        const elementRef = fbIconRef.current;

        if (elementRef) {
            console.log(elementRef.getBoundingClientRect());
            setFbIconCoords(elementRef.getBoundingClientRect());
        }
    }

    return (
        <div className='flex-end grid min-h-screen grid-rows-[auto_1fr_auto] bg-linear-to-b from-(--bg-bluegray) via-(--bg-bluegray) to-orange-50'>
            <header className='bg-(--bg-header-dark) px-8 py-2 text-green-50'>
                <nav className='flex flex-row'>
                    <ul className='ml-auto flex max-w-fit flex-row gap-1'>
                        <li>Projects</li>
                        <li>Resume</li>
                    </ul>
                </nav>
            </header>
            {/* 'flex flex-col place-content-between items-center gap-4 lg:flex-row lg:items-start' */}
            <main className='text-gray-profile mx-auto flex flex-col lg:w-5xl'>
                <section>
                    <div className='text-muted mt-40 mb-60 flex flex-1 flex-col justify-between gap-4 rounded-2xl bg-white/60 lg:px-12 lg:py-10 px-4 py-4 shadow xl:text-left'>
                        <div className='flex flex-col'>
                            <p className='text-2xl'>
                                Hi<span>!</span> I'm
                            </p>
                            <p className='text-graygreen mb-3 text-6xl font-semibold lg:text-7xl'>
                                <span>Jon Paulo Faypon</span>
                            </p>
                            <p className='text-gray-sub text-2xl'>(Fayps)</p>
                        </div>
                        <div className='flex max-w-125 flex-col gap-3'>
                            <p className='text-2xl'>Software Developer</p>
                            <p>Experienced working with SaaS Applications</p>
                            <p>Web and .Net development</p>
                            <p>
                                I like tinkering and learning about cool web
                                tech
                            </p>
                        </div>
                        <div className='text-graygreen text-4xl'>
                            <a
                                className='inline-block cursor-pointer transition duration-300 hover:scale-110 hover:text-gray-400'
                                target='_blank'
                                href='mailto:fayponjp@gmail.com'
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            <a
                                className='inline-block cursor-pointer transition duration-300 hover:scale-110 hover:text-blue-600'
                                target='_blank'
                                href='https://www.linkedin.com/in/fayponjp/'
                            >
                                <FontAwesomeIcon icon={faSquareLinkedin} />
                            </a>
                            <a
                                className='inline-block cursor-pointer transition duration-200 hover:scale-110 hover:text-gray-800'
                                target='_blank'
                                href='https://github.com/fayponjp'
                            >
                                <FontAwesomeIcon icon={faSquareGithub} />
                            </a>
                            <a
                                id='fbIcon'
                                className='inline-block cursor-pointer transition duration-300 hover:scale-110 hover:text-blue-700'
                                target='_blank'
                                href='https://www.facebook.com/JP.Fayps'
                            >
                                <FontAwesomeIcon icon={faSquareFacebook} />
                            </a>
                        </div>
                    </div>
                </section>
                {/*
                <section>
                    The tech I'm familiar with: - Web Development the usual
                    suspects (HTML/CSS/JS) - frameworks I've worked with - react
                    - react native - tailwind css - back end wise - dotnet
                    platform/c# - sql-based query languages (MySQL, PostgreSQL
                    rdbms) - document-based dbs (nosql/firebase) - learning or
                    limited experience - nextjs - tanstack (formerly react
                    query) and react router - python - plan to learn! - threejs
                    - blender and 3d modeling
                </section>
                <section>Resume</section>
                <section>This is about me</section> */}
                {/* So may portfolios that look so amazing! */}
                <div></div>

                <Resume />

                <section>
                    <div className='mb-2 flex flex-row items-center pb-0.5'>
                        <h3 className='mb-4 text-2xl'>Projects</h3>
                        <div className='mx-12 mb-2 flex h-px grow bg-linear-to-r from-blue-300 to-orange-50'></div>
                    </div>
                </section>

                <select
                    className='fixed right-4 bottom-8 rounded-sm bg-green-50 px-4 py-2'
                    onChange={(e) => handleThemeSelect(e.target.value)}
                >
                    <option value={'baguio'}>Baguio</option>
                    <option value={'gui'}>Operating System</option>
                    {/* <option value={'terminal'}>Terminal</option> */}
                </select>
                {/* <img className='min-w-dvw absolute z-0' src={mountainSvg} alt='' /> */}
            </main>
            <footer className='overflow-hidden'>
                <div className='inherit min-h-16'></div>
            </footer>
        </div>
    );
}

export default App;
