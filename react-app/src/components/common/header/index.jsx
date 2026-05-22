

export const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100">
     <Navcontents/>
    </header>
  )
}
import React from "react"
import { Link } from "react-router-dom"

const navcontents = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Education", link: "/education" },
  { label: "Skills", link: "/skills" },
  { label: "Projects", link: "/project" },
  { label: "Contact", link: "/contact" },
]

 export const Navcontents = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-gray-900 text-white shadow-md">
      
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide text-blue-400">
        Siddharth
      </div>

      
      <div className="flex gap-8 text-lg">
        {navcontents.map((items, index) => (
          <Items key={index} label={items.label} link={items.link} />
        ))}
      </div>
    </div>
  )
}
 const Items = ({ link, label }) => {
  return (
    <Link
      to={link}
      className="relative text-blue-400 group"
    >
      {label}

   
      <span className="absolute left-0 h-[2px] bottom-1 transition-all group-hover:bg-blue-400  group-hover:bottom- group-hover:w-full duration-300"></span>
    </Link>
  )
}
