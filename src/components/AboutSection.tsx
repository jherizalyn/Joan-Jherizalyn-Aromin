import React from 'react';
import { 
  Monitor, 
  Terminal, 
  FileSpreadsheet, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Database,
  Building2,
  Workflow
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            Background & Candidate Profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Bridging Practical IT Infrastructure, Python Development, and Executive Administrative Precision
          </h2>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-6 space-y-5 bg-stone-50 dark:bg-stone-850 p-6 sm:p-7 rounded-2xl border border-stone-200 dark:border-stone-800">
            <h3 className="text-base font-bold text-stone-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              Career Summary & Work Ethic
            </h3>
            
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                I am a <strong>Bachelor of Science in Information Technology (BSIT) graduate from STI College Carmona (Batch 2026)</strong> with a hands-on foundation in system troubleshooting, software development, and executive office coordination.
              </p>
              <p>
                My background encompasses both technical and operational excellence: from building desktop database solutions using <strong>Python, Tkinter, and SQLite</strong> to executing large-scale Windows OS deployments, hardware maintenance, and digital government portal transactions (e.g., <strong>BIR ORUS, SSS, PhilHealth</strong>).
              </p>
              <p>
                Having worked across law firm administration, IT consultancy internship (<strong>486 hours</strong>), international hotel customer care, and computer cafe tech support, I bring a proactive, high-agency work ethic suited for remote IT Support, Technical Virtual Assistant, and Junior Python automation roles.
              </p>
            </div>

            {/* Micro Highlights */}
            <div className="pt-2 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Immediate Availability</span>
              </div>
              <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Remote Ready Setup</span>
              </div>
              <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>100% Tax/BIR Compliance</span>
              </div>
              <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>High-Distinction TEFL</span>
              </div>
            </div>
          </div>

          {/* Core Competency Pillars */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Pillar 1 */}
            <div className="bg-stone-50 dark:bg-stone-850 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 transition hover:border-teal-500/50 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white">
                    IT Support & Systems Maintenance
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                    Hardware, OS Deployment, Diagnostics
                  </span>
                </div>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-13">
                Proven proficiency with Windows OS installation (10/11/7), disk partitioning, OS cloning, device driver configuration, and PC hardware assembly.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-stone-50 dark:bg-stone-850 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 transition hover:border-teal-500/50 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white">
                    Python & Desktop Database Engineering
                  </h4>
                  <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400">
                    Tkinter GUI, SQLite3, OOP Architecture
                  </span>
                </div>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-13">
                Architect of the AROMIN HR Mini System desktop application, focusing on structured data models, clean UI layouts, and automated workflows.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-stone-50 dark:bg-stone-850 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 transition hover:border-teal-500/50 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white">
                    Executive & Technical Virtual Assistant
                  </h4>
                  <span className="text-[11px] font-mono text-sky-700 dark:text-sky-400">
                    Legal Documentation, BIR ORUS, MS Office
                  </span>
                </div>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-13">
                Experienced in legal documentation, client calendar scheduling, spreadsheet modeling (Excel/Sheets), and online compliance filings (BIR ORUS, SSS).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
