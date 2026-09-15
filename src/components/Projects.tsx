import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Terminal, Cpu, Server, Settings, Mail, CreditCard } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  category: 'Backend' | 'Full-Stack' | 'Microservices';
  tech: string[];
  features: string[];
  github: string;
  live: string;
  icon: React.ReactNode;
  badge: string;
}

const projects: Project[] = [
  {
    title: 'AI-Powered Chatbot Platform',
    description: 'An enterprise-grade chatbot system delivering conversational AI with sub-second latencies and complete administration dashboards for customer support teams.',
    category: 'Full-Stack',
    tech: ['Node.js', 'Express.js', 'React.js', 'OpenAI API', 'WebSockets', 'MongoDB'],
    features: [
      'Real-time streaming OpenAI chat completions via WebSockets',
      'Dynamic human-agent handoff protocol with operational dashboards',
      'Context-aware conversation history archiving and session caching',
      '30% improvement in support response efficiency'
    ],
    github: 'https://github.com/Ansif4031',
    live: 'https://github.com/Ansif4031',
    icon: <Cpu size={20} className="text-blue-600" />,
    badge: 'CONVERSATIONAL'
  },
  {
    title: 'HNI Case Processing System',
    description: 'An automated case generation and processing engine that converts incoming HNI customer emails into tracked operations and routes tasks to team members.',
    category: 'Backend',
    tech: ['Node.js', 'Express.js', 'IMAP/SMTP', 'PostgreSQL', 'JWT', 'RBAC'],
    features: [
      'Ingests incoming HNI customer support emails and automatically parses content to compile structured case files',
      'Intelligent rules-engine matching case metadata and auto-routing assignments to optimal active users',
      'Dedicated inbox-based processing dashboard for users to review, pull, and execute allocated operations',
      'Real-time SLA tracking timelines with automated escalation triggers'
    ],
    github: 'https://github.com/Ansif4031',
    live: 'https://github.com/Ansif4031',
    icon: <Mail size={20} className="text-indigo-600" />,
    badge: 'EMAIL TO CASE'
  },
  {
    title: 'Task Allocation Engine',
    description: 'A message-queue driven operational load balancer that automatically delegates task workflows to engineers based on capacity and skills.',
    category: 'Backend',
    tech: ['Node.js', 'TypeScript', 'Redis', 'BullMQ', 'Docker', 'PostgreSQL'],
    features: [
      'Distributed task queues powered by BullMQ and Redis storage',
      'Highly-efficient skill-matching algorithm optimizing assignees',
      'Real-time operational dashboard visualizing system throughput',
      'Boosted operations team productivity metrics by 35%'
    ],
    github: 'https://github.com/Ansif4031',
    live: 'https://github.com/Ansif4031',
    icon: <Server size={20} className="text-blue-600" />,
    badge: 'DISTRIBUTED'
  },
  {
    title: 'Workflow Automation Platform',
    description: 'An administrative process compiler executing automated business procedures and synchronizing operational logic with content CMS pipelines.',
    category: 'Backend',
    tech: ['Node.js', 'BPMN Engine', 'Strapi CMS', 'MongoDB', 'Azure Blob'],
    features: [
      'Visual flowchart-driven BPMN automated workflow designer',
      'Custom rule engine integrating directly with Strapi headless CMS',
      'Reduced overall business operational updating times by 75%',
      'Integrated Azure Blob storage + Alfresco document management'
    ],
    github: 'https://github.com/Ansif4031',
    live: 'https://github.com/Ansif4031',
    icon: <Settings size={20} className="text-emerald-600" />,
    badge: 'BPMN ENGINE'
  },
  {
    title: 'Claim Processing System',
    description: 'A secure claims submission and verification platform allowing users to raise new claims, execute index-based lookups, and perform automated Stripe gateway payouts.',
    category: 'Full-Stack',
    tech: ['Node.js', 'Express.js', 'React.js', 'PostgreSQL', 'Search Index', 'Stripe API'],
    features: [
      'Raise new digital claims with strict detail validation, multi-field verification, and duplicate check guards',
      'Highly-optimized indexing query engines matching entered credentials against existing databases in milliseconds',
      'Seamless check and balance flow preventing duplicate claim raising and invalid data entry',
      'Fully integrated Stripe Payment Gateway executing secure transaction processing upon claims clearance'
    ],
    github: 'https://github.com/Ansif4031',
    live: 'https://github.com/Ansif4031',
    icon: <CreditCard size={20} className="text-amber-600" />,
    badge: 'PAYMENT INTEGRATED'
  },
  {
    title: 'Scalable Microservices API',
    description: 'A production-grade, highly available enterprise architecture consisting of microservices containerized under cluster topologies.',
    category: 'Microservices',
    tech: ['Node.js', 'Docker', 'Kubernetes', 'AWS', 'JWT Auth', 'API Gateway'],
    features: [
      'Decoupled scalable modular services wrapped in Docker packages',
      'Configured Nginx Reverse Proxy / Kubernetes API Gateway entry paths',
      'Automated rolling deployments, container auto-scaling, and recovery',
      'Integrated health check diagnostics and centralized logging'
    ],
    github: 'https://github.com/Ansif4031',
    live: 'https://github.com/Ansif4031',
    icon: <Terminal size={20} className="text-purple-600" />,
    badge: 'KUBERNETES CLUSTER'
  }
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

const renderProjectSchematic = (title: string) => {
  switch (title) {
    case 'AI-Powered Chatbot Platform':
      return (
        <div className="w-full h-28 rounded-xl bg-slate-50 border border-slate-200 p-3 flex flex-col gap-2 font-mono text-[10px] justify-center select-none mb-5 overflow-hidden">
          <div className="flex items-center gap-1.5 self-end">
            <span className="bg-blue-600 text-white px-2.5 py-1 rounded-lg rounded-tr-none text-[9px] shadow-2xs font-semibold">deploy client POC</span>
            <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[7px] text-slate-700 font-bold border border-slate-300">U</div>
          </div>
          <div className="flex items-start gap-1.5 self-start">
            <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[7px] border border-blue-200 font-bold">AI</div>
            <div className="bg-white border border-slate-200 text-slate-800 px-2.5 py-1 rounded-lg rounded-tl-none flex flex-col gap-0.5 max-w-[80%] shadow-2xs">
              <span className="text-slate-900 text-[9.5px] font-semibold">API Container online. 🟢</span>
              <span className="flex items-center gap-1 text-[8px] text-blue-600 font-semibold">
                <span className="w-1 h-1 rounded-full bg-blue-600 animate-ping" />
                streaming completions...
              </span>
            </div>
          </div>
        </div>
      );
    case 'HNI Case Processing System':
      return (
        <div className="w-full h-28 rounded-xl bg-slate-50 border border-slate-200 p-3 flex flex-col justify-between font-mono text-[8px] select-none mb-5 overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 text-[7.5px] text-slate-500 font-semibold">
            <span>Incoming Email Stream</span>
            <span className="text-blue-600 animate-pulse">● processing</span>
          </div>
          <div className="flex items-center justify-between gap-2 py-1">
            <div className="bg-white border border-slate-200 px-2 py-1 rounded flex flex-col flex-1 truncate shadow-2xs">
              <span className="text-slate-800 font-bold truncate">Subject: Case Request</span>
              <span className="text-[7px] text-slate-500">from: hni@client.com</span>
            </div>
            <span className="text-blue-600 font-bold">→</span>
            <div className="bg-blue-50 border border-blue-200 px-2 py-1 rounded flex flex-col flex-1 shadow-2xs">
              <span className="text-blue-700 font-bold">Case #HNI-403</span>
              <span className="text-[7px] text-blue-600">Assigned: Active Inbox</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 px-2 py-0.5 rounded text-center text-slate-600 text-[7px] tracking-wide font-medium">
            User Queue: <span className="text-emerald-600 font-bold">1 Case Picked</span> in workspace
          </div>
        </div>
      );
    case 'Task Allocation Engine':
      return (
        <div className="w-full h-28 rounded-xl bg-slate-50 border border-slate-200 p-3 flex flex-col font-mono text-[9px] justify-between select-none mb-5 overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1">
            <span className="text-blue-700 font-bold">BullMQ Dispatcher</span>
            <span className="text-[8px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-200 font-semibold">Speed: 24/s</span>
          </div>
          <div className="flex items-center justify-around py-1.5">
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-6 h-6 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-[8px] text-slate-600 font-bold">W1</div>
              <span className="text-[7px] text-slate-500 font-sans">Idle</span>
            </div>
            <div className="w-6 h-[1.5px] bg-gradient-to-r from-blue-300 to-emerald-300" />
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-[8px] text-emerald-700 font-bold relative shadow-2xs">
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                W2
              </div>
              <span className="text-[7px] text-emerald-700 font-sans font-bold">Busy</span>
            </div>
            <div className="w-6 h-[1.5px] bg-gradient-to-r from-blue-300 to-purple-300" />
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-6 h-6 rounded-full bg-purple-50 border border-purple-300 flex items-center justify-center text-[8px] text-purple-700 font-bold">W3</div>
              <span className="text-[7px] text-purple-700 font-sans">Busy</span>
            </div>
          </div>
        </div>
      );
    case 'Workflow Automation Platform':
      return (
        <div className="w-full h-28 rounded-xl bg-slate-50 border border-slate-200 p-3 flex items-center justify-between font-mono text-[8px] select-none mb-5 overflow-hidden">
          <div className="flex flex-col items-center gap-1 p-1.5 rounded bg-white border border-slate-200 w-[58px] text-center shadow-2xs">
            <span className="text-slate-500 font-sans">Trigger</span>
            <span className="font-bold text-slate-800 text-[7.5px] truncate">Webhook</span>
          </div>
          <span className="text-blue-600 font-bold">→</span>
          <div className="flex flex-col items-center gap-1 p-1.5 rounded bg-blue-50 border border-blue-200 w-[68px] text-center shadow-2xs">
            <span className="text-blue-700 font-sans font-semibold">Rules</span>
            <span className="font-bold text-blue-800 text-[7.5px] truncate">BPMN Core</span>
          </div>
          <span className="text-purple-600 font-bold">→</span>
          <div className="flex flex-col items-center gap-1 p-1.5 rounded bg-purple-50 border border-purple-200 w-[58px] text-center shadow-2xs">
            <span className="text-purple-700 font-sans">Storage</span>
            <span className="font-bold text-slate-800 text-[7.5px] truncate">Azure Blob</span>
          </div>
        </div>
      );
    case 'Claim Processing System':
      return (
        <div className="w-full h-28 rounded-xl bg-slate-50 border border-slate-200 p-3 flex flex-col justify-between font-mono text-[8px] select-none mb-5 overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1 text-[7.5px] text-slate-500 font-semibold">
            <span>Raise Claim Search Index</span>
            <span className="text-blue-600 font-bold">Search Active</span>
          </div>
          <div className="flex flex-col gap-1.5 py-1">
            <div className="flex justify-between items-center text-[7.5px]">
              <span className="text-slate-600">Query: "John Doe - ID 923"</span>
              <span className="text-emerald-600 font-bold">Match Found (100%)</span>
            </div>
            <div className="bg-white border border-slate-200 px-2 py-1 rounded flex justify-between items-center shadow-2xs">
              <span className="text-slate-700 font-medium">Stripe Payment Gateway</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                $1,240.00 PAID
              </span>
            </div>
          </div>
          <div className="text-[7px] text-slate-500 text-center font-medium">
            Gateway Session ID: <span className="text-blue-600 font-bold">cs_live_38d8f921</span>
          </div>
        </div>
      );
    case 'Scalable Microservices API':
      return (
        <div className="w-full h-28 rounded-xl bg-slate-50 border border-slate-200 p-3 flex flex-col font-mono text-[9px] justify-between select-none mb-5 overflow-hidden">
          <div className="text-center bg-white border border-slate-200 py-1.5 rounded-lg text-slate-800 font-bold shadow-2xs">
            API Gateway (Nginx Proxy)
          </div>
          <div className="flex items-center justify-center gap-1 text-blue-600 text-center my-0.5">
            <span className="text-[7.5px] font-sans font-bold">Routing / LB</span>
            <span className="animate-pulse">⇅</span>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-blue-50 border border-blue-200 py-1 rounded text-center text-blue-700 shadow-2xs text-[8px] font-bold">
              Auth Svc (x2)
            </div>
            <div className="flex-1 bg-purple-50 border border-purple-200 py-1 rounded text-center text-purple-700 shadow-2xs text-[8px] font-bold">
              Core API (x3)
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Backend' | 'Full-Stack' | 'Microservices'>('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden border-t border-slate-200 bg-white">
      {/* Background glow overlay */}
      <div className="glow-bg-blue top-[10%] left-[-10%] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-3 text-[#0F172A]">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full" />
          <p className="font-sans text-slate-600 max-w-xl text-sm md:text-base mt-4 leading-relaxed">
            A showcase of backend-focused platforms, performance optimization scripts, and enterprise web solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2.5 mb-14 overflow-x-auto pb-2 scrollbar-none">
          {(['All', 'Backend', 'Full-Stack', 'Microservices'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4.5 py-2 rounded-lg font-sans font-bold text-[14px] transition-all duration-200 cursor-pointer ${
                filter === tab
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group flex flex-col p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Section */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                  {project.icon}
                </div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-blue-700 px-2.5 py-1 bg-blue-50 rounded-md border border-blue-200">
                  {project.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="font-sans text-[13px] text-slate-600 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* LIVE Micro-Schematic Representation */}
              {renderProjectSchematic(project.title)}

              {/* Core Features */}
              <div className="mb-5 flex-grow">
                <span className="block text-[11px] font-sans font-bold text-blue-600 uppercase tracking-widest mb-2">Key Highlights</span>
                <ul className="flex flex-col gap-2">
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                      <span className="font-sans text-[12.5px] text-slate-700 leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-blue-600 font-sans font-bold transition-colors cursor-pointer"
                >
                  <Github size={14} />
                  Codebase
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
