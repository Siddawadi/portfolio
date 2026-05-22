import React from 'react'
import { FaCode, FaReact, FaServer, FaDatabase, FaTools, FaRocket } from 'react-icons/fa'

const skills = [
  {
    category: 'Languages',
    icon: <FaCode />,
    items: ['JavaScript', 'HTML', 'CSS']
  },
  {
    category: 'Frontend',
    icon: <FaReact />,
    items: ['React', 'Tailwind CSS', 'React Router']
  },
  {
    category: 'Backend',
    icon: <FaServer />,
    items: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    category: 'Database',
    icon: <FaDatabase />,
    items: ['MongoDB', 'Mongoose']
  },
  {
    category: 'Tools',
    icon: <FaTools />,
    items: ['Git', 'GitHub', 'Postman', 'VS Code']
  },
  {
    category: 'Deployment',
    icon: <FaRocket />,
    items: ['Vercel', 'Render', 'MongoDB Atlas', 'InfinityFree']
  }
]

export const Skills = () => {
  return (
    <section className="px-6 py-20 flex flex-col items-center ">
      <p className="text-sm font-medium mb-2 text-amber-500 uppercase tracking-widest">What I Work With</p>
      <h2 className="text-4xl font-bold italic mb-12 text-stone-900">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        {skills.map((group) => (
          <Items
            key={group.category}
            category={group.category}
            items={group.items}
            icon={group.icon}
          />
        ))}
      </div>
    </section>
  )
}

export const Items = ({ category, items, icon }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all duration-200">

      <div className="flex items-center gap-3 mb-4">
        <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-lg">
          {icon}
        </span>
        <p className="font-semibold text-stone-800">{category}</p>
      </div>

      <div className="w-full h-px bg-amber-100 mb-4" />

      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="text-xs px-3 py-1 rounded-full font-medium bg-amber-50 text-amber-900 border border-amber-200"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  )
}