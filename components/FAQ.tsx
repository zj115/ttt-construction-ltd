import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    question: "What information should I prepare before requesting a quote?",
    answer:
      "Helpful details include site location, project type (new build, renovation, extension), drawings or concept plans, current consent status, preferred timeline, estimated budget range, and any site access constraints. The more detail you provide, the easier it is to understand the scope."
  },
  {
    question: "Do I need drawings before contacting you?",
    answer:
      "Not necessarily. We can discuss early-stage projects and provide buildability advice before drawings are finalised. However, detailed quotations require drawings, specifications, and confirmed scope."
  },
  {
    question: "Can you help before building consent is obtained?",
    answer:
      "Yes. We can provide early construction advice, scope review, and planning support. Where restricted building work or consent requirements apply, the correct licensed professionals and documentation should be confirmed before work begins."
  },
  {
    question: "How are variations handled during construction?",
    answer:
      "Variations are discussed and documented before proceeding. Changes to scope, specifications, or site conditions may affect cost and timeline. Clear communication ensures variations are managed transparently."
  },
  {
    question: "How are payment stages discussed?",
    answer:
      "Payment milestones are tailored to each project and confirmed in the quotation or contract. Typical stages include deposit, site preparation, framing, interior stage, practical completion, and final handover. Payments are linked to completed work stages."
  },
  {
    question: "What happens at handover?",
    answer:
      "Handover includes a final walkthrough, workmanship check, defect resolution, maintenance notes, product information, and project sign-off. The process ensures the project is completed to agreed standards."
  },
  {
    question: "Do you work outside Waikato?",
    answer:
      "TTT Construction Ltd is based in New Zealand and can discuss residential construction enquiries across New Zealand. Waikato enquiries are particularly welcome."
  },
  {
    question: "Can you handle renovation and extension projects?",
    answer:
      "Yes. We support residential renovations, extensions, layout changes, kitchen and bathroom upgrades, exterior improvements, and related finishing work."
  }
];

export default function FAQ() {
  return (
    <section className="section-glow py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="FAQ" title="Common Questions Before You Start Building" />
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05}>
              <details className="glass-card group p-6 transition duration-300 open:shadow-[0_24px_54px_rgba(0,0,0,0.28)]">
                <summary className="cursor-pointer list-none font-display text-xl font-semibold text-white">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="liquid-glass grid h-9 w-9 shrink-0 place-items-center text-[#f0b76c] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-white/68">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
