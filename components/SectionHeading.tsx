import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center"
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`mx-auto mb-12 max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-[#67c7ff]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{children}</div>
      ) : null}
    </Reveal>
  );
}
