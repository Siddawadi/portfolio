import React from 'react'

export const Education = () => {
  return (
    <div className='flex flex-col border-t-2 border-b-2 gap-3  items-center'>
        <p className='mt-20'>--Education</p>
        <p className='text-7xl italic size-min 0 hover:font-sans hover:opacity-50 duration-300'>Academic Background</p>
        <div className=' min-w-[60vw] mb-20  min-h-50 mb-10 rounded-2xl hover:border-top-1 mr-10 flex flex-col mt-2 justify-center shadow-2xs
         shadow-green-400 border-1 hover:border-2 py-2'>
    <div className='flex items-center justify-between px-10'>
    <p className='font-semibold text-4xl italic '> Bachelor in Computer Application</p>
     <button className='border-2 rounded-2xl  bg-amber-50 min-w-fit h-fit w-30 mt-2 shadow-green-400 shadow p-1 '> BCA</button>
    </div>
    <div className='w-full flex justify-between px-10'>


    <p>National Colllege of Computer Studies</p>
    <p>currently enrolled </p>


    </div>
    <div className='flex justify-start px-10'>
        <p> kathmandu ,nepal </p>
    </div>
    
        </div>

    </div>
  )
}
