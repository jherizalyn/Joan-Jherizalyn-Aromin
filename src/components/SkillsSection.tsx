import React, { useState } from 'react';
import { 
  Server, 
  Code, 
  Briefcase, 
  Wrench, 
  Search, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'Code': return <Code className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      default: return <Wrench className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-50/60 dark:bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              <span>Core Competencies & Toolsets</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
              Technical & Professional Skills
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
              Verified technical toolsets, programming languages, operating systems, and business platforms.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. BIR, Python, OS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-700 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:border-teal-500 shadow-xs"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const filteredSkills = cat.skills.filter(s => 
              s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()))
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <div
                key={cat.id}
                className="bg-white dark:bg-stone-850 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4 hover:border-teal-500/40 transition"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-white">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">
                    {filteredSkills.length} Verified
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-2.5">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800/80 flex flex-col justify-between hover:border-teal-500/30 transition group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                          <span className="text-xs font-semibold text-stone-800 dark:text-stone-200 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${
                          skill.level === 'Expert'
                            ? 'bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300'
                            : skill.level === 'Proficient'
                            ? 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300'
                            : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>

                      {skill.description && (
                        <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 pl-5">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
