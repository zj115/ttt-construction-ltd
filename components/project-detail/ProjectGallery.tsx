"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { GalleryImage } from "@/lib/data/projects";

interface ProjectGalleryProps {
  gallery: GalleryImage[];
}

export default function ProjectGallery({ gallery }: ProjectGalleryProps) {
  return (
    <section className="section-glow py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Project Gallery" title="Visual Examples">
          <p>Representative images of this type of construction work.</p>
        </SectionHeading>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <Reveal key={image.src + index} delay={index * 0.05}>
              <div className="glass-card group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                {image.caption && (
                  <div className="p-4">
                    <p className="text-sm text-white/68">{image.caption}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
