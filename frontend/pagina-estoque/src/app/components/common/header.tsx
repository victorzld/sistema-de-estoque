'use client'

import { LogOut, Tally4 } from 'lucide-react'
import Link from 'next/link'
import { FC, ReactNode, useState } from 'react'
import ThemeToggle from '../theme-toggle/theme-toggle';

interface Props {
    children: ReactNode;
    tooltip?: string
}

const Tooltip: FC<Props> = ({ children, tooltip }): JSX.Element => {
    return (
        <div className='group relative inline-block'>
            {children}
            <span
                className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-1000
                bg-slate-900/75 text-slate-50 text-sm py-1 px-3 rounded-xl absolute top-full mt-2 -ml-14 whitespace-nowrap
                dark:bg-slate-200 dark:text-zinc-900'
            >
                {tooltip}
            </span>
        </div>
    )
}

export function Header() {

    const [isSelect, setIsSelect] = useState(false)
    const changeTheme = () => {
        setIsSelect(!isSelect)
    }

    return (
        <div>
            <div className="w-[98%] m-auto h-24 border-b border-zinc-700/70 flex items-center justify-end px-10 
            max-xl:"
            >

                <nav className="flex gap-3 items-center">
                    <button onClick={changeTheme} className='flex'>
                        {!isSelect ? (
                            <Tooltip tooltip='Modo Escuro'>
                                <div >
                                    <ThemeToggle />
                                </div>
                            </Tooltip>
                        ) : (
                            <Tooltip tooltip='Modo Claro'>
                                <div>
                                    <ThemeToggle />
                                </div>
                            </Tooltip>
                        )}
                    </button>

                    <p className="text-zinc-900/40 dark:text-slate-100/40">
                        |
                    </p>

                    <Tooltip tooltip='Desconectar'>
                        <Link href={'/api/logout'}>
                            <LogOut
                                className="text-zinc-600 dark:text-slate-200/80 dark:hover:text-slate-100/80 hover:text-zinc-800 
                                hover:scale-105 duration-200"
                                size={20}
                            />
                        </Link>
                    </Tooltip>


                </nav>
            </div>
        </div>
    )
}