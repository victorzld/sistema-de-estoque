import { ComponentProps } from "react";

interface TableCellProps extends ComponentProps<'td'> { }

export function TableCell(props: TableCellProps) {
    return (
        <td {...props} className='border-b dark:text-slate-50 border-zinc-700/40 dark:border-slate-400 py-3 text-sm font-medium text-left' />
    )
}