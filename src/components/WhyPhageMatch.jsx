import { motion } from "framer-motion";

export default function WhyPhageMatch() {
  const reasons = [
    [
      "First Clinical-Research Bridge in India",
      "Bridges AMR surveillance labs with clinical and phage therapy workflows.",
    ],
    [
      "NARS-Net Native",
      "Seamless WHONET compatibility enables instant adoption by national labs.",
    ],
    [
      "Regulatory-Ready Architecture",
      "Compliant with DISHA, HIPAA-equivalent security, and national reporting.",
    ],
    [
      "Evidence-Based, Not Black-Box",
      "Clinicians can review transparent reasoning for each matching recommendation.",
    ],
    [
      "Offline-Capable",
      "Designed for healthcare sites with limited internet reliability.",
    ],
    [
      "Purpose-Built for Phage Therapy",
      "Integrated phage library management, strain matching, and treatment modules.",
    ],
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 py-24 px-6 overflow-hidden">
      {/* ===== BACKGROUND WATERMARK ===== */}
      <div
        className="absolute inset-0 pointer-events-none -z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle 400px at 70% 20%, rgba(6,182,212,0.1), transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 800 600"
        className="absolute right-[-10%] bottom-[-10%] w-[90%] max-w-none opacity-[0.05] -z-0"
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
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-14 tracking-tight"
        >
          Why&nbsp;
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            PhageMatch
          </span>{" "}
          Stands Alone
        </motion.h2>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map(([title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center text-cyan-500 text-2xl font-bold bg-white rounded-full border border-cyan-200 shadow-sm">
                ✓
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">
                {title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
