import { Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router"
import logo from "../../assets/logo_radio_plenitud.png"

export const CustomFooter = () => {
    return (
        <footer className="bg-secondary border-t border-border mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-8 rounded-full flex items-center justify-center">
                                <img src={logo} alt="Radio Plenitud" className="w-9 h-8" />
                            </div>
                            <span className="font-bold text-lg">FM Plenitud</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Your number one music destination. Stream your favorite songs 24/7.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Phone size={16} />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Mail size={16} />
                                <span>info@radiomax.com</span>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <MapPin size={16} />
                                <span>New York, USA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
                    <p>&copy; 2025 RadioMax. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}