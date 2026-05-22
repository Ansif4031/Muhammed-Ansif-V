import { motion } from 'framer-motion';
import { FileText, Mail, ArrowRight, Github, Linkedin, Briefcase, ChevronRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="glow-bg-indigo top-[8%] left-[-12%] animate-glow-slow opacity-80" />
      <div className="glow-bg-purple bottom-[12%] right-[-8%] animate-glow-slow opacity-75" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Side: Text and Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Profile Photo & OTW Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            {/* Small circular profile preview with glow */}
            <div className="relative group shrink-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <img
                src="/profile.jpg"
                alt="Muhammed Ansif V"
                className="relative w-12 h-12 rounded-full border border-white/20 object-cover object-center shadow-lg"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#030303] animate-pulse" />
            </div>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-sans font-semibold text-[13px] tracking-wide badge-otw-glow">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="flex items-center gap-1.5 font-bold">
                <Briefcase size={13} className="text-emerald-400" />
                Open to Work: Senior Backend & Full Stack Roles
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.08] mb-5 text-white"
          >
            Muhammed <br className="hidden md:inline" />
            <span className="text-gradient drop-shadow-[0_0_35px_rgba(99,102,241,0.25)]">Ansif V</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-xl md:text-2xl text-gradient-indigo font-bold tracking-wide mb-6"
          >
            Full-Stack Engineer | Backend Developer | Node.js Specialist
          </motion.h2>

          {/* Short Intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mb-10"
          >
            Results-driven Full Stack Developer with 3+ years of experience building high-throughput backend systems, sub-100ms latency APIs, and robust enterprise applications using Node.js, React, and cloud architectures.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="resume.pdf"
              download="Muhammed_Ansif_V_Resume.pdf"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-sans font-bold text-[15px] px-8 py-4.5 rounded-xl shadow-glow-blue hover:shadow-glow-purple hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <FileText size={18} />
              Download Resume
            </a>
            
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 font-sans font-bold text-[15px] px-8 py-4.5 rounded-xl backdrop-blur-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="flex items-center justify-center gap-1 text-indigo-400 hover:text-indigo-300 font-sans font-bold text-[15px] group px-4 py-2 w-full sm:w-auto transition-colors cursor-pointer"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-5"
          >
            <span className="text-[12px] uppercase tracking-widest text-slate-500 font-sans font-bold">Connect</span>
            <div className="w-10 h-[1px] bg-white/10" />
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Ansif4031"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mhammedansif/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:muhammadansif9633@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Email Me"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: IDE / Visual Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="lg:col-span-5 relative w-full flex justify-center lg:justify-end animate-float-slow"
        >
          {/* Glowing border wrapper */}
          <div className="w-full max-w-[460px] p-[1.5px] rounded-2xl bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-pink-500/40 shadow-glass-lg backdrop-blur-xl">
            
            {/* Editor Container */}
            <div className="w-full rounded-[14px] bg-[#07080e]/95 border border-white/5 overflow-hidden">
              
              {/* Window bar */}
              <div className="bg-[#0b0c13] px-4 py-3.5 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444] shadow-[0_0_10px_rgba(239,68,68,0.2)]" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.2)]" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <Terminal size={12} className="text-indigo-400" />
                  server.ts — node
                </div>
                <div className="w-8" />
              </div>

              {/* Code Content in Split Column View */}
              <div className="p-5 font-mono text-[12px] md:text-[13px] text-left leading-relaxed bg-[#05050A]/60 flex gap-4 overflow-x-auto">
                {/* Line numbers (gutter) */}
                <div className="flex flex-col text-right text-slate-600 select-none pr-3 border-r border-white/5 min-w-[20px] font-bold">
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

                {/* Actual code blocks */}
                <div className="flex-1 whitespace-pre">
                  <p className="text-slate-500 text-xs italic mb-1.5">// Muhammed Ansif V - Backend Architect</p>
                  <p>
                    <span className="text-purple-400 font-semibold">import</span> express <span className="text-purple-400 font-semibold">from</span> <span className="text-emerald-400">'express'</span>;
                  </p>
                  <p>
                    <span className="text-purple-400 font-semibold">import</span> &#123; redis, auth &#125; <span className="text-purple-400 font-semibold">from</span> <span className="text-emerald-400">'./middleware'</span>;
                  </p>
                  <p>
                    <span className="text-blue-400">const</span> app = <span className="text-yellow-400">express</span>();
                  </p>
                  <p className="text-slate-500 text-xs italic my-1.5">app.use(auth(JWT, RBAC));</p>
                  <p>
                    app.<span className="text-yellow-400">use</span>(<span className="text-sky-400">rateLimiter</span>(&#123; max: <span className="text-amber-400">100</span> &#125;));
                  </p>
                  <p className="mt-2.5">
                    app.<span className="text-yellow-400">get</span>(<span className="text-emerald-400">"/api/v1/perf"</span>, <span className="text-purple-400 font-semibold">async</span> (req, res) =&gt; &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-400">const</span> cached = <span className="text-purple-400 font-semibold">await</span> redis.<span className="text-yellow-400">get</span>(<span className="text-emerald-400">"metrics"</span>);
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400 font-semibold">if</span> (cached) <span className="text-purple-400 font-semibold">return</span> res.<span className="text-yellow-400">json</span>(JSON.<span className="text-yellow-400">parse</span>(cached));
                  </p>
                  <p className="pl-4 text-slate-500 text-[11px] italic">// DB Optimized Aggregation query</p>
                  <p className="pl-4">
                    <span className="text-blue-400">const</span> dbMetrics = <span className="text-purple-400 font-semibold">await</span> <span className="text-sky-400">queryOptimization</span>();
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400 font-semibold">await</span> redis.<span className="text-yellow-400">setex</span>(<span className="text-emerald-400">"metrics"</span>, <span className="text-amber-400">3600</span>, dbMetrics);
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400 font-semibold">return</span> res.<span className="text-yellow-400">status</span>(<span className="text-amber-400">200</span>).<span className="text-yellow-400 font-medium">json</span>(dbMetrics);
                  </p>
                  <p>&#125;);</p>
                </div>
              </div>

              {/* Status bar */}
              <div className="bg-[#0b0c13]/90 px-4 py-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <ChevronRight size={13} className="text-emerald-400 animate-pulse" />
                  Live API Status: Healthy (24ms)
                </span>
                <span className="font-mono">Node.js v24.15</span>
              </div>

            </div>
          </div>

          {/* Decorative glowing gradient spheres under the editor */}
          <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-purple-500/15 rounded-full blur-2xl -z-10" />
          <div className="absolute -top-8 -right-8 w-36 h-36 bg-indigo-500/15 rounded-full blur-2xl -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
