import fastImg from '../assets/fasting active.png';
import dibaGets from '../assets/dibagets home.png';
import SectionHeader from './SectionHeader';

interface CarouselItemProps {
    img?: string;
    subtopic: string;
    name: string;
    desc: string | React.ReactNode;
    githubUrl?: string;
    liveUrl?: string;
}

function CarouselItem({
    img,
    subtopic,
    name,
    desc,
    githubUrl,
    liveUrl,
}: CarouselItemProps) {
    return (
        <li className='absolute inset-0 ml-[calc(50%-50vw)] h-full w-screen nth-1:z-10 [&>*]:nth-1:text-blue bg-slate-700'>
            <div className='mx-auto flex flex-col-reverse justify-evenly px-8 lg:w-5xl lg:flex-row lg:p-0'>
                <div className='img-background relative flex perspective-distant'>
                    {/* lg:-translate-z-150 lg:-rotate-x-4 lg:rotate-y-20 */}
                    <img
                        src={img}
                        className='my-auto h-100 rounded-2xl opacity-95 ring-1 ring-white lg:h-[90%]'
                        alt=''
                    />
                </div>
                <div className='mt-35 box-border flex w-lg max-w-[80%] flex-col gap-2 text-white lg:text-shadow-2xs'>
                    <div className='font-semibold text-orange-100'>
                        {subtopic}
                    </div>
                    <div className='text-5xl font-semibold tracking-wider lg:text-7xl'>
                        {name}
                    </div>
                    <div className='description'>{desc}</div>
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

export default function Carousel() {
    return (
        <section
            id='projects'
            className='relative ml-[calc(50%-50vw)] h-screen w-screen bg-slate-900/90 pt-4'
        >
            <SectionHeader
                title='Projects'
                classNames='text-white mx-auto lg:w-5xl lg:p-0 px-8'
            />
            <div className='relative mx-auto mb-20 flex h-[90%] w-full flex-col px-8 lg:w-5xl lg:p-0'>
                <ul className='list'>
                    {/* <li className='item absolute inset-0'>
                        <div className='img-background relative ml-[calc(50%-50vw)] flex h-full w-screen bg-black/50 perspective-distant'>
                            <img
                                src={dibaGets}
                                className='top-[50%] max-h-[70%] -translate-z-150 -rotate-x-4 rotate-y-30 rounded-2xl ring-1 ring-white'
                                alt=''
                            />
                        </div>
                        <div className='content absolute top-[20%] left-[60%] box-border flex w-lg max-w-[80%] translate-x-[-50%] flex-col gap-2 text-white lg:text-shadow-2xs'>
                            <div className='subtopic font-semibold text-orange-100'>
                                Web Application
                            </div>
                            <div className='text-5xl font-semibold tracking-wider lg:text-7xl'>
                                DibaGets?
                            </div>
                            <div className='description'>
                                <p>'Di Bagets o 'di ba gets?</p>
                                <p>A dictionary app for Filipino slang.</p>
                            </div>
                            <div className='links flex flex-row gap-2'>
                                <a
                                    href=''
                                    className='text-gray-profile w-30 border-b bg-white px-1 py-3 text-center tracking-wider visited:text-violet-700 hover:text-blue-400 visited:hover:text-violet-500'
                                >
                                    CODE
                                </a>
                                <a
                                    href=''
                                    className='w-30 border border-white bg-transparent px-1 py-3 text-center tracking-wider text-white visited:text-violet-400 hover:text-blue-400 visited:hover:text-violet-300'
                                >
                                    LIVE
                                </a>
                            </div>
                        </div>
                    </li> */}

                    <CarouselItem
                        name='DibaGets'
                        subtopic='Dictionary Web Application'
                        desc={`A dictionary app for Filipino slang. 'Di Bagets o 'di ba gets?`}
                        img={dibaGets}
                        githubUrl='placeholder'
                        liveUrl='placeholder'
                    />

                    <CarouselItem
                        name='Gotta Go Fast!'
                        subtopic='Browser Extension'
                        desc={
                            <>
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
                            </>
                        }
                    />
                </ul>

                <ul className='thumbs absolute bottom-12 left-[50%] z-20 flex max-w-max gap-5'>
                    <li className='relative h-80 w-46 shrink-0 cursor-pointer'>
                        <img
                            className='h-full w-full rounded-2xl object-cover ring-2 ring-white/60'
                            src={fastImg}
                            alt=''
                        />
                        <div className='content absolute right-0 bottom-2.5 left-0 bg-black/60 p-2 text-white backdrop-blur-sm'>
                            <div className='title text-sm font-semibold'>
                                Gotta Go Fast!
                            </div>
                            <div className='description text-xs'>
                                Browser Extension
                            </div>
                        </div>
                    </li>
                    <li className='relative h-80 w-46 shrink-0 cursor-pointer'>
                        <img
                            className='h-full w-full rounded-2xl object-cover ring-2 ring-white/60'
                            src={dibaGets}
                            alt=''
                        />
                        <div className='content absolute right-0 bottom-2.5 left-0 bg-black/60 p-2 text-white backdrop-blur-sm'>
                            <div className='title text-sm font-semibold'>
                                Gotta Go Fast!
                            </div>
                            <div className='description text-xs'>
                                Browser Extension
                            </div>
                        </div>
                    </li>
                    <li className='relative h-80 w-46 shrink-0 cursor-pointer'>
                        <img
                            className='h-full w-full rounded-2xl object-cover ring-2 ring-white/60'
                            src={dibaGets}
                            alt=''
                        />
                        <div className='content absolute right-0 bottom-2.5 left-0 p-2 text-white backdrop-blur-md'>
                            <div className='title text-sm font-semibold'>
                                Gotta Go Fast!
                            </div>
                            <div className='description text-xs'>
                                Browser Extension
                            </div>
                        </div>
                    </li>
                </ul>

                <nav className='absolute top-[80%] right-[45%] flex w-xs z-20 max-w-[30%] items-center gap-4 text-5xl text-white'>
                    <button className='h-10 w-10 rounded-[50%] border-0 bg-gray-600 text-4xl font-semibold transition duration-300 hover:bg-white/90 hover:text-gray-800'>
                        {'<'}
                    </button>
                    <button className='h-10 w-10 rounded-[50%] border-0 bg-gray-600 text-4xl font-semibold transition duration-300 hover:bg-white/90 hover:text-gray-800'>
                        {'>'}
                    </button>
                </nav>
            </div>
        </section>
    );
}
