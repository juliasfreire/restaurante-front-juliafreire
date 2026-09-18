"use client"

import Navbar from "@/components/Navbar"
import Image from "next/image"
import { useState } from "react"

export default function AdminPage(){

    
    const[descricao,setDescricao] = useState("")
    const[categoria, setCategoria] = useState("")
    const[preco,setPreco] = useState("")
    const[imagem,setImagem] = useState("")
    

    async function cadastrarLanche(e:any) {
        
        e.preventDefault()

        try {
            const response = await fetch(`${process.env.API_URL}/produtos`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    descricao,
                    categoria,
                    preco,
                    imagem
                })
            })

            if(response.ok){
                alert("Produto cadastrado com sucesso!")
            }
        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar")
        }

    }

    return(
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-100 p-8">
                <div className="mx-auto max-w-xl rounded-lg bg-white p-8 shadow">
                    <h1 className="mb-6 text-3xl font-bold font-serif text-red-950">Cadastrar Lanche</h1>
                    <form onSubmit={cadastrarLanche} className="space-y-5">

                        <div>
                            <label className="font-serif text-xl">Descrição</label>
                            <input type="text"
                            value={descricao}
                            onChange={(e)=> setDescricao(e.target.value)}
                            placeholder="Ex: X-Bacon de salada com carne"
                            className="w-full rounded border p-3"
                            />
                        </div>

                        <div>
                            <label className="font-serif text-xl">Categoria</label>
                            <input type="text"
                            value={categoria}
                            onChange={(e)=> setCategoria(e.target.value)}
                            placeholder="Ex: Hambúguer"
                            className="w-full rounded border p-3"
                            />
                        </div>

                        <div>
                            <label className="font-serif text-xl">Preço</label>
                            <input type="number"
                            value={preco}
                            onChange={(e)=> setPreco(e.target.value)}
                            placeholder="Ex: 10.00"
                            className="w-full rounded border p-3"
                            />
                        </div>

                        <div>
                            <label className="font-serif text-xl">Imagem</label>
                            <input 
                            type="text"
                            value={imagem}
                            onChange={(e)=> setImagem(e.target.value)}
                            placeholder="Insira o link da imagem"
                            className="w-full rounded border p-3"
                            />
                        </div>

                        <button
                        type="submit"
                        onClick={cadastrarLanche}
                        className="w-full rounded bg-red-950 py-3 font-semibold text-white font-serif hover:bg-[#641105] cursor-pointer">
                            Cadastrar Lanche
                        </button>
                    </form>
                
                
                </div>
            </main>
        </>
    )
}