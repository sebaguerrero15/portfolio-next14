"use client";

import { Button } from "../components/ui/button"
import {FiDownload} from "react-icons/fi"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Link from "next/link";
import Social from "../components/Social"
import Photo from "../components/Photo"

const Home = () => {

  const [text] = useTypewriter({
    words: ['FrontEnd', 'FullStack'],
    loop: 0,
    typeSpeed: 100,
  });

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-10">
          <div className="text-center xl:text-left">
              <h1 className="h1 mb-6">¡Hola!, Soy<br /><span className="text-accent">S.Guerrero</span></h1>
           
            <span className="text-2xl">Desarrollador {text}</span>
            <span><Cursor cursorStyle="|" /></span>
           
            <p className="max-w-[500px] mb-9 mt-5 text-white/80">
            ¡Bienvenido a mi Portafolio Web! Aquí puedes ver mis Proyectos realizados, saber un poco de mi historia y pasatiempos.
            </p>
            {/* CV y redes sociales */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button  variant="outline" size="lg" className="flex items-center gap-2">
                <Link href="/cv.pdf" target="_blank" download="cvsg.pdf">Descargar CV</Link>
                <FiDownload className="text-xl"/>
              </Button>
              {/* redes sociales */}
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home