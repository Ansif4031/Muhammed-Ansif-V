import { motion } from 'framer-motion';
import { Server, Layout, Database, Cloud, Settings } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Engineering',
    icon: <Server className="text-blue-600" size={20} />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Authentication', 'JWT', 'RBAC', 'Rate Limiting'],
  },
  {
    title: 'Frontend Development',
    icon: <Layout className="text-indigo-600" size={20} />,
    skills: ['React.js', 'Angular', 'Redux Toolkit', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / Tailwind'],
  },
  {
    title: 'Databases & Performance',
    icon: <Database className="text-emerald-600" size={20} />,
    skills: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Query Optimization', 'Transactions', 'Indexing', 'Redis Caching'],
  },
  {
    title: 'Architecture & DevOps',
    icon: <Cloud className="text-blue-600" size={20} />,
    skills: ['Microservices', 'System Design', 'Docker', 'Kubernetes', 'Azure Cloud', 'AWS Cloud', 'Load Balancing', 'API Optimization'],
  },
  {
    title: 'Developer Tools',
    icon: <Settings className="text-purple-600" size={20} />,
    skills: ['Git', 'GitHub', 'NPM / PNPM', 'Postman', 'CI/CD Pipelines', 'Linux Shell'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

const getSkillLevel = (skill: string): 'core' | 'proficient' => {
  const coreSkills = [
    'Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Authentication', 'JWT', 'RBAC', 'Rate Limiting',
    'MongoDB', 'PostgreSQL', 'Mongoose', 'Query Optimization', 'Indexing', 'Redis Caching',
    'Microservices', 'System Design', 'Docker', 'API Optimization'
  ];
  return coreSkills.includes(skill) ? 'core' : 'proficient';
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden border-t border-slate-200 bg-white">
      {/* Background Soft Glow */}
      <div className="glow-bg-blue bottom-[-10%] left-[-5%] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title & Legend Row */}
        <div className="flex flex-col items-center text-center mb-16 relative">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-3 text-[#0F172A]">
            Core <span className="text-blue-600">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full" />
          <p className="font-sans text-slate-600 max-w-xl text-sm md:text-base mt-4 leading-relaxed">
            A comprehensive overview of my technologies, development architectures, database systems, and workflow utilities.
          </p>

          {/* Competency Legend Panel */}
          <div className="flex items-center justify-center gap-6 mt-6 px-5 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs" />
              Core Expertise
            </div>
            <div className="w-[1px] h-3.5 bg-slate-300" />
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-xs" />
              Proficient
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 md:p-7 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col text-left group"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-display text-[17px] font-bold text-[#0F172A] tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill, skillIdx) => {
                  const level = getSkillLevel(skill);
                  return (
                    <span
                      key={skillIdx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[13px] text-slate-700 font-sans font-medium hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200 cursor-default select-none shadow-2xs"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        level === 'core'
                          ? 'bg-emerald-500'
                          : 'bg-blue-500'
                      }`} />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
