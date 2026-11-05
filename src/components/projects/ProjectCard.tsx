import React from 'react';
import { Github, ExternalLink, Star, GitFork, ArrowUpRight } from 'lucide-react';
import { GitHubRepo, FeaturedProjectConfig } from '../../types/portfolio';
import { FEATURED_PROJECTS_CONFIG } from '../../data/portfolioData';

interface ProjectCardProps {
  repo: GitHubRepo;
  onOpenModal: (repo: GitHubRepo) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ repo, onOpenModal }) => {
  const featuredConfig: FeaturedProjectConfig | undefined = FEATURED_PROJECTS_CONFIG.find(
    (c) => c.repoName.toLowerCase() === repo.name.toLowerCase()
  );

  const displayTitle = featuredConfig?.title || repo.name.replace(/[-_]/g, ' ');
  const displayDescription = featuredConfig?.description || repo.description || 'Software repository containing backend and application code.';
  const technologies = featuredConfig?.technologies || (repo.language ? [repo.language] : ['Python']);
  const isFeatured = repo.is_featured || featuredConfig?.featured;

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case 'python': return 'bg-blue-400';
      case 'javascript': return 'bg-yellow-400';
      case 'scss': case 'css': return 'bg-pink-400';
      case 'html': return 'bg-orange-500';
      case 'jupyter notebook': return 'bg-amber-500';
      case 'java': return 'bg-red-400';
      default: return 'bg-accent-lime';
    }
  };

  return (
    <div className={`bezel-container flex flex-col h-full group transition-all duration-300 ${
      isFeatured ? 'border-accent-lime/25' : ''
    }`}>
      <div className="bezel-inner flex flex-col justify-between h-full space-y-4">
        
        {/* Top Badges & Header */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></span>
              <span className="text-xs font-mono font-medium text-ink-300">
                {repo.language || 'Software'}
              </span>
            </div>

            {isFeatured && (
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-accent-lime/10 text-accent-lime border border-accent-lime/20">
                Featured Project
              </span>
            )}
          </div>

          <h3 
            onClick={() => onOpenModal(repo)}
            className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-accent-lime transition-colors cursor-pointer flex items-center justify-between gap-2"
          >
            <span>{displayTitle}</span>
            <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-accent-lime transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </h3>

          <p className="text-xs sm:text-sm text-ink-400 mt-2 line-clamp-3 leading-relaxed">
            {displayDescription}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-ink-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-ink-400">
                +{technologies.length - 4}
              </span>
            )}
          </div>

          {/* Footer Metadata & Action Buttons */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-3 text-ink-400 font-mono text-[11px]">
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500/80" />
                {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-3 h-3" />
                {repo.forks_count}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenModal(repo)}
                type="button"
                className="px-2.5 py-1 rounded-md text-xs font-medium text-ink-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                Details
              </button>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-ink-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={`View ${repo.name} source code on GitHub`}
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>

              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-md text-accent-lime hover:bg-white/10 transition-colors"
                  aria-label={`Open live demo for ${repo.name}`}
                  title="Open Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
