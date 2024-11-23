import Link from "next/link";
import { SliderImages } from "../common/slider";
import AuthActions from "../../routes/auth/actions/auth-actions";
import { Metadata } from "next";
import CadastroForm from "./components/cadastro-form";
import CadastroBotao from "./components/cadastro-button";

export const metadata: Metadata = {
    title: 'Criar Conta',
}

export default function CadastroPage() {


    return (
        <main className="h-screen grid grid-cols-2 px-14 bg-slate-900 text-slate-50">
            <SliderImages />

            <div className="flex flex-col gap-10 items-center justify-center w-[600px] mx-auto">
                <form
                    action={AuthActions.criarConta}
                >
                    <div className="flex flex-col gap-10 items-center justify-center w-[600px] mx-auto">
                        <div className="mr-[166px] flex flex-col gap-2 items-start justify-start">
                            <div>
                                <h1 className="text-4xl">Crie sua conta!</h1>
                            </div>
                            <div className="flex gap-2 items-center text-sm">
                                <h2 className="text-slate-300">Já possui uma conta?</h2>
                                <Link href={'/login'} className="text-teal-300 hover:teal-blue-400 hover:underline
                        hover:scale-105 transition duration-300"
                                >
                                    Entrar
                                </Link>
                            </div>
                        </div>

                        <CadastroForm />
                        <CadastroBotao />
                    </div>
                </form>
            </div>
        </main>
    )
}