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
    <section id="about" className="bg-cobent-surface relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full bg-cobent-gray-light/30 blur-3xl" />
      <div className="container mx-auto relative px-6">
        {/* Encabezado institucional */}
        <div className="mb-20 text-center">
          <span className="text-cobent-gold mb-4 block text-xs font-bold tracking-[0.3em] uppercase">
            {aboutData.sectionTitle}
          </span>
          <h2 className="text-cobent-blue mb-8 text-3xl font-bold tracking-tight uppercase md:text-5xl">
            {aboutData.slogan}
          </h2>
          <p className="text-cobent-gray-mid mx-auto max-w-3xl text-lg leading-relaxed">
            {aboutData.history}
          </p>
        </div>

        {/* Mensajes principales: misión y visión */}
        <div className="mb-24 grid gap-12 lg:grid-cols-2">
          <div className="bg-cobent-blue border-cobent-gold animate-float-soft relative overflow-hidden rounded-xl border-l-4 p-12 shadow-xl">
            <div className="animate-sweep pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-cobent-white/10 to-transparent" />
            <h3 className="text-cobent-gold mb-6 text-sm font-bold tracking-widest uppercase">Mision</h3>
            <p className="text-cobent-white relative text-xl leading-snug">{aboutData.mission}</p>
          </div>
          <div className="bg-cobent-white animate-float-soft motion-delay-2 rounded-xl border border-gray-200 p-12 shadow-sm">
            <h3 className="text-cobent-blue mb-6 text-sm font-bold tracking-widest uppercase">Vision</h3>
            <p className="text-cobent-gray-mid text-xl leading-snug">{aboutData.vision}</p>
          </div>
        </div>

        <div className="mb-24">
          <div className="grid gap-12 md:grid-cols-4">
            {aboutData.pillars.map((pillar) => (
              <div key={pillar.title} className="group rounded-xl border border-transparent p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cobent-gray-light hover:bg-cobent-white hover:shadow-sm">
                <h4 className="text-cobent-blue mb-3 text-sm font-bold tracking-tighter uppercase">
                  {pillar.title}
                </h4>
                <div className="bg-cobent-gold mb-4 h-[2px] w-8"></div>
                <p className="text-cobent-gray-mid text-sm leading-relaxed">{pillar.description}</p>
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
