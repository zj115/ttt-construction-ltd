"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const fields = [
  { label: "Name", type: "text", name: "name", placeholder: "Your name" },
  { label: "Email", type: "email", name: "email", placeholder: "you@example.com" },
  { label: "Phone", type: "tel", name: "phone", placeholder: "+64 ..." },
  { label: "Site Address / Suburb", type: "text", name: "siteAddress", placeholder: "Suburb or site address" }
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

const yesNoOptions = ["Yes", "No", "Not sure yet"];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(184,121,67,0.12),transparent_30rem),radial-gradient(circle_at_80%_60%,rgba(143,165,141,0.18),transparent_28rem)]" />
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
                  <label key={field.name} className="grid gap-2 text-sm font-medium text-[#4f594d]">
                    {field.label}
                    <input
                      name={field.name}
                      type={field.type}
                      className="border border-[#6e5a42]/14 bg-white/72 px-4 py-3 text-[#243126] outline-none transition placeholder:text-[#9b8469] focus:border-[#8fa58d]"
                      placeholder={field.placeholder}
                    />
                  </label>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-[#4f594d]">
                  Project Type
                  <select
                    name="projectType"
                    defaultValue=""
                    className="border border-[#6e5a42]/14 bg-white/72 px-4 py-3 text-[#243126] outline-none transition focus:border-[#8fa58d]"
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
                <label className="grid gap-2 text-sm font-medium text-[#4f594d]">
                  Estimated Budget
                  <select
                    name="budget"
                    defaultValue=""
                    className="border border-[#6e5a42]/14 bg-white/72 px-4 py-3 text-[#243126] outline-none transition focus:border-[#8fa58d]"
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
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-[#4f594d]">
                  Do you already have drawings?
                  <select
                    name="hasDrawings"
                    defaultValue=""
                    className="border border-[#6e5a42]/14 bg-white/72 px-4 py-3 text-[#243126] outline-none transition focus:border-[#8fa58d]"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {yesNoOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#4f594d]">
                  Do you need consent support?
                  <select
                    name="consentSupport"
                    defaultValue=""
                    className="border border-[#6e5a42]/14 bg-white/72 px-4 py-3 text-[#243126] outline-none transition focus:border-[#8fa58d]"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {yesNoOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-[#4f594d]">
                Preferred Start Date
                <input
                  name="timeline"
                  type="text"
                  className="border border-[#6e5a42]/14 bg-white/72 px-4 py-3 text-[#243126] outline-none transition placeholder:text-[#9b8469] focus:border-[#8fa58d]"
                  placeholder="ASAP, 3-6 months, planning stage..."
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#4f594d]">
                Message
                <textarea
                  name="message"
                  rows={6}
                  className="resize-none border border-[#6e5a42]/14 bg-white/72 px-4 py-3 text-[#243126] outline-none transition placeholder:text-[#9b8469] focus:border-[#8fa58d]"
                  placeholder="Tell us about your project..."
                />
              </label>
              <button
                type="submit"
                className="liquid-glass mt-2 inline-flex w-full items-center justify-center px-8 py-4 font-semibold text-[#243126] transition hover:-translate-y-1 sm:w-fit"
              >
                Send Enquiry
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="h-full border border-[#6e5a42]/12 bg-[#fffaf1]/82 p-7 shadow-[0_18px_45px_rgba(95,73,44,0.08)]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#8a5a31]">
                Company Information
              </p>
              <h3 className="font-display text-3xl font-semibold text-[#243126]">TTT Construction Ltd</h3>
              <div className="mt-8 grid gap-5 text-[#646b60]">
                <div className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-[#8a5a31]" size={21} />
                  <div>
                    <p className="font-semibold text-[#243126]">Location</p>
                    <p className="mt-1">New Zealand</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 shrink-0 text-[#8a5a31]" size={21} />
                  <div>
                    <p className="font-semibold text-[#243126]">Email</p>
                    <a className="mt-1 block hover:text-[#2f4a39]" href="mailto:info@tttconstruction.co.nz">
                      info@tttconstruction.co.nz
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-[#8a5a31]" size={21} />
                  <div>
                    <p className="font-semibold text-[#243126]">Phone</p>
                    <a className="mt-1 block hover:text-[#2f4a39]" href="tel:+64000000000">
                      +64 XX XXX XXXX
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10 border-t border-[#6e5a42]/12 pt-6">
                <p className="text-sm leading-7 text-[#646b60]">
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
