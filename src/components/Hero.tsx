import { motion } from 'framer-motion';
import { FileText, Mail, ArrowRight, Github, Linkedin, Briefcase, ChevronRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white">
      {/* Background soft blue radial treatment */}
      <div className="glow-bg-blue top-[-10%] left-[-10%] opacity-70" />
      <div className="glow-bg-indigo bottom-[-10%] right-[-10%] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Text and Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Profile Photo & OTW Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            {/* Small circular profile preview */}
            <div className="relative group shrink-0">
              <img
                src="/profile.jpg"
                alt="Muhammed Ansif V"
                className="w-12 h-12 rounded-full border-2 border-slate-200 object-cover object-center shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-sans font-semibold text-[13px] tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="flex items-center gap-1.5 font-bold">
                <Briefcase size={14} className="text-emerald-600" />
                Open to Work: Senior Backend & Full Stack Roles
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.1] mb-4 text-[#0F172A]"
          >
            Muhammed <br className="hidden md:inline" />
            <span className="text-blue-600">Ansif V</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-display text-lg sm:text-xl md:text-2xl text-blue-600 font-bold tracking-wide mb-5"
          >
            Full-Stack Engineer | Backend Developer | Node.js Specialist
          </motion.h2>

          {/* Short Intro */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="font-sans text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8"
          >
            Results-driven Full Stack Developer with 3+ years of experience building high-throughput backend systems, sub-100ms latency APIs, and robust enterprise applications using Node.js, React, and cloud architectures.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8"
          >
            <a
              href="resume.pdf"
              download="Muhammed_Ansif_V_Resume.pdf"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-[15px] px-7 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 w-full sm:w-auto cursor-pointer"
            >
              <FileText size={18} />
              Download Resume
            </a>
            
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-sans font-bold text-[15px] px-7 py-3.5 rounded-lg shadow-xs transition-all duration-200 w-full sm:w-auto cursor-pointer"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="flex items-center justify-center gap-1.5 text-blue-600 hover:text-blue-700 font-sans font-bold text-[15px] group px-3 py-2 w-full sm:w-auto transition-colors cursor-pointer"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="text-[12px] uppercase tracking-widest text-slate-400 font-sans font-bold">Connect</span>
            <div className="w-8 h-[1px] bg-slate-200" />
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Ansif4031"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mhammedansif/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:muhammadansif9633@gmail.com"
                className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                aria-label="Email Me"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Redesigned Light IDE Code Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
        >
          {/* Card Frame Container */}
          <div className="w-full max-w-[460px] rounded-xl border border-slate-200 bg-white shadow-md overflow-hidden">
            
            {/* Dark Navy Window Header */}
            <div className="bg-[#0F172A] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300 font-medium">
                <Terminal size={12} className="text-blue-400" />
                server.ts — node
              </div>
              <div className="w-8" />
            </div>

            {/* Code Content in Split Column View */}
            <div className="p-4 font-mono text-[12px] md:text-[12.5px] text-left leading-relaxed bg-[#F8FAFC] border-b border-slate-200 flex gap-3 overflow-x-auto">
              {/* Line numbers */}
              <div className="flex flex-col text-right text-slate-400 select-none pr-2.5 border-r border-slate-200 min-w-[20px] font-medium">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
              </div>

              {/* Code text with crisp light-theme syntax colors */}
              <div className="flex-1 whitespace-pre text-slate-800">
                <p className="text-slate-400 text-xs italic mb-1.5">// Muhammed Ansif V - Backend Architect</p>
                <p>
                  <span className="text-purple-600 font-semibold">import</span> express <span className="text-purple-600 font-semibold">from</span> <span className="text-emerald-600">'express'</span>;
                </p>
                <p>
                  <span className="text-purple-600 font-semibold">import</span> &#123; redis, auth &#125; <span className="text-purple-600 font-semibold">from</span> <span className="text-emerald-600">'./middleware'</span>;
                </p>
                <p>
                  <span className="text-blue-600 font-medium">const</span> app = <span className="text-amber-700">express</span>();
                </p>
                <p className="text-slate-400 text-xs italic my-1">app.use(auth(JWT, RBAC));</p>
                <p>
                  app.<span className="text-blue-600">use</span>(<span className="text-purple-600">rateLimiter</span>(&#123; max: <span className="text-amber-600">100</span> &#125;));
                </p>
                <p className="mt-2">
                  app.<span className="text-blue-600">get</span>(<span className="text-emerald-600">"/api/v1/perf"</span>, <span className="text-purple-600 font-semibold">async</span> (req, res) =&gt; &#123;
                </p>
                <p className="pl-4">
                  <span className="text-blue-600 font-medium">const</span> cached = <span className="text-purple-600 font-semibold">await</span> redis.<span className="text-blue-600">get</span>(<span className="text-emerald-600">"metrics"</span>);
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 font-semibold">if</span> (cached) <span className="text-purple-600 font-semibold">return</span> res.<span className="text-blue-600">json</span>(JSON.<span className="text-blue-600">parse</span>(cached));
                </p>
                <p className="pl-4 text-slate-400 text-[11px] italic">// DB Optimized Aggregation query</p>
                <p className="pl-4">
                  <span className="text-blue-600 font-medium">const</span> dbMetrics = <span className="text-purple-600 font-semibold">await</span> <span className="text-blue-700 font-semibold">queryOptimization</span>();
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 font-semibold">await</span> redis.<span className="text-blue-600">setex</span>(<span className="text-emerald-600">"metrics"</span>, <span className="text-amber-600">3600</span>, dbMetrics);
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 font-semibold">return</span> res.<span className="text-blue-600">status</span>(<span className="text-amber-600">200</span>).<span className="text-blue-600 font-medium">json</span>(dbMetrics);
                </p>
                <p>&#125;);</p>
              </div>
            </div>

            {/* Status bar */}
            <div className="bg-slate-100 px-4 py-2.5 flex items-center justify-between text-[11px] text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <ChevronRight size={13} className="text-emerald-600 animate-pulse" />
                Live API Status: Healthy (24ms)
              </span>
              <span className="font-mono text-slate-500 font-medium">Node.js v24.15</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
