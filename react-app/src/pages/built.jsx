import { Link } from "react-router"

const projects = [

  {
    id: '02',
    title: 'Rental Room Finder',
    focus: 'Full Stack Web App',
    description:
      'A simple platform where tenants can search and filter properties by location and price.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    image: 'rental room finder.png',
    link:'https://rental-room-finder-production.up.railway.app/home.php'
  },
  {
    id: '01',
    title: 'Student Management System',
    focus: 'Full Stack Web App',
    description:
      'A web app to manage students, attendance, and fees. Built with the MERN stack, it includes role-based login, image uploads, and a dashboard with key stats.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    image: 'student management system.png',
    link:"https://student-management-system-front-end-6ahk.onrender.com"
  },
  
]
export const Projectsbuilt = () => {
  return (
    <section id="works" className="py-40 px-8 max-w-7xl mx-auto border-t border-black">
      <div className="mb-20">
        <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400  mb-3">
        </span>
        <h2 className="font-display font-bold text-3xl tracking-tight uppercase text-[#0a0a0c]">
          Projects
        </h2>
      </div>

      <div className="space-y-32">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
export const ProjectCard = ({ id, title, focus, description, tags,link, image }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-1 font-mono text-sm text-neutral-300">[{id}]</div>

      <div className="lg:col-span-5 space-y-4">
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block">
          {focus}
        </span>
        <h3 className="font-display font-bold text-3xl text-black tracking-tight">{title}</h3>
        <p style={{ fontFamily: '"Plus Jakarta Sans"' }} className="text-justify duration-150 font-extralight text-black">
          {description}
        </p>
      </div>

      <div className="lg:col-span-6 hover:scale-105 duration-500  transition-all space-y-8 lg:pl-12">
        <Link
        target="_blank"
        to={link} className="w-full h-56  hover:scale-105
         border">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="flex flex-wrap gap-1.5 items-center justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2.5 py-1 bg-neutral-50 border border-neutral-200/60 text-neutral-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}