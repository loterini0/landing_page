import { Database, ShieldCheck, Settings } from 'lucide-react';

const About = () => {
  const cards = [
    {
      title: "Automatización de Procesos",
      headline: "Menos proceso manual. Más capacidad de crecimiento.",
      description: "Implementamos una arquitectura sólida donde los procesos fluyen de forma eficiente, con o sin supervisión. Optimización total para escalar con velocidad y precisión.",
      icon: <Settings className="w-10 h-10 text-[#d2deec]" strokeWidth={1.5} />,
      tags: ["Proceso", "Capacidad", "Optimización"]
    },
    {
      title: "Cuidado de Datos",
      headline: "Eficiencia que se mide. Resultados que se ven.",
      description: "Tu operación requiere visibilidad y precisión constantes. Estructuramos tus datos creando un flujo estratégico y sostenible que permite medir el impacto de cada decisión.",
      icon: <Database className="w-10 h-10 text-[#d2deec]" strokeWidth={1.5} />,
      tags: ["Visibilidad", "Estratégico", "Medible"]
    },
    {
      title: "Control Total",
      headline: "Tu operación, bajo control. Siempre.",
      description: "El sistema detrás de las empresas que escalan. Obtén rendimiento y velocidad operativa en un entorno seguro. Garantiza que cada resultado sea una métrica bajo tu control.",
      icon: <ShieldCheck className="w-10 h-10 text-[#d2deec]" strokeWidth={1.5} />,
      tags: ["Control", "Rendimiento", "Sistema"]
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#ffffff] font-['Inter'] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d2deec] rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#a4b1c0] rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="text-[#0c254a] text-xs font-bold tracking-[0.3em] uppercase mb-6 block border border-[#a4b1c0]/40 px-4 py-2 rounded-full bg-[#d2deec]/20">
            El sistema detrás de las empresas que escalan
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0c254a] mb-8 uppercase tracking-[-0.02em] leading-[1.1]">
            <span className="block mb-2">Escala tu empresa</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c254a] via-[#29384b] to-[#a4b1c0]">
              Sin escalar tus problemas.
            </span>
          </h2>
          <p className="text-[#29384b] text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
            Automatiza lo que frena tu empresa. Construimos procesos que funcionan, permitiéndote operar y crecer de manera estructurada, sólida y medible.
          </p>
        </div>

        {/* Striking Cards */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 mb-32">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0c254a] rounded-2xl p-10 overflow-hidden shadow-2xl shadow-[#0c254a]/10 hover:-translate-y-3 transition-all duration-500 will-change-transform border border-[#29384b]"
            >
              {/* Background gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0c254a] to-[#29384b] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Silver-blue accent line top */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d2deec] to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Silver glow behind icon */}
              <div className="absolute top-10 left-10 w-24 h-24 bg-[#a4b1c0] blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 p-4 bg-[#29384b]/40 rounded-2xl inline-flex backdrop-blur-md border border-[#a4b1c0]/20 group-hover:scale-110 transition-transform duration-500 self-start">
                  {card.icon}
                </div>
                
                <h3 className="text-[#ffffff] font-extrabold text-sm tracking-[0.2em] uppercase mb-4">
                  {card.title}
                </h3>
                
                <h4 className="text-[#d2deec] text-xl md:text-2xl font-bold mb-6 leading-snug tracking-tight">
                  {card.headline}
                </h4>
                
                <p className="text-[#a4b1c0] text-base leading-relaxed mb-10 font-normal">
                  {card.description}
                </p>

                {/* Tags bottom */}
                <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-[#a4b1c0]/10">
                  {card.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-bold text-[#a4b1c0] uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#a4b1c0]/20 bg-[#29384b]/20 group-hover:border-[#d2deec]/50 group-hover:text-[#ffffff] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Misión y Visión - Elemento Moderno con Gradiente Plateado/Azul */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#d2deec] via-[#a4b1c0] to-[#29384b] rounded-[26px] blur-md opacity-30 group-hover:opacity-50 transition duration-700 pointer-events-none"></div>
          
          {/* Main Gradient Border Element */}
          <div className="relative rounded-[24px] p-[2px] bg-gradient-to-br from-[#d2deec] via-[#a4b1c0] to-[#29384b] shadow-2xl overflow-hidden">
            
            {/* Inner Content Background */}
            <div className="bg-[#ffffff] rounded-[22px] overflow-hidden">
              <div className="grid md:grid-cols-2 relative">
                
                {/* Diagonal subtle connector line for desktop */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#a4b1c0]/30 to-transparent -translate-x-1/2 z-20"></div>

                {/* Mission Section */}
                <div className="p-12 md:p-16 relative bg-gradient-to-br from-[#ffffff] to-[#f8fafc]">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#d2deec]/30 to-transparent blur-3xl pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-[#0c254a] font-black text-2xl uppercase tracking-[0.15em] mb-6 flex items-center gap-4">
                      <span className="w-8 h-[3px] bg-gradient-to-r from-[#0c254a] to-[#a4b1c0] block rounded-full"></span>
                      Misión
                    </h3>
                    <p className="text-[#29384b] text-xl font-light leading-relaxed">
                      Diseñar, desarrollar e implementar <strong className="font-semibold text-[#0c254a]">soluciones tecnológicas</strong> que automaticen procesos, integren sistemas y mejoren la eficiencia operativa en empresas de servicios, garantizando confiabilidad, seguridad y adaptación al negocio.
                    </p>
                  </div>
                </div>

                {/* Vision Section */}
                <div className="p-12 md:p-16 relative bg-gradient-to-tl from-[#ffffff] to-[#f8fafc]">
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#d2deec]/30 to-transparent blur-3xl pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-[#0c254a] font-black text-2xl uppercase tracking-[0.15em] mb-6 flex items-center gap-4">
                      <span className="w-8 h-[3px] bg-gradient-to-r from-[#0c254a] to-[#a4b1c0] block rounded-full"></span>
                      Visión
                    </h3>
                    <p className="text-[#29384b] text-xl font-light leading-relaxed">
                      Consolidar a COBENT como <strong className="font-semibold text-[#0c254a]">referente en automatización operativa</strong> para empresas de servicios en el Eje Cafetero, destacándose por la ejecución efectiva, cercanía al cliente y generación de resultados medibles.
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;