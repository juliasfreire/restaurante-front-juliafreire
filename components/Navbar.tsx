import Link from "next/link";

export default function Navbar(){
    
    

    return(
        <header className="w-full bg-[#462824] border-b shadow-sm opacity-95">
            <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between">
                <Link href="/" 
                className="flex items-center gap-2 text-2xl font-bold text-white font-serif">
                    Restaurante
                </Link>

                <div className="flex items-center gap-8">
                    <Link href="/" 
                    className="text-white hover:text-[#e2d297] transition text-xl font-serif">
                        Inicio
                    </Link>

                    <Link href="/cardapio" className="text-white hover:text-[#e7daa8] transition text-xl font-serif">
                        Cardápio
                    </Link>

                    <Link href="/sobre" className="text-white hover:text-[#eedfa9] transition text-xl font-serif">
                        Sobre nós
                    </Link>

                    <Link href="/pedidos" className="text-white hover:text-[#e9d9a1] transition text-xl font-serif">
                        Fazer pedido
                    </Link>
                </div>
            </nav>
        </header>
    )
}