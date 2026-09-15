import { motion } from 'framer-motion';
import { FileText, Mail, Briefcase } from 'lucide-react';

export default function OpenToWork() {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden border-t border-slate-200 bg-[#EFF6FF]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4 }}
          className="relative p-8 md:p-12 rounded-2xl bg-white border border-blue-100 shadow-sm overflow-hidden text-center"
        >
          {/* Top blue line decoration */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />
          
          {/* Icon */}
          <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 badge-otw-glow">
            <Briefcase size={26} />
          </div>

          {/* Heading */}
          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-[#0F172A] mb-4 tracking-wide">
            Looking for a Senior Backend Developer?
          </h3>
          
          {/* Focus statement */}
          <p className="font-sans text-[15px] md:text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            “I am actively looking for opportunities as a <span className="text-[#0F172A] font-bold">Backend Developer</span> or <span className="text-[#0F172A] font-bold">Full Stack Developer</span> where I can build scalable systems, high-performance APIs, and enterprise applications.”
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-[14px] px-7 py-3.5 rounded-lg shadow-sm transition-all duration-200 w-full sm:w-auto cursor-pointer"
            >
              <Mail size={16} />
              Hire Me
            </a>
            <a
              href="resume.pdf"
              download="Muhammed_Ansif_V_Resume.pdf"
              className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-sans font-bold text-[14px] px-7 py-3.5 rounded-lg shadow-2xs transition-all duration-200 w-full sm:w-auto cursor-pointer"
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
