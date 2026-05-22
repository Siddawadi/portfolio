import React from 'react'
import { Link } from 'react-router'
import { FaInstagram } from "react-icons/fa6";
import { motion } from 'framer-motion';
export const Introduction = () => {
  return (
     <div className='min-w-full items-center px-50'> 
        <div
        
        className='min-h-[20vh]   flex flex-col py-10 items-start justify-center ' >
            <motion.div
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:false}}
            transition={{duration:1,delay:0.1}}
            
            className='px-8  py-10' >  
                <button className='border-2 rounded-2xl min-w-fit  bg-amber-75 shadow-green-400 w-[20vw] shadow'>Open to collaborations & internships</button>
                </motion.div>
         
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
        // rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm  duration-300 transition-all hover:scale-110"
        style={{ color: '#a8a29e' }}
        
      >
        <FaInstagram size={18} />
        <span>Instagram</span>
      </Link>
    </div>
  )
}

