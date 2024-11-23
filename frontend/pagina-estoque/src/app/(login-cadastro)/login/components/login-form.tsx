'use client'

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react'
import InputPassword from "../../common/input-password";

export default function LoginForm() {

    const [isShow, setIsShow] = useState(true)
    const showPassowrd = () => {
        setIsShow(!isShow)
    }

    return (
        <div className="flex flex-col gap-4 mt-5">
            <label
                htmlFor="email"
                className="flex flex-col gap-2"
            >
                <p className="text-sm text-slate-400/80">Digite seu e-mail</p>
                <input
                    required
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="w-[400px] outline-none py-2 px-3 bg-slate-300 font-semibold text-zinc-950 
                rounded-lg border border-zinc-900"
                />
            </label>

            <InputPassword />

            <div className="flex gap-2 items-center text-sm mb-1">
                <h2 className="text-slate-400/80">Não possui uma conta?</h2>

                <Link href={'/cadastro'} className="text-teal-300 hover:teal-blue-400 hover:underline
                    hover:scale-105 transition duration-300"
                >
                    Crie uma aqui!
                </Link>
            </div>


        </div>
    )
}