import { motion } from 'framer-motion';
import { Cpu, Server, Zap, ShieldCheck } from 'lucide-react';

interface Pillar {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  borderColor: string;
}

const pillars: Pillar[] = [
  {
    icon: <Cpu className="text-indigo-400" size={22} />,
    title: 'High-Performance APIs',
    description: 'Designing sub-100ms latency REST & WebSocket interfaces with robust caching, rate-limiting, and clean payload schemas.',
    color: 'from-indigo-500/8 via-indigo-500/2 to-transparent',
    borderColor: 'group-hover:border-indigo-500/30',
  },
  {
    icon: <Server className="text-purple-400" size={22} />,
    title: 'Microservices & Scale',
    description: 'Decoupling monoliths into containerized microservices built with Node.js/Express, Docker, and high-concurrency event buffers.',
    color: 'from-purple-500/8 via-purple-500/2 to-transparent',
    borderColor: 'group-hover:border-purple-500/30',
  },
  {
    icon: <Zap className="text-blue-400" size={22} />,
    title: 'Workflow Automation',
    description: 'Constructing custom event orchestrators, BPM systems, and CMS automation that drive operational velocity.',
    color: 'from-blue-500/8 via-blue-500/2 to-transparent',
    borderColor: 'group-hover:border-blue-500/30',
  },
  {
    icon: <ShieldCheck className="text-emerald-400" size={22} />,
    title: 'Enterprise Security',
    description: 'Securing cloud ecosystems using strict JWT/RBAC models, CSRF mitigations, CORS setups, and detailed audit trails.',
    color: 'from-emerald-500/8 via-emerald-500/2 to-transparent',
    borderColor: 'group-hover:border-emerald-500/30',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-28 overflow-hidden border-t border-white/5 bg-[#05050a]/40">
      {/* Decorative Blur */}
      <div className="absolute top-[25%] right-[-10%] w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-3 text-white">
            About <span className="text-gradient">Ansif</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full shadow-glow-blue" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Portrait & Biography Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col md:flex-row gap-8 items-start text-left"
          >
            {/* High-Fidelity Glassmorphic Portrait Frame */}
            <div className="relative w-full md:w-48 xl:w-56 shrink-0 group mx-auto md:mx-0">
              {/* Outer neon glow sphere underneath */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700 pointer-events-none" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-glass-lg bg-[#07080e]/90 p-2 backdrop-blur-xl">
                <img
                  src="/profile.jpg"
                  alt="Muhammed Ansif V"
                  className="w-full h-auto aspect-square md:aspect-[4/5] object-cover object-top rounded-xl border border-white/5 transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              
              {/* Floating Status Indicator Tag */}
              <div className="absolute -bottom-3 -right-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1.5 rounded-lg backdrop-blur-md shadow-glass-sm flex items-center gap-1.5 font-sans">
                <span className="w-2 h-2 rounded-full bg-emerald-400 relative flex">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Active
              </div>
            </div>

            {/* Narrative Content */}
            <div className="flex-1 flex flex-col gap-5">
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Engineering Scalable Systems & High-Performance APIs
              </h3>
              
              <p className="font-sans text-slate-400 leading-relaxed text-[15px]">
                I am a results-driven <strong>Senior Full Stack Engineer</strong> specializing in Node.js backend architectures. Over the past 3+ years, my passion has been centered on engineering reliable, highly-available systems that handle high traffic, automate complex enterprise workflows, and perform efficiently under load.
              </p>
              
              <p className="font-sans text-slate-400 leading-relaxed text-[15px]">
                My engineering philosophy revolves around writing clean, self-documenting code, adopting solid architectural patterns like microservices and clean architecture, and optimizing data layers through PostgreSQL indexing, MongoDB aggregations, and Redis caching.
              </p>
              
              <p className="font-sans text-slate-400 leading-relaxed text-[15px] hidden xl:block">
                Whether deploying automated pipelines to Azure, securing endpoints using OAuth/RBAC protocols, or constructing fluid web interfaces in React and Angular, I bridge the gap between heavy enterprise requirements and rapid, agile deployment models.
              </p>

              {/* Microstats banner */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 mt-2">
                <div>
                  <h4 className="font-display text-3xl font-extrabold text-gradient-indigo">3+</h4>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-bold mt-1.5">Years of Exp</p>
                </div>
                <div>
                  <h4 className="font-display text-3xl font-extrabold text-gradient-indigo">100K+</h4>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-bold mt-1.5">Active Users</p>
                </div>
                <div>
                  <h4 className="font-display text-3xl font-extrabold text-gradient-indigo">45%</h4>
                  <p className="font-sans text-[11px] uppercase tracking-wider text-slate-500 font-bold mt-1.5">Automation Gain</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Connected Architectural Grid */}
          <div className="lg:col-span-6 relative p-4 w-full">
            
            {/* Background Grid Connecting Lines (visible on desktop) */}
            <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -translate-y-1/2 pointer-events-none hidden sm:block" />
            <div className="absolute top-0 bottom-0 left-1/2 w-[1.5px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent -translate-x-1/2 pointer-events-none hidden sm:block" />
            
            {/* Glowing Center Router Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#090a10] border border-white/10 flex items-center justify-center pointer-events-none hidden sm:flex shadow-glass-sm z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 relative flex">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
              </span>
            </div>

            {/* Architecture Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full relative z-10">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border border-white/5 bg-gradient-to-br ${pillar.color} backdrop-blur-md flex flex-col text-left group transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 ${pillar.borderColor} shadow-glass-sm`}
                >
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center mb-4.5 border border-white/10 group-hover:scale-110 group-hover:bg-indigo-600/10 group-hover:border-indigo-500/30 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="font-display text-[16px] font-bold text-white mb-2.5 tracking-wide group-hover:text-indigo-300 transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="font-sans text-[13px] text-slate-400 leading-relaxed">
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
