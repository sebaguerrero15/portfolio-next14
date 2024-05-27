"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../components/ui/tabs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../../components/ui/tooltip"
import {motion} from "framer-motion"
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGithub} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"



const habilitys = {
  title: "Habilidades Blandas",
  description: "Las principales habilidades blandas que tengo desde mi infancia son:",
  habilityList: [
    {
      name: "Responsabilidad",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Puntualidad",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Resolutivo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Autodidacta",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    }
  ]
}

const skills = {
  title: "Habilidades Técnicas",
  description: "Dentro de las skills que uso frecuentemente esta la biblioteca React con la última versión de Next.Js y Tailwindcss para dar estilos entre otras tecnologías.",
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
    {
      name: "Git",
      icon: <FaGithub/>
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
        defaultValue="habilitys" 
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          
            
            <TabsTrigger value="habilitys">Habilidades Blandas</TabsTrigger>
            <TabsTrigger value="skills">Habilidades Técnicas</TabsTrigger>
          </TabsList>
          {/* contenido */}
            <div className="min-h-[70vh] w-full">
            <TabsContent value="habilitys" className="w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                      <h3 className="text-4xl font-bold">{habilitys.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{habilitys.description}</p>
                      <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                        {habilitys.habilityList.map((hability, index) => (
                          <li key={index} className="flex items-center  xl:justify-start gap-4">
                            <span className="text-accent font-bold">🟢 {hability.name}</span>
                           
                          </li>
                        ))}
                      </ul>
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

            </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Skills