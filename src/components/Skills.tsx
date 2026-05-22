import { motion } from 'framer-motion';
import { Server, Layout, Database, Cloud, Settings } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  borderColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Engineering',
    icon: <Server className="text-indigo-400" size={20} />,
    iconColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    borderColor: 'hover:border-indigo-500/30',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Authentication', 'JWT', 'RBAC', 'Rate Limiting'],
  },
  {
    title: 'Frontend Development',
    icon: <Layout className="text-pink-400" size={20} />,
    iconColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    borderColor: 'hover:border-pink-500/30',
    skills: ['React.js', 'Angular', 'Redux Toolkit', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / Tailwind'],
  },
  {
    title: 'Databases & Performance',
    icon: <Database className="text-emerald-400" size={20} />,
    iconColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    borderColor: 'hover:border-emerald-500/30',
    skills: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Query Optimization', 'Transactions', 'Indexing', 'Redis Caching'],
  },
  {
    title: 'Architecture & DevOps',
    icon: <Cloud className="text-blue-400" size={20} />,
    iconColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    borderColor: 'hover:border-blue-500/30',
    skills: ['Microservices', 'System Design', 'Docker', 'Kubernetes', 'Azure Cloud', 'AWS Cloud', 'Load Balancing', 'API Optimization'],
  },
  {
    title: 'Developer Tools',
    icon: <Settings className="text-purple-400" size={20} />,
    iconColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    borderColor: 'hover:border-purple-500/30',
    skills: ['Git', 'GitHub', 'NPM / PNPM', 'Postman', 'CI/CD Pipelines', 'Linux Shell'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
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
    <section id="skills" className="relative py-16 md:py-28 overflow-hidden border-t border-white/5 bg-[#030303]">
      {/* Background Radial Glow */}
      <div className="glow-bg-blue bottom-[-10%] left-[-5%] opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title & Legend Row */}
        <div className="flex flex-col items-center text-center mb-16 relative">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-3 text-white">
            Core <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full shadow-glow-blue" />
          <p className="font-sans text-slate-400 max-w-xl text-sm md:text-base mt-4 leading-relaxed">
            A comprehensive overview of my technologies, development architectures, database systems, and workflow utilities.
          </p>

          {/* Competency Legend Panel */}
          <div className="flex items-center justify-center gap-6 mt-8 px-4.5 py-2.5 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse" />
              Core Expertise
            </div>
            <div className="w-[1px] h-3 bg-white/10" />
            <div className="flex items-center gap-2 text-xs font-sans font-bold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.7)]" />
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
              className={`p-7 rounded-2xl border border-white/5 bg-dark-card/65 backdrop-blur-md shadow-glass flex flex-col text-left group transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 ${category.borderColor} ${
                index === 3 || index === 4 ? 'lg:col-span-1.5' : ''
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${category.iconColor} group-hover:scale-110 group-hover:shadow-glass-sm transition-all duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-display text-[16px] font-bold text-white tracking-wide">
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
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-[12.5px] text-slate-300 font-sans font-medium hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-default select-none ${
                        level === 'core'
                          ? 'hover:border-emerald-500/25 hover:shadow-[0_0_12px_rgba(16,185,129,0.12)]'
                          : 'hover:border-indigo-500/25 hover:shadow-[0_0_12px_rgba(99,102,241,0.12)]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        level === 'core'
                          ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.75)] animate-pulse'
                          : 'bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.7)]'
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
