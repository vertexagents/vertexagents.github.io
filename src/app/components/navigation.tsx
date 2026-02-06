import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/name_nav.svg";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
fixed top-0 left-0 right-0 z-50
bg-white/80
backdrop-blur-md
shadow-sm
transition-all duration-300
"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img src={logo} alt="Vertex" className="h-8 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-brand-dark hover:text-brand-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-white border-2 border-brand-primary font-bold text-brand-dark rounded-lg hover:bg-brand-primary transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-brand-dark hover:bg-brand-primary rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-white border-2 border-brand-primary text-brand-dark rounded-lg text-center hover:bg-brand-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
