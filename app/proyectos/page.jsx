"use client";

import {motion} from "framer-motion"
import { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../../components/ui/tooltip"
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'project 1',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit magni magnam voluptates facere natus corrupti cumque veniam soluta blanditiis adipisci impedit.',
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'JS'}, {name: 'React'}],
    image: '/assets/work/thumb1.png',
    live: '',
    github: 'https://github.com',
  },
  {
    num: '02',
    category: 'Fullstack',
    title: 'project 2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit magni magnam voluptates facere natus corrupti cumque veniam soluta blanditiis adipisci impedit.',
    stack: [{name: 'NextJs 14'}, {name: 'TailwindCss'}, {name: 'Node.js'}, {name: 'React'}],
    image: '/assets/work/thumb2.png',
    live: '',
    github: 'https://github.com',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit magni magnam voluptates facere natus corrupti cumque veniam soluta blanditiis adipisci impedit.',
    stack: [{name: 'Html 5'}, {name: 'Css 3'}, {name: 'JS'}, {name: 'React'}],
    image: '/assets/work/thumb3.png',
    live: '',
    github: 'https://github.com',
  }
  
]


const Proyectos = () => {
  const [project, setProject] = useState(projects[0])

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
          </div>
          {/* outline num */}
          <div className="w-full xl:w-[50%]">slider</div>
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
              {index !== project.stack.length - 1 &&','}
              </li>
            ))}
          </ul>
          {/* border */}
          <div className="border-b border-white/20">
            {/* buttons */}
            <div>
              {/* live project button */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Proyectos