"use client";

import {
  credibilityStats,
  testimonials,
} from "@/lib/data";

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative py-32 px-6 scroll-mt-24 bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#0c254a] overflow-hidden"
    >
      {/* Decorative blurred background shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#d2deec] rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header with 3D Robot Integration */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mb-20 relative">
          <div className="max-w-3xl relative z-10">
            <span className="text-[#0c254a] text-xs font-bold tracking-[0.3em] uppercase mb-6 block border border-[#a4b1c0]/40 px-5 py-2.5 rounded-full bg-[#d2deec]/30 shadow-sm backdrop-blur-sm w-fit">
              Credibilidad Operativa
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#0c254a] leading-tight tracking-[-0.02em]">
              Resultados que respaldan <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c254a] to-[#a4b1c0]">
                nuestro trabajo
              </span>
            </h2>

            <p className="mt-6 text-lg text-[#29384b] font-medium leading-relaxed max-w-2xl">
              Construimos soluciones robustas enfocadas en eficiencia métrica, automatización inteligente y relaciones de largo plazo con cada socio tecnológico.
            </p>
          </div>

          {/* 3D Robot Image */}
          <div className="md:absolute right-32 top-40 md:-top-38 w-64 h-64 md:w-[450px] md:h-[450px] z-20 flex-shrink-0 group perspective-[1000px]">
            <img
              src="/images/portfolio/robot-cobent2.png"
              alt="Asistente IA Cobent"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(12,37,74,0.15)] group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Soft shadow below robot */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-6 bg-[#0c254a]/30 blur-2xl rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 relative z-10">
          {credibilityStats.map((stat) => (
            <div
              key={stat.id}
              className="
                relative rounded-[28px] bg-white/60 backdrop-blur-2xl border border-white/80 p-8 shadow-[0_8px_30px_rgba(12,37,74,0.06)] hover:shadow-[0_15px_40px_rgba(12,37,74,0.12)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d2deec]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-4xl md:text-5xl font-black text-[#0c254a] mb-2 tracking-tighter">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-[#a4b1c0] tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 relative z-10 pb-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                relative rounded-[32px] bg-white border border-[#d2deec]/60 p-10 shadow-[0_10px_40px_rgba(12,37,74,0.08)] hover:shadow-[0_20px_50px_rgba(12,37,74,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between
              "
            >
              <p className="text-lg md:text-xl font-medium leading-relaxed text-[#29384b] mb-10 italic">
                “{item.quote}”
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-[#f0f4f8] pt-6">
                <div className="w-12 h-12 rounded-full bg-[#d2deec] flex items-center justify-center text-[#0c254a] font-bold text-xl border-2 border-white shadow-sm">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="font-extrabold text-[#0c254a] tracking-tight text-base">
                    {item.author}
                  </p>
                  <p className="text-sm font-semibold text-[#a4b1c0] uppercase tracking-wider">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}