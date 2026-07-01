"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/content";

export default function TechStack() {
  const groups = Object.entries(techStack);

  return (
    <section id="stack" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-3xl md:text-[2.6rem] tracking-tight mb-14 max-w-2xl"
        >
          Tools I reach for to take something from idea to production.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {groups.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-[#0b0b12] p-7"
            >
              <h3 className="font-display text-sm text-[var(--muted)] mb-5 tracking-wide">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((tool) => (
                  <li
                    key={tool}
                    className="text-[15px] text-white/90 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--cyan)] shrink-0" />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
