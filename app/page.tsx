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
    <main className="min-h-screen overflow-x-hidden bg-[#f7f1e7] text-[#243126]">
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
