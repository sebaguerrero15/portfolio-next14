"use client";

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


  const info = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "sebastianadrian.15@gmail",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Ubicación",
      info: "Santiago, Chile",
    }
  ]

const Contacto = () => {
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
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form>
              form
            </form>
          </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              info
            </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contacto