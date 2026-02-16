import fastImg from '../assets/fasting active.png';
import dibaGets from '../assets/dibagets home.png';

export default function Carousel() {
    return (
        <section className='relative ml-[calc(50%-50vw)] h-screen w-screen bg-slate-800/80'>
            <div className='mx-auto relative flex h-full w-full flex-col gap-60 px-8 lg:w-5xl lg:p-0'>
                <div className='list'>
                    {/* <div className='item absolute'>
                        <div className='img-background w-full h-full bg-(--bg-fasting)'></div>
                        <div className='content'>
                            <div className='title'>Gotta Go Fast</div>
                            <div className='subtopic'>Browser Extension</div>
                            <div className='description'>
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
                            <div className='links'>
                                <a href='' className=''>Github</a>
                                <a href='' className=''>Live</a>
                            </div>
                        </div>
                    </div> */}
                    <div className='item absolute inset-0'>
                        <div className='img-background w-full h-full'></div>
                        {/* <img src={dibaGets} className='w-full h-full' alt='' /> */}
                        <div className='content box-border absolute translate-x-[-50%] top-[20%] left-[50%] w-lg max-w-[80%] text-white text-shadow-2xs'>
                            <div className='subtopic'>Web Application</div>
                            <div className='tracking-wider text-7xl font-semibold'>DibaGets?</div>
                            <div className='description'>
                                A dictionary app for Filipino slang.
                            </div>
                            <div className='links'>
                                <a href='' className=''>Github</a>
                                <a href='' className=''>Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
