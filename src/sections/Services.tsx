import { servicesData } from '../lib/data';
import { Code, Cpu, Layers, Search, type LucideIcon } from 'lucide-react';

const iconByService: Record<string, LucideIcon> = {
  Search,
  Code,
  Layers,
  Cpu,
};

const cardClass =
  'group relative overflow-hidden rounded-2xl border border-gray-100 bg-cobent-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cobent-gold hover:shadow-lg';

const Services = () => {
  return (
    <section id="services" className="bg-cobent-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-cobent-blue mb-6 text-3xl font-bold tracking-tight uppercase md:text-4xl">
            {servicesData.sectionTitle}
          </h2>
          <div className="bg-cobent-gold mb-8 h-1 w-16" />
          <p className="text-cobent-gray-mid max-w-xl text-lg leading-relaxed">
            {servicesData.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.items.map((service) => (
            <div key={service.title} className={cardClass}>
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-cobent-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-6 inline-flex rounded-xl border border-gray-100 p-3 text-cobent-blue transition-all duration-300 group-hover:border-cobent-gold/30 group-hover:bg-cobent-surface group-hover:text-cobent-gold">
                {(() => {
                  const ServiceIcon = iconByService[service.icon] ?? Search;
                  return <ServiceIcon size={26} strokeWidth={1.8} />;
                })()}
              </div>

              <h3 className="text-cobent-blue mb-4 text-sm font-bold tracking-widest uppercase">
                {service.title}
              </h3>
              <p className="text-cobent-gray-mid text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-cobent-blue text-sm font-bold tracking-[0.2em] uppercase italic">
            &quot;Eficiencia que se mide. Resultados que se ven.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;