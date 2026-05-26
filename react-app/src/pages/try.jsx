import React from 'react'
import { motion } from 'framer-motion'
export const Tryweb = () => {
  return (
    <div className='flex items-center justify-center min-w-full h-[30vh] border-2 gap-2 bg-amber-100 text-black'>
        
    <motion.div 
    
    initial={{opacity:0,y:50}}
    viewport={{once:false}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.3,delay:0.3}}
    className='text-black  '
    >

   <p className='text-7xl'>this</p>
    </motion.div>
       <motion.p 
    
    initial={{opacity:0,y:-50}}
    viewport={{once:false}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.3,delay:0.3}}
    >

    is 
    </motion.p>
       <motion.p 
    
    initial={{opacity:0,y:50}}
    viewport={{once:false}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.3,delay:0.3}}
    >

    creativity 
    </motion.p>
        
        
    </div>
  )
}
