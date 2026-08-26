import React from 'react';
import { 
  Award, 
  Database, 
  Server, 
  Globe, 
  Layers, 
  FileSpreadsheet, 
  Cpu, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
    }
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Accreditations & Badges</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Certifications & Industry Credentials
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Industry accreditations across relational databases, systems administration, business communication, and enterprise tooling.
          </p>
        </div>

        {/* Certifications Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-700 transition group space-y-4"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform">
                    {getCertIcon(cert.iconName)}
                  </div>
                  {cert.verifiedBadge && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      {cert.verifiedBadge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5 font-bold">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
