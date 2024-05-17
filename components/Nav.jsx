"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
        name: 'skills',
        path: '/skills',
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

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname)

  return (
    <nav className="flex gap-8">
        {links.map((link, index) => (
            <Link className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} href={link.path} key={link.name}>{link.name}</Link>
        ))}
    </nav>
  )
}

export default Nav