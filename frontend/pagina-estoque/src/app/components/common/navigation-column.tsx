import Link from 'next/link'
import { BadgePlus } from 'lucide-react'
import { ActiveLink } from './active-link'

export function NavigationColumn() {
    return (
        <div>
            <div className="flex flex-col text-slate-50 pt-8 w-[90%] m-auto ">
                <div className='flex gap-1 pb-9 items-center justify-center border-b border-slate-50/50'>
                    <Link href="/" className='flex gap-1 hover:text-slate-300 duration-500'>
                        <BadgePlus />
                        <h1 className='font-bold text-xl'>EstoquePlus</h1>
                    </Link>
                </div>

                <div>
                    <nav className='mt-12 ml-5 flex flex-col gap-5 items-start justify-start'>
                        <section className='flex flex-col gap-2'>
                            <h2 className='border-b border-slate-50/40 font-semibold text-lg'>CADASTRO</h2>
                            <ActiveLink
                                href='/cadastrar-produtos'
                            >
                                Entradas
                            </ActiveLink>
                            <ActiveLink
                                href='/remover-produtos'
                            >
                                Saídas
                            </ActiveLink>
                        </section>

                        <section className='flex flex-col gap-2'>
                            <h2 className='border-b border-slate-50/40 font-semibold text-lg'>ESTOQUE</h2>
                            <ActiveLink href='/estoque-produtos'>Saldo</ActiveLink>
                        </section>
                    </nav>
                </div>

                <div className='mt-[450px] flex flex-col gap-2 items-center justify-center text-sm'>
                    <section className='flex gap-1 items-center'>
                        <BadgePlus size={20} />
                        <p>EstoquePlus</p>
                    </section>
                    <section className='flex gap-1 items-center'>
                        <p>&copy;</p>
                        <p>2024</p>
                        <p> - Direitos reservados </p>
                    </section>
                </div>
            </div>
        </div>
    )
}