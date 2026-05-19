"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const fields = [
  { label: "Name", type: "text", name: "name", placeholder: "Your name" },
  { label: "Email", type: "email", name: "email", placeholder: "you@example.com" },
  { label: "Phone", type: "tel", name: "phone", placeholder: "+64 ..." },
  { label: "Location", type: "text", name: "location", placeholder: "City / suburb" }
];

const projectTypes = [
  "New detached home",
  "House extension",
  "Full renovation",
  "Kitchen / bathroom upgrade",
  "Outdoor living / deck",
  "Maintenance / repairs"
];

const budgetRanges = ["Under $100k", "$100k - $250k", "$250k - $500k", "$500k+", "Not sure yet"];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(246,182,85,0.12),transparent_30rem),radial-gradient(circle_at_80%_60%,rgba(33,168,255,0.14),transparent_28rem)]" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Contact" title="Start Your Project with TTT Construction Ltd">
          <p>
            Share a few details about your standalone home build, extension, renovation, or repair
            work and our team will be ready to discuss the next step.
          </p>
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form className="glass grid gap-4 p-5 sm:p-7" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                {fields.map((field) => (
                  <label key={field.name} className="grid gap-2 text-sm font-medium text-slate-300">
                    {field.label}
                    <input
                      name={field.name}
                      type={field.type}
                      className="border border-white/10 bg-black/24 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-[#21a8ff]/70"
                      placeholder={field.placeholder}
                    />
                  </label>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                  Project Type
                  <select
                    name="projectType"
                    defaultValue=""
                    className="border border-white/10 bg-black/24 px-4 py-3 text-white outline-none transition focus:border-[#21a8ff]/70"
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
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                  Estimated Budget
                  <select
                    name="budget"
                    defaultValue=""
                    className="border border-white/10 bg-black/24 px-4 py-3 text-white outline-none transition focus:border-[#21a8ff]/70"
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
              <label className="grid gap-2 text-sm font-medium text-slate-300">
                Preferred Timeline
                <input
                  name="timeline"
                  type="text"
                  className="border border-white/10 bg-black/24 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-[#21a8ff]/70"
                  placeholder="ASAP, 3-6 months, planning stage..."
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-300">
                Message
                <textarea
                  name="message"
                  rows={6}
                  className="resize-none border border-white/10 bg-black/24 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-[#21a8ff]/70"
                  placeholder="Tell us about your project..."
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center bg-[#f6b655] px-7 py-4 font-semibold text-[#140d04] shadow-[0_0_42px_rgba(246,182,85,0.25)] transition hover:bg-[#ffd48a] sm:w-fit"
              >
                Send Enquiry
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="h-full border border-white/10 bg-[#08101a]/82 p-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#67c7ff]">
                Company Information
              </p>
              <h3 className="font-display text-3xl font-semibold text-white">TTT Construction Ltd</h3>
              <div className="mt-8 grid gap-5 text-slate-300">
                <div className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-[#f6b655]" size={21} />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="mt-1">New Zealand</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 shrink-0 text-[#f6b655]" size={21} />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a className="mt-1 block hover:text-white" href="mailto:info@tttconstruction.co.nz">
                      info@tttconstruction.co.nz
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-[#f6b655]" size={21} />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a className="mt-1 block hover:text-white" href="tel:+64000000000">
                      +64 XX XXX XXXX
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm leading-7 text-slate-400">
                  Standalone homes / Extensions / Renovations / Residential project management for
                  homeowners and developers across New Zealand.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
