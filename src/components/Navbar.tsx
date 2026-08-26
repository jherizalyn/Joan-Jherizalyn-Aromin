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
          ? 'bg-stone-50/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 shadow-xs py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-stone-900 dark:bg-teal-500 text-white dark:text-stone-950 font-bold flex items-center justify-center text-sm tracking-tighter group-hover:scale-105 transition-transform shadow-xs">
            {PERSONAL_INFO.monogram}
          </div>
          <div>
            <div className="font-bold text-stone-900 dark:text-white text-sm sm:text-base leading-tight tracking-tight flex items-center gap-1.5">
              <span>{PERSONAL_INFO.preferredName}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" title="Available for Remote Work"></span>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-400 font-mono hidden sm:block">
              BSIT Graduate • IT & Tech VA
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-stone-100/70 dark:bg-stone-800/60 p-1.5 rounded-full border border-stone-200/70 dark:border-stone-700/60 backdrop-blur-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-stone-700/70 transition"
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
            className="px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-xs hover:shadow"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">ATS Resume</span>
            <span className="sm:hidden">Resume</span>
          </button>

          {/* Quick Contact Button */}
          <button
            id="nav-btn-contact"
            onClick={onOpenContact}
            className="px-3.5 py-1.5 rounded-lg bg-stone-900 dark:bg-stone-800 hover:bg-stone-800 dark:hover:bg-stone-700 text-white text-xs font-semibold hidden md:flex items-center gap-1.5 transition"
          >
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>Hire / Contact</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            id="nav-btn-theme"
            onClick={onToggleDarkMode}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-200/70 dark:hover:bg-stone-800 transition"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="nav-btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-200/70 dark:hover:bg-stone-800 transition"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 px-4 py-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-800"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </a>
          ))}
          <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenATS();
              }}
              className="w-full py-2 bg-teal-600 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View ATS-Optimized Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2 bg-stone-900 dark:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              Send Recruiter Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
