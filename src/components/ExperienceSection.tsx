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
    <section id="experience" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" />
            <span>Career History & Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Practical Work Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Verified professional roles, IT consultancy internships, administrative support, and technical customer service.
          </p>
        </div>

        {/* Timeline Bento Grid */}
        <div className="space-y-6 max-w-4xl">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative transition hover:border-blue-300 dark:hover:border-blue-700 group"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                      exp.type === 'Internship'
                        ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                        : exp.type === 'Full-Time'
                        ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1.5 mt-1">
                    <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold">{exp.company}</span>
                    {exp.location && (
                      <>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs">{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="text-right font-mono text-xs text-blue-600 dark:text-blue-400 font-bold bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.hours && (
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-bold uppercase">
                      {exp.hours}
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights Bullet points */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-5 border-t border-slate-100 dark:border-slate-800">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-xl text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
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
