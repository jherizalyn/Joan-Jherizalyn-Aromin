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
    <section id="education" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-50/60 dark:bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Foundations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Education & Technical Degrees
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Formal education in Information Technology, computer system architectures, and diagnostics.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATIONS.map((edu) => (
            <div
              key={edu.id}
              className="bg-white dark:bg-stone-850 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col justify-between hover:border-teal-500/50 transition space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-teal-700 dark:text-teal-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                    {edu.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {edu.description}
                </p>

                {edu.highlights && (
                  <div className="space-y-1.5 pt-2 border-t border-stone-100 dark:border-stone-800">
                    <span className="text-[11px] font-mono font-bold uppercase text-stone-400 dark:text-stone-500">
                      Key Milestones:
                    </span>
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-stone-700 dark:text-stone-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
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
