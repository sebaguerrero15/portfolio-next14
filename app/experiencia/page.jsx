"use client";
import {motion} from "framer-motion"

const trabajos = [
  {
    id: 1,
    name: "Desarrollador Frontend React",
    company: "Freelancer independiente",
    description: "Desarrollador de aplicaciones Front-End y FullStack de forma autónoma de acuerdo a las últimas tecnologías. Mi stack principal es trabajar en el frontend con NextJS 14, React, TailwindCSS y JavaScript y MongoDB para el backend.",
    date: "2022 - Present",
    location: "Online",
  },
  {
    id: 2,
    name: "Administrador Informático",
    company: "Municipalidad Quilicura",
    description: "Encargado de Redes y Mantención y Creación de sitios webs escolares realizadas con Wordpress y php para Escuelas Municipales de la comuna. Administrador de Aplicaciones Escolares.",
    date: "2017 - Present",
    location: "Presencial",
  },
    {
      id: 3,
        name: "Analista QA Cliente Latam Airlines",
        company: "ElitSoft",
        description: "Responsable de revisar código de acuerdo con las buenas prácticas de desarrollo de los proyectos en base a las políticas de desarrollo definidas por el área de Arquitectura del cliente LATAM Airlines.",
        date: "2015 - 2017",
        location: "Presencial",
    }
]

const Experiencia = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12">
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {delay: 0.3, duration: 0.4, ease: "easeIn"}}}
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