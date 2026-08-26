import React from 'react';
import { 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp,
  Heart
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenATS: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenATS }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 py-12 text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-stone-950 font-bold flex items-center justify-center text-xs tracking-tighter">
                {PERSONAL_INFO.monogram}
              </div>
              <span className="font-bold text-white text-sm">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              BSIT Graduate • IT Support Specialist • Technical Virtual Assistant • Junior Python Developer. Available for remote positions worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono font-bold uppercase text-stone-400 text-[11px]">
              Navigation
            </div>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#about" className="hover:text-teal-400 transition">About Candidate</a></li>
              <li><a href="#projects" className="hover:text-teal-400 transition">Technical Projects</a></li>
              <li><a href="#skills" className="hover:text-teal-400 transition">Competencies</a></li>
              <li><a href="#experience" className="hover:text-teal-400 transition">Work Experience</a></li>
              <li><a href="#education" className="hover:text-teal-400 transition">Education & Certifications</a></li>
            </ul>
          </div>

          {/* Recruiter Resources */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono font-bold uppercase text-stone-400 text-[11px]">
              Recruiter Resources
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={onOpenATS}
                className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold flex items-center gap-1.5 transition text-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>ATS Resume</span>
              </button>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 flex items-center gap-1.5 transition text-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 flex items-center gap-1.5 transition text-xs"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="text-stone-500 font-mono text-[11px]">
              Direct: {PERSONAL_INFO.email}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built for Modern Recruitment & ATS Standards</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
