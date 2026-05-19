import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    question: "Do you work on standalone house builds?",
    answer:
      "Yes. TTT Construction Ltd focuses on residential construction and renovation, including detached homes, extensions, renovations, and finishing work."
  },
  {
    question: "Can you help before construction starts?",
    answer:
      "Yes. TTT Construction Ltd can support early consultation, scope review, build planning, quotations, and practical sequencing."
  },
  {
    question: "How do I request a quote?",
    answer:
      "Send your project type, site suburb, drawings status, approximate budget, and preferred start date. We will review the information and confirm the next step."
  },
  {
    question: "Can you help with consent and drawings?",
    answer:
      "We can discuss consent requirements, drawings, and buildability during the consultation. Where specialist design or engineering input is needed, that can be coordinated with the right professionals."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="FAQ" title="Common Questions Before You Start Building" />
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05}>
              <details className="group border border-[#6e5a42]/12 bg-[#fffaf1]/82 p-6 shadow-[0_14px_35px_rgba(95,73,44,0.07)] open:border-[#8fa58d] open:bg-white">
                <summary className="cursor-pointer list-none font-display text-xl font-semibold text-[#243126]">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="grid h-8 w-8 shrink-0 place-items-center border border-[#6e5a42]/15 text-[#8a5a31] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-[#646b60]">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
