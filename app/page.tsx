import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeBuildScope from "@/components/HomeBuildScope";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SiteMotion from "@/components/SiteMotion";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f1e7] text-[#243126]">
      <SiteMotion>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <TrustBar />
        <HomeBuildScope />
        <Projects />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </SiteMotion>
    </main>
  );
}
