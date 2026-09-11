"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Login(){
    
    const router = useRouter()

    const [usuario,setUsuario] = useState("")
    const [senha,setSenha] = useState("")

    function entrar(){
        if(usuario === "admin" && "julinha"){
            localStorage.setItem("admin_logado","true")

            router.push("/admin")
            return
        }

        Swal.fire({
            title:"Login inválido",
            text:"Usuário ou senha incorretos",
            icon:"error",
            confirmButtonText:"Tentar novamente"
        })
    }
    
    return(
        <main className="flex min-h-screen items-center justify-center bg-gray-100">

            
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="font-serif mb-8 text-center font-bold">Área Administrativa</h1>

                <p className="font-serif mb-8 text-center text-gray-500">Faça login para acessar o painel</p>

                <div>
                    <label className="font-serif py-5">Usuario</label>
                    <input type="text" value={usuario} onChange={(e)=>setUsuario(e.target.value)} 
                    placeholder="Digite seu usuário" className="font-serif w-full rounded-lg border p-3 outline-none focus:ring-red-500 focus:ring-2" />
                </div>

                <div>
                    <label className="font-serif py-5">Senha</label>
                    <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} 
                    placeholder="Digite sua senha" className="font-serif w-full rounded-lg border p-3 outline-none focus:ring-red-500 focus:ring-2" />
                </div>

                <button onClick={entrar} className=" font-serif w-full rounded-lg bg-red-950 py-3 mt-6 font-semibold text-white">
                    Entrar
                </button>
            </div>
        </main>
    );
}