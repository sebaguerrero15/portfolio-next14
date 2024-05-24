"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../components/ui/tabs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../../components/ui/tooltip"
import {ScrollArea} from "../../components/ui/scroll-area"
import {motion} from "framer-motion"
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"

const about = {
  title: "Sobre mi",
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

const education = {
  title: "Mi Educación",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid.",
items: [
{
  academy: "Mi Educación",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid.",
  duration: "2020 - Present",
  course: "Frontend Developer",
},  
{
  academy: "Mi Educación",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid.",
  duration: "2020 - Present",
  position: "Frontend Developer",
},
{
  academy: "Mi Educación",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid.",
  duration: "2020 - Present",
  position: "Frontend Developer",
},
{
  academy: "Mi Educación",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid.",
  duration: "2020 - Present",
  position: "Frontend Developer",
}
]
}

const Skills = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 0.3, duration: 0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
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
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p> 
                </div>
              </TabsContent>

            
              <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p> 
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((educa, index) => (
                        <li 
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{educa.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{educa.academy}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{educa.academy}</p>
                          </div>
                          </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
              </TabsContent>

              <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((info, index) => (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60 ">{info.fieldName}</span>
                          <span className="text-xl">{info.fieldValue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
              </TabsContent>
            </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Skills