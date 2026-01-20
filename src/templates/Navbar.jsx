import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import axios from '../../src/utils/axios';

import noimages from "../../public/noimage.webp";

const Navbar = () => {

  const [query, setquery] = useState("")

  const [searches, setsearches] = useState([])

  const getquery = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results)
      console.log(data.results);

    } catch (error) {
      console.log("Error :", error.response || error);
    }
  };

  useEffect(function () {
    getquery()
  }, [query])


  return (
    <div className=' p-6 w-[60%] relative'>
      <nav className='gap-5 w-full flex  items-center justify-center'>
        <CiSearch className='text-white/70 text-2xl' />
        <input type="text" className='p-5 w-[55%] border-none outline-none text-xl text-white/90 font-extrabold
          'value={query}
          placeholder='search anything'
          onChange={(e) => setquery(e.target.value)}
        />
        {query.length > 0 && <RxCross2 className='text-white/70 cursor-pointer  text-2xl ' onClick={() => setquery("")} />}
        <div className='w-[60%] max-h-[25rem]  bg-zinc-200  absolute top-[90%] overflow-auto rounded-2xl '>

          {searches.map((val, idx) => {

            return <Link
              key={idx}
              className='w-full flex border-b-2 border-zinc-100 items-start p-7 font-semibold text-black/60 hover:text-black hover:bg-zinc-300 duration-100 gap-5 font-semibold'
            >
              <img src={val.backdrop_path || val.profile_path ?` https://image.tmdb.org/t/p/original/${val.backdrop_path || val.profile_path} ` : noimages } alt="" className='h-[10vh] w-[10vh] object-cover rounded shadow-xl' />
              <span className='text-medium'>{val.title || val.original_name || val.original.title || val.name}</span>
            </Link>

          })}

        </div>
      </nav>
    </div>
  )
}

export default Navbar