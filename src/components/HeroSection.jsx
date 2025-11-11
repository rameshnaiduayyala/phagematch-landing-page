import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#01030A] text-white overflow-hidden flex items-center">
      {/* ===== BACKGROUND ===== */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle 400px at 50% 100px, rgba(6,182,212,0.25), transparent 70%),
            radial-gradient(circle 300px at 80% 80%, rgba(180,160,255,0.15), transparent 80%)
          `,
        }}
      />
      <motion.div
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_25%_20%,rgba(0,255,255,0.06),transparent_60%),radial-gradient(circle_at_80%_75%,rgba(160,160,255,0.06),transparent_70%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <div className="absolute inset-0 z-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-6 py-16 md:py-20 lg:py-24">
        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE — Biotech Dashboard Mock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-[380px] w-full flex items-center justify-center shadow-[0_0_45px_-10px_rgba(6,182,212,0.3)]">
            <div className="absolute top-6 left-6 h-2 w-2 rounded-full bg-cyan-400/70 animate-pulse"></div>
            <div className="text-center opacity-70">
              <svg
                className="w-24 h-24 mx-auto mb-5 text-cyan-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.3"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <p className="text-cyan-100/70 font-light tracking-wide">
                Analytics dashboard prototype
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
