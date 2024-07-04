import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <nav className='space-y-5 mt-10'>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400 duration-200'>
                    <HomeIcon />
                    Ínicio
                </a>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400 duration-200'>
                    <Search />
                    Pesquisar
                </a>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400 duration-200'>
                    <Library />
                    Sua Biblioteca
                </a>
            </nav>
            <nav className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-2">
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 duration-150'>Beagá is who?</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 duration-150'>WE GO JIM DE CRIA 🦾</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 duration-150'>Uma dose de serotonina</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 duration-150'>Rádio de Piggypink</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 duration-150'>Essas aqui agitam 🕺</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 duration-150'>Finja que vc esta num edit do Romário</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 duration-150'>Rain no Thunder</a>
            </nav>
        </aside>
    )
}