import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<'th'> { }

export function TableHeader(props: TableHeaderProps) {
    return (
        <th className="border-b-2 pb-2 dark:text-slate-50 border-zinc-700 dark:border-slate-400 text-sm font-bold tracking-wide text-left" {...props} />
    )
}