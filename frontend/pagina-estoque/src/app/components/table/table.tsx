import { ComponentProps } from "react";

interface TableProps extends ComponentProps<'table'> { }

export function Table(props: TableProps) {
    return (
        <div className='pb-1 px-2'>
            <table className='w-full' {...props} />
        </div>
    )
}