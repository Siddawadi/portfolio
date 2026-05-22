import React from "react"

const navItems = [
  { label: "Home",      id: "home" },
  { label: "About",     id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills",    id: "skills" },
  { label: "Projects",  id: "project" },
  { label: "Contact",   id: "contact" },
]

export const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50">
      <Navcontents />
    </header>
  )
}

const Navcontents = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-gray-900 text-white shadow-md">
      <div className="text-2xl font-bold tracking-wide text-blue-400">
        Siddharth
      </div>
      <div className="flex gap-8 text-lg">
        {navItems.map((item, index) => (
          <NavItem key={index} label={item.label} id={item.id} />
        ))}
      </div>
    </div>
  )
}

const NavItem = ({ id, label }) => (
  <a href={`#${id}`} className="relative text-blue-400 group cursor-pointer no-underline">
    {label}
    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
  </a>
)