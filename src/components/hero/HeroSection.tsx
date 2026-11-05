import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  Terminal, 
  Database, 
  Server
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippet = `{
  "status": "active",
  "engineer": "Shaik Umar Basha",
  "current_role": "Backend Engineer @ DropXcorp",
  "location": "Hyderabad, Telangana, India",
  "core_stack": ["Python", "Django", "DRF", "MySQL"],
  "academic": "B.Tech IT (2026) | CGPA 7.9",
  "availability": "Open to Full-Time Engineering Roles"
}`;

  return (
    <section id="hero" className="relative min-h-[92dvh] flex items-center pt-28 pb-16 md:py-32 px-4 sm:px-6">
      {/* Background subtle radial gradient */}
      <div className="absolute inset-0 bg-grid-dots pointer-events-none opacity-40"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Narrative & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-ink-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime"></span>
              </span>
              <span>Backend Engineer at <strong className="text-white">DropXcorp</strong></span>
            </div>

            {/* Main Greeting & Headings */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime">
                Personal Portfolio &amp; Engineering Dossier
              </p>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Hello, I'm <br className="hidden sm:inline" />
                <span className="text-white">{PERSONAL_INFO.name}.</span>
              </h1>

              <h2 className="text-lg sm:text-xl font-medium text-ink-300 leading-snug">
                {PERSONAL_INFO.heroSubtitle}
              </h2>
            </div>

            {/* Verified Narrative */}
            <p className="text-sm sm:text-base text-ink-400 leading-relaxed max-w-xl">
              I am a <strong className="text-ink-100 font-semibold">Backend Engineer</strong> interested in software development, backend engineering, robust REST APIs, database architecture, and modern web technologies. Focused on building production-grade services that scale with integrity.
            </p>

            {/* Recruiter Primary CTAs with Button-in-Button Architecture */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-primary-island group"
              >
                <span>View My Projects</span>
                <span className="w-6 h-6 rounded-full bg-ink-950/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="#resume"
                className="btn-ghost-island group"
              >
                <Download className="w-4 h-4 text-accent-lime" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-ink-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Channel Verification Row */}
            <div className="pt-4 flex items-center gap-4 border-t border-white/5">
              <span className="text-xs text-ink-400">Direct Profiles:</span>
              
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-ink-300 hover:text-white hover:bg-white/5 border border-white/5 transition-all"
                aria-label="GitHub Profile"
                title="GitHub @Basha15"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-ink-300 hover:text-white hover:bg-white/5 border border-white/5 transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-ink-300 hover:text-white hover:bg-white/5 border border-white/5 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent-lime" />
                    <span className="text-accent-lime text-[11px] font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-ink-400" />
                    <span className="text-[11px]">{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Double-Bezel Backend Telemetry / Terminal Widget (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bezel-container">
              <div className="bezel-inner">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                    <span className="ml-2 font-mono text-[11px] text-ink-400">api/v1/engineer/status</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>200 OK (24ms)</span>
                  </div>
                </div>

                {/* API Request Line */}
                <div className="flex items-center gap-2 text-xs font-mono text-ink-400 mb-3 bg-black/40 p-2 rounded border border-white/5">
                  <span className="text-accent-lime font-bold">GET</span>
                  <span className="text-ink-200">/api/v1/engineers/shaik-umar-basha</span>
                </div>

                {/* Code JSON Response */}
                <pre className="text-xs text-ink-300 overflow-x-auto leading-relaxed p-1">
                  <code>{codeSnippet}</code>
                </pre>

                {/* Technical Footprint Badges */}
                <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                    <div className="flex items-center justify-center text-accent-lime mb-1">
                      <Server className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[11px] font-bold text-white">Backend</div>
                    <div className="text-[9px] text-ink-400">Python &amp; Django</div>
                  </div>

                  <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                    <div className="flex items-center justify-center text-cyan-400 mb-1">
                      <Database className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[11px] font-bold text-white">Databases</div>
                    <div className="text-[9px] text-ink-400">MySQL &amp; SQLite</div>
                  </div>

                  <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                    <div className="flex items-center justify-center text-emerald-400 mb-1">
                      <Terminal className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[11px] font-bold text-white">APIs</div>
                    <div className="text-[9px] text-ink-400">REST Contracts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
