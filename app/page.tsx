import About from "@/components/About";
import BuildPlanning from "@/components/BuildPlanning";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Handover from "@/components/Handover";
import Hero from "@/components/Hero";
import HomeBuildScope from "@/components/HomeBuildScope";
import Navbar from "@/components/Navbar";
import PaymentSchedule from "@/components/PaymentSchedule";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import QuotationProcess from "@/components/QuotationProcess";
import Services from "@/components/Services";
import SiteMotion from "@/components/SiteMotion";
import Specifications from "@/components/Specifications";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="aurora-bg min-h-screen overflow-x-hidden bg-[#071018] text-[#f8fafc]">
      <SiteMotion>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <TrustBar />
        <HomeBuildScope />
        <Projects />
        <Process />
        <QuotationProcess />
        <Specifications />
        <BuildPlanning />
        <PaymentSchedule />
        <Handover />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </SiteMotion>
    </main>
  );
}
