import InputPassword from "../../common/input-password";

export default function CadastroForm() {
    return (
        <div className="flex mr-3 flex-col gap-4" >
            <label
                className="flex flex-col gap-2"
                htmlFor="name"
            >
                <p className="text-sm text-slate-400/80">Digite seu nome</p>
                <input
                    required
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Digite seu nome"
                    className="w-[400px] outline-none py-2 px-3 bg-slate-300 font-semibold text-zinc-950 
                    rounded-lg border border-zinc-900"
                />
            </label>


            <label
                className="flex flex-col gap-2"
                htmlFor="email"
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
        </div>
    )
}