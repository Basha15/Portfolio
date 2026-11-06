import React from 'react';
import { 
  Download, 
  FileText, 
  Printer, 
  Building2, 
  GraduationCap,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCE_DATA,
  EDUCATION_DATA
} from '../../data/portfolioData';

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
              Recruiter Dossier &bull; Verified Resume
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Curriculum Vitae (Fresher '26)
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
              <span>Download Official PDF</span>
            </a>
          </div>
        </div>

        {/* High-Fidelity Resume Document Sheet */}
        <div className="mt-10 bezel-container max-w-4xl mx-auto">
          <div className="bezel-inner p-6 sm:p-10 bg-ink-900 border border-white/10 space-y-8">
            
            {/* Resume Top Header */}
            <div className="border-b border-white/15 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-sm font-semibold text-accent-lime mt-1">
                  B.Tech Information Technology &bull; Backend Developer Intern
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-ink-300 mt-2">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-ink-400" />{PERSONAL_INFO.location}</span>
                  <span>&bull;</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-white"><Mail className="w-3 h-3 text-ink-400" />{PERSONAL_INFO.email}</a>
                  <span>&bull;</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1 hover:text-white"><Phone className="w-3 h-3 text-ink-400" />{PERSONAL_INFO.phone}</a>
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono text-ink-400 space-y-1">
                <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-lime">
                  linkedin.com/in/shaik-umar-basha-28b07b320
                </a>
                <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-lime">
                  github.com/Basha15
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-lime border-b border-white/10 pb-1">
                Professional Summary
              </h4>
              <p className="text-xs text-ink-200 leading-relaxed">
                Information Technology graduate (2026) with hands-on experience building Django web applications with authentication, role-based access, session management and SQL database operations. Handled the user and admin backend and database layer in a 4-member team, built REST APIs, and integrated machine-learning predictions (89% and 84% accuracy) into working applications. Currently working as a Backend Developer Intern on a multi-tenant SaaS platform. Strong in Python, OOP and SDLC concepts.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-lime border-b border-white/10 pb-1">
                Core Competencies &amp; Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-300">
                <div><strong className="text-white">Programming:</strong> Python, Java, C, JavaScript, TypeScript, Node.js</div>
                <div><strong className="text-white">Backend &amp; Web:</strong> Django, REST APIs, Next.js, HTML, CSS</div>
                <div><strong className="text-white">Databases &amp; ORM:</strong> PostgreSQL, Prisma, SQL, MySQL, SQLite, DBMS</div>
                <div><strong className="text-white">Data &amp; ML:</strong> Pandas, NumPy, Matplotlib, Random Forest, Data Cleaning</div>
                <div><strong className="text-white">Tools &amp; Testing:</strong> Git, GitHub, VS Code, Postman, Docker, Vercel</div>
                <div><strong className="text-white">Foundations:</strong> SDLC, OOP, Software Design, Agile, API Testing</div>
              </div>
            </div>

            {/* Work Experience */}
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
                      <span className="text-ink-300"> | {exp.organization}</span>
                    </div>
                    <span className="font-mono text-ink-400">{exp.period}</span>
                  </div>

                  <ul className="space-y-1 pl-4 text-xs text-ink-300 list-disc">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Selected Projects */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-lime flex items-center gap-2 border-b border-white/10 pb-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Selected Projects</span>
              </h4>

              <div className="space-y-3 text-xs text-ink-300">
                <div>
                  <div className="flex flex-wrap items-center justify-between font-bold text-white mb-1">
                    <span>Customer Churn Prediction Platform <span className="font-normal text-ink-400">| Django, REST API, SQLite, Pandas, NumPy, ML</span></span>
                    <span className="text-accent-lime font-mono text-[11px]">89% Accuracy • Team of 4</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-0.5 leading-relaxed text-ink-300">
                    <li>Built backend and database layer for users and admin in a 4-member team Django app with role-based access for 4 user roles.</li>
                    <li>Designed Django models, views, URL routes, and REST API endpoints for prediction requests and data workflows.</li>
                    <li>Integrated ML model with 89% accuracy to support customer churn behavioral analysis.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap items-center justify-between font-bold text-white mb-1">
                    <span>Digital Currency Management and Analysis Platform <span className="font-normal text-ink-400">| Django, REST API, Random Forest, SQL</span></span>
                    <span className="text-accent-lime font-mono text-[11px]">84% Accuracy • Team of 4</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-0.5 leading-relaxed text-ink-300">
                    <li>Implemented authentication, session management, and database operations for multi-role workflows.</li>
                    <li>Developed Random Forest prediction pipeline on 10,000+ records of historical data, achieving 84% accuracy.</li>
                    <li>Built Django platform that analyses historical economic data and presents currency-trend predictions in an interactive dashboard.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-lime flex items-center gap-2 border-b border-white/10 pb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h4>

              <div className="space-y-3">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <strong className="text-sm text-white font-bold">{edu.degree} {edu.field && <span>in {edu.field}</span>}</strong>
                      <div className="text-ink-400">{edu.institution}, {edu.location}</div>
                    </div>
                    <div className="text-left sm:text-right font-mono text-xs text-ink-300 mt-1 sm:mt-0">
                      <div>{edu.graduationDate}</div>
                      <div className="text-accent-lime font-semibold">{edu.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications and Achievements */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent-lime flex items-center gap-2 border-b border-white/10 pb-1">
                <Award className="w-3.5 h-3.5" />
                <span>Certifications and Achievements</span>
              </h4>

              <ul className="list-disc pl-4 space-y-1 text-xs text-ink-300">
                <li><strong className="text-white">Winner, Internal Smart India Hackathon (SIH) 2025:</strong> Recognized for developing a software solution in a college-level innovation challenge.</li>
                <li><strong className="text-white">Google Cloud Skills Boost:</strong> Prompt Design in Vertex AI.</li>
                <li><strong className="text-white">Deloitte:</strong> Data Analytics Job Simulation (Forage).</li>
                <li><strong className="text-white">Cisco Networking Academy:</strong> Cyber Security Essentials.</li>
              </ul>
            </div>

            {/* Download Callout Footer */}
            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-ink-400">
                Official verified resume file for hiring managers and recruiters.
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
