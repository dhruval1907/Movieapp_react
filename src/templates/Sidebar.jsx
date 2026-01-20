import React from 'react'
import { Link } from 'react-router-dom'
import { RiMovie2AiFill } from "react-icons/ri";
import { MdTheaterComedy } from "react-icons/md";
import { GiTriceratopsHead } from "react-icons/gi";
import { BiSlideshow } from "react-icons/bi";
import { MdContactEmergency } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";

const Sidebar = () => {
    return (
        <div className='h-full w-[20%] border-r-3 border-zinc-200 p-5'>
            <h1 className='flex  gap-5'>
                <i class="text-[#6556CD] ri-tv-fill text-3xl" ></i>
                <span className='text-2xl text-white/80 font-bold'>DCSMP</span>
            </h1>
            <nav className='flex flex-col gap-3'>
                <h1 className='mt-10 mb-5 text-white text-xl font-semibold'>New Feeds</h1>
                <Link className='text-white/70 text-xl p-5 duration-150 hover:text-white  hover:bg-[#6556CD] rounded-lg flex gap-3 items-center'><i class="ri-fire-fill text-xl"></i> Trending</Link>
                <Link className='text-white/70 text-xl p-5 duration-150 hover:text-white  hover:bg-[#6556CD] rounded-lg flex gap-3 items-center'><GiTriceratopsHead className='text-xl'></GiTriceratopsHead> Popular</Link>
                <Link className='text-white/70 text-xl p-5 duration-150 hover:text-white  hover:bg-[#6556CD] rounded-lg flex gap-3 items-center'><RiMovie2AiFill className='text-xl'></RiMovie2AiFill> Movies</Link>
                <Link className='text-white/70 text-xl p-5 duration-150 hover:text-white  hover:bg-[#6556CD] rounded-lg flex gap-3 items-center'><BiSlideshow className='text-xl'></BiSlideshow> Tv Shows</Link>
                <Link className='text-white/70 text-xl p-5 duration-150 hover:text-white  hover:bg-[#6556CD] rounded-lg flex gap-3 items-center'><MdTheaterComedy className='text-xl'></MdTheaterComedy> People</Link>
            </nav>
            <hr className='text-white/30 h-[px]' />
            <nav className='flex flex-col gap-3 '>
                <h1 className='mt-5 text-white text-xl font-semibold'>Website Info.</h1>
                <Link className='text-white/70 mt-3 text-xl p-5 duration-150 hover:text-white  hover:bg-[#6556CD] rounded-lg flex gap-3 items-center'><AiFillInfoCircle></AiFillInfoCircle> About DCSMP</Link>
                <Link className='text-white/70 text-xl p-5 duration-150 hover:text-white  hover:bg-[#6556CD] rounded-lg flex gap-3 items-center'><MdContactEmergency className='text-xl'></MdContactEmergency> Contact Us</Link>

            </nav>
        </div>
    )
}

export default Sidebar