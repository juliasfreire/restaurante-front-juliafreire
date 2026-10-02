"use client"

import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-red-50 via-white to-red-100 font-serif">

      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-bold text-red-900">
          🍒 Red Cherry Bistro
        </h1>

        <nav className="flex gap-6 items-center">
          <Link 
            href="/login"
            className="text-gray-700 hover:text-red-900 font-lg transition-colors"
          >
            Entrar
          </Link>

          <Link
            href="/cardapio"
            className="bg-red-900 text-white px-5 py-2 rounded-full hover:bg-[#641105] transition-colors"
          >
            Cardápio
          </Link>
        </nav>
      </header>


      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">

        <div className="max-w-xl">

          <h2 className="text-5xl font-bold text-red-900 leading-tight">
            Sabores incríveis
            <span className="text-[#520e04]">
              {" "}preparados para você
            </span>
          </h2>


          <p className="mt-6 text-lg text-gray-600">
            Experimente pratos deliciosos feitos com ingredientes selecionados.
            Faça seu pedido de forma rápida e simples.
          </p>


          <div className="flex gap-4 mt-8">

            <Link
              href="/cardapio"
              className="bg-red-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#641105] transition-colors shadow-md"
            >
              Ver Cardápio
            </Link>


            <Link
              href="/login"
              className="border border-red-900 text-red-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Fazer Login
            </Link>

          </div>

        </div>



        {/* Imagem */}
        <div className="mt-10 md:mt-0">

          <div className="w-80 h-80 bg-[#721506] rounded-full flex items-center justify-center shadow-2xl">

            <span className="text-8xl">
              🍔
            </span>

          </div>

        </div>

      </section>



      {/* Cards */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">

        <div className="bg-white p-6 rounded-2xl shadow border border-red-100">
          <h3 className="text-xl font-bold text-[#420f08]">
            🍽️ Pratos Especiais
          </h3>
          <p className="text-gray-600 mt-2">
            Receitas preparadas com muito sabor.
          </p>
        </div>


        <div className="bg-white p-6 rounded-2xl shadow border border-red-100">
          <h3 className="text-xl font-bold text-[#420f08]">
            🚀 Pedido Rápido
          </h3>
          <p className="text-gray-600 mt-2">
            Faça seu pedido online facilmente.
          </p>
        </div>


        <div className="bg-white p-6 rounded-2xl shadow border border-red-100">
          <h3 className="text-xl font-bold text-[#420f08]">
            ⭐ Qualidade
          </h3>
          <p className="text-gray-600 mt-2">
            Ingredientes selecionados para você.
          </p>
        </div>

      </section>


    </main>
  )
}