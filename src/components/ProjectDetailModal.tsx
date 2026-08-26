import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Database, 
  Code, 
  Cpu, 
  PlayCircle
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenDemo?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onOpenDemo }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden transition-all">
        
        {/* Header */}
        <div className="p-5 sm:px-7 bg-stone-50 dark:bg-stone-850 border-b border-stone-200 dark:border-stone-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold ${
                project.status === 'Completed'
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                  : project.status === 'In Progress'
                  ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                  : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800'
              }`}>
                {project.status}
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                {project.category}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-teal-700 dark:text-teal-400 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="overflow-y-auto p-6 sm:p-7 space-y-6 flex-1 text-sm text-stone-700 dark:text-stone-300">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 font-mono mb-2">
              System Overview & Problem Solved
            </h4>
            <p className="text-stone-800 dark:text-stone-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 font-mono">
              Key Engineering Achievements
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.highlightPoints.map((point, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 dark:bg-stone-850 border border-stone-200 dark:border-stone-800/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-stone-800 dark:text-stone-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 font-mono">
              Architecture & Data Flow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {project.architecture.frontend && (
                <div className="p-3 bg-stone-50 dark:bg-stone-850 rounded-lg border border-stone-200 dark:border-stone-800 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-white">
                    <Layers className="w-3.5 h-3.5 text-teal-600" />
                    Presentation Layer
                  </div>
                  <div className="text-stone-600 dark:text-stone-400">
                    {project.architecture.frontend}
                  </div>
                </div>
              )}

              {project.architecture.backend && (
                <div className="p-3 bg-stone-50 dark:bg-stone-850 rounded-lg border border-stone-200 dark:border-stone-800 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-white">
                    <Code className="w-3.5 h-3.5 text-teal-600" />
                    Logic & Engine Layer
                  </div>
                  <div className="text-stone-600 dark:text-stone-400">
                    {project.architecture.backend}
                  </div>
                </div>
              )}

              {project.architecture.database && (
                <div className="p-3 bg-stone-50 dark:bg-stone-850 rounded-lg border border-stone-200 dark:border-stone-800 space-y-1 sm:col-span-2">
                  <div className="flex items-center gap-1.5 font-bold text-stone-900 dark:text-white">
                    <Database className="w-3.5 h-3.5 text-teal-600" />
                    Persistence & Database Schema
                  </div>
                  <div className="text-stone-600 dark:text-stone-400 font-mono text-[11px]">
                    {project.architecture.database}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 font-mono mb-2">
              Technologies & Methodologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:px-7 bg-stone-50 dark:bg-stone-850 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-stone-900 dark:bg-stone-800 hover:bg-stone-800 dark:hover:bg-stone-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <Github className="w-4 h-4" />
                View GitHub Code
              </a>
            )}

            {project.liveUrl && project.liveUrl.startsWith('http') && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <ExternalLink className="w-4 h-4" />
                Open Live Web Portal
              </a>
            )}

            {project.demoAvailable && onOpenDemo && (
              <button
                onClick={() => {
                  onClose();
                  onOpenDemo();
                }}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"
              >
                <PlayCircle className="w-4 h-4" />
                Test Interactive App Demo
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white text-xs font-medium"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
