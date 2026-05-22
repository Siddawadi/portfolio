import React from 'react'

export const Aboutus = () => {
  return (
    <div className='flex flex-col items-start min-h-screen justify-start px-50 border-t-2 border-t-gray-400 border-t-sm mt-10 '>
        <div className=' items-center h-[90vh] w-[80vw] flex mb-5'>
            <div>
        <p className='mt-10 mb-10'>
            -- About me 
        </p>
        <p className='text-7xl italic mb-10'>
    background & focus
        </p>
        <div className='w-[30vw] py-10 items-start flex-col justify-center mx-10 flex  p-2 gap-3'>
            <p className='items-start flex  justify-center text-justify '>
                I’m Siddhartha Dawadi, a full-stack web development
                 student from Nepal with a strong focus on the MERN stack. I enjoy building real-world, deployable web applications that solve practical problems.
               </p>
 <p className='items-start flex  justify-center text-justify'>
      My work spans the full development cycle ,from designing 
user interfaces in React to building backend APIs with Node.js and Express, and managing data with MongoDB.
 </p>
 
 <p className='items-start flex  justify-center text-justify'>I’m especially interested in backend development and creating scalable, efficient systems.

Outside of building projects, 
I continuously learn new web technologies, explore backend architecture patterns, and improve my problem-solving skills through hands-on projects
</p>
<p></p>
<p>

       </p> 
       </div>
        
        </div>
        <div className=' items-center flex flex-col justify-center h-100 mt-60 w-full '> 
        <div className='flex rounded-2xl w-90 text-justify p-2 h-25 mb-5 border-2'>
    <p className='hover:border-l-2 hover:p-1 duration-150 hover:border-green-400'>Full-Stack Web Development
MongoDB, Express, React, and Node.js — building complete applications from database to UI</p>

        </div>
         <div className='flex shadow-2xl shadow-gray-50 rounded-2xl w-90 mb-5 p-2 text-justify h-25 border-2'>
            <p className='hover:border-l-2 hover:p-1 hover:border-green-400 duration-150'>Frontend Development
React-based interfaces, component architecture, and responsive design with Tailwind CSS</p>


        </div>
       
         <div className='flex rounded-2xl w-90 h-25 p-2 border-2 text-justify'>
        <p className='hover:border-l-2 hover:p-1 hover:border-green-400 duration-150'>Backend & API Development
REST APIs, server-side logic, authentication, and connecting frontend to backend seamlessly</p>

        </div>
        
        </div>
       
        
        </div>
    </div>
  )
}
