"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../components/ui/tabs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../../components/ui/tooltip"
import {ScrollArea} from "../../components/ui/scroll-area"
import {motion} from "framer-motion"
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"

const about = {
  title: "Habilidades",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid. Libero iste minima consectetur quam ducimus eius consequatur, doloribus voluptas nostrum",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Sebastian Guerrero Ahumada"
    },
    {
      fieldName: "Correo",
      fieldValue: "sebastianadrian.15@gmail.com"
    },
    {
      fieldName: "Hobbies",
      fieldValue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid."
    },  
  ]
}

const experience = {
  icon : "/assets/resume/badge.svg",
  title: "Mi Experiencia",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid."
}

const skills = {
  title: "Mis Habilidades",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid.",
  skillList: [
    {
      name: "HTML",
      icon: <FaHtml5/>
    },
    {
      name: "CSS",
      icon: <FaCss3/>
    },
    {
      name: "JS",
      icon: <FaJs/>
    },
    {
      name: "React",
      icon: <FaReact/>
    },
    {
      name: "NodeJs",
      icon: <FaNodeJs/>
    },
    {
      name: "TailwindCss",
      icon: <SiTailwindcss/>
    },
    {
      name: "Nextjs 14",
      icon: <SiNextdotjs/>
    },
  ]
}


const Skills = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs 
        defaultValue="experience" 
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educación</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mi</TabsTrigger>
          </TabsList>
          {/* contenido */}
            <div className="min-h-[70] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p> 
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">Educación</TabsContent>
              <TabsContent value="skills" className="w-full">Habilidades</TabsContent>
              <TabsContent value="about" className="w-full">Sobre mi</TabsContent>
            </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Skills