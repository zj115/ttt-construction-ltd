const quickLinks = ["Home", "About", "Services", "Projects", "Process", "Contact"];
const services = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation & Extensions",
  "Project Management"
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white">TTT Construction Ltd</h2>
          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Professional construction, renovation, and project management services across New Zealand.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Quick Links
          </h3>
          <div className="grid gap-2">
            {quickLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-400 transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Services
          </h3>
          <div className="grid gap-2">
            {services.map((service) => (
              <span key={service} className="text-sm text-slate-400">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} TTT Construction Ltd. All rights reserved.
      </div>
    </footer>
  );
}
