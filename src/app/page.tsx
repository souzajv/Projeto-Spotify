import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2, Volume2 } from 'lucide-react'
import Image from 'next/image';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className='rounded-full bg-black/40 p-1 hover:bg-gray-700 duration-300'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1 hover:bg-gray-700 duration-300'>
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Boa tarde!</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors duration-500 group">
              <Image className="h-full object-cover" src="/castelos e ruinas.png" width={80} height={80} alt="Capa do álbum Castelos e Ruínas" />
              <strong>Castelos e Ruínas</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors duration-500 group">
              <Image className="h-full object-cover" src="/o homem não para nunca.jpg" width={80} height={80} alt="Capa do álbum O Homem Não Para Nunca" />
              <strong>O Homem Não Para Nunca</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors duration-500 group">
              <Image className="h-full object-cover" src="/the slow rush.jpg" width={80} height={80} alt="Capa do álbum The Slow Rush" />
              <strong>The Slow Rush</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors duration-500 group">
              <Image className="h-full object-cover" src="/sobrevivendo no inferno.jpg" width={80} height={80} alt="Capa do álbum Sobrevivendo no Inferno" />
              <strong>Sobrevivendo no Inferno</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors duration-500 group">
              <Image className="h-full object-cover" src="/flower boy.jpg" width={80} height={80} alt="Capa do álbum Flower Boy" />
              <strong>Flower Boy</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors duration-500 group">
              <Image className="h-full object-cover" src="/heresia.jpg" width={80} height={80} alt="Capa do álbum Heresia" />
              <strong>Heresia</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">Feito para João :)</h2>
          <div className="grid grid-cols-6 gap-6 mt-4">
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 duration-300 flex flex-col gap-2 relative group">
              <Image className="w-full object-cover" src="/daily mix 1.jpeg" width={320} height={320} alt="Capa do álbum daily mix 1" />
              <button className="absolute right-4 bottom-24 w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Travis Scott, DaBaby, Lil Uzi Vert e mais</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 duration-300 flex flex-col gap-2 relative group">
              <Image className="w-full object-cover" src="/daily mix 2.jpeg" width={320} height={320} alt="Capa do álbum daily mix 2" />
              <button className="absolute right-4 bottom-24 w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className="text-sm text-zinc-400">Drake, Kendrick Lamar, Eminem e mais</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 duration-300 flex flex-col gap-2 relative group">
              <Image className="w-full object-cover" src="/daily mix 3.jpeg" width={320} height={320} alt="Capa do álbum daily mix 3" />
              <button className="absolute right-4 bottom-24 w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className="text-sm text-zinc-400">Bruno Mars, Maroon 5, Ed Sheeran e mais</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 duration-300 flex flex-col gap-2 relative group">
              <Image className="w-full object-cover" src="/daily mix 4.jpeg" width={320} height={320} alt="Capa do álbum daily mix 4" />
              <button className="absolute right-4 bottom-24 w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className="text-sm text-zinc-400">MF Doom, Tyler, The Creator, Frank Ocean e mais</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 duration-300 flex flex-col gap-2 relative group">
              <Image className="w-full object-cover" src="/daily mix 5.jpeg" width={320} height={320} alt="Capa do álbum daily mix 5" />
              <button className="absolute right-4 bottom-24 w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className="text-sm text-zinc-400">Matuê, Teto, WIU e mais</span>
              
            </a><a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 duration-300 flex flex-col gap-2 relative group">
              <Image className="w-full object-cover" src="/luiza sonza.jpg" width={320} height={320} alt="Capa do álbum This is Luiza Sonza" />
              <button className="absolute right-4 bottom-24 w-12 h-12 flex items-center justify-center pl-2 p-2 rounded-full bg-green-400 text-black ml-auto opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-green-700">
                <Play />
              </button>
              <strong className='font-semibold'>This is Luiza Sonza</strong>
              <span className="text-sm text-zinc-400">Escândalo Íntimo, Doce 22, Pandora e mais</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
