import React from 'react'
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className=' p-6 w-full relative'>
      <nav className='gap-5 w-full flex  items-center justify-center'>
        <FaSearch className='text-white/70 text-2xl' />
        <input type="text" className='p-5 w-[55%] border-none outline-none text-xl text-white/40 font-semibold ' />
        <RxCross2 className='text-white/70 text-2xl' />
        <div className='w-[50%] h-[22rem] bg-red-300 absolute top-[90%] '>

        </div>
      </nav>
    </div>
  )
}

export default Navbar