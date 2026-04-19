import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Portfolio from "@/sections/Portfolio";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0c254a 0%, #29384b 100%)" }}>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}