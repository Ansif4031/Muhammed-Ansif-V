import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events for shadow effect and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-sm'
          : 'bg-white/60 backdrop-blur-sm py-5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-display font-bold text-xl tracking-tight text-[#0F172A] group"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors duration-300">
            <Terminal size={18} className="text-white" />
          </div>
          <span className="font-extrabold group-hover:text-blue-600 transition-colors duration-300">
            Ansif<span className="text-blue-600">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-sans font-medium text-[15px]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={`relative py-1.5 transition-colors duration-200 hover:text-blue-600 font-semibold ${
                      isActive ? 'text-blue-600' : 'text-slate-600'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-600 shadow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-[14px] px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            Hire Me
            <ArrowRight size={14} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-b border-slate-200 bg-white shadow-lg overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
              <ul className="flex flex-col gap-3 font-sans font-semibold text-base">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                      className={`block py-2.5 px-3 rounded-md transition-colors duration-200 hover:bg-slate-50 hover:text-blue-600 ${
                        activeSection === item.href ? 'text-blue-600 bg-blue-50/50 font-bold' : 'text-slate-700'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold py-3 rounded-lg shadow-sm text-sm"
              >
                Hire Me
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
