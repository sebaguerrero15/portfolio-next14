"use client";

import {Sheet, SheetContent, SheetTrigger} from "../components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button"

const links = [
  {
    name: 'inicio',
    path: '/',
  },
  {
    name: 'proyectos',
    path: '/proyectos',
  },
  {
    name: 'habilidades',
    path: '/habilidades',
  },
  {
    name: 'curriculum',
    path: '/curriculum',
  },
  {
    name: 'contacto',
    path: '/contacto',
  },
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* logo */}
          <div className="mt-32 mb-40 text-accent text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">Seba <span className="text-accent">Guerrero.</span></h1>
            </Link>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>
            })}
            <Link href="/about"><Button>Sobre Mí</Button></Link>
          </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav