"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../components/ui/tabs"
import {ScrollArea} from "../../components/ui/scroll-area"
import {motion} from "framer-motion"

const about = {
    title: "Sobre mi",
    description: "Soy Chileno tengo 31 años, de profesión Ingeniero Informático, vivo en la comuna de La Florida junto a mi pareja y mi perro 'Luke' 🐶.",
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
        fieldValue: "Soy una persona sencilla, me gusta mucho ver series, películas y fútbol, tambien jugar juegos de mesa en el último tiempo ha sido uno de mis panoramas favoritos, soy fan de Star Wars y la historia universal. Me encanta viajar y si se da la posibilidad siempre lo haré."
      },  
    ]
  }

const education = {
    title: "Mi Educación",
    description: "Me gradué de Ingeniería Informática el año 2015 en la Universidad Tecnológica de Chile Inacap y posteriormente seguí realizando cursos para estar actualizado sobre las nuevas tecnologías.",
  items: [
  {
    academy: "Mi Educación",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid.",
    duration: "2020 - Present",
    course: "Frontend Developer",
  },  
  {
    academy: "Mi Educación",
    description: "Me gradue de Ingenieria Informatica el año 2015 en la Universidad Tecnologica de Chile Inacap",
    duration: "2020 - Present",
    position: "Frontend Developer",
  },
 
  {
    academy: "Universidad Tecnológica de Chile Inacap",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid.",
    duration: "2011 - 2015",
    position: "Ingenieria Informática",
  },
  {
    academy: "Colegio Novo Mundo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi maiores possimus dolor cumque maxime sequi quo delectus aliquid.",
    duration: "2003 - 2010",
    position: "Enseñanza Básica y Media",
  },
  ]
  }
  

const page = () => {
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
          defaultValue="about" 
          className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            
              <TabsTrigger value="about">Sobre mi</TabsTrigger>
              <TabsTrigger value="education">Educación</TabsTrigger>
              
            </TabsList>
            {/* contenido */}
              <div className="min-h-[70vh] w-full">
              
 
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
                            <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">{educa.academy}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{educa.position}</p>
                            </div>
                            </li>
                        ))}
                      </ul>
                    </ScrollArea>
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

export default page