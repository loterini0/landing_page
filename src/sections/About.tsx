import { aboutData } from '../lib/data';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#F7F7F7] font-['Inter']">
      <div className="container mx-auto px-6">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-20">
          <span className="text-[#B8972A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            {aboutData.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D1F3C] mb-8 uppercase tracking-tight">
            {aboutData.slogan}
          </h2>
          <p className="text-[#555555] max-w-3xl mx-auto text-lg leading-relaxed">
            {aboutData.history}
          </p>
        </div>

        {/* Bloques de Misión y Visión con Regla del Dorado (Borde lateral) */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-[#0D1F3C] p-12 shadow-xl border-l-4 border-[#B8972A]">
            <h3 className="text-[#B8972A] font-bold text-sm tracking-widest uppercase mb-6">Misión</h3>
            <p className="text-white text-xl leading-snug">{aboutData.mission}</p>
          </div>
          <div className="bg-white p-12 border border-gray-200">
            <h3 className="text-[#0D1F3C] font-bold text-sm tracking-widest uppercase mb-6">Visión</h3>
            <p className="text-[#555555] text-xl leading-snug">{aboutData.vision}</p>
          </div>
        </div>

        {/* Pilares Diferenciales - Estilo Preciso */}
        <div className="mb-24">
          <div className="grid md:grid-cols-4 gap-12">
            {aboutData.pillars.map((pillar) => (
              <div key={pillar.title} className="group">
                <h4 className="font-bold text-[#0D1F3C] mb-3 uppercase tracking-tighter text-sm">
                  {pillar.title}
                </h4>
                <div className="w-8 h-[2px] bg-[#B8972A] mb-4"></div>
                <p className="text-sm text-[#555555] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Listado Completo de Socios - Estilo de Jerarquía Corporativa */}
        <div className="pt-16 border-t border-gray-200">
          <h3 className="text-[#0D1F3C] font-bold text-center text-sm tracking-[0.2em] uppercase mb-16">
            Equipo de Socios Fundadores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 max-w-5xl mx-auto">
            {aboutData.team.map((member) => (
              <div key={member.name} className="border-b border-gray-100 pb-4">
                <h4 className="font-bold text-[#0D1F3C] text-base tracking-tight uppercase">
                  {member.name}
                </h4>
                <p className="text-[#B8972A] text-[10px] font-bold uppercase mt-1 tracking-widest">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;