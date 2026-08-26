import React, { useState } from 'react';
import { 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Terminal, 
  Monitor, 
  FileSpreadsheet, 
  ArrowDown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Zap,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RoleFocus } from '../types';

interface HeroProps {
  onOpenATS: () => void;
  onOpenContact: () => void;
  onShowToast: (msg: string) => void;
  activeRoleFilter: RoleFocus;
  onSelectRoleFilter: (role: RoleFocus) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenATS,
  onOpenContact,
  onShowToast,
  activeRoleFilter,
  onSelectRoleFilter,
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    onShowToast(`Copied ${label} (${text}) to clipboard!`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="top" className="pt-28 sm:pt-36 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Master Bento Grid */}
        <div className="grid grid-cols-12 gap-5">
          
          {/* Bento Cell 1: Main Candidate Profile & Lens Filter (Col 8) */}
          <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition space-y-6">
            <div className="space-y-4">
              {/* Status Header */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-widest border border-blue-200 dark:border-blue-800/60 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
                  Open to Opportunities
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-xs font-mono font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  BSIT 2026 • STI College Carmona • Biñan, Laguna
                </span>
              </div>

              {/* Title & Introduction */}
              <div>
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {PERSONAL_INFO.headline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {PERSONAL_INFO.bioShort}
              </p>
            </div>

            {/* Candidate Role Filter Lens */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Filter Candidate Competency Lens:
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onSelectRoleFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    activeRoleFilter === 'all'
                      ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  All Capabilities
                </button>
                <button
                  onClick={() => onSelectRoleFilter('it-support')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    activeRoleFilter === 'it-support'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  IT Support Specialist
                </button>
                <button
                  onClick={() => onSelectRoleFilter('tech-va')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    activeRoleFilter === 'tech-va'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  Technical VA & Admin
                </button>
                <button
                  onClick={() => onSelectRoleFilter('junior-python')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    activeRoleFilter === 'junior-python'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  Junior Python Developer
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition shadow-md hover:shadow-lg"
              >
                <span>Explore Technical Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenATS}
                className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition shadow-md hover:shadow-lg"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View ATS Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition border border-slate-200 dark:border-slate-700"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>

          {/* Bento Cell 2: Dark Accent Ready to Deploy Card (Col 4) */}
          <div className="col-span-12 lg:col-span-4 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-800 relative overflow-hidden space-y-6">
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl border border-white/10 shadow-inner">
                💻
              </div>
              <div className="text-right">
                <div className="text-[10px] text-white/50 font-mono uppercase tracking-widest font-black">
                  Internship Practicum
                </div>
                <div className="text-xl font-black text-blue-400 font-mono">
                  486 Hours
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-3">
              <div>
                <div className="text-2xl sm:text-3xl font-black italic tracking-tight text-white mb-1">
                  Ready to Deploy
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Trained in Windows OS Deployment, PC Hardware Diagnostics, SQLite Relational Database Management, & Python Automation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono text-white/50 uppercase">Degree</div>
                  <div className="text-xs font-bold text-white">BSIT 2026</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono text-white/50 uppercase">Availability</div>
                  <div className="text-xs font-bold text-emerald-400">Immediate</div>
                </div>
              </div>
            </div>

            {/* Subtle decorative background watermarks */}
            <div className="absolute -bottom-6 -right-6 text-9xl font-black text-white/[0.03] select-none pointer-events-none">
              IT
            </div>
          </div>

          {/* Bento Cell 3: Recruiter 1-Click Fast Contact Bar (Col 12) */}
          <div className="col-span-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 w-full md:w-auto justify-center md:justify-start">
              
              {/* Email */}
              <div className="flex items-center gap-2 group">
                <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs font-semibold">{PERSONAL_INFO.email}</span>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                  className="p-1 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  title="Copy Email"
                >
                  {copiedItem === 'Email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 group">
                <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="font-mono text-xs font-semibold">{PERSONAL_INFO.phone}</span>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                  className="p-1 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  title="Copy Phone"
                >
                  {copiedItem === 'Phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="text-xs font-semibold">{PERSONAL_INFO.location}</span>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition border border-slate-200 dark:border-slate-700"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition border border-slate-200 dark:border-slate-700"
              >
                <Github className="w-3.5 h-3.5 text-slate-900 dark:text-white" />
                <span>GitHub</span>
              </a>

              <button
                onClick={onOpenContact}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs"
              >
                <span>Hire Joan</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
