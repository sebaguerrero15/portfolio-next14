"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransitions = ({children}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div 
            initial={{opacity: 1}} 
            animate={{
                opacity: 0, 
                transition: {delay: 1, duration: 0.4, ease: "easeInOut"},
                }}>
            </motion.div>
        {children}
        </div>

    </AnimatePresence>
  )
}

export default PageTransitions