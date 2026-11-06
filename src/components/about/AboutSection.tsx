import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  MapPin, 
  Target, 
  Code2, 
  CheckCircle2, 
  ArrowRight,
  Award,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATIONS_DATA, AWARDS_DATA } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-rhythm px-4 sm:px-6 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime mb-2">
              Candidate Profile
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              About Shaik Umar Basha
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-400 max-w-md">
            Information Technology graduate (May 2026) with hands-on internship experience in backend development, REST APIs, and database engineering.
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
                  <span>Fresher &bull; Technical Foundation</span>
                </div>

                <p className="text-sm sm:text-base text-ink-200 leading-relaxed">
                  I am a motivated <strong className="text-white">Information Technology student (graduating May 2026)</strong> at Malla Reddy College of Engineering, currently contributing as a <strong className="text-white">Backend Developer Intern at DropXCorp Pvt Ltd</strong> in Hyderabad.
                </p>

                <p className="text-sm sm:text-base text-ink-300 leading-relaxed">
                  My practical experience includes engineering REST APIs for <em>DropXcutz</em> (a multi-tenant salon ERP) using TypeScript, PostgreSQL, and Prisma ORM, and building school management workflows in <em>EduCore</em>. In academic and collaborative team settings, I have architected Django applications with user authentication, role-based access for multiple user personas, and integrated machine learning prediction pipelines achieving verified <strong className="text-accent-lime">89% and 84% accuracy rates</strong>.
                </p>

                <p className="text-sm sm:text-base text-ink-300 leading-relaxed">
                  As an entry-level software engineer, I bring a solid foundation in Python, Java, C, Object-Oriented Programming (OOP), SQL, and the Software Development Life Cycle (SDLC). I am eager to apply my analytical mindset, testing habits, and hunger for continuous learning within a high-impact engineering team.
                </p>

                {/* Core Competency Highlights */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/10">
                  <div className="flex items-start gap-2.5 text-xs text-ink-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                    <span>Django &amp; TypeScript REST API development</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-ink-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                    <span>PostgreSQL, SQLite &amp; Prisma ORM schema design</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-ink-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                    <span>Pandas &amp; NumPy data workflows (10,000+ records)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-ink-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                    <span>JWT auth, session management &amp; Razorpay payments</span>
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
                  Target Roles
                </h4>
                <p className="text-xs sm:text-sm text-ink-300 leading-relaxed">
                  {PERSONAL_INFO.careerObjective}
                </p>
              </div>
            </div>

            {/* Honors & Certifications Card */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-accent-lime uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Honors &amp; Verified Certifications</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {AWARDS_DATA.map((award, aIdx) => (
                  <div key={aIdx} className="p-3 rounded-xl bg-ink-900 border border-white/10 space-y-1">
                    <span className="text-[10px] font-semibold text-accent-lime uppercase">Hackathon Award</span>
                    <h5 className="font-bold text-white text-xs">{award.title}</h5>
                    <p className="text-[11px] text-ink-400">{award.event}</p>
                  </div>
                ))}

                {CERTIFICATIONS_DATA.map((cert, cIdx) => (
                  <div key={cIdx} className="p-3 rounded-xl bg-ink-900 border border-white/10 space-y-1">
                    <span className="text-[10px] font-semibold text-cyan-400 uppercase">{cert.badge}</span>
                    <h5 className="font-bold text-white text-xs">{cert.title}</h5>
                    <p className="text-[11px] text-ink-400">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Key Dossier Data Points (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Fact Card 1: DropXCorp Internship */}
            <div className="p-5 rounded-2xl bg-ink-900/60 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Current Internship</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Sep 2026 – Present
                </span>
              </div>
              <h3 className="text-base font-bold text-white">Backend Developer Intern</h3>
              <p className="text-xs text-ink-300 mt-1">DropXCorp Pvt Ltd &bull; Hyderabad, India</p>
              <p className="text-xs text-ink-400 mt-2">
                Developing multi-tenant SaaS features for DropXcutz (TypeScript REST API, PostgreSQL, Prisma) and EduCore ERP.
              </p>
            </div>

            {/* Fact Card 2: Academic Credential */}
            <div className="p-5 rounded-2xl bg-ink-900/60 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Standing</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Batch 2026
                </span>
              </div>
              <h3 className="text-base font-bold text-white">B.Tech in Information Technology</h3>
              <p className="text-xs text-ink-300 mt-1">Malla Reddy College of Engineering</p>
              <p className="text-xs text-ink-400 mt-2">
                Graduating: <strong className="text-ink-200">May 2026</strong> &bull; Current Cumulative Score: <strong className="text-accent-lime">CGPA 7.9 / 10</strong>
              </p>
            </div>

            {/* Fact Card 3: Location & Languages */}
            <div className="p-5 rounded-2xl bg-ink-900/60 border border-white/10 hover:border-white/20 transition-all space-y-3">
              <div className="flex items-center gap-2 text-accent-lime text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Location &amp; Languages</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Hyderabad, Telangana, India</h3>
                <p className="text-xs text-ink-300 mt-0.5">
                  Available for full-time entry-level on-site, hybrid, and remote roles.
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center gap-3 text-xs text-ink-300">
                <Globe className="w-3.5 h-3.5 text-ink-400 shrink-0" />
                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Telugu (Native)</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Hindi (Fluent)</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">English (Conversational)</span>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <a
              href="#experience"
              className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all group"
            >
              <span>Review Internship &amp; Project Experience</span>
              <ArrowRight className="w-4 h-4 text-accent-lime transition-transform group-hover:translate-x-1" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
