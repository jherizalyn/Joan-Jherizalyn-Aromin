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
      case 'Database': return <Database className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
    }
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Certifications & Qualifications
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Accredited certifications in relational databases, systems administration, business communication, and enterprise tooling.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-stone-850 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col justify-between hover:border-teal-500/50 transition group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-stone-100 dark:bg-stone-800 group-hover:scale-105 transition-transform">
                    {getCertIcon(cert.iconName)}
                  </div>
                  {cert.verifiedBadge && (
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      {cert.verifiedBadge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-stone-500 dark:text-stone-400 mt-0.5">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
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
