import React, { useEffect, useState } from 'react'
import Sidebar from '../templates/Sidebar';
import Navbar from '../templates/Navbar';
import axios from '../utils/axios';

const Home = () => {
    document.title = "DCSMP | Home";

    const [wallpepar, setwallpepar] = useState("")

    const getWallpepar = async () => {
    try {
      const {data} = await axios.get(`/trending/all/day`);
      let randomdata = data.results[(Math.random()*data.results.length).toFixed()]
      setwallpepar(randomdata)

    } catch (error) {
      console.log("Error :", error.response || error);
    }
  };
  

  useEffect(function(){
    !wallpepar && getWallpepar()
  })


    return (
        <>
        <Sidebar/>
            <div className='h-full w-[80%] '>
                <Navbar/>
            </div>
        </>
    )
}

export default Home