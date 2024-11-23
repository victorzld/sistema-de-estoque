import { Header } from "../../components/common/header";
import { NavigationColumn } from "../../components/common/navigation-column";
import { DashboardProductFiltered } from "./dashboard-filter/dashboard-filter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Estoque',
}

export default function CadastroDeProdutos() {
    return (
        <div>
            <div className="grid grid-cols-5 full h-screen">
                <div className="bg-slate-900">
                    <NavigationColumn />
                </div>

                <div className="col-span-4">
                    <Header />
                    <DashboardProductFiltered />
                </div>
            </div>
        </div>
    )
}