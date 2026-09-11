"use client"
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {

  async function cadastrar(e:any) {
    e.preventDefault()
    alert("Produto cadastrado com sucesso!")
  }
  
  return (
    <>
      <Navbar />
      <main className=" flex flex-col justify-center items-center my-25">
        <div className="w-full max-w-lg bg-[#4a2e2a] max-h-screen flex flex-col items-center gap-4 rounded-2xl shadow-2xl p-8">

          <Image 
          src="/logorestaurante.jpg"
          alt='Logotipo'
          width={200}
          height={200}
          className='rounded-4xl p-2 mx-auto mb-4'
          />

          <input className="my-2 text-xl p-2 pr-10 border rounded-md text-white" type="text" placeholder="Digite a descrição: "/>
          <input className="my-2 text-xl p-2 pr-10 border rounded-md text-white" type="text" placeholder="Digite o preço: "/>
          <input className="my-2 text-xl p-2 pr-10 border rounded-md text-white" type="text" placeholder="Digite a categoria: "/>
          <input className="my-2 text-xl p-2 pr-10 border rounded-md text-white" type="text" placeholder="Lanche disponivel?" />

          <button onClick={cadastrar} className="text-[#4a2e2a] hover:bg-yellow-100 bg-[#e8e1c9] border rounded-2xl w-40 text-2xl p-1 font-medium cursor-pointer">Cadastrar</button>
        </div>
      </main>
    </>
  );
}