import { motion } from "framer-motion";
import rayalu from "../assets/team/Rayalu_Website-768x1024.jpg";
import kotha from "../assets/team/Lavanya-Photo.jpg";
import ramachandra from "../assets/team/Ramachandra_Website-1536x2048.jpg";
import ChromaGrid from "./ChromaGrid";

export default function TeamSection() {
  const members = [
    {
      image: rayalu,
      title: "K. Rama Rayalu",
      subtitle: "CEO, Founder",
      desc: "Healthcare technology entrepreneur, CEO of Digitelescope; 10+ years in digital health R&D.",
      borderColor: "#22D3EE",
      gradient: "linear-gradient(145deg,#22D3EE,#0A0F1E)",
      handle: "@digitelescope",
    },
    {
      image: kotha,
      title: "Dr. Lavanya Kotha",
      subtitle: "Principal Investigator",
      desc: "Clinical microbiologist; research in AMR surveillance & phage therapy leadership.",
      borderColor: "#A78BFA",
      gradient: "linear-gradient(145deg,#A78BFA,#0A0F1E)",
      handle: "@lavanyak",
    },
    {
      image: ramachandra,
      title: "Damera Ramachandra",
      subtitle: "Cloud Architect",
      desc: "Expert in secure, scalable healthcare data systems and API-first design.",
      borderColor: "#38BDF8",
      gradient: "linear-gradient(145deg,#38BDF8,#0A0F1E)",
      handle: "@ramachandra",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white py-24 px-6 overflow-hidden">
      {/* ===== Ambient Glow Background ===== */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 500px at 70% 20%, rgba(6,182,212,0.18), transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 800 600"
        className="absolute right-[-10%] bottom-[-10%] w-[90%] max-w-none opacity-[0.05] -z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="rgba(6,182,212,0.35)" strokeWidth="2" fill="none">
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
          className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight"
        >
          Led by&nbsp;
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
            Healthcare Technology Experts
          </span>
        </motion.h2>

        {/* ===== Floating 3D Grid ===== */}
        <div className="w-full mx-auto mb-20">
          <ChromaGrid
            items={members}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
        {/* ===== Advisory Footer ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-3xl mx-auto text-cyan-100"
        >
          <p className="text-sm md:text-base leading-relaxed">
            <strong className="text-white font-semibold">
              Advisory Network:
            </strong>{" "}
            Supported by domain experts in microbiology, AI, and healthcare
            policy across India’s leading research institutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
