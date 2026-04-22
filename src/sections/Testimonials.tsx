"use client";

import {
  credibilityStats,
  testimonials,
} from "@/lib/data";

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-24 px-6 scroll-mt-24 bg-linear-to-b from-white via-white to-cobent-blue"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-cobent-gray-mid">
            Credibilidad
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-cobent-blue leading-tight">
            Resultados que respaldan nuestro trabajo
          </h2>

          <p className="mt-5 text-lg text-cobent-gray-mid leading-relaxed">
            Construimos soluciones enfocadas en eficiencia,
            crecimiento y relaciones de largo plazo con nuestros clientes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {credibilityStats.map((stat) => (
            <div
              key={stat.id}
              className="
                rounded-2xl
                bg-cobent-gray-light/75
                backdrop-blur-xl
                border border-white/70
                p-6
                shadow-xl
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <p className="text-3xl font-bold text-cobent-blue">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-cobent-gray-mid">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                rounded-2xl
                bg-cobent-white
                backdrop-blur-xl
                border border-white/70
                p-8
                shadow-xl
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <p className="text-lg leading-relaxed text-cobent-gray-mid">
                “{item.quote}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-cobent-blue">
                  {item.author}
                </p>

                <p className="text-sm text-cobent-gray-mid">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}