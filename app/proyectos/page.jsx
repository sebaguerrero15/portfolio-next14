"use client";

import {motion} from "framer-motion"
import { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../../components/ui/tooltip"
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns";



const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'La Ludoteca',
    description: 'Proyecto Frontend de una tienda de juegos de mesa desarrollado con NextJs 14. Se utilizó una api local para los productos, para la administración de los estados globales utilizamos Zustand y TailwindCss para dar los estilos.',
    stack: [{name: 'NextJS 14'}, {name: 'React'}, {name: 'Zustand'}, {name: 'TailwindCSS'}, {name: 'JS'}],
    image: '/assets/work/laludoteca1.png',
    live: 'https://la-ludoteca-next14.vercel.app/',
    github: 'https://github.com/sebaguerrero15/la-ludoteca-next',
  },
  {
    num: '02',
    category: 'FullStack',
    title: 'Kyber Streaming',
    description: 'Proyecto Fullstack de una streaming de series y peliculas gratis desarrollado en Next14. Se utilizó una api la cual realice en MongoDB, para la administración de los estados globales utilizamos Zustand y TailwindCSS para dar los estilos.',
    stack: [{name: 'NextJS 14'}, {name: 'MongoDB'}, {name: 'Zustand'}, {name: 'TailwindCSS'}, {name: 'React'}],
    image: '/assets/work/kyber1.png',
    live: 'https://kyber-swart.vercel.app/',
    github: 'https://github.com/sebaguerrero15/caricatoons',
  },
  {
    num: '03',
    category: 'FullStack',
    title: 'Clon de Netflix',
    description: 'Proyecto Fullstack de clon de netflix desarrollado en vite. Se utilizó una api la cual realice en Firebase, para la administración de los estados globales utilizamos Zustand y TailwindCSS para dar los estilos.',
    stack: [{name: 'Vite'}, {name: 'Firebase'}, {name: 'Css'}, {name: 'React'}],
    image: '/assets/work/netflix-clone.png',
    live: '',
    github: 'https://github.com/sebaguerrero15/netflix-clon-vite',
  }
]


const Proyectos = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    // get curren slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 0.3, duration: 0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
       <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50px]">

          {/* num */}
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline bg-clip-text text-white">{project.num}</div>
          {/* category */}
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">Proyecto {project.category}</h2>
          {/* description */}
          <p className="text-white/60">{project.description}</p>
          {/* stack */}
          <ul className="flex gap-4">
            {project.stack.map((stack, index) => (
              <li key={index} className="text-xl text-accent">
                {stack.name}
                {/* borra ultima coma */}
                {index !== project.stack.length - 1 && ','}
                </li>
            ))}
          </ul>
          {/* border */}
          <div className="border border-white/20"></div>
          {/* buttons */}
          <div className="flex items-center gap-4">
            <Link href={project.live} target="_blank">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Demo del Proyecto</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>

            <Link href={project.github } target="_blank">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Repositorio de Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} className="xl: h-[520px] mb-12" onSlideChange={handleSlideChange}>
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  {/* overlay */}
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                  </div>
                  {/* image */}
                  <div className="relative w-full h-full">
                    <Image src={project.image} fill className="object-cover" alt=""/>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* slider bottons */}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
          </Swiper>
        </div>
       </div>
      </div>
    </motion.div>
  )
}

export default Proyectos