import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';
import { EDUCATIONS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Education & Technical Qualifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Formal degrees in Information Technology, systems architecture, and technical diagnostics.
          </p>
        </div>

        {/* Education Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATIONS.map((edu) => (
            <div
              key={edu.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-700 transition space-y-4"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="text-[10px] px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                    {edu.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {edu.highlights && (
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Highlights:
                    </span>
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
