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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden transition-all">
        
        {/* Header */}
        <div className="p-5 sm:px-8 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                project.status === 'Completed'
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                  : project.status === 'In Progress'
                  ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                  : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800'
              }`}>
                {project.status}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-bold">
                {project.category}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-bold mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1 text-sm text-slate-700 dark:text-slate-300">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2">
              System Architecture & Problem Solved
            </h4>
            <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm">
              {project.description}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Key Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.highlightPoints.map((point, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Architecture & Data Flow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {project.architecture.frontend && (
                <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    Presentation Layer
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {project.architecture.frontend}
                  </div>
                </div>
              )}

              {project.architecture.backend && (
                <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                    <Code className="w-3.5 h-3.5 text-blue-600" />
                    Logic & Engine Layer
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {project.architecture.backend}
                  </div>
                </div>
              )}

              {project.architecture.database && (
                <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1 sm:col-span-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                    <Database className="w-3.5 h-3.5 text-blue-600" />
                    Persistence & Database Schema
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                    {project.architecture.database}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2">
              Technologies & Methodologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-xl text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:px-8 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition border border-slate-700"
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
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-xs"
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
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-xs"
              >
                <PlayCircle className="w-4 h-4" />
                Test Interactive App Demo
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-bold"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
