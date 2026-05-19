import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
