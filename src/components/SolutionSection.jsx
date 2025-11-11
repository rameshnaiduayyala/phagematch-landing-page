import { motion } from "framer-motion";

export default function SolutionSection() {
  const solutions = [
    {
      icon: "📊",
      title: "WHONET-Compatible Data Engine",
      desc: "Instantly ingests resistance profiles from 60+ NARS-Net labs using standard formats, eliminating manual data entry.",
    },
    {
      icon: "🤖",
      title: "AI/ML Pathogen-Phage Matching",
      desc: "Evidence-based algorithmic matching for key pathogens. Transparent reasoning and clinician-review workflows.",
    },
    {
      icon: "🏥",
      title: "Multi-Stakeholder Dashboards",
      desc: "Role-based interfaces for clinicians, lab directors, and researchers with secure, permissioned access.",
    },
    {
      icon: "⚖️",
      title: "Compliance Automation",
      desc: "NCDC, ICMR, and EQAS-ready reporting with audit trails and secure data governance for regulatory alignment.",
    },
  ];

  return (
    <section className="relative bg-[#020617] text-white py-24 px-6 overflow-hidden">
      {/* ===== BACKGROUND LAYERS ===== */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 500px at 80% 20%, rgba(6,182,212,0.18), transparent 70%)",
        }}
      />

      {/* SVG watermark: stylized DNA/phage helix */}
      <svg
        viewBox="0 0 800 600"
        className="absolute left-[-10%] bottom-[-10%] w-[90%] max-w-none opacity-[0.04] -z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="rgba(6,182,212,0.4)" strokeWidth="2" fill="none">
          <path d="M100 100 Q200 300 100 500 T100 900" />
          <path d="M700 100 Q600 300 700 500 T700 900" />
          <path d="M100 100 C300 250 500 250 700 100" />
          <path d="M100 500 C300 350 500 350 700 500" />
          <path d="M100 300 C300 180 500 180 700 300" />
          <path d="M100 700 C300 820 500 820 700 700" />
        </g>
      </svg>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
        >
          PhageMatch&nbsp;
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
            Solution
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-cyan-100 mb-16 max-w-2xl leading-relaxed"
        >
          A unified platform connecting hospitals, labs, phage scientists, and
          national authorities — enabling faster, data-driven clinical
          decisions.
        </motion.p>

        {/* Solution cards grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-slate-300 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Workflow summary card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="text-4xl mb-4">🔄</div>
          <h3 className="text-xl font-semibold mb-2">
            Integrated Clinical Workflow
          </h3>
          <p className="text-slate-300 leading-relaxed">
            <span className="text-white/90">
              Hospital → Lab → PhageMatch AI → Matching Library → Treatment
              Decision → Outcome Tracking → National Repository.
            </span>{" "}
            Continuous data feedback loops strengthen predictive accuracy,
            reduce turnaround time, and enhance national AMR intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
