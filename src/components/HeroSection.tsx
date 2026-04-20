export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 max-w-5xl mx-auto w-full"
    >
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#6366f1] mb-2">
          <span className="w-6 h-px bg-[#6366f1]" />
          Available for Opportunities
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f0f0f0] leading-tight">
          Architecting Agentic Systems &amp;
          <br />
          <span className="text-[#6366f1]">Backend Infrastructure.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#a1a1aa] leading-relaxed max-w-2xl">
          4th Semester AI &amp; Data Engineering student specializing in{" "}
          <span className="text-[#f0f0f0]">Context Engineering</span> and
          production-grade{" "}
          <span className="text-[#f0f0f0]">Proof of Concepts (POCs)</span> at
          JAIN (Deemed to be University).
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://github.com/Anbu-2006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0f0f0] text-[#0a0a0a] font-semibold text-sm rounded-lg hover:bg-white transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/anbuselvan-t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#27272a] text-[#f0f0f0] font-semibold text-sm rounded-lg hover:border-[#6366f1] hover:text-[#818cf8] transition-colors"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap gap-6 pt-6 border-t border-[#27272a]">
          <Stat value="3+" label="Engineering POCs" />
          <Stat value="8.0+" label="GPA" />
          <Stat value="Sub-2s" label="Latency Target" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-[#f0f0f0]">{value}</span>
      <span className="text-xs text-[#a1a1aa] mt-0.5">{label}</span>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
