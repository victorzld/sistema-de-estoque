'use client'

import { TableHeader } from "../table/table-header"
import { TableCell } from "../table/table-cell"
import { Table } from "../table/table"
import { useEffect, useState } from "react"
import { TableIcon } from "../table/table-icontrash"

import { Trash2, Pencil, PackagePlus, AlignLeft, CircleDollarSign } from 'lucide-react'

export function DashboardProdutoSaida() {

    const [produto, setProduto] = useState<any>({})
    const [protutos, setProdutos] = useState<any>([])

    useEffect(() => {
        obterProdutos()
    })

    async function alterarProduto() {
        console.log(alterarProduto)
        await fetch(`http://localhost:3001/produtos/${produto.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
        })
        setProduto({})
        await obterProdutos()
    }

    async function obterProdutos() {
        const resp = await fetch('http://localhost:3001/produtos')
        const produto = await resp.json()
        setProdutos(produto)
    }

    async function excluirProduto(id: number) {
        await fetch(`http://localhost:3001/produtos/${id}`, {
            method: 'DELETE',
        })
        await obterProdutos()
    }

    async function obterProdutoPorId(id: number) {
        const resp = await fetch(`http://localhost:3001/produtos/${id}`)
        const produto = await resp.json()
        setProduto(produto)
    }

    function AlterarEcluix() {
        return (
            <div>
                {produto.id ? (
                    <div className="-ml-5 flex gap-7 items-center">
                        <div className="border-2 rounded-lg border-zinc-800 dark:border-slate-400"
                        >
                            <label htmlFor="nomeProduto" className="flex gap-1 px-2 items-center">
                                <PackagePlus className="size-4 cursor-pointer dark:text-slate-300 " />
                                <input
                                    onChange={e => setProduto({ ...produto, produto: e.target.value })}
                                    value={produto.produto ?? ''}
                                    autoComplete='off'
                                    type="text"
                                    id="nomeProduto"
                                    placeholder="Cadastre um produto"
                                    className="dark:text-slate-50 bg-transparent outline-none flex-1 px-2 py-1 border-0 focus:ring-0"
                                />
                            </label>
                        </div>

                        <div className='border-2 rounded-lg border-zinc-800 dark:border-slate-400 w-[400px]'>
                            <label htmlFor="descriçãoProduto" className="flex gap-1 px-2 items-center">
                                <AlignLeft className="size-4 cursor-pointer dark:text-slate-300 " />
                                <input
                                    onChange={e => setProduto({ ...produto, descricao: e.target.value })}
                                    value={produto.descricao ?? ''}
                                    type="text"
                                    autoComplete='off'
                                    id='descriçãoProduto'
                                    placeholder='Digite a descrição'
                                    className="dark:text-slate-50  bg-transparent outline-none flex-1 px-2 py-1 border-0 focus:ring-0"
                                />
                            </label>
                        </div>

                        <div className='border-2 rounded-lg border-zinc-800 dark:border-slate-400'>
                            <label htmlFor="valorProtuto" className="flex gap-1 px-2 items-center">
                                <CircleDollarSign className="size-4 cursor-pointer dark:text-slate-300 " />
                                <input
                                    onChange={e => setProduto({ ...produto, quantidade: +e.target.value })}
                                    value={produto.quantidade ?? ''}
                                    name='amountProducts'
                                    type="number"
                                    id='valorProtuto'
                                    placeholder='Digite a quantidade'
                                    className="dark:text-slate-50 bg-transparent outline-none flex-1 px-2 py-1 border-0 focus:ring-0"
                                />
                            </label>
                        </div>

                        <div>
                            <button
                                onClick={alterarProduto}
                                className='text-slate-100 text-lg tracking-wide px-5 py-1 rounded-lg bg-slate-700
                                    hover:bg-slate-800 hover:text-slate-50 hover:scale-105 duration-300
                                     dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-zinc-900'
                            >
                                Alterar
                            </button>
                        </div>
                    </div>
                ) : (
                    null
                )}
            </div>
        )
    }

    function renderizarProduto() {
        return (
            <tbody>
                {protutos.map((produto: any) => {
                    return (
                        <tr key={produto.id}>
                            <TableCell></TableCell>

                            <TableCell>{produto.id}</TableCell>
                            <TableCell>{produto.produto}</TableCell>
                            <TableCell>{produto.descricao}</TableCell>
                            <TableCell>{produto.quantidade}</TableCell>

                            <TableCell className="">
                                <TableIcon>
                                    <button onClick={() => excluirProduto(produto.id)}>
                                        <Trash2 size={20} />
                                    </button>
                                </TableIcon>
                            </TableCell>

                            <TableCell>
                                <TableIcon>
                                    <button onClick={() => obterProdutoPorId(produto.id)}>
                                        <Pencil size={18} />
                                    </button>
                                </TableIcon>
                            </TableCell>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    return (
        <div>
            <div className='pt-[76px] w-[98%] m-auto px-10'>
                {AlterarEcluix()}
            </div>
            <div

                className='border-2 border-slate-700 dark:border-slate-400 rounded-md mt-10 m-auto py-5 px-5 w-[95%] h-[72vh] overflow-y-scroll scrollbar scrollbar-thumb-slate-700/40'
            >
                <Table>
                    <thead>
                        <tr>
                            <TableHeader></TableHeader>
                            <TableHeader>ID</TableHeader>
                            <TableHeader>Produto</TableHeader>
                            <TableHeader>Descrição</TableHeader>
                            <TableHeader>Quantidade</TableHeader>
                            <TableHeader></TableHeader>
                            <TableHeader></TableHeader>
                        </tr>
                    </thead>

                    {renderizarProduto()}
                </Table>
            </div>
        </div>
    )
}