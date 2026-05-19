"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const fields = [
  { label: "Full Name", type: "text", name: "name", placeholder: "Your full name" },
  { label: "Email", type: "email", name: "email", placeholder: "you@example.com" },
  { label: "Phone", type: "tel", name: "phone", placeholder: "+64 21 506 106" },
  { label: "Site Location / Suburb", type: "text", name: "siteAddress", placeholder: "Suburb or site address" }
];

const projectTypes = [
  "New Build",
  "Renovation",
  "Extension",
  "Commercial Fit-out",
  "Maintenance",
  "Other"
];

const budgetRanges = ["Under $100k", "$100k - $250k", "$250k - $500k", "$500k+", "Not sure yet"];

const drawingsOptions = ["Yes", "No", "Not yet"];

export default function Contact() {
  return (
    <section id="contact" className="section-glow relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(112,215,255,0.1),transparent_30rem),radial-gradient(circle_at_80%_60%,rgba(240,183,108,0.1),transparent_28rem)]" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Contact" title="Start Your Project with TTT Construction Ltd">
          <p>
            Share a few details about your standalone home build, extension, renovation, or repair
            work and our team will be ready to discuss the next step.
          </p>
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form className="glass-panel grid gap-4 p-5 sm:p-7" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                {fields.map((field) => (
                  <label key={field.name} className="grid gap-2 text-sm font-medium text-white/72">
                    {field.label}
                    <input
                      name={field.name}
                      type={field.type}
                      className="liquid-field px-4 py-3 outline-none transition placeholder:text-white/38"
                      placeholder={field.placeholder}
                    />
                  </label>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-white/72">
                  Project Type
                  <select
                    name="projectType"
                    defaultValue=""
                    className="liquid-field px-4 py-3 outline-none transition"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-medium text-white/72">
                  Do you already have drawings?
                  <select
                    name="hasDrawings"
                    defaultValue=""
                    className="liquid-field px-4 py-3 outline-none transition"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {drawingsOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-white/72">
                  Preferred Start Date
                  <input
                    name="timeline"
                    type="text"
                    className="liquid-field px-4 py-3 outline-none transition placeholder:text-white/38"
                    placeholder="ASAP, 3-6 months, after consent..."
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-white/72">
                  Estimated Budget
                  <select
                    name="budget"
                    defaultValue=""
                    className="liquid-field px-4 py-3 outline-none transition"
                  >
                    <option value="" disabled>
                      Select budget range
                    </option>
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-white/72">
                Message
                <textarea
                  name="message"
                  rows={6}
                  className="liquid-field resize-none px-4 py-3 outline-none transition placeholder:text-white/38"
                  placeholder="Tell us about your project..."
                />
              </label>
              <button
                type="submit"
                className="liquid-glass mt-2 inline-flex w-full items-center justify-center px-8 py-4 font-semibold text-white transition hover:-translate-y-1 sm:w-fit"
              >
                Send Project Enquiry
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="glass-card h-full p-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#f0b76c]">
                Company Information
              </p>
              <h3 className="font-display text-3xl font-semibold text-white">TTT Construction Ltd</h3>
              <p className="mt-2 text-white/66">Construction & Renovation Services</p>
              <div className="mt-8 grid gap-5 text-white/68">
                <div className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-[#f0b76c]" size={21} />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="mt-1">New Zealand</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 shrink-0 text-[#f0b76c]" size={21} />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a className="mt-1 block hover:text-[#70d7ff]" href="mailto:info@tttconstruction.co.nz">
                      info@tttconstruction.co.nz
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-[#f0b76c]" size={21} />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a className="mt-1 block hover:text-[#70d7ff]" href="tel:+6421506106">
                      +64 21 506 106
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm leading-7 text-white/64">
                  Residential new builds, renovations, extensions, and project management for
                  homeowners across New Zealand, with Waikato enquiries welcome.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
