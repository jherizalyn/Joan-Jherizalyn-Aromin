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
      <div className="bg-stone-900 text-white dark:bg-teal-950 dark:text-teal-100 border border-teal-500/50 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-medium">
        <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
        <span>{message}</span>
      </div>
    </div>
  );
};
