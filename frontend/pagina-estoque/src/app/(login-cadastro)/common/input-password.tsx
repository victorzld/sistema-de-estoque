'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useState } from "react";


export default function InputPassword() {
    const [isShow, setIsShow] = useState(true)
    const showPassowrd = () => {
        setIsShow(!isShow)
    }

    return (
        <label
            className="flex flex-col gap-2"
            htmlFor="password"
        >
            <p className="text-sm text-slate-400/80">Digite sua senha</p>
            <div className="flex items-center ">
                <input
                    required
                    name="password"
                    id="password"
                    type={isShow ? "password" : "text"}
                    placeholder="Digite sua senha"
                    className="w-[400px] outline-none py-2 px-3 bg-slate-300 font-semibold text-zinc-950 rounded-lg border
                    border-zinc-900"
                />
                <button onClick={showPassowrd} type="button">
                    {!isShow ? (
                        <Eye size={18} className="-ml-8 text-zinc-950" />
                    ) : (
                        <EyeOff size={18} className="-ml-8 text-zinc-950" />
                    )}
                </button>
            </div>
        </label>
    )
}