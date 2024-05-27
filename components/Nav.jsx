"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
        name: 'Habilidades',
        path: '/habilidades',
    },
    {
        name: 'experiencia',
        path: '/experiencia',
    },
    {
        name: 'contacto',
        path: '/contacto',
    },
]

const Nav = () => {
    const pathname = usePathname();

  return (
    <nav className="flex gap-8 items-center">
        {links.map((link, index) => (
            <Link className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} href={link.path} key={link.name}>{link.name}</Link>

        ))}
        <Link href="/about"><Button>Sobre Mí</Button></Link>
    </nav>
  )
}

export default Nav