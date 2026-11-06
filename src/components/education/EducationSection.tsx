import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-rhythm px-4 sm:px-6 border-t border-white/5 relative bg-black/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-white/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime mb-2">
              Academic Background
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Education &amp; Qualifications
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-400 max-w-md">
            Verified academic milestones and degree coursework in Information Technology.
          </p>
        </div>

        {/* Education Timeline Cards Grid */}
        <div className="mt-10 space-y-6 max-w-4xl">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="bezel-container">
              <div className="bezel-inner space-y-4">
                
                {/* Degree & Institution Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-3 border-b border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        {idx === 0 ? 'Undergraduate Degree (Fresher 2026)' : idx === 1 ? 'Intermediate (10+2)' : 'Secondary School Certificate (Class 10)'}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white pt-1">
                      {edu.degree} {edu.field && <span className="text-ink-300 font-normal">in {edu.field}</span>}
                    </h3>

                    <p className="text-sm font-medium text-ink-200">
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-ink-400 pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-accent-lime" />
                        {edu.graduationDate}
                      </span>
                    </div>
                  </div>

                  {/* Academic Score Pill */}
                  <div className="shrink-0 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-left sm:text-right">
                    <span className="text-[10px] uppercase font-semibold text-ink-400 block">
                      Score / Grade
                    </span>
                    <span className="text-base sm:text-lg font-bold text-accent-lime font-mono">
                      {edu.score}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                {edu.highlights && (
                  <div className="space-y-2 pt-1">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-ink-300">
                        <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
