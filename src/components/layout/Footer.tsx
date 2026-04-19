"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

  return (
    <footer className="bg-cobent-blue text-cobent-gray">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Marca */}
          <div>
            <span className="text-white font-bold text-lg">COBENT</span>
            <p className="mt-2 text-sm text-cobent-gray leading-relaxed">
              Operaciones ágiles. Crecimiento sin límites.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-sm font-medium mb-3">Navegación</p>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-white text-sm font-medium mb-3">Contacto</p>
            <ul className="space-y-2 text-sm">
              <li>Manizales, Colombia</li>
              <li>
                <a
                  href="mailto:hola@cobent.co"
                  className="hover:text-white transition-colors"
                >
                  hola@cobent.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cobent-gray-dark pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-cobent-gray">
          <span>© {year} COBENT. Todos los derechos reservados.</span>
          <span>Manizales, Colombia</span>
        </div>
      </div>
    </footer>
  );
}