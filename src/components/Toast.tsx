import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="bg-slate-900 text-white dark:bg-slate-850 dark:text-slate-100 border border-blue-500/50 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-bold">
        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
        <span>{message}</span>
      </div>
    </div>
  );
};
