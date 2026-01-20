import React from 'react'
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' p-6 w-full relative'>
      <nav className='gap-5 w-full flex  items-center justify-center'>
        <FaSearch className='text-white/70 text-2xl' />
        <input type="text" className='p-5 w-[55%] border-none outline-none text-xl text-white/40 font-semibold ' />
        <RxCross2 className='text-white/70  text-2xl' />
        <div className='w-[50%] h-[25rem]  bg-zinc-200  absolute top-[90%] overflow-auto '>
          <Link className=' w-full flex border-b-2 border-zinc-100  items-start p-7  font-semibold text-white hover:text-black hover:bg-zinc-300 duration-100'>
            <img src="" alt="" />
            <span>Hello Eveyone</span>
          </Link>
          <Link className=' w-full flex border-b-2 border-zinc-100  items-start p-7  font-semibold text-white hover:text-black hover:bg-zinc-300 duration-100'>
            <img src="" alt="" />
            <span>Hello Eveyone</span>
          </Link>
          <Link className=' w-full flex border-b-2 border-zinc-100  items-start p-7  font-semibold text-white hover:text-black hover:bg-zinc-300 duration-100'>
            <img src="" alt="" />
            <span>Hello Eveyone</span>
          </Link>
          <Link className=' w-full flex border-b-2 border-zinc-100  items-start p-7  font-semibold text-white hover:text-black hover:bg-zinc-300 duration-100'>
            <img src="" alt="" />
            <span>Hello Eveyone</span>
          </Link>
          <Link className=' w-full flex border-b-2 border-zinc-100  items-start p-7  font-semibold text-white hover:text-black hover:bg-zinc-300 duration-100'>
            <img src="" alt="" />
            <span>Hello Eveyone</span>
          </Link>
          <Link className=' w-full flex border-b-2 border-zinc-100  items-start p-7  font-semibold text-white hover:text-black hover:bg-zinc-300 duration-100'>
            <img src="" alt="" />
            <span>Hello Eveyone</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar