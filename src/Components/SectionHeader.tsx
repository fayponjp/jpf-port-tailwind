export default function SectionHeader({ title }: { title: string }) {
    return (
        <div className='mb-2 flex flex-col items-center pb-0.5 lg:flex-row'>
            <h3 className='mb-4 text-3xl lg:text-2xl'>{title}</h3>
            <div className='flex h-px w-[50%] grow bg-linear-to-r from-blue-300 via-orange-50 to-orange-200 lg:mx-12 lg:mb-2'></div>
        </div>
    );
}
