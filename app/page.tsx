import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import ResidentialBuilds from "@/components/ResidentialBuilds";
import Services from "@/components/Services";
import SiteMotion from "@/components/SiteMotion";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070a] text-white">
      <SiteMotion>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <ResidentialBuilds />
        <Projects />
        <Process />
        <WhyChooseUs />
        <FAQ />
        <Contact />
        <Footer />
      </SiteMotion>
    </main>
  );
}
