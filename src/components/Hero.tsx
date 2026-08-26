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
  CheckCircle2
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
    <section id="top" className="pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status & Role Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Open to Remote Opportunities</span>
            <span className="text-emerald-600/60 dark:text-emerald-400/60 font-mono">•</span>
            <span className="font-mono text-[11px]">Worldwide</span>
          </div>

          <div className="flex items-center gap-1 text-xs font-mono text-stone-500 dark:text-stone-400">
            <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Biñan, Laguna, Philippines</span>
          </div>
        </div>

        {/* Hero Grid: Intro & Quick Action Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-teal-700 dark:text-teal-400 font-semibold tracking-wider uppercase flex items-center gap-1.5">
                <span>Kumusta! Hello, I am</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white leading-[1.15]">
                Joan Jherizalyn Aromin
              </h1>

              <p className="text-sm sm:text-base font-medium text-stone-600 dark:text-stone-300">
                <span className="text-stone-900 dark:text-white font-semibold">BSIT Graduate</span> • <span className="text-teal-700 dark:text-teal-400">IT Support Specialist</span> • <span className="text-stone-900 dark:text-white font-semibold">Technical Virtual Assistant</span> • <span className="text-teal-700 dark:text-teal-400">Junior Python Developer</span>
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* Role Filter Tabs (Customized Lens for Hiring Managers) */}
            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                Filter Candidate Lens For Your Role:
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onSelectRoleFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    activeRoleFilter === 'all'
                      ? 'bg-stone-900 dark:bg-teal-500 text-white dark:text-stone-950 font-semibold shadow-xs'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  All Capabilities
                </button>
                <button
                  onClick={() => onSelectRoleFilter('it-support')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
                    activeRoleFilter === 'it-support'
                      ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  IT Support Specialist
                </button>
                <button
                  onClick={() => onSelectRoleFilter('tech-va')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
                    activeRoleFilter === 'tech-va'
                      ? 'bg-sky-600 text-white font-semibold shadow-xs'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  Technical VA & Admin
                </button>
                <button
                  onClick={() => onSelectRoleFilter('junior-python')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
                    activeRoleFilter === 'junior-python'
                      ? 'bg-amber-600 text-white font-semibold shadow-xs'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  Junior Python Developer
                </button>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-stone-900 dark:bg-teal-500 hover:bg-stone-800 dark:hover:bg-teal-400 text-white dark:text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition shadow-md hover:shadow-lg"
              >
                <span>Explore Technical Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenATS}
                className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition shadow-md hover:shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>View ATS Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-xl bg-stone-200/80 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-900 dark:text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition"
              >
                <Mail className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Get in Touch</span>
              </button>
            </div>

          </div>

          {/* Right Column: Recruiter Card & 1-Click Info Box */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-white dark:bg-stone-850 p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 shadow-xs transition hover:border-teal-500/50"
                >
                  <div className="text-[11px] font-mono text-stone-500 dark:text-stone-400">{stat.label}</div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 dark:text-white mt-0.5">{stat.value}</div>
                  <div className="text-[11px] text-teal-700 dark:text-teal-400 font-medium truncate">{stat.subtitle}</div>
                </div>
              ))}
            </div>

            {/* Recruiter 1-Click Clipboard Center */}
            <div className="bg-white dark:bg-stone-850 rounded-xl p-4 sm:p-5 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-2">
                <span className="text-xs font-mono font-bold uppercase text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  1-Click Recruiter Copy Bar
                </span>
                <span className="text-[11px] text-stone-400">Direct Contact</span>
              </div>

              <div className="space-y-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <Mail className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span className="font-mono text-stone-800 dark:text-stone-200 truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                    title="Copy Email"
                    className="p-1 text-stone-500 hover:text-teal-600 dark:hover:text-teal-400 rounded transition ml-2 flex-shrink-0"
                  >
                    {copiedItem === 'Email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <Phone className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span className="font-mono text-stone-800 dark:text-stone-200 truncate">{PERSONAL_INFO.phone}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                    title="Copy Phone Number"
                    className="p-1 text-stone-500 hover:text-teal-600 dark:hover:text-teal-400 rounded transition ml-2 flex-shrink-0"
                  >
                    {copiedItem === 'Phone' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn & GitHub Shortcuts */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 text-xs flex items-center justify-between hover:border-teal-500 transition group"
                  >
                    <span className="flex items-center gap-1.5 text-stone-700 dark:text-stone-300 font-medium">
                      <Linkedin className="w-3.5 h-3.5 text-sky-600" />
                      LinkedIn
                    </span>
                    <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-teal-600" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 text-xs flex items-center justify-between hover:border-teal-500 transition group"
                  >
                    <span className="flex items-center gap-1.5 text-stone-700 dark:text-stone-300 font-medium">
                      <Github className="w-3.5 h-3.5 text-stone-800 dark:text-stone-200" />
                      GitHub
                    </span>
                    <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-teal-600" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
