'use client'

import { TableHeader } from "../table/table-header"
import { TableCell } from "../table/table-cell"
import { Table } from "../table/table"
import { useEffect, useState } from "react"

export function DashboardProduct() {

    const [protutos, setProdutos] = useState<any>([])

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

                            <TableCell></TableCell>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    return (
        <div>
            <div

                className='border-2 border-slate-700 dark:border-slate-400 rounded-md mt-10 m-auto py-5 px-5 w-[95%] 
                h-[72vh] overflow-y-scroll scrollbar scrollbar-thumb-slate-700/40'
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
                        </tr>
                    </thead>

                    {renderizarProduto()}

                </Table>
            </div>
        </div>
    )
}