import React from 'react'


import { Link } from 'react-router'
import { FaInstagram } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { Projectsbuilt } from './built';
export const Introduction = () => {
  return (
    <div className='flex justify-start items-start border-b-2 mb-20 mt-40'>
     <div className='min-w-fit mt-8 ml-20 text-black justify-center  items-center '> 
        <div
        
        className='min-h-[20vh] font-["Archivo Black"] border-t-1  px-20 border-gray-100
         font-bold flex flex-col py-20 items-start justify-center ' >
            <motion.div
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:false}}
            transition={{duration:1,delay:0.1}}
            style={{fontFamily:'"Archivo Black"'}}
            className='px-8  text-black ' >  
                <p className=' rounded-2xl   min-w-fit mt-10 border-t-0.5  font-light bg-amber-75
                 shadow-green-400 w-[20vw] s'>[Open to collaborations & internships]</p>
                </motion.div>
         
            <p
          style={{ fontFamily: '"Space Grotesk", sans-serif'}}
          
            className='tracking-tighter text-shadow-2xl font-bold  space-x-0 shadow-amber-50   text-8xl '>
              Siddhartha Dawadi</p>

        <p
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        className=' 
         font-bold text-7xl
         hover:text-blue-600 transform duration-300'> </p>
         <div 
         style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
         className='mt-3 tracking-tighter gap-2 opacity-30  text-7xl font-normal flex '>
             MERN Stack
                 
           


         </div>
         <div 
         style={{ fontFamily: '"Space Grotesk", sans-serif' }}
         className='mt-3 tracking-tighter gap-2  opacity-30 font-light text-7xl  flex'>
          Developer
         </div>
         </div>
      
     <Link
        to="https://www.instagram.com/siddharthadawadi23/"
        target="_blank"
        
        className="inline-flex items-center gap-2 text-sm  duration-300 transition-all
         bg-red-500 hover:scale-110"
        style={{ color: '#a8a29e' }}
        s
      >
        <FaInstagram size={18} />
        <span>Instagram</span>
      </Link>
    </div>
      <div className='w-[25vw] h-fit  py-46 text-black     border-t-1  py-20  
       flex flex-col items-start  justify-start border-gray-100 
        '>
    <p
    style={{fontFamily:'"Roboto"'}}
    className='  tracking-tight space-x-0 font-sans flex flex-col text-gray-500 justify-start items-start  font-light
     min-h-full   border-gray-100 text-justify'
    >I’m a full-stack web developer focused on the MERN stack (MongoDB, Express, React, Node.js).
         I enjoy turning ideas into real-world applications and I’m 
        currently building projects to strengthen my backend and system design skills.</p>
        
        
        <motion.div
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:false}}
            transition={{duration:1,delay:0.1}}
            style={{fontFamily:'"Archivo Black"'}}
            className='px-8  flex items-center justify-end text-white  mt-5 w-[20vw] ' >  
                < a href='#project'>
                <button className='bg-black p-2 w-[10vw]'>
                  Projects
                </button>
                </a>
                </motion.div>

        </div>
        
        </div>
    
    
  )
}

