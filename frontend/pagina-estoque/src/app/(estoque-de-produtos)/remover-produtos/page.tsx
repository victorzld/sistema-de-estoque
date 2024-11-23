import { Header } from "../../components/common/header"
import { NavigationColumn } from "../../components/common/navigation-column"
import { Metadata } from "next"
import { DashboardProdutoSaida } from "../../components/dashboard-produtos-saida/dashboard-produtos-saida"

export const metadata: Metadata = {
    title: 'Exluir ou alterar',
}

export default function SaidaDeProdutos() {
    return (
        <main className="grid grid-cols-5 full h-screen">
            <aside className="bg-slate-900">
                <NavigationColumn />
            </aside>

            <div className="col-span-4">
                <Header />
                <DashboardProdutoSaida />
            </div>
        </main>
    )
}