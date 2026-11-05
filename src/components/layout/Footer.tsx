import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-950/80 backdrop-blur-md pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Column 1: Identity & Role */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-accent-lime text-xl font-bold">.</span>
            </div>
            <p className="text-xs font-medium text-ink-300 max-w-md leading-relaxed">
              {PERSONAL_INFO.headline}
            </p>
            <p className="text-xs text-ink-400 max-w-md leading-relaxed">
              Engineering reliable backend services, RESTful APIs, and database solutions. Based in {PERSONAL_INFO.location}.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {PERSONAL_INFO.availabilityStatus}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">Sections</h4>
            <ul className="space-y-2 text-xs text-ink-300">
              <li><a href="#about" className="hover:text-accent-lime transition-colors">About Background</a></li>
              <li><a href="#skills" className="hover:text-accent-lime transition-colors">Technical Stack</a></li>
              <li><a href="#experience" className="hover:text-accent-lime transition-colors">DropXcorp Experience</a></li>
              <li><a href="#projects" className="hover:text-accent-lime transition-colors">Verified GitHub Projects</a></li>
              <li><a href="#education" className="hover:text-accent-lime transition-colors">Academic History</a></li>
              <li><a href="#resume" className="hover:text-accent-lime transition-colors">Download Resume</a></li>
            </ul>
          </div>

          {/* Column 3: Verified Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">Direct Connect</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-ink-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-ink-400" />
                <span>github.com/Basha15</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-ink-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-ink-400" />
                <span>linkedin.com/in/shaik-umar-basha</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 text-xs text-ink-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-ink-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>&copy; {currentYear} {PERSONAL_INFO.name}. Verified credentials &amp; honest experience.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-ink-300 hover:text-white border border-white/5 transition-all text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
