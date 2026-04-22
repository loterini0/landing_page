import type { ReactNode } from 'react';
import { aboutData } from '../lib/data';

const founderCardClass =
  'rounded-xl border border-gray-100 bg-cobent-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md';

const linkClass = 'text-cobent-blue transition-colors hover:text-cobent-gold';

const About = () => {
  const renderField = (label: string, content: ReactNode) => (
    <div className="flex flex-wrap items-center gap-2 text-cobent-gray-mid">
      <span className="font-semibold text-cobent-blue">{label}</span>
      {content}
    </div>
  );

  const renderOptionalLink = (
    value: string,
    href: string,
    className: string,
    external = false,
  ) => {
    if (!value) {
      return <span className="italic">pendiente</span>;
    }

    return (
      <a
        href={href}
        className={className}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {value}
      </a>
    );
  };

  return (
    <section id="about" className="bg-[#ffffff] relative overflow-hidden py-32">
      <div className="pointer-events-none absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-[#d2deec]/40 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-[400px] w-[400px] rounded-full bg-gradient-to-t from-[#d2deec]/30 to-transparent blur-3xl" />
      <div className="container mx-auto relative px-6 z-10">
        {/* Encabezado institucional */}
        <div className="mb-24 text-center">
          <span className="text-white mb-6 block text-xs font-black tracking-[0.4em] uppercase bg-[#0c254a] shadow-[0_4px_20px_rgba(12,37,74,0.15)] px-8 py-3 rounded-full w-fit mx-auto">
            {aboutData.sectionTitle}
          </span>
          <h2 className="text-[#0c254a] mb-8 text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-none">
            {aboutData.slogan.split('. ')[0]}.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c254a] to-[#29384b]">
              {aboutData.slogan.split('. ')[1]}
            </span>
          </h2>
          <p className="text-[#29384b] mx-auto max-w-4xl text-lg md:text-xl font-medium leading-relaxed mt-10">
            {aboutData.history}
          </p>
        </div>

        {/* Mensajes principales: misión y visión */}
        <div className="mb-32 grid gap-8 md:gap-12 lg:grid-cols-2">
          {/* Tarjeta Misión (Dark Theme) */}
          <div className="group relative bg-gradient-to-br from-[#0c254a] to-[#29384b] overflow-hidden rounded-[32px] p-12 lg:p-14 shadow-[0_20px_40px_rgba(12,37,74,0.3)] hover:shadow-[0_30px_60px_rgba(12,37,74,0.4)] transition-all duration-500 hover:-translate-y-2">
            {/* Efecto resplandor */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#a4b1c0] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <h3 className="text-[#a4b1c0] mb-8 text-sm font-black tracking-[0.3em] uppercase">
              La Misión
            </h3>
            <p className="text-white relative z-10 text-xl lg:text-2xl font-medium leading-relaxed">
              {aboutData.mission}
            </p>
          </div>

          {/* Tarjeta Visión (Dark Theme) */}
          <div className="group relative bg-gradient-to-br from-[#0c254a] to-[#29384b] overflow-hidden rounded-[32px] p-12 lg:p-14 shadow-[0_20px_40px_rgba(12,37,74,0.3)] hover:shadow-[0_30px_60px_rgba(12,37,74,0.4)] transition-all duration-500 hover:-translate-y-2">
            {/* Efecto resplandor */}
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#a4b1c0] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <h3 className="text-[#a4b1c0] mb-8 text-sm font-black tracking-[0.3em] uppercase">
              La Visión
            </h3>
            <p className="text-white relative z-10 text-xl lg:text-2xl font-medium leading-relaxed">
              {aboutData.vision}
            </p>
          </div>
        </div>

        <div className="mb-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {aboutData.pillars.map((pillar) => (
              <div key={pillar.title} className="group flex flex-col rounded-[24px] bg-white border border-[#d2deec]/60 p-8 shadow-[0_8px_30px_rgba(12,37,74,0.04)] hover:shadow-[0_15px_40px_rgba(12,37,74,0.1)] hover:-translate-y-2 transition-all duration-500">
                <h4 className="text-[#0c254a] mb-4 text-base font-black tracking-tight">
                  {pillar.title}
                </h4>
                <div className="bg-[#a4b1c0] mb-5 h-[3px] w-12 rounded-full transition-all duration-300 group-hover:w-16 group-hover:bg-[#0c254a]"></div>
                <p className="text-[#29384b] text-sm leading-relaxed font-medium">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo fundador con enlaces de contacto */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-cobent-blue mb-16 text-center text-sm font-bold tracking-[0.2em] uppercase">
            Equipo de Socios Fundadores
          </h3>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {aboutData.team.map((member) => (
              <div key={member.name} className={founderCardClass}>
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    className="h-14 w-14 rounded-full border border-cobent-gray-light object-cover"
                  />
                </div>

                <h4 className="text-cobent-blue text-base font-bold tracking-tight uppercase">
                  {member.name}
                </h4>
                <p className="text-cobent-gold mt-1 text-[10px] font-bold tracking-widest uppercase">
                  {member.role}
                </p>

                <div className="mt-4 space-y-3 border-t border-gray-100 pt-4 text-xs">
                  {renderField(
                    'GitHub:',
                    renderOptionalLink(member.github, member.github, `break-all ${linkClass}`, true),
                  )}

                  {renderField(
                    'Correo:',
                    renderOptionalLink(member.email, `mailto:${member.email}`, `break-all ${linkClass}`),
                  )}

                  {renderField(
                    'Contacto:',
                    renderOptionalLink(member.phone, `tel:${member.phone}`, linkClass),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
