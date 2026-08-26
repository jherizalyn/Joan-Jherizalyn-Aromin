import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Mail, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenATS: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenATS,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 no-print ${
        isScrolled
          ? 'bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-2xl bg-slate-900 dark:bg-blue-600 text-white font-black flex items-center justify-center text-xs tracking-tighter group-hover:scale-105 transition-transform shadow-xs">
            {PERSONAL_INFO.monogram}
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-tight tracking-tight flex items-center gap-1.5">
              <span>{PERSONAL_INFO.preferredName}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" title="Available for Remote Work"></span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono hidden sm:block">
              BSIT Graduate • IT Support & Python
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-xs backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* ATS Resume Quick Button */}
          <button
            id="nav-btn-ats"
            onClick={onOpenATS}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs hover:shadow"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">ATS Resume</span>
            <span className="sm:hidden">Resume</span>
          </button>

          {/* Quick Contact Button */}
          <button
            id="nav-btn-contact"
            onClick={onOpenContact}
            className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold hidden md:flex items-center gap-1.5 transition shadow-xs hover:shadow"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            id="nav-btn-theme"
            onClick={onToggleDarkMode}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800 transition border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="nav-btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800 transition"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-2 animate-fadeIn shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenATS();
              }}
              className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              View ATS-Optimized Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Send Recruiter Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
