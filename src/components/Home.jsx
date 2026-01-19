import React from 'react'
import Sidebar from '../templates/Sidebar';

const Home = () => {
    document.title = "DCSMP | Home";
    return (
        <>
        <Sidebar/>
            <div className='h-full w-[80%] '></div>
        </>
    )
}

export default Home