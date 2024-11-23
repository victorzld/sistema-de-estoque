import { SliderImages } from "../common/slider";
import { BadgePlus } from 'lucide-react';

import AuthActions from "../../routes/auth/actions/auth-actions";
import { Metadata } from "next";
import LoginForm from "./components/login-form";
import ButtonFormLogin from "./components/login-button";


export const metadata: Metadata = {
    title: 'Login',
}
export default function LoginPage() {
    return (
        <main className="h-screen grid grid-cols-2 px-14 bg-slate-900 text-slate-50">
            <div className="flex flex-col gap-10 items-center justify-center -ml-5 w-[600px]">
                <div className="mr-[20px] flex flex-col gap-2 items-start justify-start">
                    <div className="flex gap-2 text-4xl justify-start items-center font-semibold">
                        <h1>Estoque Plus</h1>
                        <BadgePlus />
                    </div>
                    <div>
                        <h1 className="text-slate-300/80">Encontre aqui o <strong>seu</strong> sistema de
                            estoque automatizado
                        </h1>
                    </div>
                </div>

                <form
                    action={AuthActions.logarNaConta}
                    className="flex flex-col gap-10 items-center justify-center w-[600px] mx-auto"
                >
                    <LoginForm />
                    <ButtonFormLogin />
                </form>


            </div>

            <SliderImages />
        </main >
    )
}   