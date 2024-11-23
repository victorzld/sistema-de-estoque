'use client'

import { PackagePlus, AlignLeft, Package } from 'lucide-react'
import { useState } from 'react'

export function RegisterProduct() {

    const [produto, setProduto] = useState<any>({})

    async function criarProduto(event: any) {
        event.preventDefault()

        await fetch('http://localhost:3001/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
        })
        setProduto({})
    }

    function renderizarFormProduto() {
        return (
            <div>
                <form onSubmit={criarProduto}>
                    <div className="-ml-5 flex gap-7 items-center">
                        <div className="border-2 rounded-lg border-zinc-800 dark:border-slate-400"
                        >
                            <label htmlFor="nomeProduto" className="flex gap-1 px-2 items-center">
                                <Package className="size-4 cursor-pointer dark:text-slate-300" />
                                <input
                                    required
                                    onChange={e => setProduto({ ...produto, produto: e.target.value })}
                                    value={produto.produto ?? ''}
                                    autoComplete='off'
                                    type="text"
                                    id="nomeProduto"
                                    placeholder="Cadastre um produto"
                                    className="bg-transparent outline-none flex-1 px-2 py-1 border-0 focus:ring-0 dark:text-slate-50"
                                />
                            </label>
                        </div>

                        <div className='border-2 rounded-lg border-zinc-800 w-[400px] dark:border-slate-400'>
                            <label htmlFor="descriçãoProduto" className="flex gap-1 px-2 items-center">
                                <AlignLeft className="size-4 cursor-pointer dark:text-slate-200" />
                                <input
                                    onChange={e => setProduto({ ...produto, descricao: e.target.value })}
                                    value={produto.descricao ?? ''}
                                    type="text"
                                    autoComplete='off'
                                    id='descriçãoProduto'
                                    placeholder='Digite a descrição'
                                    className="bg-transparent outline-none flex-1 px-2 py-1 border-0 focus:ring-0 dark:text-slate-50"
                                />
                            </label>
                        </div>

                        <div className='border-2 rounded-lg border-zinc-800 dark:border-slate-400'>
                            <label htmlFor="valorProtuto" className="flex gap-1 px-2 items-center">
                                <PackagePlus className="size-4 cursor-pointer dark:text-slate-200" />
                                <input
                                    required
                                    onChange={e => setProduto({ ...produto, quantidade: +e.target.value })}
                                    value={produto.quantidade ?? ''}
                                    name='amountProducts'
                                    type="number"
                                    id='valorProtuto'
                                    placeholder='Digite a quantidade'
                                    className="bg-transparent outline-none flex-1 px-2 py-1 border-0 focus:ring-0 dark:text-slate-50"
                                />
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className='text-slate-100 text-lg tracking-wide px-5 py-1 rounded-lg bg-slate-700
                                     hover:bg-slate-800 hover:text-slate-50 hover:scale-95 duration-300 dark:bg-slate-100 dark:hover:bg-slate-200
                                     dark:text-zinc-900'
                            >
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className='pt-10 w-[98%] m-auto px-10'>
            {renderizarFormProduto()}
        </div>
    )
}