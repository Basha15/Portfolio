import { GitHubRepo } from '../types/portfolio';
import { FEATURED_PROJECTS_CONFIG, PERSONAL_INFO } from '../data/portfolioData';

const CACHE_KEY = 'basha_github_repos_cache_v1';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

interface CachedData {
  timestamp: number;
  repos: GitHubRepo[];
}

function isFeaturedRepository(repoName: string): boolean {
  return FEATURED_PROJECTS_CONFIG.some(
    (project) => project.featured && project.repoName.toLowerCase() === repoName.toLowerCase()
  );
}

function normalizeFeaturedRepositories(repos: GitHubRepo[]): GitHubRepo[] {
  return repos.map((repo) => ({
    ...repo,
    is_featured: isFeaturedRepository(repo.name),
  }));
}

export async function fetchGitHubRepos(): Promise<{ repos: GitHubRepo[]; fromCache: boolean; error: string | null }> {
  // Check local cache first
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed: CachedData = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_TTL_MS && parsed.repos.length > 0) {
        return { repos: normalizeFeaturedRepositories(parsed.repos), fromCache: true, error: null };
      }
    }
  } catch (e) {
    console.warn('Local storage cache lookup failed:', e);
  }

  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };

  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=30`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`GitHub API returned HTTP ${response.status} (${response.statusText})`);
    }

    const rawRepos: any[] = await response.json();

    if (!Array.isArray(rawRepos)) {
      throw new Error('Invalid response structure from GitHub API');
    }

    // Filter out forks if not wanted, or keep them. Sort so featured repos are at top
    const formattedRepos: GitHubRepo[] = rawRepos
      .filter((r) => !r.fork || r.stargazers_count > 0)
      .map((r) => {
        const isFeatured = isFeaturedRepository(r.name);
        return {
          id: r.id,
          name: r.name,
          full_name: r.full_name,
          description: r.description,
          html_url: r.html_url,
          homepage: r.homepage || null,
          language: r.language || 'Code',
          stargazers_count: r.stargazers_count || 0,
          forks_count: r.forks_count || 0,
          topics: Array.isArray(r.topics) ? r.topics : [],
          updated_at: r.updated_at,
          created_at: r.created_at,
          is_featured: isFeatured,
        };
      });

    // Save to cache
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), repos: formattedRepos })
      );
    } catch (e) {
      console.warn('Failed to save repos to localStorage cache:', e);
    }

    return { repos: formattedRepos, fromCache: false, error: null };
  } catch (err: any) {
    console.error('Failed to fetch from GitHub API:', err);

    // Fallback: Check if stale cache exists
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed: CachedData = JSON.parse(cached);
        if (parsed.repos && parsed.repos.length > 0) {
          return {
            repos: normalizeFeaturedRepositories(parsed.repos),
            fromCache: true,
            error: 'GitHub API rate limit or network issue; displaying cached repositories.',
          };
        }
      }
    } catch {
      // ignore
    }

    // Fallback to static verified configuration
    const fallbackRepos: GitHubRepo[] = FEATURED_PROJECTS_CONFIG.map((f, idx) => ({
      id: 1000 + idx,
      name: f.repoName,
      full_name: `${PERSONAL_INFO.githubUsername}/${f.repoName}`,
      description: f.description,
      html_url: f.githubUrl,
      homepage: f.liveUrl || null,
      language: f.technologies[0] || 'Python',
      stargazers_count: 1,
      forks_count: 0,
      topics: f.technologies.map(t => t.toLowerCase().replace(/[^a-z0-9]/g, '')),
      updated_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      is_featured: f.featured,
    }));

    return {
      repos: fallbackRepos,
      fromCache: false,
      error: 'GitHub live sync unavailable. Displaying verified local repositories.',
    };
  }
}
