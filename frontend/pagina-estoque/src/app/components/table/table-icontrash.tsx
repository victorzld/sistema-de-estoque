import { ComponentProps } from "react";

interface TableIconProps extends ComponentProps<'td'> { }

export function TableIcon(props: TableIconProps) {
    return (
        <td {...props} className="cursor-pointer text-zinc-600 dark:text-slate-300/80 hover:text-zinc-800 hover:scale-110 duration-200" />
    )
}