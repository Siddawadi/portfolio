import React from 'react'
import { Skills } from '../pages/whatiwork'
import { Header } from '../components/common/header'
import { Footer } from '../components/common/footer'
import { Introduction } from '../pages/introduction'
import { Aboutme } from '../pages/aboutus'
import { Projects } from '../pages/projects'
import { SplineScene } from '../components/common/SplineScene'
import { Education } from '../pages/education'
import { Projectsbuilt } from '../pages/built'

export const Layout = () => {
  return (
    <div className='flex flex-col w-full min-h-screen text-sm font-medium mb-2 bg-gray-900 text-purple-200 uppercase tracking-widest'>
      <Header />

      <div id="home" className='flex flex-1 w-full min-h-screen'>
        <div className='flex flex-col justify-center w-1/2 px-10'>
          <Introduction />
        </div>
      </div>

      <div className='px-10' >
        <div id="project"><Projects /></div>
        <div id="about"><Aboutme /></div>
        <div id="education"><Education /></div>
        <div id="skills"><Skills /></div>
        <div id="contact"><Projectsbuilt /></div>
      </div>

      <Footer />
    </div>
  )
}