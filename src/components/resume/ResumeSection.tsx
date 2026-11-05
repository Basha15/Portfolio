import React from 'react';
import { 
  Download, 
  FileText, 
  Printer, 
  Building2, 
  GraduationCap 
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA } from '../../data/portfolioData';

export const ResumeSection: React.FC = () => {

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section-rhythm px-4 sm:px-6 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-white/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime mb-2">
              Recruiter Dossier
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Curriculum Vitae
            </h2>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-ink-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Shaik_Umar_Basha_Resume.pdf"
              className="btn-primary-island text-xs py-2 px-4 group"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Resume Preview Sheet Container */}
        <div className="mt-10 bezel-container max-w-4xl mx-auto">
          <div className="bezel-inner p-6 sm:p-10 bg-ink-900 border border-white/10 space-y-8">
            
            {/* Resume Top Header */}
            <div className="border-b border-white/15 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-sm font-semibold text-accent-lime mt-1">
                  {PERSONAL_INFO.headline}
                </p>
                <p className="text-xs text-ink-400 mt-1">
                  {PERSONAL_INFO.location} &bull; <a href={`mailto:${PERSONAL_INFO.email}`} className="text-ink-300 hover:text-white">{PERSONAL_INFO.email}</a>
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono text-ink-400 space-y-1">
                <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-lime">
                  github.com/Basha15
                </a>
                <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-lime">
                  linkedin.com/in/shaik-umar-basha
                </a>
              </div>
            </div>

            {/* Resume Section: Work Experience */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-lime flex items-center gap-2 border-b border-white/10 pb-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>Professional Experience</span>
              </h4>

              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <strong className="text-sm text-white font-bold">{exp.designation}</strong>
                      <span className="text-ink-400"> &mdash; {exp.organization}</span>
                    </div>
                    <span className="font-mono text-ink-400">{exp.period} | {exp.location}</span>
                  </div>

                  <p className="text-xs text-ink-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 pl-4 text-xs text-ink-300 list-disc">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Resume Section: Education */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-lime flex items-center gap-2 border-b border-white/10 pb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h4>

              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <strong className="text-sm text-white font-bold">{edu.degree} in {edu.field}</strong>
                    <div className="text-ink-400">{edu.institution}, {edu.location}</div>
                  </div>
                  <div className="text-left sm:text-right font-mono text-xs text-ink-300 mt-1 sm:mt-0">
                    <div>{edu.graduationDate}</div>
                    <div className="text-accent-lime font-semibold">{edu.score}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Section: Technical Skills */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-lime flex items-center gap-2 border-b border-white/10 pb-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Technical Skills Summary</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-ink-300">
                <div>
                  <strong className="text-white block mb-0.5">Programming &amp; Scripting:</strong>
                  <span>Python (Proficient), Java, C</span>
                </div>
                <div>
                  <strong className="text-white block mb-0.5">Backend &amp; Databases:</strong>
                  <span>Django, Django REST Framework, MySQL, SQLite, REST APIs</span>
                </div>
                <div>
                  <strong className="text-white block mb-0.5">Data &amp; Libraries:</strong>
                  <span>Pandas, NumPy, Matplotlib, Data Preprocessing</span>
                </div>
                <div>
                  <strong className="text-white block mb-0.5">Frontend &amp; Engineering:</strong>
                  <span>HTML5, CSS3/SCSS, JavaScript (ES6+), Git, OOP, SDLC</span>
                </div>
              </div>
            </div>

            {/* Download Callout Footer */}
            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-ink-400">
                Official resume file available for hiring and recruiting teams.
              </span>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Shaik_Umar_Basha_Resume.pdf"
                className="btn-primary-island text-xs py-2 px-5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Official PDF</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
