"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 md:pt-24"
    >
      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-8 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 md:order-1"
        >
          <motion.p variants={item} className="eyebrow mb-6">
            Full Stack Web Developer — Sharjah, UAE
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-medium text-[13vw] leading-[0.95] sm:text-[5.2rem] md:text-[5.4rem] lg:text-[6.2rem] md:leading-[0.94] tracking-tight"
          >
            Mohammed
            <br />
            <span className="text-gradient">Awaiz</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base md:text-lg text-[var(--muted)] leading-relaxed"
          >
            I design and build production-grade web applications — fast
            interfaces, clean systems, and AI-integrated products, shipped end
            to end with React, Next.js and Node.js.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-[var(--purple)] hover:text-white transition-colors"
            >
              View Projects
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/Mohammed_Awaiz_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-white/40 transition-colors"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 flex flex-wrap gap-x-10 gap-y-3 text-xs text-[var(--muted)]"
          >
            <span>React.js · Next.js · TypeScript</span>
            <span>Node.js · MongoDB · PostgreSQL</span>
            <span>Gemini AI · OpenAI Integrations</span>
          </motion.div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="order-1 md:order-2 relative mx-auto md:mx-0 w-[64vw] max-w-[320px] md:max-w-[380px] aspect-square"
        >
          {/* ambient glow */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[var(--blue)]/25 via-[var(--purple)]/20 to-[var(--cyan)]/25 blur-3xl" />

          {/* rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full p-[3px] bg-[conic-gradient(from_0deg,var(--blue),var(--purple),var(--cyan),var(--blue))]"
          >
            <div className="w-full h-full rounded-full bg-[#07070b]" />
          </motion.div>

          {/* photo */}
          <div className="absolute inset-[10px] rounded-full overflow-hidden border border-white/10">
            <Image
              src="/profile.png"
              alt="Mohammed Awaiz"
              fill
              priority
              sizes="(max-width: 768px) 64vw, 380px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)] hover:text-white transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-[11px] tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
