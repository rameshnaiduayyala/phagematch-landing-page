import { motion } from "framer-motion";

export default function WorkInProgress() {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 via-white to-amber-50 border-t-4 border-amber-300 px-6 py-10 overflow-hidden">
      {/* ===== Subtle Background Glow ===== */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 400px at 80% 30%, rgba(251,191,36,0.15), transparent 70%)",
        }}
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6">
        {/* Icon */}
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-amber-500 flex-shrink-0"
        >
          ⚙️
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-2xl text-amber-900 mb-3 tracking-tight">
            Work in Progress – <span className="text-amber-700">Transparency First</span>
          </h3>

          <p className="text-amber-800 mb-4 leading-relaxed">
            PhageMatch is under active development. We believe in open collaboration and 
            transparent communication as we build towards large-scale clinical validation.
          </p>

          <ul className="text-sm text-amber-900/90 space-y-2 ml-5 list-disc marker:text-amber-600">
            <li>
              <strong>Current phase:</strong> MVP validation with 100+ pilot cases
            </li>
            <li>
              <strong>Next 6 months:</strong> Expanded pilots & peer-reviewed publications
            </li>
            <li>
              <strong>Academic focus:</strong> Prioritizing co-authored research and open datasets
            </li>
            <li>
              <strong>Your feedback:</strong> Drives algorithm and workflow evolution
            </li>
          </ul>

          {/* Progress footer line */}
          <div className="mt-6 h-2 bg-amber-200 rounded-full overflow-hidden w-full max-w-md">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "65%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full bg-amber-400 rounded-full"
            />
          </div>
          <p className="text-xs text-amber-700 mt-2 font-medium">
            Current progress: ~65% of MVP goals achieved
          </p>
        </motion.div>
      </div>
    </section>
  );
}
