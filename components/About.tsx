"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Live products shipped", value: "7+" },
  { label: "Engagement lift on TRS UI rebuild", value: "15%" },
  { label: "Years building on the web", value: "3" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-14 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-tight tracking-tight mb-6">
              I turn product ideas into interfaces people actually enjoy
              using.
            </h2>
            <div className="space-y-5 text-[var(--muted)] leading-relaxed text-[15px] md:text-base">
              <p>
                I&apos;m a full stack developer and Electrical &amp; Computer
                Engineering student at Jamia Millia Islamia, currently based
                in Sharjah, UAE. Most of my work sits at the intersection of
                interface craft and backend architecture — I build the whole
                stack, not just the parts that are visible.
              </p>
              <p>
                Recently that&apos;s meant shipping an AI resume builder used
                by peers, rebuilding real-time messaging for a growth agency
                platform, and getting AI chat integrations to behave reliably
                in production — not just in a demo.
              </p>
              <p>
                What makes the difference for me is finishing things: clean
                data models, sensible auth, interfaces that hold up on a
                slow connection, and code the next person can actually read.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-surface rounded-2xl p-6"
              >
                <div className="font-display text-3xl text-gradient mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-[var(--muted)]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
