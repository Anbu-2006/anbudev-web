"use client";

import { useState } from "react";

export default function EducationContactSection() {
  return (
    <>
      {/* Education */}
      <section
        id="education"
        className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-[#27272a]"
      >
        <SectionLabel>05 — Education</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f0f0f0] mt-3 mb-14">
          Academic Foundation
        </h2>

        <div className="rounded-xl border border-[#27272a] bg-[#111111] p-7 max-w-2xl">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#f0f0f0]">
                B.Tech in AI &amp; Data Engineering
              </h3>
              <p className="text-[#6366f1] font-medium mt-1">
                JAIN (Deemed to be University)
              </p>
              <p className="text-sm text-[#a1a1aa] mt-2">
                4th Semester · Expected 2027
              </p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-[#f0f0f0]">8.0+</span>
              <p className="text-xs text-[#a1a1aa] mt-0.5">GPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-[#27272a]"
      >
        <SectionLabel>06 — Contact</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f0f0f0] mt-3 mb-4">
          Let&apos;s Build Something
        </h2>
        <p className="text-[#a1a1aa] max-w-lg mb-14">
          Open to internships, collaborations, and interesting engineering
          challenges. Reach out directly or use the form below.
        </p>

        <div className="grid sm:grid-cols-2 gap-12">
          {/* Direct contacts */}
          <div className="flex flex-col gap-6">
            <ContactItem
              icon={<EmailIcon />}
              label="Email"
              value="anbuanbu8636@gmail.com"
              href="mailto:anbuanbu8636@gmail.com"
            />
            <ContactItem
              icon={<GlobeIcon />}
              label="Website"
              value="anbudev.me"
              href="https://anbudev.me"
            />
            <ContactItem
              icon={<GitHubIcon />}
              label="GitHub"
              value="Anbu-2006"
              href="https://github.com/Anbu-2006"
            />
            <ContactItem
              icon={<LinkedInIcon />}
              label="LinkedIn"
              value="anbuselvan-t"
              href="https://linkedin.com/in/anbuselvan-t"
            />
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-[#27272a] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-[#a1a1aa]">
          <span>© 2026 Anbuselvan T. — anbudev.me</span>
          <div className="flex gap-6">
            <a
              href="https://github.com/Anbu-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f0f0f0] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/anbuselvan-t"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f0f0f0] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://anbudev.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f0f0f0] transition-colors"
            >
              anbudev.me
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  // Replace FORMSPREE_ID with the form ID from your Formspree dashboard (formspree.io)
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
    : null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      window.location.href = `mailto:anbuanbu8636@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <InputField
        label="Name"
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <InputField
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="your@email.com"
        value={form.email}
        onChange={handleChange}
        required
      />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-[#a1a1aa]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What are you working on?"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full bg-[#111111] border border-[#27272a] rounded-lg px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#52525b] focus:outline-none focus:border-[#6366f1] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="px-6 py-3 bg-[#6366f1] text-white font-semibold text-sm rounded-lg hover:bg-[#818cf8] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "idle" && "Send Message"}
        {status === "sending" && "Sending…"}
        {status === "sent" && "Message Sent ✓"}
        {status === "error" && "Try Again"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400">
          Something went wrong. Email me directly at anbuanbu8636@gmail.com
        </p>
      )}
    </form>
  );
}

function InputField({
  label,
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; id: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium text-[#a1a1aa]">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full bg-[#111111] border border-[#27272a] rounded-lg px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#52525b] focus:outline-none focus:border-[#6366f1] transition-colors"
      />
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="flex items-center gap-4 group"
    >
      <span className="w-10 h-10 rounded-lg border border-[#27272a] bg-[#111111] flex items-center justify-center text-[#a1a1aa] group-hover:border-[#6366f1] group-hover:text-[#818cf8] transition-colors flex-shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-xs text-[#a1a1aa]">{label}</p>
        <p className="text-sm font-medium text-[#f0f0f0] group-hover:text-[#818cf8] transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#6366f1]">
      <span className="w-6 h-px bg-[#6366f1]" />
      {children}
    </div>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
