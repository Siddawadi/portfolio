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
import { Tryweb } from '../pages/try'
import { Contact } from '../pages/contact'

export const Layout = () => {
  return (
    <div className="relative flex flex-col  w-full min-h-screen  font-light
     text-sm mb-2 bg-whtie
     text-[#f5f0e8]  tracking-widest overflow-hidden">

      {/* Topographic Background Layer */}
     
     

      {/* Main Content */}
      <div className="relative z-50">
        <Header />

        <div id="home" className="flex flex-1 w-full min-h-screen">
          <div className="flex flex-col justify-start  w-full px-10">
            <Introduction />
          </div>
        </div>

        <div className="px-10">
          <div id="about"><Aboutme /></div>
          
          <div id="skills"><Skills /></div>
          <div id="project"><Projectsbuilt /></div>
          <div id='contact'><Contact/> </div>
        </div>

        <Footer />
      </div>
    </div>
    
  );
};