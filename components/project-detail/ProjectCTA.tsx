import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ProjectCTA() {
  return (
    <section className="section-glow py-24">
      <div className="section-shell">
        <Reveal>
          <div className="glass-card p-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-semibold text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/68">
              Get in touch with our team to discuss your construction needs. We'll provide a detailed quote and timeline for your project.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="liquid-glass-premium px-8 py-4 font-semibold text-white"
              >
                Get a Quote
              </Link>
              <Link
                href="/#projects"
                className="liquid-glass px-8 py-4 font-semibold text-white"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
