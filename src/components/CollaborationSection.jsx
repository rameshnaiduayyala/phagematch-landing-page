import { motion } from "framer-motion";

export default function CollaborationSection() {
  const partners = [
    {
      icon: "🏥",
      title: "Hospital Pilot Partners",
      desc: "Looking for tertiary hospitals to expand pilot from 2 to 500+ patient cases.",
      list: [
        "Real-world validation",
        "Workflow integration",
        "Compliance refinement",
      ],
    },
    {
      icon: "🔬",
      title: "Phage Library Partners",
      desc: "Collaborate with phage labs to expand the library and validate therapeutic efficacy.",
      list: [
        "Phage characterization",
        "Open API integration",
        "Co-authored publications",
      ],
    },
    {
      icon: "🔍",
      title: "Data & Research Partners",
      desc: "Work with labs on validation datasets, analysis, and publication pipeline.",
      list: [
        "Anonymized data access",
        "Co-authorship",
        "Infrastructure integration",
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 py-24 px-6 border-t border-slate-200 overflow-hidden">
      {/* ===== BACKGROUND: Cyan glow + phage watermark ===== */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 480px at 80% 20%, rgba(6,182,212,0.15), transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 800 600"
        className="absolute left-[-10%] bottom-[-10%] w-[90%] max-w-none opacity-[0.05] -z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="rgba(6,182,212,0.4)" strokeWidth="2" fill="none">
          <path d="M100 100 Q200 300 100 500 T100 900" />
          <path d="M700 100 Q600 300 700 500 T700 900" />
          <path d="M100 100 C300 250 500 250 700 100" />
          <path d="M100 500 C300 350 500 350 700 500" />
        </g>
      </svg>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight"
        >
          Join Our{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Validation & Growth
          </span>{" "}
          Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-slate-600 mb-14 max-w-3xl leading-relaxed"
        >
          PhageMatch is currently at <strong>TRL 5–6</strong>, transitioning
          from MVP validation to large-scale deployment. We’re seeking
          multi-sector partners across healthcare, phage science, and data
          research to expand our national footprint.
        </motion.p>

        {/* Partner Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {partners.map(({ icon, title, desc, list }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 hover:border-cyan-400/80 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-slate-900">
                {title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{desc}</p>
              <ul className="text-sm text-slate-700 space-y-1">
                {list.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-cyan-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-cyan-50 to-white border-l-4 border-cyan-500/80 p-8 rounded-xl shadow-sm"
        >
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">
              Collaboration Opportunities:
            </strong>{" "}
            We welcome proposals from hospitals, research institutes, and
            innovation clusters. Join our consortium to co-develop real-world
            validation frameworks and shape the future of precision phage
            therapy in India.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
