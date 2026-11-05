import React, { useState, useEffect } from 'react';
import { 
  Github, 
  ArrowUpRight, 
  RefreshCw, 
  AlertCircle, 
  Filter, 
  FolderGit2, 
  ExternalLink 
} from 'lucide-react';
import { GitHubRepo } from '../../types/portfolio';
import { fetchGitHubRepos } from '../../services/github';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'python' | 'web'>('all');
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepo | null>(null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const loadRepositories = async () => {
    setIsRefreshing(true);
    const result = await fetchGitHubRepos();
    setRepos(result.repos);
    setErrorNotice(result.error);
    setLoading(false);
    setIsRefreshing(false);
  };

  useEffect(() => {
    loadRepositories();
  }, []);

  const filteredRepos = repos.filter((r) => {
    if (activeFilter === 'featured') return r.is_featured;
    if (activeFilter === 'python') return r.language?.toLowerCase() === 'python' || r.topics.includes('python');
    if (activeFilter === 'web') return ['javascript', 'typescript', 'html', 'scss', 'css'].includes(r.language?.toLowerCase() || '');
    return true;
  });

  return (
    <section id="projects" className="section-rhythm px-4 sm:px-6 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime">
                Dynamic GitHub Showcase
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineering Projects
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadRepositories}
              disabled={isRefreshing}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-ink-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all disabled:opacity-50"
              title="Refresh GitHub repositories from API"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-accent-lime' : ''}`} />
              <span>{isRefreshing ? 'Syncing...' : 'Sync GitHub'}</span>
            </button>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@Basha15</span>
              <ExternalLink className="w-3 h-3 text-ink-400" />
            </a>
          </div>
        </div>

        {/* Sync Status / Notice Banner */}
        {errorNotice && (
          <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium">{errorNotice}</p>
              <p className="text-amber-300/80 mt-0.5">
                All projects shown are verified against Umar Basha's published repositories.
              </p>
            </div>
          </div>
        )}

        {/* Filter Navigation */}
        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-ink-400 mr-1" />
            <button
              onClick={() => setActiveFilter('all')}
              type="button"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-accent-lime text-ink-950 font-semibold'
                  : 'bg-white/5 text-ink-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              All Repositories ({repos.length})
            </button>

            <button
              onClick={() => setActiveFilter('featured')}
              type="button"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === 'featured'
                  ? 'bg-accent-lime text-ink-950 font-semibold'
                  : 'bg-white/5 text-ink-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              Featured Highlights
            </button>

            <button
              onClick={() => setActiveFilter('python')}
              type="button"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === 'python'
                  ? 'bg-accent-lime text-ink-950 font-semibold'
                  : 'bg-white/5 text-ink-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              Python &amp; ML
            </button>

            <button
              onClick={() => setActiveFilter('web')}
              type="button"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === 'web'
                  ? 'bg-accent-lime text-ink-950 font-semibold'
                  : 'bg-white/5 text-ink-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              Web &amp; Tools
            </button>
          </div>

          <span className="text-xs text-ink-400 font-mono hidden sm:inline">
            Showing {filteredRepos.length} public {filteredRepos.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-8">
          {loading ? (
            // Skeleton Loader
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bezel-container h-64 animate-pulse">
                  <div className="bezel-inner h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-20 h-4 bg-white/10 rounded"></div>
                      <div className="w-3/4 h-6 bg-white/10 rounded"></div>
                      <div className="w-full h-12 bg-white/5 rounded"></div>
                    </div>
                    <div className="w-1/2 h-4 bg-white/5 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredRepos.length === 0 ? (
            // Empty State
            <div className="text-center py-16 p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <FolderGit2 className="w-10 h-10 text-ink-400 mx-auto" />
              <h3 className="text-base font-bold text-white">No projects match this filter</h3>
              <p className="text-xs text-ink-400 max-w-sm mx-auto">
                Try selecting "All Repositories" to see the full list of repositories fetched from GitHub.
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                type="button"
                className="btn-ghost-island text-xs"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            // Project Cards
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo) => (
                <ProjectCard
                  key={repo.id}
                  repo={repo}
                  onOpenModal={(r) => setSelectedRepo(r)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA: Explore all repositories on GitHub */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-lime shrink-0">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Looking for code commits and revision logs?
              </h4>
              <p className="text-xs text-ink-400">
                Inspect public branches, commits, and datasets directly on GitHub.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-island text-xs whitespace-nowrap group shrink-0"
          >
            <span>Explore All GitHub Repositories</span>
            <ArrowUpRight className="w-4 h-4 text-accent-lime transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>

      {/* Deep-dive Project Details Modal */}
      <ProjectModal
        repo={selectedRepo}
        onClose={() => setSelectedRepo(null)}
      />
    </section>
  );
};
