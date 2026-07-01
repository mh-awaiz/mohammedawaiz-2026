"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="work" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-3xl md:text-[2.6rem] tracking-tight mb-14 max-w-2xl"
        >
          Products built, shipped, and used by real people.
        </motion.h2>

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
              className="group grid grid-cols-1 md:grid-cols-[auto_1fr_240px_auto] items-center gap-6 md:gap-8 border-t border-white/[0.08] py-8 last:border-b hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-lg"
            >
              <span className="hidden md:block font-display text-sm text-[var(--muted-2)] md:w-10">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="order-2 md:order-none">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="md:hidden font-display text-xs text-[var(--muted-2)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl tracking-tight group-hover:text-gradient transition-colors">
                    {p.name}
                  </h3>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--muted)] border border-white/10 rounded-full px-2.5 py-1">
                    {p.category}
                  </span>
                </div>
                <p className="mt-2 text-sm md:text-[15px] text-[var(--muted)] max-w-xl leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] text-[var(--muted)] bg-white/[0.04] rounded-full px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preview image, right side, dark gradient overlay matching theme */}
              <div className="order-1 md:order-none relative w-full md:w-[240px] aspect-video shrink-0 rounded-2xl overflow-hidden bg-[#0b0b12] border border-white/[0.06]">
                <Image
                  src={p.image}
                  alt={`${p.name} website preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
              </div>

              <span className="hidden md:grid justify-self-end w-11 h-11 shrink-0 rounded-full border border-white/15 place-items-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <FiArrowUpRight />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}