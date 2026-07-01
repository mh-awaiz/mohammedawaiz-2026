"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { socials } from "@/data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#07070b]/80 backdrop-blur-md border-b border-white/[0.06]" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between h-[72px]">
        <a href="#top" className="font-display text-lg tracking-tight">
          MA<span className="text-[var(--purple)]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--muted)] hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[var(--blue)] to-[var(--purple)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <IconLink href={socials.linkedin} label="LinkedIn">
            <FiLinkedin size={16} />
          </IconLink>
          <IconLink href={socials.instagram} label="Instagram">
            <FiInstagram size={16} />
          </IconLink>
          <IconLink href={`mailto:${socials.email}`} label="Email">
            <FiMail size={16} />
          </IconLink>
        </div>
      </div>
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -2 }}
      className="w-9 h-9 grid place-items-center rounded-full border border-white/10 text-[var(--muted)] hover:text-white hover:border-[var(--purple)]/60 hover:shadow-[0_0_16px_rgba(139,92,246,0.35)] transition-colors"
    >
      {children}
    </motion.a>
  );
}
