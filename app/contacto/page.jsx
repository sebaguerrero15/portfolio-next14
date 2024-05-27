"use client";

import React, { useRef } from 'react';
import { Button } from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import {Textarea} from "../../components/ui/textarea";
import {
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue, 
  SelectGroup, 
  SelectLabel} 
  from "../../components/ui/select";
  import {FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"
  import { motion } from "framer-motion";
  import emailjs from '@emailjs/browser';

 

  const info = [
    {
      icon: <FaEnvelope />,
      title: "Correo",
      info: "sebastianadrian.15@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Ubicación",
      info: "Santiago, Chile",
    }
  ]

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5w92ee9', 'template_1sb9kjo', form.current, '1f-Qg7Jrp-zrW7ra1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <motion.section 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 0.3, duration: 0.4, ease: "easeIn"},
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Contáctame  😎</h3>
              <p className="text-white/60">
                Ingresa tus datos y Envíame un Mensaje para mayor Información.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Nombre"/>
                <Input type="lastname" placeholder="Apellido"/>
                <Input type="email" placeholder="Correo"/>
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un Servicio"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Servicios</SelectLabel>
                    <SelectItem value="fe">Frontend</SelectItem>
                    <SelectItem value="fs">FullStack</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Escribe tu Mensaje"/>
              {/* button  */}
              <Button size="md" className="max-w-40">Enviar Mensaje</Button>
            </form>
          </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-md">{item.info}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contacto