interface ResumeItemProps {
    title: string;
    dateRange: string;
    institution?: string;
    items: (string | React.ReactNode)[];
}

export default function ResumeItem({
    title,
    dateRange,
    institution,
    items,
}: ResumeItemProps) {
    return (
        <div>
            <div className='flex place-content-between gap-2 mb-2 lg:mb-0 lg:flex-row flex-col'>
                <span className='font-bold'>{title}</span>
                <span className='text-xs w-34 rounded p-2 text-center bg-slate-600 text-white transition duration-300 hover:scale-110'>
                    {dateRange}
                </span>
            </div>
            {institution ? <div className='text-muted text-sm mb-2 font-semibold'>{institution}</div> : undefined}
            <ul className='text-muted text-sm/8'>
                {items.map((item, index) => (
                    <li className='mb-3' key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
