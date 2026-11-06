import React from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  GitBranch 
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-rhythm px-4 sm:px-6 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime mb-2">
              Internship History &amp; Industry Roles
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-400 max-w-md">
            Verified internship track record covering backend SaaS ERP architecture (DropXCorp) and enterprise data analysis workflows (Amdox Technologies).
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mt-12 space-y-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div 
              key={exp.organization + index}
              className="bezel-container"
            >
              <div className="bezel-inner">
                {/* Header row with Organization, Role, Status */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {exp.designation}
                      </h3>
                      <span className="text-accent-lime text-lg font-bold">@</span>
                      <span className="text-lg sm:text-xl font-bold text-ink-100">
                        {exp.organization}
                      </span>
                      {exp.isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          {exp.statusText}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-ink-300 border border-white/10">
                          {exp.statusText}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-ink-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent-lime" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-ink-400" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-ink-400" />
                        <span>Software Development Internship</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span className="text-xs font-mono text-ink-400 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5">
                      {exp.isCurrent ? 'Current Engagement' : 'Completed Internship'}
                    </span>
                  </div>
                </div>

                {/* Description & Responsibilities */}
                <div className="py-6 space-y-5">
                  <p className="text-sm text-ink-200 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-lime flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Key Technical Responsibilities &amp; Deliverables:</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div 
                          key={rIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-ink-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies Stack Tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-ink-400 mr-2 flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-ink-400" />
                    Technologies:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-ink-200 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
