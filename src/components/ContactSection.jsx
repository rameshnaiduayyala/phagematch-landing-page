import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-6 text-white overflow-hidden border-t border-slate-800"
    >
      {/* ===== Background Glow & DNA Watermark ===== */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 600px at 70% 10%, rgba(6,182,212,0.25), transparent 70%)",
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
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
        >
          Let’s&nbsp;
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
            Collaborate
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-cyan-100 mb-12 leading-relaxed"
        >
          Choose your partnership path — our team responds within 48 hours.
        </motion.p>

        {/* ===== FORM ===== */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/xdkyozwb"
          method="POST"
          className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-10 space-y-4 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-cyan-200 focus:ring-2 focus:ring-cyan-300 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-cyan-200 focus:ring-2 focus:ring-cyan-300 outline-none"
            />
          </div>

          <input
            type="text"
            name="organization"
            placeholder="Organization / Institute"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-cyan-200 focus:ring-2 focus:ring-cyan-300 outline-none"
          />

          <select
            name="interest"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-cyan-300 outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              What interests you most?
            </option>
            <option value="pilot_hospital">Hospital Pilot</option>
            <option value="research_lab">Research Collaboration</option>
            <option value="technical">Technical Integration</option>
            <option value="investment">Investment / Strategic</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your organization..."
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-cyan-200 focus:ring-2 focus:ring-cyan-300 outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-black font-semibold py-3 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300"
          >
            Schedule Demo
          </motion.button>
        </motion.form>

        {/* Contact Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-sm text-cyan-200"
        >
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@phagematch.ai"
              className="underline hover:text-cyan-400 transition"
            >
              info@phagematch.ai
            </a>{" "}
            | <strong>Response Time:</strong> 24–48 hrs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
