import { motion } from "framer-motion";
import {
  Cpu,
  LineChart,
  Network,
  Shield,
  Database,
  Microscope,
} from "lucide-react";
import video1 from "../assets/6973-197914400.mp4";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#01030A] text-white overflow-hidden flex items-center font-[Inter]">
      {/* ===== ENHANCED BACKGROUND VIDEO ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-30 scale-105" // slightly more visible (was 0.20)
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#01030A]/80 via-[#01030A]/60 to-[#01030A]/80" />
        {/* reduced overlay opacity from /90 and /70 → /80 and /60 */}
      </div>

      {/* ===== ADVANCED LIGHTING EFFECTS ===== */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle 800px at 20% 20%, rgba(0, 255, 255, 0.18) 0%, transparent 50%),
              radial-gradient(circle 600px at 80% 80%, rgba(120, 100, 255, 0.15) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* ===== ANIMATED GRID ===== */}
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.04]" // slightly stronger grid visibility
        style={{
          backgroundImage: `
            linear-gradient(to right, #00ffff 1px, transparent 1px),
            linear-gradient(to bottom, #00ffff 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ===== MAIN CONTENT1 ===== */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 py-10 lg:py-16">
        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col space-y-8"
        >
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center px-5 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-medium tracking-[0.15em] uppercase text-cyan-300 mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Presented at SBRT-2025 · IMS-BHU
            </div>
          </motion.div>

          {/* MAIN HEADLINE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="block">India’s Clinical</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
                AMR Intelligence
              </span>
              <span className="block">& Phage Therapy Platform</span>
            </h1>

            <p className="text-lg lg:text-xl text-cyan-100/90 font-light leading-relaxed max-w-xl">
              Merging clinical microbiology and AI to decode antimicrobial
              resistance in real-time — connecting hospitals, researchers, and
              health systems through precision phage-pathogen analytics.
            </p>
          </motion.div>

          {/* KEY FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4"
          >
            {[
              { icon: Microscope, text: "Real-time AMR Analytics" },
              { icon: Database, text: "Phage-Pathogen Database" },
              { icon: Shield, text: "HIPAA Compliant" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-cyan-200/90"
              >
                <feature.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CALL TO ACTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#demo"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-semibold px-7 py-3 rounded-xl tracking-wide shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Request Demo
            </a>
            <a
              href="#validation"
              className="px-7 py-3 rounded-xl font-semibold border border-white/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Validation
            </a>
          </motion.div>

          {/* STATUS LINE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-sm text-cyan-200/80 font-light tracking-wider"
          >
            <strong className="text-cyan-300">Phase:</strong> TRL 5–6 · MVP
            validation ongoing · Seeking pilot collaborations
          </motion.div>
        </motion.div>

        {/* ===== RIGHT SIDE - DASHBOARD PREVIEW ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 0.85, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative hidden lg:block"
        >
          {/* DASHBOARD SKELETON CONTAINER */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-8 shadow-2xl shadow-cyan-500/10">
            {/* SKELETON HEADER */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <div className="h-4 bg-white/20 rounded w-32"></div>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
                <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
                <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
              </div>
            </div>

            {/* SKELETON METRICS GRID */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
                  <div className="h-6 bg-cyan-400/30 rounded w-1/2"></div>
                </div>
              ))}
            </div>

            {/* SKELETON CHART AREA */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <div className="h-4 bg-white/20 rounded w-1/2 mb-4"></div>
              <div className="space-y-3">
                <div className="h-3 bg-white/10 rounded w-full"></div>
                <div className="h-3 bg-white/10 rounded w-5/6"></div>
                <div className="h-3 bg-white/10 rounded w-4/6"></div>
                <div className="h-3 bg-white/10 rounded w-3/4"></div>
                <div className="h-3 bg-white/10 rounded w-5/6"></div>
              </div>
            </div>

            {/* SKELETON DATA TABLE */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="h-4 bg-white/20 rounded w-2/3 mb-4"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((row) => (
                  <div key={row} className="flex space-x-4">
                    <div className="h-3 bg-white/10 rounded flex-1"></div>
                    <div className="h-3 bg-white/10 rounded w-16"></div>
                    <div className="h-3 bg-white/10 rounded w-12"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* COMING SOON OVERLAY */}
            <div className="absolute inset-0 bg-black/50 rounded-3xl backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <LineChart className="w-12 h-12 text-cyan-300 mx-auto mb-3" />
                <p className="text-xl text-cyan-200 font-light tracking-wide">
                  Dashboard Preview
                </p>
                <p className="text-cyan-400/80 text-sm uppercase tracking-wider mt-1">
                  Coming Soon
                </p>
              </div>
            </div>

            {/* FLOATING NETWORK ICON */}
            <Network className="absolute -bottom-4 -right-4 w-12 h-12 text-cyan-400/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
