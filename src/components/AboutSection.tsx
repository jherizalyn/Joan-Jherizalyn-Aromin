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
    <section id="about" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Candidate Profile & Foundations
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Bridging Technical Infrastructure, Software Automation, and Executive Precision
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-5 items-stretch">
          
          {/* Bento Cell 1: Career Summary Card (Col 6) */}
          <div className="col-span-12 lg:col-span-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Executive Summary</span>
              </div>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I am a <strong>Bachelor of Science in Information Technology (BSIT) graduate from STI College Carmona (Batch 2026)</strong> with a rigorous hands-on foundation in system troubleshooting, software development, and executive office coordination.
                </p>
                <p>
                  My background encompasses both technical and operational excellence: from building desktop database solutions using <strong>Python, Tkinter, and SQLite</strong> to executing large-scale Windows OS deployments, hardware maintenance, and digital government portal transactions (e.g., <strong>BIR ORUS, SSS, PhilHealth</strong>).
                </p>
                <p>
                  Having completed an intensive <strong>486-hour IT consultancy internship</strong> alongside experience in legal office administration and international customer care, I bring high reliability suited for remote IT Support, Technical Virtual Assistant, and Junior Python developer roles.
                </p>
              </div>
            </div>

            {/* Micro Badges Bento Row */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Immediate Availability</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Remote Ready Station</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>100% Tax/BIR Compliance</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>TEFL High-Distinction</span>
              </div>
            </div>
          </div>

          {/* Bento Cell 2: Core Competency Pillars (Col 6) */}
          <div className="col-span-12 lg:col-span-6 space-y-4 flex flex-col justify-between">
            
            {/* Pillar 1 */}
            <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold border border-blue-100 dark:border-blue-900/60">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    IT Support & Systems Maintenance
                  </h4>
                  <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold">
                    Hardware Diagnostics, OS Deployment, Cloning
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-13">
                Proven proficiency with Windows OS installation (10/11/7), disk partitioning, OS cloning, device driver configuration, and PC hardware assembly.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold border border-indigo-100 dark:border-indigo-900/60">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Python & Desktop Database Engineering
                  </h4>
                  <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                    Tkinter GUI, SQLite3, Data Automation
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-13">
                Architect of the AROMIN HR Mini System desktop application, focusing on structured data models, clean UI layouts, and automated workflows.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold border border-sky-100 dark:border-sky-900/60">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Technical Virtual Assistance & Gov Portals
                  </h4>
                  <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400 font-semibold">
                    BIR ORUS, Document Filing, Advanced Excel
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-13">
                Experienced in digital tax applications, official receipts logging, legal transcription, scheduling, and cloud documentation across Google Workspace & MS Office.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
