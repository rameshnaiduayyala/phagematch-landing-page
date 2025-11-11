import { motion } from "framer-motion";

export default function TeamSection() {
  const members = [
    {
      icon: "👨‍💼",
      name: "K. Rama Rayalu",
      role: "CEO, Founder",
      desc: "Healthcare technology entrepreneur, CEO of Digitelescope; 10+ years in digital health R&D.",
    },
    {
      icon: "👩‍🔬",
      name: "Dr. Lavanya Kotha",
      role: "Principal Investigator",
      desc: "Clinical microbiologist; research in AMR surveillance & phage therapy leadership.",
    },
    {
      icon: "☁️",
      name: "Damera Ramachandra",
      role: "Cloud Architect",
      desc: "Expert in secure, scalable healthcare data systems and API-first design.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white py-24 px-6 overflow-hidden">
      {/* ===== Background Layers ===== */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 500px at 70% 20%, rgba(6,182,212,0.18), transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 800 600"
        className="absolute right-[-10%] bottom-[-10%] w-[90%] max-w-none opacity-[0.04] -z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="rgba(6,182,212,0.4)" strokeWidth="2" fill="none">
          <path d="M100 100 Q200 300 100 500 T100 900" />
          <path d="M700 100 Q600 300 700 500 T700 900" />
          <path d="M100 100 C300 250 500 250 700 100" />
          <path d="M100 500 C300 350 500 350 700 500" />
        </g>
      </svg>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight"
        >
          Led by&nbsp;
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
            Healthcare Technology Experts
          </span>
        </motion.h2>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {members.map(({ icon, name, role, desc }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:scale-[1.02] transition-all duration-300"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="font-semibold text-xl mb-1 text-white">
                {name}
              </h3>
              <p className="text-sm text-cyan-300 mb-3 tracking-wide">
                {role}
              </p>
              <p className="text-sm text-cyan-100/90 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-3xl mx-auto text-cyan-100"
        >
          <p>
            <strong className="text-white">Advisory Network:</strong> Supported
            by domain experts in microbiology, AI, and healthcare policy across
            India’s leading research institutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
