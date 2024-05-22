"use client";
import {motion} from "framer-motion"

const trabajos = [
  {
    id: 1,
    name: "Frontend Developer",
    company: "Freelancer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2020 - Present",
    location: "Online",
  },
  {
    id: 2,
    name: "Backend Developer",
    company: "Freelancer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2020 - Present",
    location: "Online",
  },
    {
      id: 3,
        name: "Frontend Developer",
        company: "Freelancer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2020 - Present",
        location: "Online",
    }
]

const Experiencia = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {delay: 1.4, duration: 0.4, ease: "easeIn"}}}
        className="xl:mt-20"
        >
          {trabajos.map((trabajo, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 text-white hover:text-accent transition-all duration-500"> 
                <h2 className="text-2xl font-bold leading-none">{trabajo.name}</h2>
                <p>{trabajo.company}</p>
                <p className="text-white/60">{trabajo.description}</p>
                <p>{trabajo.date}</p>
                <div className="border-b border-white/20 w-full mb-3"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experiencia