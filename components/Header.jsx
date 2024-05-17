import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Seba<span className="text-accent">Guerrero.</span>
                </h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>Sobre Mí</Button>
                </Link>

                {/* mobile nav */}
                <div className="xl:hidden">
                    mobile nav
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header