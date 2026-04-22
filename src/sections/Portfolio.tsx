"use client";

import Image from "next/image";
import { portfolioProjects } from "@/lib/data";

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="scroll-mt-24 pt-32 pb-24 px-6 bg-linear-to-b from-cobent-blue via-white to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-cobent-white">
            Casos de uso
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-cobent-blue leading-tight">
            Soluciones diseñadas para crecer contigo
          </h2>

          <p className="mt-5 text-lg text-cobent-gray-mid leading-relaxed">
            Creamos plataformas enfocadas en eficiencia operativa,
            automatización y control estratégico para empresas que
            necesitan escalar sin fricción.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-cobent-gray-light bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cobent-blue">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-cobent-gray-mid">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-cobent-blue/5 px-3 py-1 text-xs font-medium text-cobent-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}