"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"

interface Produto {
  id: number
  descricao: string
  categoria: string
  preco: number
  imagem: string
}

export default function CardapioPage() {

  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)

  async function mostrarProdutos() {
    try {
      const response = await fetch("http://localhost:3001/produtos")

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos")
      }

      const data = await response.json()

      setProdutos(data)
    } catch (error) {
      console.error("Erro:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    mostrarProdutos()
  }, [])

      return (
      <>
        <Navbar />
        <main className="p-8">
          <h1 className="mb-6 text-3xl font-bold font-serif text-red-950">
            Cardápio
          </h1>

          {loading ? (<p>Carregando produtos...</p>) : (
            <div className="grid grid-cols-3 gap-6">
              {produtos.map((produto) => (

                
                <div
                  key={produto.id}
                  className="rounded-lg border p-4 shadow"
                >
                  <Image
                    src={produto.imagem}
                    alt={produto.descricao}
                    width={400}
                    height={250}
                    className="h-40 w-full rounded object-contain"
                  />

                  <h2 className="font-serif mt-3 text-xl font-semibold text-[#420f08]">
                    {produto.descricao}
                  </h2>

                  <p className="mt-2 font-serif text-lg text-gray-500">
                    {produto.categoria}
                  </p>

                  <p className="mt-2 text-lg font-serif text-[#520e04]">
                    R$ {Number(produto.preco).toFixed(2)}
                  </p>

                  <button
                    className="mt-4 w-full rounded py-2 bg-red-950 text-white font-serif hover:bg-[#641105]"
                  >
                    Fazer pedido
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </>
    )
}

/*<main className="p-8">
            <h1 className="mb-6 text-3xl font-bold font-serif text-red-950 ">Cardápio</h1>

            <div className="grid grid-cols-3 gap-6">
                {
                    produtos.map((produto) =>(
                        <div key={produto.id}>
                            <Image 
                            src={produto.imagem}
                            alt={produto.nome}
                            width={400}
                            height={400}
                            className="h-70 w-90 rounded-2xl border-solid object-cover"
                            />

                            <h2 className="font-serif mt-3 text-xl font-semibold text-[#420f08]">
                                {produto.nome}
                            </h2>

                            <p className="mt-1 text-lg font-sans text-[#520e04]">
                                R$ {produto.preco.toFixed(2)}
                            </p>

                            <button className="mt-4 w-90 rounded py-2 bg-red-950 text-white font-serif hover:bg-[#641105]">
                                Fazer pedido
                            </button>
                        </div>
                    ))
                }
            </div>
        </main> */