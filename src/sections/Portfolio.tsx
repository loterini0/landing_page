"use client";

import { Database, TrendingUp, LayoutDashboard, GlobeLock, Code2, Server } from "lucide-react";

const casesData = [
  {
    title: "Centralización Operativa Multi-Sede",
    description: "Unificamos inventario, ventas y métricas en tiempo real para operaciones distribuidas.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    icon: <Database className="w-12 h-12 text-[#ffffff]" strokeWidth={1.5} />,
    color: "from-[#29384b] to-[#0c254a]"
  },
  {
    title: "Automatización Comercial",
    description: "Flujos automáticos para cotizaciones, seguimiento y reportes estratégicos.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: <TrendingUp className="w-12 h-12 text-[#ffffff]" strokeWidth={1.5} />,
    color: "from-[#1b3d6d] to-[#0c254a]"
  },
  {
    title: "Dashboard Ejecutivo",
    description: "Indicadores clave centralizados para decisiones rápidas basadas en datos.",
    tech: ["Next.js", "Chart.js", "Firebase"],
    icon: <LayoutDashboard className="w-12 h-12 text-[#ffffff]" strokeWidth={1.5} />,
    color: "from-[#a4b1c0] to-[#0c254a]"
  },
  {
    title: "Portal Corporativo B2B",
    description: "Gestión segura e independiente para clientes con trazabilidad operativa integral.",
    tech: ["React", "Node.js", "AWS"],
    icon: <GlobeLock className="w-12 h-12 text-[#ffffff]" strokeWidth={1.5} />,
    color: "from-[#415a7d] to-[#0c254a]"
  }
];

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="scroll-mt-24 py-32 bg-[#ffffff] font-['Inter'] relative overflow-hidden"
    >
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#ffffff] opacity-80"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-32 flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-[#0c254a] text-xs font-bold tracking-[0.3em] uppercase mb-6 block border border-[#a4b1c0]/40 px-5 py-2.5 rounded-full bg-[#d2deec]/30 shadow-sm backdrop-blur-sm">
            Casos de Uso Operativo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0c254a] mb-6 uppercase tracking-[-0.02em] leading-tight">
            Tecnología que <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c254a] to-[#a4b1c0]">
              escala tu negocio
            </span>
          </h2>
          <p className="text-[#29384b] text-lg leading-relaxed font-normal">
            Arquitecturas sólidas diseñadas para superar cuellos de botella empresariales, automatizando procesos y brindando visibilidad total en tiempo real.
          </p>
        </div>

        {/* Liquid Glass 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mt-20">
          {casesData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Dark Blue Glowing Aura Behind Card */}
              <div className="absolute inset-0 bg-[#0c254a] rounded-[48px] blur-[70px] opacity-[0.18] group-hover:opacity-[0.25] group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none translate-y-4"></div>

              {/* Liquid Glass Card Surface */}
              <div className="relative h-full pt-20 pb-12 px-8 md:px-12 rounded-[40px] bg-white/40 backdrop-blur-[40px] border border-white/80 shadow-[0_8px_32px_0_rgba(12,37,74,0.05)] group-hover:shadow-[0_24px_64px_0_rgba(12,37,74,0.12)] group-hover:-translate-y-2 group-hover:bg-white/50 transition-all duration-500 ease-out flex flex-col justify-between">
                
                {/* 3D Popping Element that breaks the boundary */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 ease-out z-20">
                  
                  {/* Floating Glass Cube Illusion */}
                  <div 
                    className={`relative w-full h-full rounded-[30px] bg-gradient-to-br ${item.color} shadow-2xl flex items-center justify-center border border-white/20 transition-all duration-700 ease-out z-10`}
                    style={{ 
                      boxShadow: "0 25px 50px -12px rgba(12,37,74,0.5), inset 0 2px 10px rgba(255,255,255,0.3)"
                    }}
                  >
                    <div className="transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                      {item.icon}
                    </div>
                  </div>

                  {/* 3D Decorators around the cube */}
                  <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-white/40 backdrop-blur-md border border-white/70 rounded-2xl transform rotate-12 group-hover:translate-x-6 group-hover:-translate-y-2 transition-all duration-700 shadow-xl flex items-center justify-center opacity-80">
                    <Code2 className="w-6 h-6 text-[#0c254a]" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-4 left-0 w-10 h-10 bg-[#d2deec]/90 backdrop-blur-md border border-white/60 rounded-full transform -rotate-12 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-500 shadow-xl flex items-center justify-center opacity-90 z-20">
                     <Server className="w-5 h-5 text-[#0c254a]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Card Content Text */}
                <div className="mt-8 flex flex-col h-full z-10 relative">
                  <div className="flex-1">
                    <h3 className="text-[#0c254a] font-extrabold text-[22px] tracking-tight mb-4 text-center leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[#29384b] text-[15px] leading-relaxed text-center font-medium max-w-sm mx-auto">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Tech Stack Pills */}
                  <div className="mt-12 flex flex-wrap gap-2 justify-center pt-8 border-t border-[#0c254a]/10">
                    {item.tech.map((techItem, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="text-[10px] font-bold text-[#0c254a] uppercase tracking-[0.1em] px-4 py-2 rounded-full border border-[#0c254a]/15 bg-white/80 shadow-xs backdrop-blur-sm group-hover:bg-[#0c254a] group-hover:text-white transition-colors duration-300 relative overflow-hidden"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}