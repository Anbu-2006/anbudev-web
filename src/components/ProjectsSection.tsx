const projects = [
  {
    id: "01",
    name: "Argo FloatChat",
    tagline: "Agentic RAG Pipeline for Scientific Data Discovery",
    status: "Production",
    statusColor: "text-[#4ade80] bg-[#4ade80]/10 border-[#4ade80]/30",
    description:
      "An end-to-end agentic Retrieval-Augmented Generation pipeline built for conversational exploration of Argo float oceanographic data. Implements hierarchical chunking strategies to preserve scientific context across multi-turn conversations, with a Pinecone vector index for sub-2-second semantic retrieval.",
    highlights: [
      "Sub-2s end-to-end latency on P95",
      "Hierarchical chunking for document fidelity",
      "Pinecone vector index with cosine similarity",
      "Multi-turn conversational state management",
    ],
    stack: ["Python", "Pinecone", "RAG", "FastAPI", "Context Engineering"],
  },
  {
    id: "02",
    name: "Project Aegis",
    tagline: "Zero-Trust Security Backend",
    status: "Production",
    statusColor: "text-[#4ade80] bg-[#4ade80]/10 border-[#4ade80]/30",
    description:
      "A hardened backend security layer featuring multi-vector intent analysis, real-time audio content scanning, and SQL query optimization. Built on a Zero-Trust architecture where every request is authenticated, every query is parameterized, and every anomaly is logged with full audit trails.",
    highlights: [
      "Zero-Trust architecture — trust nothing, verify everything",
      "Intent analysis to flag adversarial inputs",
      "Audio content scanning pipeline",
      "SQL performance tuning with indexed queries",
    ],
    stack: ["Python", "SQL", "REST APIs", "Security", ".env"],
  },
  {
    id: "03",
    name: "Project Healer",
    tagline: "HIPAA-Aligned Healthcare AI POC",
    status: "Development",
    statusColor: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/30",
    description:
      "A HIPAA-aligned proof-of-concept targeting early emergency detection in clinical environments. Ingests real-time sensor data streams and applies supervised learning models to identify critical patient state transitions before standard monitoring thresholds trigger, enabling proactive intervention.",
    highlights: [
      "HIPAA-aligned data handling & storage",
      "Supervised learning for emergency classification",
      "Real-time sensor data ingestion pipeline",
      "Early-detection model with low false-negative rate",
    ],
    stack: ["Python", "ETL Pipelines", "Supervised Learning", "SQL", "Sensors"],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-5xl mx-auto w-full border-t border-[#27272a]"
    >
      <SectionLabel>03 — Featured Projects</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f0f0f0] mt-3 mb-4">
        The Beast Projects
      </h2>
      <p className="text-[#a1a1aa] max-w-xl mb-14">
        Full-lifecycle engineering projects from architecture through deployment,
        each solving a real problem with measurable outcomes.
      </p>

      <div className="flex flex-col gap-8">
        {projects.map((p) => (
          <article
            key={p.id}
            className="rounded-xl border border-[#27272a] bg-[#111111] p-7 hover:border-[#6366f1]/40 transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <span className="text-xs font-mono text-[#a1a1aa] mb-1 block">
                  {p.id}
                </span>
                <h3 className="text-xl font-bold text-[#f0f0f0]">{p.name}</h3>
                <p className="text-sm text-[#a1a1aa] mt-1">{p.tagline}</p>
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${p.statusColor}`}
              >
                {p.status}
              </span>
            </div>

            <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
              {p.description}
            </p>

            <ul className="grid sm:grid-cols-2 gap-2 mb-6">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6366f1] flex-shrink-0" />
                  <span className="text-[#d4d4d8]">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded border border-[#27272a] text-[#a1a1aa]"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
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
