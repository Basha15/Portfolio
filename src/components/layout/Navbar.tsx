import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Resume', href: '#resume' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-6 transition-all duration-300">
      <div className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-4 md:px-6 py-3 border ${
        isScrolled 
          ? 'bg-ink-900/80 backdrop-blur-xl border-white/10 shadow-lg' 
          : 'bg-ink-950/60 backdrop-blur-md border-white/5'
      } flex items-center justify-between`}>
        
        {/* Brand / Name */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 text-sm font-bold tracking-tight text-ink-50 hover:text-accent-lime transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent-lime group-hover:border-accent-lime/40 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-display text-base font-bold">
            Umar Basha<span className="text-accent-lime">.</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            DropXcorp
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-ink-300 hover:text-white rounded-full transition-colors hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Island: Theme Toggle + Contact CTA */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-accent-lime text-ink-950 hover:bg-accent-lime-hover transition-all duration-200 active:scale-95 shadow-sm group"
          >
            <span>Let's Connect</span>
            <span className="w-4 h-4 rounded-full bg-ink-950/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 text-ink-300 hover:text-white rounded-full hover:bg-white/5 transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto p-4 rounded-2xl bg-ink-900/95 backdrop-blur-2xl border border-white/10 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-2">
            <div className="px-3 py-2 text-xs font-semibold text-ink-400 uppercase tracking-wider">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-ink-200 hover:text-accent-lime hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-3 rounded-xl bg-accent-lime text-ink-950 hover:bg-accent-lime-hover transition-all"
              >
                <span>Hire / Contact Shaik Umar Basha</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
