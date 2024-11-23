'use client'

import { TableHeader } from "../../../components/table/table-header"
import { TableCell } from "../../../components/table/table-cell"
import { Table } from "../../../components/table/table"
import { useEffect, useState } from "react"
import { PackageSearch } from 'lucide-react'

export function DashboardProductFiltered() {

    const [protutos, setProdutos] = useState<any>([])

    const [filtered, setFiltered] = useState<any>([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        if (search.length) {
            setFiltered(protutos.filter((produto: { produto: string | string[] }) => produto.produto.includes(search)))
        }
    }, [search])

    useEffect(() => {
        obterProdutos()
    })

    async function obterProdutos() {
        const resp = await fetch('http://localhost:3001/produtos')
        const produtos = await resp.json()
        setProdutos(produtos)
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
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    function renderizarProdutoFiltered() {
        return (
            <tbody>
                {filtered.map((produto: any) => {
                    return (
                        <tr key={produto.descricao}>
                            <TableCell></TableCell>

                            <TableCell>{produto.id}</TableCell>
                            <TableCell>{produto.produto}</TableCell>
                            <TableCell>{produto.descricao}</TableCell>
                            <TableCell>{produto.quantidade}</TableCell>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    return (
        <div>
            <div className="ml-[31px] mt-10 border-2 rounded-lg border-zinc-500 dark:border-slate-400 w-2/4 hover:border-zinc-600 duration-200 tracking-wide">
                <label htmlFor="searchProducts" className="flex gap-1 px-2 items-center">
                    <PackageSearch size={20} className="cursor-pointer dark:text-slate-300" />
                    <input
                        autoComplete="off"
                        type="text"
                        id="searchProducts"
                        placeholder="Pesquise pelo produto"
                        className="bg-transparent flex-1 outline-none px-2 py-1 border-0 focus:ring-0 dark:text-slate-50"
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />
                </label>
            </div>

            <div className='border-2 border-slate-700 dark:border-slate-400 rounded-md mt-10 m-auto py-5 px-5 w-[95%] h-[72vh] overflow-y-scroll scrollbar scrollbar-thumb-slate-700/40'
            >
                <Table>
                    <thead>
                        <tr className="">
                            <TableHeader></TableHeader>
                            <TableHeader>ID</TableHeader>
                            <TableHeader>Produto</TableHeader>
                            <TableHeader>Descrição</TableHeader>
                            <TableHeader>Quantidade</TableHeader>
                            <TableHeader></TableHeader>
                        </tr>
                    </thead>

                    {search.length > 0 ? (
                        renderizarProdutoFiltered()
                    ) : (
                        renderizarProduto()
                    )}
                </Table>
            </div>
        </div>
    )
}