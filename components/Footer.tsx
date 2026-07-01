"use client";

import { FiLinkedin, FiInstagram, FiMail, FiArrowUp } from "react-icons/fi";
import { socials } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] px-6 md:px-10 py-10">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="font-display text-lg">
            MA<span className="text-[var(--purple)]">.</span>
          </span>
          <span className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Mohammed Awaiz. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 grid place-items-center rounded-full border border-white/10 text-[var(--muted)] hover:text-white hover:border-white/30 transition-colors"
          >
            <FiLinkedin size={15} />
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 grid place-items-center rounded-full border border-white/10 text-[var(--muted)] hover:text-white hover:border-white/30 transition-colors"
          >
            <FiInstagram size={15} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="w-9 h-9 grid place-items-center rounded-full border border-white/10 text-[var(--muted)] hover:text-white hover:border-white/30 transition-colors"
          >
            <FiMail size={15} />
          </a>

          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 w-9 h-9 grid place-items-center rounded-full bg-white/[0.05] text-white hover:bg-[var(--purple)] transition-colors"
          >
            <FiArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
