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
          <div className="flex flex-col gap-5">
            <Link href="#home" className="flex items-center transition-opacity hover:opacity-80 w-fit">
              <img
                src="/images/portfolio/logo1.png"
                alt="COBENT Logo"
                className="h-24 md:h-28 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm font-light text-white/70 leading-relaxed pr-6 mt-1">
              Arquitecturas sólidas operativas. Referentes en automatización para empresas que necesitan escalar con visibilidad y control total.
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