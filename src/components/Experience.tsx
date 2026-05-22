import { motion } from 'framer-motion';
import { Calendar, Briefcase, CheckCircle2 } from 'lucide-react';

interface BulletPoint {
  text: string;
  metric?: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  isActive: boolean;
  bulletPoints: BulletPoint[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Neutrinos',
    role: 'Senior Software Engineer',
    duration: 'May 2023 – Mar 2026',
    isActive: true,
    tags: ['Node.js', 'Azure', 'Microservices', 'Stripe API', 'System Design', 'BPM Automation', 'Load Testing'],
    bulletPoints: [
      { text: 'Delivered multiple POCs for global insurance and finance clients and converted them into production solutions.' },
      { text: 'Built and maintained scalable backend systems supporting ', metric: '100K+ active users' },
      { text: 'Implemented workflow automation (BPM) and Azure Blob + Alfresco integration, reducing file processing time by ', metric: '45% efficiency gains' },
      { text: 'Developed an AI-powered enterprise chatbot, improving support response efficiency by ', metric: '30% speedup' },
      { text: 'Designed and deployed a custom rule engine + Strapi CMS integration, accelerating business updates by ', metric: '75% faster deployment' },
      { text: 'Built an automated HNI Case Processing System to ingest emails, auto-route tasks, and serve user inboxes for active case processing, supporting ', metric: '10K+ concurrent users' },
      { text: 'Designed and integrated a secure Claim Processing System with high-speed multi-field search indexes and automated Stripe payment gateways, ensuring fraud-free transactions.' },
      { text: 'Developed a dynamic task allocation engine, boosting operations team productivity by ', metric: '35% improvement' },
      { text: 'Performed comprehensive load testing, identified API bottlenecks, and configured auto-scaling policies.' },
      { text: 'Architected robust, secure microservices using JWT authentication, granular RBAC, rate-limiting, and rich audit logging.' }
    ]
  },
  {
    company: 'Brototype',
    role: 'MERN Stack Developer Trainee',
    duration: '2022 – 2023',
    isActive: false,
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JWT Auth'],
    bulletPoints: [
      { text: 'Developed full-stack web applications using Node.js, Express, React, and MongoDB.' },
      { text: 'Built secure, optimized REST APIs and JWT-based session authentication mechanisms.' },
      { text: 'Improved frontend-backend asynchronous state integration and overall application load performance.' }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-28 overflow-hidden border-t border-white/5 bg-[#05050A]/40">
      {/* Background decoration */}
      <div className="glow-bg-purple top-[10%] right-[-10%] opacity-55 animate-glow-slow" />
      <div className="glow-bg-indigo bottom-[10%] left-[-15%] opacity-55 animate-glow-slow" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-3 text-white">
            Professional <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full shadow-glow-blue" />
          <p className="font-sans text-slate-400 max-w-xl text-sm md:text-base mt-4 leading-relaxed">
            A chronological look at my engineering experience, business impact, and backend solutions delivery.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative md:pl-12 pl-6 ml-4 md:ml-8 flex flex-col gap-16 text-left">
          
          {/* Laser-Glowing vertical connector line */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] laser-glow-line rounded-full pointer-events-none" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="relative w-full"
            >
              
              {/* Timeline Bullet Node */}
              <div
                className={`absolute top-1 -left-[25px] md:-left-[49px] w-6 h-6 rounded-full border-4 border-[#030303] bg-dark-card flex items-center justify-center z-15 ${
                  exp.isActive
                    ? 'text-indigo-400 timeline-bullet-active ring-4 ring-indigo-500/15'
                    : 'text-slate-500 border-slate-800'
                }`}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${exp.isActive ? 'bg-indigo-500 shadow-glow-blue' : 'bg-slate-700'}`} />
              </div>

              {/* Experience Card */}
              <div className={`p-6 md:p-8 rounded-2xl border border-white/5 border-l-2 ${
                exp.isActive 
                  ? 'border-l-indigo-500/80 hover:border-indigo-500/25' 
                  : 'border-l-purple-500/60 hover:border-purple-500/25'
              } bg-dark-card/70 backdrop-blur-md shadow-glass hover:shadow-glass-lg hover:-translate-y-1.5 transition-all duration-350`}>
                
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-5 mb-5">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-bold border mb-2.5 ${
                      exp.isActive
                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                        : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                    }`}>
                      <Briefcase size={12} />
                      {exp.role}
                    </span>
                    <h3 className="font-display text-2xl font-black text-white tracking-wide">
                      {exp.company}
                    </h3>
                  </div>

                  <span className="flex items-center gap-2 text-[14px] text-slate-400 font-sans font-semibold">
                    <Calendar size={15} className={exp.isActive ? 'text-indigo-400' : 'text-purple-400'} />
                    {exp.duration}
                  </span>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {exp.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-lg bg-white/[0.02] border border-white/5 text-[12px] text-slate-400 font-sans font-medium hover:bg-white/[0.05] hover:text-white transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-4">
                  {exp.bulletPoints.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-3 group text-left">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 size={15} className={`transition-colors ${
                          exp.isActive 
                            ? 'text-indigo-500/70 group-hover:text-indigo-400' 
                            : 'text-purple-500/70 group-hover:text-purple-400'
                        }`} />
                      </div>
                      <p className="font-sans text-[14px] md:text-[15px] text-slate-300 leading-relaxed">
                        {point.text}
                        {point.metric && (
                          <span className={`inline-block px-2 py-0.5 ml-1 rounded text-[12.5px] font-bold tracking-wide shadow-sm font-sans border ${
                            exp.isActive
                              ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.05)]'
                              : 'bg-purple-500/10 border-purple-500/20 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.05)]'
                          }`}>
                            {point.metric}
                          </span>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
