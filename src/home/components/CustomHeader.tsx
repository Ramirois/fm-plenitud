import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"
import logo from "../../assets/logo_radio_plenitud.png"

export const CustomHeader = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-9 h-8 rounded-full flex items-center justify-center">
                            <img src={logo} alt="Radio Plenitud" className="w-9 h-8" />
                        </div>
                        <span className="font-hint text-xl hidden sm:block">FM Plenitud</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        <Link to="/" className="hover:text-primary transition-colors">
                            Inicio
                        </Link>
                        <Link to="/about" className="hover:text-primary transition-colors">
                            Sobre nosotros
                        </Link>
                        <Link to="/contact" className="hover:text-primary transition-colors">
                            Contactanos
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t border-border">
                        <Link to="/" className="block py-2 hover:text-primary transition-colors">
                            Inicio
                        </Link>
                        <Link to="/about" className="block py-2 hover:text-primary transition-colors">
                            Sobre nosotros
                        </Link>
                        <Link to="/contact" className="block py-2 hover:text-primary transition-colors">
                            Contactanos
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}