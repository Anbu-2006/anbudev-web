const coreDepth = [
  { name: "Python", level: "Expert" },
  { name: "SQL / MySQL", level: "Advanced" },
  { name: "Context Engineering (RAG)", level: "Advanced" },
  { name: "Vector Databases", level: "Advanced", note: "Pinecone, Chroma" },
  { name: "ETL Pipelines", level: "Advanced" },
];

const breadth = [
  { name: "Java", level: "Functional" },
  { name: "FastAPI", level: "Intermediate" },
  { name: "REST APIs", level: "Advanced" },
  { name: "Git", level: "Advanced" },
  { name: "Environment Security (.env)", level: "Intermediate" },
  { name: "Latency Monitoring", level: "Intermediate" },
];

const levelColor: Record<string, string> = {
  Expert: "text-[#6366f1] border-[#6366f1]/30 bg-[#6366f1]/10",
  Advanced: "text-[#22d3ee] border-[#22d3ee]/30 bg-[#22d3ee]/10",
  Intermediate: "text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/10",
  Functional: "text-[#4ade80] border-[#4ade80]/30 bg-[#4ade80]/10",
};

export default function StackSection() {
  return (
    <section id="stack" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <SectionLabel>02 — Technical Stack</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f0f0f0] mt-3 mb-4">
        The Matrix
      </h2>
      <p className="text-[#a1a1aa] max-w-xl mb-14">
        A deliberate combination of deep expertise and functional breadth—built
        for production-grade AI and data systems.
      </p>

      <div className="grid sm:grid-cols-2 gap-10">
        <SkillGroup title="Core Depth" skills={coreDepth} />
        <SkillGroup title="Breadth" skills={breadth} />
      </div>
    </section>
  );
}

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; level: string; note?: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-widest uppercase text-[#a1a1aa] mb-5">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {skills.map((s) => (
          <li
            key={s.name}
            className="flex items-center justify-between px-4 py-3 rounded-lg border border-[#27272a] bg-[#111111]"
          >
            <div>
              <span className="text-sm font-medium text-[#f0f0f0]">
                {s.name}
              </span>
              {s.note && (
                <span className="ml-2 text-xs text-[#a1a1aa]">({s.note})</span>
              )}
            </div>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded border ${levelColor[s.level] ?? ""}`}
            >
              {s.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
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
