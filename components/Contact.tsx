"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiInstagram, FiMail, FiArrowUpRight, FiCheck } from "react-icons/fi";
import { socials } from "@/data/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Failed to send message.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          Contact
        </motion.p>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-14 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-3xl md:text-[2.6rem] tracking-tight leading-tight mb-6">
              Have a project in mind? Let&apos;s build it.
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-10 max-w-md">
              Open to internships, freelance builds, and collaborations. I
              usually reply within a day.
            </p>

            <div className="flex flex-col gap-3">
              <ContactLink
                href={`mailto:${socials.email}`}
                icon={<FiMail />}
                label="Email"
                value={socials.email}
              />
              <ContactLink
                href={socials.linkedin}
                icon={<FiLinkedin />}
                label="LinkedIn"
                value="/-mohammed-awaiz"
              />
              <ContactLink
                href={socials.instagram}
                icon={<FiInstagram />}
                label="Instagram"
                value="@awaiz167"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface rounded-2xl p-6 md:p-8 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required placeholder="Your name" />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </div>
            <Field label="Subject" name="subject" placeholder="What's this about?" />
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs text-[var(--muted)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about your project..."
                className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--purple)]/70 focus:ring-1 focus:ring-[var(--purple)]/40 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-sm font-medium hover:bg-[var(--purple)] hover:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" && "Sending…"}
              {status === "sent" && (
                <>
                  Sent <FiCheck />
                </>
              )}
              {(status === "idle" || status === "error") && (
                <>
                  Send message <FiArrowUpRight />
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="text-sm text-[var(--cyan)]">
                Thanks — your message is in. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                {errorMsg || "Couldn't send that. Try emailing me directly instead."}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs text-[var(--muted)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--purple)]/70 focus:ring-1 focus:ring-[var(--purple)]/40 transition-colors"
      />
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-xl border border-white/10 px-5 py-4 hover:border-[var(--purple)]/50 hover:bg-white/[0.02] transition-colors"
    >
      <span className="flex items-center gap-3">
        <span className="text-[var(--muted)] group-hover:text-white transition-colors">
          {icon}
        </span>
        <span>
          <span className="block text-[11px] uppercase tracking-wider text-[var(--muted)]">
            {label}
          </span>
          <span className="text-sm">{value}</span>
        </span>
      </span>
      <FiArrowUpRight className="text-[var(--muted)] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
    </a>
  );
}
