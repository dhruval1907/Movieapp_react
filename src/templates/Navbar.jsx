import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {

  const [query, setquery] = useState("")

  // console.log(query);


  return (
    <div className=' p-6 w-full relative'>
      <nav className='gap-5 w-full flex  items-center justify-center'>
        <CiSearch className='text-white/70 text-xl' />
        <input type="text" className='p-5 w-[55%] border-none outline-none text-xl text-white/90 font-extrabold
          'value={query}
          placeholder='search anything'
          onChange={(e) => setquery(e.target.value)}
        />
        {query.length > 0 && <RxCross2 className='text-white/70 cursor-pointer  text-2xl ' onClick={() => setquery("")} />}
        <div className='w-[50%] max-h-[25rem]  bg-zinc-200  absolute top-[90%] overflow-auto '>
          {/* <Link className=' w-full flex border-b-2 border-zinc-100  items-start p-7  font-semibold text-black/20 hover:text-black hover:bg-zinc-300 duration-100'>
            <img src="" alt="" />
            <span>Hello Eveyone</span>
          </Link> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar