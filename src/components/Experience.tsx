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
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden border-t border-slate-200 bg-[#F8FAFC]">
      {/* Background decoration */}
      <div className="glow-bg-indigo top-[10%] right-[-10%] opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-3 text-[#0F172A]">
            Professional <span className="text-blue-600">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full" />
          <p className="font-sans text-slate-600 max-w-xl text-sm md:text-base mt-4 leading-relaxed">
            A chronological look at my engineering experience, business impact, and backend solutions delivery.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative md:pl-10 pl-6 ml-2 md:ml-6 flex flex-col gap-12 text-left">
          
          {/* Vertical connector line */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-slate-200 rounded-full pointer-events-none" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
              className="relative w-full"
            >
              
              {/* Timeline Bullet Node */}
              <div
                className={`absolute top-2 -left-[25px] md:-left-[41px] w-6 h-6 rounded-full border-4 border-[#F8FAFC] flex items-center justify-center z-10 ${
                  exp.isActive
                    ? 'bg-blue-600 ring-4 ring-blue-100'
                    : 'bg-slate-400'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-300">
                
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-5 mb-5">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
                      <Briefcase size={12} />
                      {exp.role}
                    </span>
                    <h3 className="font-display text-2xl font-extrabold text-[#0F172A] tracking-wide">
                      {exp.company}
                    </h3>
                  </div>

                  <span className="flex items-center gap-2 text-[14px] text-slate-500 font-sans font-semibold bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-lg w-fit">
                    <Calendar size={15} className="text-blue-600" />
                    {exp.duration}
                  </span>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[12px] text-slate-700 font-sans font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-3.5">
                  {exp.bulletPoints.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-3 text-left">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 size={16} className="text-blue-600" />
                      </div>
                      <p className="font-sans text-[14px] md:text-[15px] text-slate-700 leading-relaxed">
                        {point.text}
                        {point.metric && (
                          <span className="inline-block px-2.5 py-0.5 ml-1.5 rounded text-[12px] font-bold tracking-wide font-sans bg-blue-50 border border-blue-200 text-blue-700 shadow-2xs">
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
