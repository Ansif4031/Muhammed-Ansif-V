import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 overflow-hidden border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-5 relative z-10">
        
        {/* Brand credit */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="font-sans text-[13px] text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Muhammed Ansif V. All rights reserved.
          </p>
          <p className="font-sans text-[12px] text-slate-500 flex items-center gap-1 font-medium">
            Built with
            <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
            by{' '}
            <span className="text-[#0F172A] font-bold hover:text-blue-600 transition-colors cursor-default">
              Muhammed Ansif V
            </span>
          </p>
        </div>

        {/* Social Badges */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Ansif4031"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/mhammedansif/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:muhammadansif9633@gmail.com"
            className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
            aria-label="Email Address"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-600 hover:text-blue-600 active:scale-95 transition-all duration-200 cursor-pointer group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
