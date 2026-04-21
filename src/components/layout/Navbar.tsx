"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Nosotros", href: "#nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-sm border-b border-cobent-gray-light"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="#home"
          className={cn(
            "font-bold text-xl tracking-tight transition-colors duration-300",
            scrolled ? "text-cobent-blue" : "text-white"
          )}
        >
          COBENT
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-300 hover:text-cobent-gray",
                  scrolled ? "text-cobent-gray-mid" : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        

        {/* Hamburger mobile */}
        <button
          className={cn(
            "md:hidden transition-colors duration-300",
            scrolled ? "text-cobent-blue" : "text-white"
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-cobent-gray-light px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cobent-gray-mid text-sm hover:text-cobent-blue transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          
        </div>
      )}
    </header>
  );
}