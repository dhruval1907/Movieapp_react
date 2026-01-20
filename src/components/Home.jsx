import React from 'react'
import Sidebar from '../templates/Sidebar';
import Navbar from '../templates/Navbar';

const Home = () => {
    document.title = "DCSMP | Home";
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