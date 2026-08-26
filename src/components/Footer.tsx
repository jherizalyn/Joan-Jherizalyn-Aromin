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
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 py-12 text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-xs tracking-tight shadow-sm">
                {PERSONAL_INFO.monogram}
              </div>
              <span className="font-bold text-white text-sm">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              BSIT Graduate • IT Support Specialist • Technical Virtual Assistant • Junior Python Developer. Available for remote opportunities worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono font-bold uppercase tracking-wider text-slate-400 text-[10px]">
              Navigation
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#about" className="hover:text-blue-400 transition">About Candidate</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Technical Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition">Operating Skills</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition">Work Experience</a></li>
              <li><a href="#education" className="hover:text-blue-400 transition">Education & Credentials</a></li>
            </ul>
          </div>

          {/* Recruiter Resources */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono font-bold uppercase tracking-wider text-slate-400 text-[10px]">
              Recruiter Hub
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={onOpenATS}
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center gap-1.5 transition text-xs shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>ATS Resume</span>
              </button>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold flex items-center gap-1.5 transition text-xs border border-slate-700"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold flex items-center gap-1.5 transition text-xs border border-slate-700"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="text-slate-500 font-mono text-[11px]">
              Direct: {PERSONAL_INFO.email}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition font-mono font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
