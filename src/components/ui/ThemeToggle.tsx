import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      type="button"
      className="p-2 rounded-full text-ink-300 hover:text-ink-50 dark:hover:text-white bg-white/5 hover:bg-white/10 dark:bg-ink-800/80 border border-white/10 transition-all duration-200"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-accent-lime transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-ink-900 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
};
