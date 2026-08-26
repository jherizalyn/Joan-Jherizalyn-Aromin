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
      case 'Server': return <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'Code': return <Code className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      default: return <Wrench className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              <span>Technical Toolset & Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Skills & Operating Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Verified technical proficiencies across IT infrastructure, software automation, and executive operational tools.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. BIR, Python, OS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl pl-10 pr-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-xs"
            />
          </div>
        </div>

        {/* Bento Grid Categories */}
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
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 hover:border-blue-300 dark:hover:border-blue-700 transition"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {cat.name}
                      </h3>
                      <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                        Core Domain
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    {filteredSkills.length} Verified
                  </span>
                </div>

                {/* Skills Grid Bento Cells */}
                <div className="grid grid-cols-1 gap-2.5">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-850/80 border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:border-blue-300 dark:hover:border-blue-700/60 transition group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg ${
                          skill.level === 'Expert'
                            ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                            : skill.level === 'Proficient'
                            ? 'bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>

                      {skill.description && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 pl-5 leading-relaxed">
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
