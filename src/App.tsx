import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquareLinkedin,
    faSquareGithub,
    faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from './Components/SectionHeader';
import Resume from './Components/Resume';
import fastIdle from './assets/fasting idle.png';
import mt3 from './assets/mt3.svg';
import Carousel from './Components/Carousel';
type ThemeType = 'simple' | 'gui' | 'terminal';

function App() {
    const [theme, setTheme] = useState<ThemeType>('simple');

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
        <div className='flex-end relative grid min-h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden bg-linear-to-b from-(--bg-bluegray) to-orange-50'>
            <header className='shadow px-8 py-2 text-sm text-gray-profile'>
                <nav className='flex flex-row'>
                    <select
                        className=''
                        onChange={(e) => handleThemeSelect(e.target.value)}
                    >
                        <option value={'simple'}>Dawn</option>
                        <option value={'gui'}>Operating System</option>
                        {/* <option value={'terminal'}>Terminal</option> */}
                    </select>
                    <ul className='ml-auto flex max-w-fit flex-row gap-3'>
                        <li>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li>
                            <a href='#resume'>Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className='text-gray-profile mx-auto flex flex-col gap-60 lg:w-5xl '>
                <section id='home' className='relative px-8 lg:p-0 flex my-[8vh] h-[80vh]'>
                    <div className='text-muted m-auto flex flex-1 flex-col justify-between z-10 gap-4 rounded-xl bg-white px-4 py-4 text-center shadow-lg lg:px-14 lg:py-10 lg:text-left'>
                        <div className='flex flex-col'>
                            <p className='text-2xl'>
                                Hi<span>!</span> I'm
                            </p>
                            <p className='text-graygreen mb-3 text-5xl font-semibold lg:text-7xl'>
                                Jon Paulo Faypon <span className='text-gray-sub text-2xl align-super'><sup>(Fayps)</sup></span>
                            </p>
                            <div className='mx-12 mb-2 flex h-px grow bg-linear-to-r from-indigo-300 via-orange-50 to-orange-200'></div>
                        </div>
                        <div className='mx-auto flex max-w-125 flex-col gap-3 lg:mx-0'>
                            <p className='text-2xl'>Software Developer</p>
                            <p>SaaS experience</p>
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
                    <div className='absolute inset-0 bg-grid -mx-15'></div>
                </section>
                <div></div>
{/* 
                <section id='projects' className='px-8 lg:p-0'>
                    <SectionHeader title='Projects' />
                    <div className='flex'>

                        <div className='text-muted flex flex-col rounded-xl bg-white/60 px-8 py-6 shadow-2xl'>

                            <div className=''>
                                <div className='font-semibold'>
                                    Gotta Go Fast
                                </div>
                                <div className='text-xs'>Fasting Extension</div>
                            </div>

                            <img
                                src={fastIdle}
                                className='max-h-100 object-contain rounded-xl opacity-90 shadow'
                                alt=''
                            />

                            <div className='text-sm'>
                                <p>
                                    A browser extension inspired by Intermittent
                                    Fasting apps like Zero and Fasty.
                                </p>
                                <p>
                                    Learn more about Intermittent Fasting{' '}
                                    <a
                                        className='underline underline-offset-1'
                                        target='_blank'
                                        href='https://www.hopkinsmedicine.org/health/wellness-and-prevention/intermittent-fasting-what-is-it-and-how-does-it-work'
                                    >
                                        here
                                    </a>
                                    !
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                <Carousel />
                <Resume />
            </main>
            <img src={mt3} className='absolute bottom-0 z-1 w-dvw' />
            <footer className='overflow-hidden bg-(--bg-footer)'>
                <div className='inherit min-h-40'></div>
            </footer>
        </div>
    );
}

export default App;
