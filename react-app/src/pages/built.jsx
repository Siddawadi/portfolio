import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Student Management System',
    description:
      'A full-stack web application to manage student records, attendance, and performance. Built with the MERN stack.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    
    
    
  },
  {
    title: 'Rental Room Finder',
    description:
      'A platform where landlords can list rooms and tenants can search and filter rental properties by location and price.',
    tags: ['HTML', 'CSS', 'JS', 'PHP'],
    github: '#',
    live: '#',
  },
]

export const Projectsbuilt = () => {
  return (
    <section className="px-6 py-20 items-center flex flex-col">
      {/* Section Heading */}
      <p className="text-sm font-medium mb-2 text-amber-500 uppercase tracking-widest">
        What I've Built
      </p>

      <h2 className="text-4xl font-bold italic mb-12 text-white-900">
        Projects
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#12100e] items-center text-[#f5f0e8]  gap-6 max-w-4xl">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  )
}

export const ProjectCard = ({
  title,
  description,
  tags,
  github,
  live,
}) => {
  return (
    <div className=" hover:shadow-2xl shadow-gray-50 text-[#f5f0e8] items-center  rounded-2xl p-6 border
      hover:border-amber-300 hover:shadow-md transition-all duration-200 flex flex-col gap-4">
      
      {/* Title */}
      <h3 className="text-lg font-bold text-white-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-stone-500 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full font-medium bg-amber-50 text-amber-900 border border-amber-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {/* <div className="flex gap-4 mt-auto pt-2">
        
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200"
        >
          <FaGithub size={16} />
          GitHub
        </a>

        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-amber-500 hover:text-amber-700 transition-colors duration-200"
        >
          <FaExternalLinkAlt size={14} />
          Live Demo
        </a>

      </div> */}
    </div>
  )
}