import { motion } from 'framer-motion';
import { FileText, Mail, Briefcase } from 'lucide-react';

export default function OpenToWork() {
  return (
    <section className="relative py-10 md:py-20 overflow-hidden border-t border-white/5 bg-[#030303]">
      {/* Background Radial Glow */}
      <div className="glow-bg-indigo top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="relative p-8 md:p-12 rounded-3xl bg-dark-card/75 border border-white/10 shadow-glass-lg backdrop-blur-md overflow-hidden text-center group"
        >
          {/* Top glowing line decoration */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />
          
          {/* Icon */}
          <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 badge-otw-glow">
            <Briefcase size={26} />
          </div>

          {/* Heading */}
          <h3 className="font-display font-black text-2xl md:text-3xl text-white mb-4 tracking-wide">
            Looking for a Senior Backend Developer?
          </h3>
          
          {/* Focus statement */}
          <p className="font-sans text-[15px] md:text-[16px] text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            “I am actively looking for opportunities as a <span className="text-white font-bold">Backend Developer</span> or <span className="text-white font-bold">Full Stack Developer</span> where I can build scalable systems, high-performance APIs, and enterprise applications.”
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-sans font-bold text-[14px] px-6 py-3.5 rounded-xl shadow-glow-blue hover:shadow-glow-purple hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <Mail size={16} />
              Hire Me
            </a>
            <a
              href="resume.pdf"
              download="Muhammed_Ansif_V_Resume.pdf"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-sans font-bold text-[14px] px-6 py-3.5 rounded-xl backdrop-blur-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <FileText size={16} />
              Download Resume
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
