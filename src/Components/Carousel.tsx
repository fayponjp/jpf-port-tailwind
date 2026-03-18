import fastImg from '../assets/fasting active.png';
import dibaGets from '../assets/dibagets home.png';
import ivMonitoring from '../assets/iv monitoring spread.png';
// import notWordle from '../assets/not-wordle.png';
import tryal from '../assets/tryal.png';

import SectionHeader from './SectionHeader';
import { useState } from 'react';

const Projects: CarouselItemProps[] = [
    {
        projKey: 1,
        img: ivMonitoring,
        subtopic: 'Mobile App',
        name: 'IV Monitoring',
        desc: (
            <>
                <p>
                    An application for tracking patient IV fluid measurements.
                    Has mobile notifications, a 'remaining volume' visual and
                    logging and printable-report export functionality.
                </p>
                <p>
                    Created using React Native + TypeScript, with Expo as the framework.
                </p>
            </>
        ),
    },
    {
        projKey: 2,
        img: dibaGets,
        subtopic: 'Web Application',
        name: 'DibaGets?',
        desc: (
            <>
                <p className='text-sm font-semibold text-yellow-200'>
                    Work In Progress!
                </p>
                <p>
                    A dictionary app for Filipino slang. Written using Next.js
                    as a practical review of Next and its features. Data is
                    crowdsourced and managed via Supabase.
                </p>
                <p>'Di Bagets o 'di ba gets?</p>
            </>
        ),
        githubUrl: 'https://github.com/fayponjp/dibagets-next',
    },
    {
        projKey: 3,
        img: tryal,
        subtopic: 'Web Application',
        name: 'GameTryal',
        liveUrl: 'https://fayponjp.github.io/browser-games/',
        githubUrl: 'https://github.com/fayponjp/browser-games',
        desc: (
            <>
                <p>
                    A living, constantly growing collection of games that started as self-imposed challenges. 
                </p>
                <p>
                    Currently features a Wordle recreation as well as a pocketmonster-themed hangman game.
                </p>
                <p>Written in TypeScript, React, and Tailwind CSS.</p>
            </>
        ),
    },
    {
        projKey: 4,
        img: fastImg,
        name: 'Gotta Go Fast!',
        subtopic: 'Browser Extension',
        githubUrl: 'https://github.com/fayponjp/go-fast',
        desc: (
            <>
                <p>
                    A browser extension inspired by Intermittent Fasting mobile
                    apps like Zero and Fasty. Uses the localStorage API for
                    history tracking. Created with React.
                </p>
                <p>
                    Learn more about Intermittent Fasting{' '}
                    <a
                        className='text-blue-200 underline underline-offset-1 visited:text-purple-500'
                        target='_blank'
                        href='https://www.hopkinsmedicine.org/health/wellness-and-prevention/intermittent-fasting-what-is-it-and-how-does-it-work'
                    >
                        here
                    </a>
                    !
                </p>
            </>
        ),
    },
];

interface CarouselItemProps {
    img: string;
    subtopic: string;
    name: string;
    desc: string | React.ReactNode;
    githubUrl?: string;
    liveUrl?: string;
    projKey: number;
}

function CarouselItem({
    img,
    subtopic,
    name,
    desc,
    githubUrl,
    liveUrl,
    projKey,
    isActive,
}: CarouselItemProps & { isActive: boolean }) {
    return (
        <li
            key={`carouselItem-${projKey}`}
            className={`absolute inset-0 ml-[calc(50%-50vw)] flex h-full w-screen flex-col px-4 transition-opacity duration-300 ${
                isActive ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
        >
            <div className='mx-auto grid lg:gap-4 gap-8 max-w-[90%] lg:max-w-7xl place-items-center lg:grid-cols-2'>
                <img
                    src={img}
                    className='rounded-xl object-cover max-h-160 max-w-full opacity-95 lg:order-0 order-1'
                    alt=''
                />
                <div className='box-border flex flex-col w-fit text-white lg:place-self-start'>
                    <div className='font-semibold text-orange-100'>
                        {subtopic}
                    </div>
                    <div className='text-3xl font-semibold lg:text-7xl'>
                        {name}
                    </div>
                    <div className='description flex flex-col gap-2 my-3 text-sm'>{desc}</div>
                    <div className='links flex flex-row gap-2 font-mono'>
                        {githubUrl && (
                            <a
                                target='_blank'
                                href={githubUrl}
                                className='text-gray-profile w-30 bg-white py-2 text-center tracking-wider visited:text-violet-700 hover:text-blue-400 visited:hover:text-violet-500'
                            >
                                CODE
                            </a>
                        )}
                        {liveUrl && (
                            <a
                                target='_blank'
                                href={liveUrl}
                                className='w-30 border border-white bg-transparent py-2 text-center tracking-wider text-white visited:text-violet-400 hover:text-blue-400 visited:hover:text-violet-300'
                            >
                                LIVE
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}

function ThumbnailItem({
    img,
    subtopic,
    name,
    projKey,
    isActive,
    onClick,
}: {
    img: string;
    name: string;
    subtopic: string;
    projKey: number;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <li
            className={`relative h-56 w-38 cursor-pointer overflow-hidden rounded ring-2 transition-opacity ${
                isActive
                    ? 'opacity-100 ring-orange-400'
                    : 'opacity-60 ring-white/60 hover:opacity-80'
            }`}
            key={`thumbnailItem-${projKey}`}
            onClick={onClick}
        >
            <img
                className='h-full lg:w-full object-cover ring-2 ring-white/60'
                src={img}
                alt=''
            />
            <div className='absolute right-0 bottom-2.5 left-0 bg-zinc-950/60 p-2 text-white backdrop-blur-md'>
                <div className='title text-sm font-semibold'>{name}</div>
                <div className='description text-xs'>{subtopic}</div>
            </div>
        </li>
    );
}

export default function Carousel() {
    const [selectedKey, setSelectedKey] = useState(1);

    let carouselItems = [];
    let thumbnailItems = [];

    for (const project of Projects) {
        carouselItems.push(
            <CarouselItem
                {...project}
                isActive={project.projKey === selectedKey}
                key={project.projKey}
            />,
        );

        thumbnailItems.push(
            <ThumbnailItem
                img={project.img}
                name={project.name}
                subtopic={project.subtopic}
                projKey={project.projKey}
                isActive={project.projKey === selectedKey}
                onClick={() => setSelectedKey(project.projKey)}
                key={project.projKey}
            />,
        );
    }

    const handleNavClick = (direction: boolean) => {
        if (!direction) {
            if (selectedKey == 1) {
                setSelectedKey(Projects.length);
            } else {
                setSelectedKey((prevKey) => prevKey - 1);
            }
        } else {
            if (selectedKey == Projects.length) {
                setSelectedKey(1);
            } else {
                setSelectedKey((prevKey) => prevKey + 1);
            }
        }
    };

    return (
        <section
            id='projects'
            className='relative ml-[calc(50%-50vw)] h-screen w-screen bg-(--bg-header-dark) pt-4'
        >
            <SectionHeader
                title='Projects'
                classNames='text-white mx-auto lg:w-5xl lg:p-0 px-8'
            />
            <div className='relative mx-auto mb-20 flex h-[90%] w-full flex-col px-8 lg:w-5xl lg:p-0'>
                <ul className='list'>{carouselItems}</ul>

                <ul className='invisible absolute bottom-20 z-20 flex max-w-max gap-5 lg:visible lg:left-[45%]'>
                    {thumbnailItems}
                </ul>

                <nav className='bottom-0 left-[25%] z-20 mx-auto mt-auto flex gap-8 text-white lg:left-[45%]'>
                    <button
                        onClick={() => handleNavClick(false)}
                        className='h-20 w-20 cursor-pointer rounded-[50%] border-0 font-mono text-4xl font-semibold transition duration-300 active:text-orange-300 hover:text-orange-300'
                    >
                        {'<'}
                    </button>
                    <button
                        onClick={() => handleNavClick(true)}
                        className='h-20 w-20 cursor-pointer rounded-[50%] border-0 font-mono text-4xl font-semibold transition duration-300 active:text-orange-300 hover:text-orange-300'
                    >
                        {'>'}
                    </button>
                </nav>
            </div>
        </section>
    );
}
