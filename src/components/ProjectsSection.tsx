import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Clock, 
  Rocket, 
  Terminal, 
  Sparkles, 
  PlayCircle,
  Eye,
  Layers,
  ChevronRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { InteractiveHRDemo } from './InteractiveHRDemo';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'Completed' | 'In Progress' | 'Concept / Future'>('All');
  const [showLiveSim, setShowLiveSim] = useState(true);

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'All') return true;
    return project.status === filter;
  });

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4" />
              <span>Verified Portfolio & Systems</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
              Featured Technical Projects
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
              A showcase of desktop software, web systems, and technical architectures built with authentic code.
            </p>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center bg-stone-100 dark:bg-stone-850 p-1 rounded-xl border border-stone-200 dark:border-stone-800 text-xs overflow-x-auto">
            {(['All', 'Completed', 'In Progress', 'Concept / Future'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition ${
                  filter === status
                    ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white font-semibold shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED INTERACTIVE SIMULATION SPOTLIGHT: AROMIN HR MINI SYSTEM */}
        <div id="demo-hr" className="mb-14 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping"></span>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white flex items-center gap-2">
                Interactive Desktop Simulator: AROMIN HR Mini System
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300">
                  Live Python/SQLite Logic
                </span>
              </h3>
            </div>
            
            <button
              onClick={() => setShowLiveSim(!showLiveSim)}
              className="text-xs font-mono text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1"
            >
              {showLiveSim ? 'Hide Simulator' : 'Show Simulator'}
            </button>
          </div>

          {showLiveSim && (
            <div className="transition-all duration-300">
              <InteractiveHRDemo />
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-stone-850 rounded-2xl border border-stone-200 dark:border-stone-800 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md transition-all group hover:border-teal-500/50"
            >
              <div className="p-5 sm:p-6 space-y-4">
                
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    project.status === 'Completed'
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                      : project.status === 'In Progress'
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                      : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                  }`}>
                    {project.status}
                  </span>

                  <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-teal-700 dark:text-teal-400 font-medium mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200/80 dark:border-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-stone-100 dark:bg-stone-800 text-stone-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:px-6 bg-stone-50 dark:bg-stone-900/60 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-bold text-stone-800 dark:text-stone-200 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-1 transition"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                  <ChevronRight className="w-3 h-3" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub Repository"
                      className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-800 transition"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && project.liveUrl.startsWith('http') && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="Live System"
                      className="p-1.5 rounded-lg text-stone-500 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
