import { Laptop2, LayoutList, Maximize2, Mic2, PlayCircle, PlayIcon, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Play } from "next/font/google";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image className=" object-cover" src="/acenda o farol.jpg" width={56} height={56} alt="Capa da música acenda o farol de Tim Maia" />
                <div className="flex flex-col">
                    <strong className='font-normal hover:border-b border-zinc-400 cursor-pointer duration-150'>Acenda o farol</strong>
                    <span className='text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer duration-300'>Tim Maia</span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    <Shuffle size={24} className='text-zinc-200 hover:text-green-400 duration-150 cursor-pointer' />
                    <SkipBack size={24} className='text-zinc-200 hover:text-green-400 duration-150 cursor-pointer' />
                    <button className="w-10 h-10 flex items-center justify-center pl- p-2 rounded-full bg-white text-black hover:bg-green-400 duration-150 cursor-pointer">
                        <PlayIcon />
                    </button>
                    <SkipForward size={24} className='text-zinc-200 hover:text-green-400 duration-150 cursor-pointer' />
                    <Repeat size={24} className='text-zinc-200 hover:text-green-400 duration-150 cursor-pointer' />
                </div>
                <div className="flex items-center gap-2">
                    <span className='text-xs text-zinc-500'>0:31</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div className="bg-zinc-200 w-40 h-1 rounded-full hover:bg-green-400 duration-150 cursor-pointer"></div>
                    </div>
                    <span className='text-xs text-zinc-500'>3:12</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Mic2 size={20} className="hover:text-green-400 duration-150 cursor-pointer" />
                <LayoutList size={20} className="hover:text-green-400 duration-150 cursor-pointer" />
                <Laptop2 size={20} className="hover:text-green-400 duration-150 cursor-pointer" />
                <div className="flex items-center gap-2 group">
                    <Volume2 size={20} className="hover:text-green-400 duration-150 cursor-pointer" />
                    <div className="h-1 rounded-full w-24 bg-zinc-600">
                        <div className="bg-zinc-200 w-14 h-1 rounded-full hover:bg-green-400 group-hover:bg-green-400 cursor-pointer"></div>
                    </div>
                </div>
                <Maximize2 size={20} className="hover:text-green-400 duration-150 cursor-pointer" />
            </div>
        </footer>
    )
}