import { motion } from "framer-motion";
import { LineChart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#01030A] text-white overflow-hidden flex items-center">
      {/* ===== BACKGROUND ===== */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle 600px at 50% 150px, rgba(6,182,212,0.25), transparent 70%),
            radial-gradient(circle 500px at 80% 80%, rgba(180,160,255,0.18), transparent 80%)
          `,
        }}
      />
      <motion.div
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_25%_20%,rgba(0,255,255,0.08),transparent_70%),radial-gradient(circle_at_80%_75%,rgba(160,160,255,0.08),transparent_70%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-6 py-16 md:py-20 lg:py-24">
        {/* LEFT SIDE — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-5 px-5 py-1.5 bg-white/5 rounded-full border border-white/10 text-sm font-medium tracking-wide uppercase text-cyan-300"
          >
            🔬 Presented at SBRT-2025 · IMS-BHU
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-[1.15] mb-6 tracking-tight"
          >
            India’s Clinical{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
              AMR Intelligence
            </span>{" "}
            &amp; Phage Therapy Platform
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-lg md:text-xl text-cyan-100/90 mb-10 leading-relaxed max-w-xl font-light"
          >
            Transforming antimicrobial surveillance into real-time, data-driven
            insights. Bridging hospitals, research labs, and national health
            systems with AI-powered phage-pathogen intelligence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact-demo"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-semibold px-7 py-3 rounded-xl tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300"
            >
              Request Demo
            </a>
            <a
              href="#validation"
              className="px-7 py-3 rounded-xl font-semibold border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              View Validation
            </a>
          </motion.div>

          {/* Status line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm text-cyan-200/80 font-light tracking-wide"
          >
            <strong className="text-cyan-300">Phase:</strong> TRL 5–6 · MVP
            validation in progress · Seeking pilot collaborations
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — Lucid Dashboard Logo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="hidden md:flex justify-center items-center relative"
        >
          <motion.div
            whileHover={{ rotateY: 8, rotateX: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-[0_0_50px_-10px_rgba(6,182,212,0.35)] h-[420px] w-full flex flex-col items-center justify-center"
          >
            {/* === Lucide Icon (instead of ChartNoAxesCombined) === */}
            <motion.div
              // animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-cyan-400/90"
            >
              <LineChart
                size={120}
                strokeWidth={1.5}
                className="drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]"
              />
            </motion.div>

            {/* Text Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="relative z-10 text-center bg-white/10 backdrop-blur-md border border-white/10 px-8 py-4 rounded-xl inline-block mt-8 shadow-[0_0_25px_rgba(6,182,212,0.3)]"
            >
              <p className="text-cyan-100/90 text-sm uppercase tracking-widest font-semibold">
                Dashboard Preview
              </p>
              <p className="text-white/70 text-xs mt-1 tracking-wide">
                Coming Soon
              </p>
            </motion.div>

            {/* Ambient Glow */}
            <div className="absolute -z-10 w-[250px] h-[250px] bg-gradient-to-r from-cyan-500/25 to-purple-500/25 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
