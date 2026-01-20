import React from 'react';
import movie from "../../public/movie.jpg";
import movie2 from "../../public/movie2.jpg";
import movie3 from "../../public/movie3.jpg";
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
    return (
        <div
            style={{
                backgroundImage: `
          linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5),rgba(0,0,0,0.5)),
          url(${movie3})
        `,
                backgroundSize: "cover",
                opacity: "0.9",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
            className="w-[90%] mx-auto h-[50vh] rounded flex flex-col justify-end p-10"
        >
            <h1 className='text-white font-black text-5xl  '>Devil & me</h1>
            <p className='text-white w-[60%] mt-2 text-lg'>In a world where shadows speak louder than words, a man stands face to face with his darkest truth. The devil is not a creature of horns and fire, but a reflection—silent, powerful, and always watching<Link className='text-blue-300'> ... more</Link> </p> 
        </div>
    );
};

export default Header;
