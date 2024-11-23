import { Header } from "../../components/common/header";
import { NavigationColumn } from "../../components/common/navigation-column";
import { DashboardProduct } from "../../components/dashboard-products/dashboard-products";
import { RegisterProduct } from "../../components/register-products/register-product";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Cadastrar',
}

export default function EntradaDeProdutos() {
    return (
        <main className="grid grid-cols-5 full h-screen">
            <aside className="bg-slate-900 ">
                <NavigationColumn />
            </aside>

            <div className="col-span-4 max-xl:col-span-3">
                <Header />
                <RegisterProduct />
                <DashboardProduct />
            </div>
        </main>
    )
}