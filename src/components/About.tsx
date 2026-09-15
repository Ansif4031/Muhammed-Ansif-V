import { motion } from 'framer-motion';
import { Cpu, Server, Zap, ShieldCheck } from 'lucide-react';

interface Pillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: <Cpu className="text-blue-600" size={22} />,
    title: 'High-Performance APIs',
    description: 'Designing sub-100ms latency REST & WebSocket interfaces with robust caching, rate-limiting, and clean payload schemas.',
  },
  {
    icon: <Server className="text-indigo-600" size={22} />,
    title: 'Microservices & Scale',
    description: 'Decoupling monoliths into containerized microservices built with Node.js/Express, Docker, and high-concurrency event buffers.',
  },
  {
    icon: <Zap className="text-blue-600" size={22} />,
    title: 'Workflow Automation',
    description: 'Constructing custom event orchestrators, BPM systems, and CMS automation that drive operational velocity.',
  },
  {
    icon: <ShieldCheck className="text-emerald-600" size={22} />,
    title: 'Enterprise Security',
    description: 'Securing cloud ecosystems using strict JWT/RBAC models, CSRF mitigations, CORS setups, and detailed audit trails.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden border-t border-slate-200 bg-[#F8FAFC]">
      {/* Decorative subtle blur */}
      <div className="glow-bg-blue top-[25%] right-[-10%] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-3 text-[#0F172A]">
            About <span className="text-blue-600">Ansif</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Biography Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 flex flex-col md:flex-row gap-8 items-start text-left"
          >
            {/* Portrait Frame */}
            <div className="relative w-full md:w-48 xl:w-56 shrink-0 mx-auto md:mx-0">
              <div className="relative rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white p-2">
                <img
                  src="/profile.jpg"
                  alt="Muhammed Ansif V"
                  className="w-full h-auto aspect-square md:aspect-[4/5] object-cover object-top rounded-xl border border-slate-100"
                />
              </div>
              
              {/* Floating Status Indicator Tag */}
              <div className="absolute -bottom-3 -right-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1.5 rounded-lg shadow-xs flex items-center gap-1.5 font-sans">
                <span className="w-2 h-2 rounded-full bg-emerald-500 relative flex">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Active
              </div>
            </div>

            {/* Narrative Content */}
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Engineering Scalable Systems & High-Performance APIs
              </h3>
              
              <p className="font-sans text-slate-600 leading-relaxed text-[15px]">
                I am a results-driven <strong className="text-[#0F172A] font-semibold">Senior Full Stack Engineer</strong> specializing in Node.js backend architectures. Over the past 3+ years, my passion has been centered on engineering reliable, highly-available systems that handle high traffic, automate complex enterprise workflows, and perform efficiently under load.
              </p>
              
              <p className="font-sans text-slate-600 leading-relaxed text-[15px]">
                My engineering philosophy revolves around writing clean, self-documenting code, adopting solid architectural patterns like microservices and clean architecture, and optimizing data layers through PostgreSQL indexing, MongoDB aggregations, and Redis caching.
              </p>
              
              <p className="font-sans text-slate-600 leading-relaxed text-[15px] hidden xl:block">
                Whether deploying automated pipelines to Azure, securing endpoints using OAuth/RBAC protocols, or constructing fluid web interfaces in React and Angular, I bridge the gap between heavy enterprise requirements and rapid, agile deployment models.
              </p>

              {/* Microstats banner */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 mt-2">
                <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center md:text-left">
                  <h4 className="font-display text-2xl md:text-3xl font-extrabold text-blue-600">3+</h4>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-bold mt-1">Years of Exp</p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center md:text-left">
                  <h4 className="font-display text-2xl md:text-3xl font-extrabold text-blue-600">100K+</h4>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-bold mt-1">Active Users</p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center md:text-left">
                  <h4 className="font-display text-2xl md:text-3xl font-extrabold text-blue-600">45%</h4>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-bold mt-1">Automation Gain</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Grid */}
          <div className="lg:col-span-6 relative w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-slate-200 bg-white flex flex-col text-left group hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  {/* Icon Block */}
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-blue-100 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="font-display text-[16px] font-bold text-[#0F172A] mb-2 tracking-wide group-hover:text-blue-600 transition-colors duration-200">
                    {pillar.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="font-sans text-[13px] text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
