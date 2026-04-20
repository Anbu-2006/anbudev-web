export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-[#27272a]"
    >
      <SectionLabel>04 — Professional Experience</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f0f0f0] mt-3 mb-14">
        Where I&apos;ve Contributed
      </h2>

      <div className="rounded-xl border border-[#27272a] bg-[#111111] p-7">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-[#f0f0f0]">
              Operational Manager
            </h3>
            <p className="text-[#6366f1] font-medium mt-1">Axiom Digital</p>
          </div>
          <span className="text-xs text-[#a1a1aa] border border-[#27272a] px-3 py-1 rounded">
            Current
          </span>
        </div>

        <ul className="flex flex-col gap-4">
          <ExperienceItem
            title="AI-Driven Workflow Automation"
            description="Designed and deployed AI-augmented workflows to eliminate manual bottlenecks across client delivery pipelines, reducing average task completion time measurably across teams."
          />
          <ExperienceItem
            title="Project Timeline Management"
            description="Owned end-to-end project scheduling and milestone tracking for multiple concurrent client engagements, maintaining on-time delivery rates through structured sprint planning."
          />
          <ExperienceItem
            title="KPI Reporting for Client Success"
            description="Built KPI dashboards and automated reporting pipelines to surface real-time performance data, enabling data-driven decision-making for client success outcomes."
          />
        </ul>
      </div>
    </section>
  );
}

function ExperienceItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6366f1] flex-shrink-0" />
      <div>
        <p className="text-sm font-semibold text-[#f0f0f0]">{title}</p>
        <p className="text-sm text-[#a1a1aa] mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </li>
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
