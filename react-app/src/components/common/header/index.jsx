import React from "react"

const navItems = [
  { label: "Home",      id: "home" },
  { label: "About",     id: "about" },
 
  { label: "Skills",    id: "skills" },
  { label: "Projects",  id: "project" },
  { label: "Contact",   id: "contact" },
]

export const Header = () => {
  return (
    <header className="w-full h-20 fixed top-0 z-50">  
      <Navcontents />
    </header>
  )
}
const Navcontents = () => {
  return (
    <div className="flex  items-center justify-between px-10 py-4 bg-white text-xs 
    font-light  text-black shadow-md">
      <div className="text-lg fixed font-light tracking-wide ml-20 h-[7vh]  flex items-center text-black">
        Siddhartha
      </div>
      <div className="flex w-full  justify-end mr-20 gap-6 text-lg">
        {navItems.map((item, index) => (
          <NavItem key={index} label={item.label} id={item.id} />
        ))}
      </div>
    </div>
  )
}

const NavItem = ({ id, label }) => (
  <a href={`#${id}`} className="relative text-black  text-shadow-sm font-extralight text-sm group cursor-pointer no-underline">
    {label}
    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
  </a>
)