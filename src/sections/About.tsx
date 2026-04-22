import { aboutData } from '../lib/data';

const About = () => {
  return (
    <section id="about" className="bg-cobent-surface py-24">
      <div className="container mx-auto px-6">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-20">
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

        {/* Bloques de Misión y Visión */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-cobent-blue border-cobent-gold border-l-4 p-12 shadow-xl">
            <h3 className="text-cobent-gold mb-6 text-sm font-bold tracking-widest uppercase">Misión</h3>
            <p className="text-cobent-white text-xl leading-snug">{aboutData.mission}</p>
          </div>
          <div className="bg-cobent-white border border-gray-200 p-12">
            <h3 className="text-cobent-blue mb-6 text-sm font-bold tracking-widest uppercase">Visión</h3>
            <p className="text-cobent-gray-mid text-xl leading-snug">{aboutData.vision}</p>
          </div>
        </div>

        <div className="mb-24">
          <div className="grid md:grid-cols-4 gap-12">
            {aboutData.pillars.map((pillar) => (
              <div key={pillar.title} className="group">
                <h4 className="text-cobent-blue mb-3 text-sm font-bold tracking-tighter uppercase">
                  {pillar.title}
                </h4>
                <div className="bg-cobent-gold mb-4 h-[2px] w-8"></div>
                <p className="text-cobent-gray-mid text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Listado Completo de Socios */}
        <div className="pt-16 border-t border-gray-200">
          <h3 className="text-cobent-blue mb-16 text-center text-sm font-bold tracking-[0.2em] uppercase">
            Equipo de Socios Fundadores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 max-w-5xl mx-auto">
            {aboutData.team.map((member) => (
              <div key={member.name} className="border-b border-gray-100 pb-4">
                <h4 className="text-cobent-blue text-base font-bold tracking-tight uppercase">
                  {member.name}
                </h4>
                <p className="text-cobent-gold mt-1 text-[10px] font-bold tracking-widest uppercase">
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