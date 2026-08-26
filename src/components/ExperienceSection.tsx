import React from 'react';
import { 
  Briefcase, 
  Clock, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  BadgeCheck,
  Calendar
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" />
            <span>Career Journey & Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Practical Work Experience
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Verified professional roles, IT consultancy internships, administrative support, and technical customer service.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6 max-w-4xl">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-stone-850 rounded-2xl p-6 sm:p-7 border border-stone-200 dark:border-stone-800 shadow-xs relative transition hover:border-teal-500/50 group"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                      exp.type === 'Internship'
                        ? 'bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-300 dark:border-teal-800'
                        : exp.type === 'Full-Time'
                        ? 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-800'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-medium text-stone-600 dark:text-stone-300 flex items-center gap-1.5 mt-1">
                    <Building2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>{exp.company}</span>
                    {exp.location && (
                      <>
                        <span className="text-stone-400">•</span>
                        <span className="text-stone-500 dark:text-stone-400 text-xs">{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="text-right font-mono text-xs text-teal-700 dark:text-teal-400 font-semibold bg-stone-50 dark:bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-800 self-start sm:self-auto">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.hours && (
                    <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                      {exp.hours}
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights Bullet points */}
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-stone-100 dark:border-stone-800/80">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
