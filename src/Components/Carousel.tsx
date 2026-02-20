import fastImg from '../assets/fasting active.png';
import dibaGets from '../assets/dibagets home.png';
import ivMonitoring from '../assets/iv monitoring spread.png';
import notWordle from '../assets/not-wordle.png';

import SectionHeader from './SectionHeader';
import { useState } from 'react';

const Projects: CarouselItemProps[] = [
    {
        projKey: 1,
        img: ivMonitoring,
        subtopic: 'Mobile App',
        name: 'IV Monitoring',
        desc: <p>An application for tracking patient IV fluid measurements.</p>,
    },
    {
        projKey: 2,
        img: dibaGets,
        subtopic: 'Web Application',
        name: 'DibaGets',
        desc: (
            <>
                <p className='text-sm font-semibold text-yellow-200'>
                    Work In Progress!
                </p>
                <p>
                    A dictionary app for Filipino slang. 'Di Bagets o 'di ba
                    gets?
                </p>
            </>
        ),
        githubUrl: 'https://github.com/fayponjp/dibagets',
    },
    {
        projKey: 3,
        img: notWordle,
        subtopic: 'Web Application',
        name: 'Not-Quite-Wordle',
        liveUrl: 'https://fayponjp.github.io/not-quite-wordle/',
        githubUrl: 'https://github.com/fayponjp/not-quite-wordle',
        desc: (
            <p>
                An infinitely-replayable recreation of The New York Times'{' '}
                <a href='https://www.nytimes.com/games/wordle/index.html'>
                    online Wordle
                </a>{' '}
                game. A self-imposed challenge to attempt recreating the game
                from scratch.
            </p>
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
                    A browser extension inspired by Intermittent Fasting apps
                    like Zero and Fasty.
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
            className={`inset-0 ml-[calc(50%-50vw)] flex px-4 h-full w-screen flex-col transition-opacity absolute duration-300 ${
                isActive ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
        >
            <div className='mx-auto flex flex-col-reverse gap-8 lg:flex-row lg:p-0'>
                <div className='flex'>
                    {/* lg:-translate-z-150 lg:-rotate-x-4 lg:rotate-y-20 */}
                    <img
                        src={img}
                        className='max-w-[80vw] rounded-xl object-contain opacity-95 ring-1 ring-gray-500 lg:mt-8 lg:max-h-170'
                        alt=''
                    />
                </div>
                <div className='box-border flex w-lg max-w-[80%] flex-col gap-2 self-start text-white lg:mt-35 lg:text-shadow-2xs'>
                    <div className='animate-carousel-shift font-semibold text-orange-100'>
                        {subtopic}
                    </div>
                    <div className='animate-carousel-shift-200 text-5xl font-semibold delay-100 lg:text-7xl'>
                        {name}
                    </div>
                    <div className='description animate-carousel-shift-300'>
                        {desc}
                    </div>
                    <div className='links flex flex-row gap-2'>
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                className='text-gray-profile w-30 bg-white px-1 py-3 text-center tracking-wider visited:text-violet-700 hover:text-blue-400 visited:hover:text-violet-500'
                            >
                                CODE
                            </a>
                        )}
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                className='w-30 border border-white bg-transparent px-1 py-3 text-center tracking-wider text-white visited:text-violet-400 hover:text-blue-400 visited:hover:text-violet-300'
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
            className={`relative h-56 w-38 cursor-pointer rounded ring-2 transition-opacity ${
                isActive
                    ? 'opacity-100 ring-orange-400'
                    : 'opacity-60 ring-white/60 hover:opacity-80'
            }`}
            key={`thumbnailItem-${projKey}`}
            onClick={onClick}
        >
            <img
                className='h-full w-full object-cover ring-2 ring-white/60'
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
                setSelectedKey(Projects.length) 
            } else {
                setSelectedKey((prevKey) => prevKey-1)
            }
        } else {
            if (selectedKey == Projects.length) {
                setSelectedKey(1)
            } else {
                setSelectedKey((prevKey) => prevKey+1)
                
            }
        }
    }

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

                <ul className='absolute lg:visible invisible bottom-20 z-20 flex max-w-max gap-5 lg:left-[50%]'>
                    {thumbnailItems}
                </ul>

                <nav className='mt-auto mx-auto bottom-0 left-[25%] z-20 flex gap-8 text-white lg:left-[45%]'>
                    <button onClick={() => handleNavClick(false)} className='h-20 w-20 cursor-pointer rounded-[50%] border-0 font-mono text-4xl font-semibold transition duration-300 hover:text-orange-300'>
                        {'<'}
                    </button>
                    <button onClick={() => handleNavClick(true)} className='h-20 w-20 cursor-pointer rounded-[50%] border-0 font-mono text-4xl font-semibold transition duration-300 hover:text-orange-300'>
                        {'>'}
                    </button>
                </nav>
            </div>
        </section>
    );
}
