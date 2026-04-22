import { servicesData } from '../lib/data';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.items.map((service) => (
            <div
              key={service.title}
              className="group border border-gray-100 p-8 transition-colors duration-300 hover:border-cobent-gold"
            >
              <div className="text-cobent-blue group-hover:text-cobent-gold mb-6 transition-colors">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <rect x="2" y="2" width="20" height="20" />
                  <path d="M7 7l10 10M17 7L7 10" />
                </svg>
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