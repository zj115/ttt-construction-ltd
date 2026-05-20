"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectHeroProps {
  name: string;
  projectType: string;
  location: string;
  image: string;
}

export default function ProjectHero({ name, projectType, location, image }: ProjectHeroProps) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071018]/95 via-[#101c26]/75 to-[#071018]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="section-shell relative flex min-h-[70vh] flex-col justify-end pb-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back button */}
          <Link
            href="/#projects"
            className="liquid-glass mb-8 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          {/* Project type & location */}
          <div className="mb-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0b76c]">
            <span>{projectType}</span>
            <span className="text-white/34">/</span>
            <span>{location}</span>
          </div>

          {/* Project name */}
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            {name}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
