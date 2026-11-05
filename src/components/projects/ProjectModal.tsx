import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Star, GitFork, Calendar, Code2, Layers, CheckCircle } from 'lucide-react';
import { GitHubRepo, FeaturedProjectConfig } from '../../types/portfolio';
import { FEATURED_PROJECTS_CONFIG } from '../../data/portfolioData';

interface ProjectModalProps {
  repo: GitHubRepo | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ repo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (repo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [repo, onClose]);

  if (!repo) return null;

  // Find rich configuration if available
  const featuredConfig: FeaturedProjectConfig | undefined = FEATURED_PROJECTS_CONFIG.find(
    (c) => c.repoName.toLowerCase() === repo.name.toLowerCase()
  );

  const displayTitle = featuredConfig?.title || repo.name.replace(/[-_]/g, ' ');
  const displayTagline = featuredConfig?.tagline || `GitHub Repository: ${repo.full_name}`;
  const displayDescription = featuredConfig?.description || repo.description || 'Verified software development repository hosted on GitHub.';
  const technologies = featuredConfig?.technologies || (repo.language ? [repo.language] : ['Python', 'Web']);
  const keyFeatures = featuredConfig?.keyFeatures || [
    'Clean, modular code structure following software engineering best practices',
    'Open-source repository available on GitHub with complete revision history',
    'Configured for reproducibility and local development setup'
  ];

  const formattedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-hidden="true"
      />
      
      <div className="relative w-full max-w-2xl bg-ink-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-ink-950/60">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-accent-lime/10 text-accent-lime border border-accent-lime/20">
                {repo.language || 'Software'}
              </span>
              {repo.is_featured && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Featured
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl font-bold text-white leading-tight">
              {displayTitle}
            </h3>
            <p className="text-xs text-ink-300 mt-1">
              {displayTagline}
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-full text-ink-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Metadata telemetry bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-300 p-3 rounded-xl bg-black/40 border border-white/5">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-yellow-400" />
              <span>{repo.stargazers_count} {repo.stargazers_count === 1 ? 'Star' : 'Stars'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GitFork className="w-3.5 h-3.5 text-ink-400" />
              <span>{repo.forks_count} {repo.forks_count === 1 ? 'Fork' : 'Forks'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-ink-400" />
              <span>Updated: {formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Public Repo</span>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-lime flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              <span>Project Overview &amp; Architecture</span>
            </h4>
            <p className="text-sm text-ink-200 leading-relaxed">
              {displayDescription}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-accent-lime" />
              <span>Key Features &amp; Implementation Highlights</span>
            </h4>
            <div className="space-y-2">
              {keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs text-ink-300">
                  <CheckCircle className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/5 text-ink-200 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-ink-950/60 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-ink-400 font-mono truncate max-w-[240px]">
            {repo.full_name}
          </span>

          <div className="flex items-center gap-2.5">
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-island text-xs py-2 px-4"
              >
                <ExternalLink className="w-3.5 h-3.5 text-accent-lime" />
                <span>Live Demo</span>
              </a>
            )}

            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-island text-xs py-2 px-4"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
