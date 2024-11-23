'use client'

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

type ActiveLinkProps = LinkProps & {
    children: string,
}

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {

    const nomeDoLink = usePathname()
    const isActive = nomeDoLink === href.toString()

    return (
        <Link href={href}
            className={`${isActive ? 'text-sm text-zinc-500 duration-300 tracking-wider'
                : 'text-sm hover:text-slate-300 duration-300'}`}
            {...rest}
        >
            {children}
        </Link>
    )
}