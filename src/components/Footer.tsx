import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 overflow-hidden border-t border-white/5 bg-[#05050A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand credit */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="font-sans text-[13px] text-dark-muted">
            &copy; {new Date().getFullYear()} Muhammed Ansif V. All rights reserved.
          </p>
          <p className="font-sans text-[12px] text-dark-muted flex items-center gap-1">
            Built with
            <Heart size={11} className="text-red-500 fill-red-500 animate-pulse" />
            by{' '}
            <span className="text-gray-300 font-bold hover:text-indigo-400 transition-colors cursor-default">
              Muhammed Ansif V
            </span>
          </p>
        </div>

        {/* Social Badges */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ansif4031"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/mhammedansif/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:-translate-y-0.5 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:muhammadansif9633@gmail.com"
            className="w-9 h-9 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Email Address"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:-translate-y-1 shadow-glass-sm hover:shadow-glow-blue hover:border-indigo-500/20 active:scale-95 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
