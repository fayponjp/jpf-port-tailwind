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
            <div className='flex place-content-between flex-row'>
                <span className='font-bold'>{title}</span>
                <span className='text-xs w-34 rounded border border-(--glass-border) bg-(--glass-bg) p-2 text-center text-slate-500 shadow-2xl/20 inset-shadow-sm inset-shadow-white/20 backdrop-blur-sm transition duration-300 hover:scale-110'>
                    {dateRange}
                </span>
            </div>
            {institution ? <div className='text-muted text-sm mb-2'>{institution}</div> : undefined}
            <ul className='text-muted text-xs/6'>
                {items.map((item, index) => (
                    <li className='mb-3' key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
