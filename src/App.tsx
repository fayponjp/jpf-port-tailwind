import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquareLinkedin,
    faSquareGithub,
    faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import Resume from './Components/Resume';

// import mt3 from './assets/mt3.svg';
import Carousel from './Components/Carousel';
// type ThemeType = 'simple' | 'gui' | 'terminal';

function App() {
    // const [theme, setTheme] = useState<ThemeType>('simple');
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleNavClose = () => {
        setIsClosing(true);
        const timer = setTimeout(() => {
            setNavIsOpen(false);
            setIsClosing(false);
        }, 150);
        return () => clearTimeout(timer);
    };
    // const handleThemeSelect = (e: string) => {
    //     setTheme(e as ThemeType);
    //     console.log(theme);
    // };
    // useEffect(() => {
    //     // theme change
    // }, [theme]);

    // const fbIconRef = useRef<HTMLAnchorElement | null>(null);
    // const [fbIconCoords, setFbIconCoords] = useState<DOMRect | null>(null);

    // function getCurrentCoords() {
    //     const elementRef = fbIconRef.current;

    //     if (elementRef) {
    //         console.log(elementRef.getBoundingClientRect());
    //         setFbIconCoords(elementRef.getBoundingClientRect());
    //     }
    // }

    return (
        <div className='flex-end relative grid min-h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden bg-linear-to-b from-(--bg-bluegray) to-orange-50'>
            <header className='text-gray-profile fixed top-3 right-3 z-30 text-sm'>
                <nav>
                    {/* <select
                        className=''
                        onChange={(e) => handleThemeSelect(e.target.value)}
                    >
                        <option value={'simple'}>Dawn</option>
                        <option value={'gui'}>Operating System</option>
                    </select> */}
                    {!navIsOpen ? (
                        <div className='rounded-lg bg-white/60 p-3'>
                            <button
                                onClick={() =>
                                    setNavIsOpen((prevBool) => !prevBool)
                                }
                                className='cursor-pointer text-2xl transition delay-50 hover:scale-110 hover:text-slate-400'
                            >
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                    ) : (
                        <div
                            className={`relative ${
                                isClosing
                                    ? 'animate-slide-out'
                                    : 'animate-slide-in1'
                            }`}
                        >
                            <button
                                className='absolute top-1 right-1 cursor-pointer rounded-[50%] bg-white px-3 py-1 text-xl lg:text-3xl text-slate-400 transition delay-50 hover:text-slate-700'
                                onClick={handleNavClose}
                            >
                                x
                            </button>
                            <ul className='ml-auto flex max-w-fit flex-col gap-4 rounded-lg bg-white py-4 pr-12 pl-6 lg:text-xl'>
                                <li className='hover:text-blue-800'>
                                    <a href='#home'>Home</a>
                                </li>
                                <div className='h-px grow bg-linear-to-r to-indigo-300 from-orange-50'></div>
                                <li className='hover:text-blue-800'>
                                    <a href='#projects'>Projects</a>
                                </li>
                                <div className='h-px grow bg-linear-to-r to-indigo-300 from-orange-50 '></div>
                                <li className='hover:text-blue-800'>
                                    <a href='#resume'>Resume</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </nav>
            </header>
            <main className='text-gray-profile mx-auto flex flex-col gap-60 lg:w-5xl'>
                <section
                    id='home'
                    className='relative my-[8vh] flex h-[80vh] px-8 lg:p-0'
                >
                    <div className='text-muted z-10 m-auto flex flex-1 flex-col justify-between gap-4 rounded-xl bg-white px-4 py-4 text-center shadow-lg lg:px-14 lg:py-10 lg:text-left'>
                        <div className='flex flex-col'>
                            <p className='text-2xl'>
                                Hi<span>!</span> I'm
                            </p>
                            <p className='text-graygreen mb-3 text-5xl font-semibold lg:text-7xl'>
                                Jon Paulo Faypon{' '}
                                <span className='text-gray-sub align-super text-2xl'>
                                    <sup>(Fayps)</sup>
                                </span>
                            </p>
                            <div className='mx-12 mb-2 flex h-px grow bg-linear-to-r from-indigo-300 via-orange-50 to-orange-200'></div>
                        </div>
                        <div className='mx-auto flex max-w-125 flex-col gap-3 lg:mx-0'>
                            <p className='font-mono text-2xl'>
                                Software Developer
                            </p>
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
                    <div className='bg-grid absolute inset-0 -mx-15'></div>
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
            {/* <img src={mt3} className='z-1 -mt-[45%] w-dvw' /> */}
            <footer className='z-10 mt-25 flex flex-row overflow-hidden bg-(--bg-footer) py-12 text-gray-200'>
                <div className='mx-auto flex flex-col gap-2 text-end lg:w-5xl'>
                    ©2026 Jon Paulo Faypon
                    <a
                        className='font-mono text-sm hover:text-blue-300'
                        href='https://github.com/fayponjp/jpf-port-tailwind'
                    >{`Source Code </>`}</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
