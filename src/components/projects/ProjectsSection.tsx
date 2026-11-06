import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { 
  Github, 
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
import { FEATURED_PROJECTS_CONFIG, PERSONAL_INFO } from '../../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'featured' | 'all' | 'python' | 'web'>('featured');
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

  const featuredRepos = FEATURED_PROJECTS_CONFIG
    .filter((project) => project.featured)
    .flatMap((project) => repos.filter(
      (repo) => repo.is_featured && repo.name.toLowerCase() === project.repoName.toLowerCase()
    ));
  const visibleRepos = activeFilter === 'featured'
    ? featuredRepos
    : activeFilter === 'python'
      ? repos.filter((repo) => repo.language?.toLowerCase() === 'python' || repo.topics.includes('python'))
      : activeFilter === 'web'
        ? repos.filter((repo) => ['javascript', 'typescript', 'html', 'scss', 'css'].includes(repo.language?.toLowerCase() || ''))
        : repos;

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

        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="w-3.5 h-3.5 text-ink-400 mr-1 shrink-0" />
            {([
              ['featured', `Featured (${featuredRepos.length})`],
              ['all', `All Repositories (${repos.length})`],
              ['python', 'Python & ML'],
              ['web', 'Web & Tools'],
            ] as const).map(([filter, label]) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
                aria-pressed={activeFilter === filter}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? 'bg-accent-lime text-ink-950 font-semibold'
                    : 'bg-white/5 text-ink-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="text-xs text-ink-400 font-mono">
            Showing {visibleRepos.length} {activeFilter === 'featured' ? 'featured ' : ''}{visibleRepos.length === 1 ? 'project' : 'projects'}
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
          ) : visibleRepos.length === 0 ? (
            // Empty State
            <div className="text-center py-16 p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <FolderGit2 className="w-10 h-10 text-ink-400 mx-auto" />
              <h3 className="text-base font-bold text-white">No projects found</h3>
              <p className="text-xs text-ink-400 max-w-sm mx-auto">
                Try another repository category or sync GitHub again.
              </p>
            </div>
          ) : (
            // Project Cards
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleRepos.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    layout="position"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.28,
                      delay: shouldReduceMotion ? 0 : Math.min(index * 0.035, 0.2),
                      layout: { duration: shouldReduceMotion ? 0 : 0.25 },
                    }}
                  >
                <ProjectCard
                  repo={repo}
                  onOpenModal={(r) => setSelectedRepo(r)}
                />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
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
