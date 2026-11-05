import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
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
              Education &amp; Credentials
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-400 max-w-md">
            Verified academic milestones and degree coursework in Information Technology.
          </p>
        </div>

        {/* Education Card Grid */}
        <div className="mt-10">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="bezel-container max-w-3xl">
              <div className="bezel-inner space-y-6">
                
                {/* Degree & Institution Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        Undergraduate Degree
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white pt-1">
                      {edu.degree} in {edu.field}
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
                  <div className="shrink-0 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-right">
                    <span className="text-[10px] uppercase font-semibold text-ink-400 block">
                      Cumulative Score
                    </span>
                    <span className="text-lg font-bold text-accent-lime font-mono">
                      {edu.score}
                    </span>
                  </div>
                </div>

                {/* Coursework & Focus Highlights */}
                {edu.highlights && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-accent-lime" />
                      <span>Academic Curriculum &amp; Specialization Areas</span>
                    </h4>

                    <div className="space-y-2">
                      {edu.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-ink-300">
                          <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Academic Disciplines */}
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] font-semibold text-ink-400 uppercase tracking-wider block mb-2">
                    Key Coursework
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Data Structures & Algorithms',
                      'Database Management Systems (DBMS)',
                      'Object-Oriented Programming',
                      'Operating Systems',
                      'Computer Networks',
                      'Software Engineering'
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-ink-300 border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
