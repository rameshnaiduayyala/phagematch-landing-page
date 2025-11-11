import { motion } from "framer-motion";

export default function CrisisSection() {
  const data = [
    ["297,000 deaths annually", "Highest global AMR burden (WHO, NCDC 2023)"],
    ["Fragmented surveillance", "60 NARS-Net labs operate in silos"],
    ["Manual workflows", "24+ hours from culture to clinical decision"],
    ["Phage therapy bottleneck", "Only 3 active clinical phage labs"],
  ];

  const metrics = [
    ["12", "Research institutions"],
    ["2", "Hospital pilot sites"],
    ["100+", "Clinical cases processed"],
    ["3–6 hrs", "Decision time (target)"],
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20 px-6 border-t border-slate-200 overflow-hidden">
      {/* Decorative cyan glow in background */}
      <div
        className="absolute inset-0 opacity-40 -z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle 400px at 80% 20%, rgba(6,182,212,0.2), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE — Crisis Summary */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 leading-tight">
            India’s AMR Crisis Demands
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
              {" "}
              Systematic Solutions
            </span>
          </h2>

          <div className="space-y-6">
            {data.map(([title, desc], idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="pl-6 relative"
              >
                <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
                <p className="text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE — Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {metrics.map(([num, label], idx) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300"
            >
              <div className="text-4xl font-bold text-slate-900 mb-1">
                {num}
              </div>
              <p className="text-sm text-slate-600">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
