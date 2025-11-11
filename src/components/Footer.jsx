import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-400 py-16 px-6 border-t border-slate-800 overflow-hidden">
      {/* === Background Glow === */}
      <div
        className="absolute inset-0 -z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle 600px at 50% -100px, rgba(6,182,212,0.15), transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-9 h-9 bg-gradient-to-tr from-cyan-500 to-sky-600 rounded-lg flex items-center justify-center text-white font-bold">
              PM
            </div>
            <span className="text-white font-semibold text-lg">
              PhageMatch
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            India’s AI-powered AMR intelligence & phage therapy platform. 
            Designed for clinicians, researchers, and national surveillance networks.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-3 tracking-wide">
            Quick Links
          </h4>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="#validation"
                className="hover:text-cyan-400 transition-colors"
              >
                Validation
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://www.digitelescope.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                DigiTelescope
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-3 tracking-wide">
            Contact
          </h4>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="mailto:rayalu.rama@digitelescope.com"
                className="hover:text-cyan-400 transition-colors"
              >
                rayalu.rama@digitelescope.com
              </a>
            </li>
            <li>
              <a
                href="tel:+919553885666"
                className="hover:text-cyan-400 transition-colors"
              >
                +91 9553 8856 66
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-3 tracking-wide">
            Location
          </h4>
          <p className="text-sm leading-relaxed text-slate-400">
            Digitelescope Pvt. Ltd.<br />
            Plot No 99/A, Journalist Colony<br />
            Jubilee Hills, Hyderabad<br />
            Telangana 500033, India
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
        <p>
          © 2025 <span className="text-cyan-400">DigiTelescope</span>.{" "}
          <span className="text-slate-400">
            PhageMatch under development — DISHA-compliant data handling.
          </span>
        </p>
        <p className="mt-2 text-xs text-slate-600">
          Builtby the PhageMatch R&D Team · IMS-BHU Pilot · TRL 5–6
        </p>
      </div>
    </footer>
  );
}
