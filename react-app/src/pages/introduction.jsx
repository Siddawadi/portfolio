import React from 'react'
import { Link } from 'react-router'
import { FaInstagram } from "react-icons/fa6";
export const Introduction = () => {
  return (
     <div className='min-w-full items-center bg-white px-50'> 
        <div className='min-h-[20vh]   flex flex-col py-10 items-start justify-center ' >
            <div className='px-8  py-10' >  
                <button className='border-2 rounded-2xl min-w-fit  bg-amber-75 shadow-green-400 w-[20vw] shadow'>Open to collaborations & internships</button></div>
         
            <p className='font-sans italic  font-bold text-7xl  hover:text-red-600'>Siddhartha</p>

        <p className='font-sans italic font-bold text-7xl
         hover:text-blue-600 transform duration-300'> Dawadi</p>
         <div className='mt-5 gap-2 flex '>
            <button className='border-2 rounded-2xl  bg-amber-50 min-w-fit h-fit shadow-green-400 shadow p-1 '> MERN Stack
                 developer</button>
            <button className='border-2 rounded-2xl min-w-fit h-fit bg-amber-50 shadow-green-400 shadow p-1'> JS & Backend Enthusiast</button>


         </div>
         </div>
        <div className='w-[25vw] text-justify items-center flex justify-center  '>
    <p>I’m a full-stack web developer focused on the MERN stack (MongoDB, Express, React, Node.js).
         I enjoy turning ideas into real-world applications and I’m 
        currently building projects to strengthen my backend and system design skills.</p>
        
        
        

        </div>
     <Link
        to="https://www.instagram.com/siddharthadawadi23/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
        style={{ color: '#a8a29e' }}
        onMouseEnter={e => e.currentTarget.style.color = '#f59e0b'}
        onMouseLeave={e => e.currentTarget.style.color = '#a8a29e'}
      >
        <FaInstagram size={18} />
        <span>Instagram</span>
      </Link>
    </div>
  )
}

