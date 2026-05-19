import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    question: "How do I request a quote?",
    answer:
      "Send your project type, site location, drawings status, preferred start date, and approximate budget. We will review the details and confirm the next step."
  },
  {
    question: "Do you handle renovation and extension projects?",
    answer:
      "Yes. TTT Construction Ltd can support residential renovations, extensions, layout changes, exterior improvements, and related finishing work."
  },
  {
    question: "Can you help with early project planning?",
    answer:
      "Yes. We can discuss scope, buildability, drawings, consent considerations, budget expectations, sequencing, and what information is needed before pricing."
  },
  {
    question: "Which areas do you service?",
    answer:
      "TTT Construction Ltd is based in New Zealand and can discuss residential construction enquiries across New Zealand, with Waikato enquiries welcome."
  },
  {
    question: "What should I prepare before contacting you?",
    answer:
      "Helpful details include the site location, project type, drawings or concept plans, current project stage, consent status, timing goals, budget range, and any access constraints."
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
