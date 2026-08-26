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
    <section id="projects" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4" />
              <span>Featured Architecture & Systems</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Technical Projects & Portfolios
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Desktop database applications, full-stack subscriber platforms, and security toolsets built with structured code.
            </p>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs overflow-x-auto">
            {(['All', 'Completed', 'In Progress', 'Concept / Future'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition ${
                  filter === status
                    ? 'bg-white dark:bg-blue-600 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED INTERACTIVE SIMULATION SPOTLIGHT: AROMIN HR MINI SYSTEM */}
        <div id="demo-hr" className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Live Desktop Simulation: AROMIN HR Mini System
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Python / Tkinter / SQLite Logic
                </span>
              </h3>
            </div>
            
            <button
              onClick={() => setShowLiveSim(!showLiveSim)}
              className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              {showLiveSim ? 'Minimize Simulator' : 'Expand Simulator'}
            </button>
          </div>

          {showLiveSim && (
            <div className="transition-all duration-300">
              <InteractiveHRDemo />
            </div>
          )}
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all group hover:border-blue-300 dark:hover:border-blue-700"
            >
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    project.status === 'Completed'
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                      : project.status === 'In Progress'
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                      : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                  }`}>
                    {project.status}
                  </span>

                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 font-bold">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags Bento Row */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-xl text-[10px] font-mono font-semibold bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 rounded-xl text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:px-7 bg-slate-50/80 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition"
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
                      className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition"
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
                      className="p-1.5 rounded-xl text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
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
