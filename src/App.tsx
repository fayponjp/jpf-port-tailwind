import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquareLinkedin,
    faSquareGithub,
    faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faBook } from '@fortawesome/free-solid-svg-icons';
import Resume from './Components/Resume';

import Carousel from './Components/Carousel';
import Guestbook from './Components/Guestbook';

function App() {
    return (
        <div className='flex-end relative grid min-h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden bg-linear-to-b from-(--bg-bluegray) to-orange-50'>
            <header className='text-gray-profile fixed top-3 right-5 z-30 text-sm'>
                <nav className='flex flex-col'>
                    <button
                        popoverTarget='navigation-popover'
                        className='cursor-pointer rounded-lg bg-white p-3 text-2xl transition delay-50 hover:scale-110 hover:text-slate-400'
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div
                        className='animate-slide-in1 inset-[unset] right-18 rounded-2xl shadow-2xl'
                        id='navigation-popover'
                        popover=''
                    >
                        <ul className='ml-auto flex max-w-fit flex-col gap-4 rounded-lg bg-white py-4 pr-12 pl-6 lg:text-xl'>
                            <li className='hover:text-blue-800'>
                                <a href='#home'>Home</a>
                            </li>
                            <div className='h-px grow bg-linear-to-r from-orange-50 to-indigo-300'></div>
                            <li className='hover:text-blue-800'>
                                <a href='#projects'>Projects</a>
                            </li>
                            <div className='h-px grow bg-linear-to-r from-orange-50 to-indigo-300'></div>
                            <li className='hover:text-blue-800'>
                                <a href='#resume'>Resume</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='flex flex-col'>
                    <button
                        className='animate-slide-in1 mt-4 ml-auto max-w-20 place-items-center rounded-lg border-2 border-white px-2 py-3'
                        title='Sign the Guestbook!'
                        popoverTarget='guestbook-popover'
                    >
                        <FontAwesomeIcon
                            className='cursor-pointer text-3xl text-red-900 transition delay-50 hover:scale-110 hover:text-red-700'
                            icon={faBook}
                        />
                    </button>
                    <Guestbook />
                </div>
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

                <Carousel />
                <Resume />
            </main>

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
