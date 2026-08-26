import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Printer, 
  Download, 
  FileText, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code
} from 'lucide-react';
import { ATS_RESUME_TEXT, PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATIONS, CERTIFICATIONS } from '../data/portfolioData';

interface ATSResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export const ATSResumeModal: React.FC<ATSResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'formatted' | 'plaintext'>('formatted');

  if (!isOpen) return null;

  const handleCopyPlainText = () => {
    navigator.clipboard.writeText(ATS_RESUME_TEXT);
    setCopied(true);
    onShowToast('ATS Plain-Text Resume copied to clipboard! Ready to paste into recruiter portals.');
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([ATS_RESUME_TEXT], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Joan_Jherizalyn_Aromin_ATS_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    onShowToast('Downloaded Joan_Jherizalyn_Aromin_ATS_Resume.txt');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden transition-all">
        
        {/* Modal Header & Quick Actions Bar */}
        <div className="p-4 sm:px-7 bg-slate-100 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center border border-blue-200 dark:border-blue-800">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                ATS-Optimized Resume
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Screening Verified
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tailored for IT Support, Technical VA, and Junior Python developer positions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-200 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
              <button
                id="ats-view-formatted"
                onClick={() => setViewMode('formatted')}
                className={`px-3 py-1 rounded-lg transition ${
                  viewMode === 'formatted'
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Clean Layout
              </button>
              <button
                id="ats-view-plaintext"
                onClick={() => setViewMode('plaintext')}
                className={`px-3 py-1 rounded-lg transition ${
                  viewMode === 'plaintext'
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Plain Text
              </button>
            </div>

            <button
              id="ats-btn-copy"
              onClick={handleCopyPlainText}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy for ATS'}
            </button>

            <button
              id="ats-btn-print"
              onClick={handlePrint}
              title="Print / Save PDF"
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              id="ats-btn-download"
              onClick={handleDownloadTxt}
              title="Download .TXT format"
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              id="ats-btn-close"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl transition ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1 bg-white dark:bg-slate-900">
          {viewMode === 'plaintext' ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono font-bold">
                <span>Standard ASCII Text Format (Parser-Safe)</span>
                <span>{ATS_RESUME_TEXT.length} characters</span>
              </div>
              <textarea
                readOnly
                value={ATS_RESUME_TEXT}
                className="w-full h-[520px] bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-mono text-xs p-4 rounded-2xl border border-slate-200 dark:border-slate-800 focus:outline-none leading-relaxed select-all"
              />
            </div>
          ) : (
            /* Formatted High-Contrast Clean Resume Layout */
            <div className="max-w-3xl mx-auto space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
              
              {/* Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-5 text-center sm:text-left sm:flex sm:items-start sm:justify-between">
                <div>
                  <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    JOAN JHERIZALYN R. AROMIN
                  </h1>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-sm mt-0.5">
                    IT Support Specialist • Technical Virtual Assistant • Junior Python Developer
                  </p>
                </div>

                <div className="mt-3 sm:mt-0 text-xs text-slate-500 dark:text-slate-400 space-y-1 sm:text-right font-mono">
                  <div className="flex items-center gap-1.5 justify-center sm:justify-end">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>Biñan, Laguna, Philippines</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center sm:justify-end">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>+63 956 092 1316</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center sm:justify-end">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>jherizalyn@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-end text-blue-600 dark:text-blue-400 pt-1 font-bold">
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                      LinkedIn: atearomin
                    </a>
                    <span>•</span>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                      GitHub: jherizalyn
                    </a>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <section className="space-y-2">
                <h2 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Professional Summary
                </h2>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                  Bachelor of Science in Information Technology graduate from <strong>STI College Carmona (Batch 2026)</strong> with practical software engineering and IT infrastructure experience. Proven foundation in desktop Python/SQLite application development, Windows OS deployment & repair, PC hardware maintenance, digital documentation, and online government transactions (BIR ORUS, SSS, PhilHealth). Seeking a remote IT Support, Technical Virtual Assistant, or Junior Python Developer position.
                </p>
              </section>

              {/* Core Skills */}
              <section className="space-y-2">
                <h2 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Technical & Operating Skills
                </h2>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white">IT Support & Systems:</strong> Windows 10/11/7 installation & troubleshooting, PC hardware assembly, hardware diagnostics, OS cloning, disk partitioning, formatting, device drivers, preventive maintenance, basic networking (LAN/IP setup), Active Directory fundamentals.
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white">Programming & Databases:</strong> Python 3, Tkinter GUI, SQLite, SQL Querying, Relational Database Design, OOP Architecture, HTML5, CSS3, JavaScript basics, Java basics, Git & GitHub.
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <strong className="text-slate-900 dark:text-white">Administrative & Technical VA:</strong> MS Excel (Shortcuts, Formulas, Data Models), MS Word (Document Formatting, Legal archiving), Google Workspace (Docs, Sheets, Drive), BIR ORUS online registration & transactions, SSS/PhilHealth/Pag-IBIG portals, Calendar scheduling.
                  </div>
                </div>
              </section>

              {/* Technical Projects */}
              <section className="space-y-3">
                <h2 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Featured Technical Projects
                </h2>
                
                <div className="space-y-3">
                  <div className="border-l-2 border-blue-600 pl-3.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                        AROMIN HR Mini System
                      </h3>
                      <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold">
                        Python 3 • Tkinter • SQLite3 • OOP
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1">
                      <li>Developed a desktop Human Resources & Leave Tracker application to automate employee record management.</li>
                      <li>Engineered CRUD operations, multi-filter search system, and dynamic SQLite data persistence.</li>
                      <li>Built sequential ID incrementation logic and full leave approval/rejection state machine workflow.</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-slate-300 dark:border-slate-700 pl-3.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                        AROMIN Painting Services & Supplies Portal
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        HTML5 • CSS3 • JavaScript
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Designed and built a multi-page commercial web platform with dynamic quotation calculator and responsive product catalogs.
                    </p>
                  </div>

                  <div className="border-l-2 border-slate-300 dark:border-slate-700 pl-3.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                        DHEY: ISP Subscriber Management & Billing System
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        MERN Stack (MongoDB, Express, React, Node)
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Co-architected an ISP subscriber management system with automated Statement of Account (SOA) generator, analytics dashboard, and RBAC security.
                    </p>
                  </div>
                </div>
              </section>

              {/* Work Experience */}
              <section className="space-y-3">
                <h2 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  Professional Experience
                </h2>

                <div className="space-y-4">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="space-y-1 text-xs">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                            {exp.role}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400 font-medium"> — {exp.company}</span>
                        </div>
                        <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-bold">
                          {exp.period} {exp.hours ? `(${exp.hours})` : ''}
                        </span>
                      </div>
                      <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-0.5 pl-1">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education & Certifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-slate-200 dark:border-slate-800">
                <section className="space-y-2 text-xs">
                  <h2 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                    Education
                  </h2>
                  <div className="space-y-2">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">
                        Bachelor of Science in Information Technology
                      </div>
                      <div className="text-blue-600 dark:text-blue-400 font-bold">STI College Carmona (Batch 2026)</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">
                        Information Technology Coursework
                      </div>
                      <div className="text-slate-500">IETI Alabang (2008 – 2009)</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">
                        Computer Technician Certificate
                      </div>
                      <div className="text-slate-500">Alternative Learning Center (2005)</div>
                    </div>
                  </div>
                </section>

                <section className="space-y-2 text-xs">
                  <h2 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                    Certifications & Credentials
                  </h2>
                  <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span><strong>IBM Cognitive Class:</strong> SQL & Relational DB 101 (2026)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span><strong>STI College:</strong> Systems Administration (2023)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span><strong>120-Hour TEFL:</strong> High Distinction (English Teaching)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span><strong>SAP University Alliances:</strong> Intro to SAP S/4HANA (2024)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span><strong>Microsoft Specialist:</strong> MS Word & MS Excel Core</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span><strong>Certified Computer Technician:</strong> Windows Hardware/OS</span>
                    </li>
                  </ul>
                </section>
              </div>

            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-7 bg-slate-100 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 no-print">
          <span>Formatted according to standard ATS parsing best practices.</span>
          <div className="flex items-center gap-2 font-bold">
            <button
              onClick={handleCopyPlainText}
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <Copy className="w-3.5 h-3.5" /> Copy Plain Text
            </button>
            <span>•</span>
            <button
              onClick={handleDownloadTxt}
              className="text-slate-700 dark:text-slate-300 hover:underline flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" /> Download .txt
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
