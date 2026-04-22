import { servicesData } from '../lib/data';

const motionDelayByIndex = ['motion-delay-1', 'motion-delay-2', 'motion-delay-3', 'motion-delay-4'];

const Services = () => {
  return (
    <section id="services" className="bg-cobent-white relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full bg-cobent-gray-light/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-56 w-56 rounded-full bg-cobent-gold/10 blur-3xl" />

      <div className="container mx-auto px-6 relative">
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
          {servicesData.items.map((service, index) => (
            <div
              key={service.title}
              className={`group animate-float-soft relative overflow-hidden rounded-2xl border border-gray-100 bg-cobent-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cobent-gold hover:shadow-xl ${motionDelayByIndex[index] ?? ''}`}
            >
              <div className="animate-sweep pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-cobent-gray-light/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="text-cobent-blue group-hover:text-cobent-gold relative mb-6 transition-colors">
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

              <h3 className="text-cobent-blue relative mb-4 text-sm font-bold tracking-widest uppercase">
                {service.title}
              </h3>
              <p className="text-cobent-gray-mid relative text-sm leading-relaxed">
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