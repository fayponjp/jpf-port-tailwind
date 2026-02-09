interface WorkExperienceItemProps {
    title: string;
    dateRange: string;
    company?: string;
    items: (string | React.ReactNode)[];
}

export default function WorkExperienceItem({
    title,
    dateRange,
    company,
    items,
}: WorkExperienceItemProps) {
    return (
        <div>
            <div className='flex place-content-between items-baseline'>
                <span className='font-bold'>{title}</span>
                <span className='rounded border border-(--glass-border) p-2 font-semibold shadow-2xl/20 inset-shadow-sm inset-shadow-white/20 backdrop-blur-sm bg-(--glass-bg) text-slate-600/70 w-fit cursor-pointer [&:hover]:scale-110 transition duration-300'>
                    {dateRange}
                </span>
            </div>
            {company ? <div>{company}</div> : undefined}
            <ul className='text-muted text-sm/6'>
                {items.map((item, index) => (
                    <li className='mb-2' key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
