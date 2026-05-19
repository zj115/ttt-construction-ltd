const quickLinks = ["Home", "About", "Services", "Projects", "Process", "Contact"];
const services = [
  "New Detached Homes",
  "Renovation & Extensions",
  "Project Management",
  "Interior Finishing"
];
const legalLinks = ["Privacy Policy", "Terms of Use", "Service Areas"];

export default function Footer() {
  return (
    <footer className="border-t border-[#6e5a42]/12 bg-[#eadcc8]/55 py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-semibold text-[#243126]">TTT Construction Ltd</h2>
          <p className="mt-4 max-w-md leading-7 text-[#646b60]">
            Residential new builds, renovations, extensions, and project management support across New Zealand.
          </p>
          <div className="mt-5 grid gap-2 text-sm text-[#646b60]">
            <span>Email: info@tttconstruction.co.nz</span>
            <span>Phone: 021 506 106</span>
            <span>Location: New Zealand</span>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#243126]">
            Quick Links
          </h3>
          <div className="grid gap-2">
            {quickLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-[#646b60] transition hover:text-[#2f4a39]">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#243126]">
            Services
          </h3>
          <div className="grid gap-2">
            {services.map((service) => (
              <span key={service} className="text-sm text-[#646b60]">
                {service}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#243126]">
            Legal
          </h3>
          <div className="grid gap-2">
            {legalLinks.map((link) => (
              <span key={link} className="text-sm text-[#646b60]">
                {link}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-[#7a6c5a]">
            Service areas: Waikato and wider New Zealand by project discussion.
          </p>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-[#6e5a42]/12 pt-6 text-sm text-[#7a6c5a]">
        © {new Date().getFullYear()} TTT Construction Ltd. All rights reserved.
      </div>
    </footer>
  );
}
