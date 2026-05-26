import React from 'react'
import { motion } from 'framer-motion'

export const Aboutme = () => {
  return (
    <div className='flex flex-col items-center min-h-screen min-w-full
    justify-center  py-20 border-t-2 border-t-gray-400 
     border-t-sm mt-10'>
      <div className='items-start ml-20 h-[90vh] w-[80vw] text-black flex mb-5    justify-center '>
        <div className='min-w-[30vw] items-center flex flex-col justify-center  bg-white'>
          <p className='mt-10 mb-10'>-- About me</p>
          <p 
           style={{ fontFamily: '"Space Grotesk", sans-serif'}}
          className='font-bold text-4xl text-black items-center flex'>Background & Focus</p>
          
        </div>

        <div className='items-start  w-full flex flex-col justify-start   mt-25 bg-white-600  h-fit'>
    <div className='w-full
     font-serif font-extralight  items-start flex-col tracking-normal justify-center  text-xl flex p-2 gap-3
     bg-white
     '>
            <p 
            style={{fontFamily:'"Space Grotesk"'}}
            className='items-start  flex  justify-center text-justify'>

             I'm Siddhartha Dawadi, a web development student from Nepal passionate about building modern full-stack applications with 
             the MERN stack. I enjoy transforming ideas into functional, user-friendly products and
              working on projects that solve practical, real-world problems through clean and efficient code.
            </p>
            <p
             style={{fontFamily:'"Plus Jakarta Sans"'}}
            className='items-start flex font-light  text-gray-500 justify-center text-justify  mb-5'>
              My interests are strongly centered around backend development, API design, and scalable web architecture. Alongside developing applications with React, Node.js, Express, and MongoDB, I spend time learning emerging technologies, strengthening 
              my problem-solving abilities, and gaining hands-on experience through continuous project building.
            </p>
           
          </div>
          <div className='grid grid-cols-3 border-t-1  w-[50vw] '>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='flex rounded-2xl w-60 mt-5 p-2  h-25 mb-5 flex-col   hover:shadow-md shadow-gray-50'
          >
            <p
              
              >
                [A]
              </p>
            <p
            className=''
            >
              
                Full-Stack Web Development
            </p>
            <p 
            style={{fontFamily:'"Plus Jakarta Sans"'}}
            className='text-justify  duration-150  hover:border-green-400'>
               MongoDB, Express, React, and Node.js . Building complete applications from database to UI
            </p>
          </motion.div>

          <motion.div
          
            initial={{ opacity: 0, y: 50 }} //  the card is  sitting  50 px down from its original position and 
            //                                      when i scroll it it appears from 50 px down to original position and opacity 0  
                                                    //means invisible
            whileInView={{ opacity: 1, y: 0 }}// while in view means the div is visible when opacity 1 and is in its normal position
            viewport={{ once :false }}
            transition={{ duration: 1, delay: 0.1 }}
            className='flex hover:shadow-md mt-5 flex-col shadow-gray-50 rounded-2xl w-60 mb-5 p-2  h-25 '
          >
             <p  style={{fontFamily:'"Plus Jakarta Sans"'}}>
                [B]
              </p >
            <p
            className='flex flex-col font-bold '
            >
             
              Frontend Development


            </p>
            
            <p 
            style={{fontFamily:'"Plus Jakarta Sans"'}}
            className=' text-justify  duration-150 text-sm font-extralight'>
              React-based interfaces, component architecture, and responsive design with Tailwind CSS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='flex flex-col mt-5 hover:shadow-md shadow-gray-50 items-center jus rounded-2xl w-60 h-25 p-2 '
          >
            <p>
                [C]
              </p>
            <p
            
            >
              

               Backend & API Development
            </p>
            <p
            style={{fontFamily:'"Plus Jakarta Sans"'}} className=' text-justify 
             duration-150 font-extralight'>
              REST APIs, server-side logic, authentication, and connecting frontend to backend seamlessly
            </p>
          </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}