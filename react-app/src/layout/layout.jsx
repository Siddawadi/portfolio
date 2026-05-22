import React from 'react'
import { Skills } from '../pages/whatiwork'
import { Header } from '../components/common/header'
import { Footer } from '../components/common/footer'
import { Introduction } from '../pages/introduction'
import { Aboutus } from '../pages/aboutus'
import { Projects } from '../pages/projects'
import { SplineScene } from '../components/common/SplineScene'
import { Education } from '../pages/education'
import { Projectsbuilt } from '../pages/built'
export const Layout = () => {
  return (
    <div className='flex flex-col w-full min-h-screen text-sm font-medium mb-2 text-amber-500 uppercase tracking-widest' >
      <Header />

      {/* Hero section */}
      <div className='flex flex-1 w-full min-h-screen'>

        {/* Left — intro text */}
        <div className='flex flex-col justify-center w-1/2 px-10'>
          <Introduction />
        </div>

        

      </div>

      {/* Rest of page */}
      <div className='px-10' style={{ backgroundColor: '#fffbf5' }}>
        <Projects />
        <Aboutus />
        <Education/>
        <Skills/>
        <Projectsbuilt/>
      </div>

      <Footer />
    </div>
  )
}