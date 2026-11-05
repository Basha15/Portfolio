import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  MapPin, 
  Target, 
  Code2, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-rhythm px-4 sm:px-6 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime mb-2">
              Professional Overview
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              About Me
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-400 max-w-md">
            Pragmatic software engineer with a focus on high-throughput backend services, clean architecture, and continuous learning.
          </p>
        </div>

        {/* Bento Grid: 2-Column Asymmetric Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bezel-container">
              <div className="bezel-inner space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent-lime uppercase tracking-wider">
                  <Code2 className="w-4 h-4" />
                  <span>The Engineering Mindset</span>
                </div>

                <p className="text-sm sm:text-base text-ink-200 leading-relaxed">
                  I am a passionate software developer currently working as a <strong className="text-white">Backend Engineer at DropXcorp</strong> in Hyderabad. My work revolves around building dependable services, designing scalable REST APIs, and modeling performant database architectures in Python and Django.
                </p>

                <p className="text-sm sm:text-base text-ink-300 leading-relaxed">
                  Parallel to my professional engagement, I am completing my <strong className="text-white">Bachelor of Technology in Information Technology</strong> at Malla Reddy College of Engineering (graduating May 2026, CGPA 7.9/10). This dual foundation of academic computer science rigor and hands-on industry engineering gives me both algorithmic depth and production discipline.
                </p>

                <p className="text-sm sm:text-base text-ink-300 leading-relaxed">
                  I believe software should be written with clarity, defensiveness, and purpose. Rather than pursuing surface vanity, I prioritize clean API contracts, efficient data indexing, and maintainable systems that solve real business problems without operational friction.
                </p>

                {/* Core tenets list */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/10">
                  <div className="flex items-start gap-2.5 text-xs text-ink-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                    <span>REST API serialization &amp; idempotency</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-ink-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                    <span>Database schema normalization &amp; ORM safety</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-ink-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                    <span>Systematic debugging &amp; clean refactoring</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-ink-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                    <span>Pragmatic learning &amp; engineering adaptability</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Objective Spotlight */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-accent-lime/10 text-accent-lime flex items-center justify-center shrink-0 border border-accent-lime/20">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Target Roles &amp; Objectives
                </h4>
                <p className="text-xs sm:text-sm text-ink-300 leading-relaxed">
                  {PERSONAL_INFO.careerObjective}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Dossier Data Points (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Fact Card 1: DropXcorp */}
            <div className="p-5 rounded-2xl bg-ink-900/60 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Current Engagement</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>
              <h3 className="text-base font-bold text-white">Backend Engineer</h3>
              <p className="text-xs text-ink-300 mt-1">DropXcorp &bull; Hyderabad, India</p>
              <p className="text-xs text-ink-400 mt-2">
                Developing backend services, API integrations, and database architectures.
              </p>
            </div>

            {/* Fact Card 2: Academic Credential */}
            <div className="p-5 rounded-2xl bg-ink-900/60 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>Formal Education</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  May 2026
                </span>
              </div>
              <h3 className="text-base font-bold text-white">B.Tech in Information Technology</h3>
              <p className="text-xs text-ink-300 mt-1">Malla Reddy College of Engineering</p>
              <p className="text-xs text-ink-400 mt-2">
                Current Cumulative Grade: <strong className="text-ink-200">CGPA 7.9 / 10</strong>
              </p>
            </div>

            {/* Fact Card 3: Location & Readiness */}
            <div className="p-5 rounded-2xl bg-ink-900/60 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 text-accent-lime text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Base Location</span>
              </div>
              <h3 className="text-base font-bold text-white">Hyderabad, Telangana, India</h3>
              <p className="text-xs text-ink-300 mt-1">
                Open to on-site, hybrid, and remote engineering opportunities.
              </p>
            </div>

            {/* Quick Action */}
            <a
              href="#experience"
              className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all group"
            >
              <span>Explore DropXcorp Experience Details</span>
              <ArrowRight className="w-4 h-4 text-accent-lime transition-transform group-hover:translate-x-1" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
