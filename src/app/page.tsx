import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Portfolio from "@/sections/Portfolio";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}