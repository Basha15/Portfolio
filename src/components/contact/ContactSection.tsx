import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Linkedin, 
  Github, 
  Loader2,
  Clock
} from 'lucide-react';
import { ContactFormData } from '../../types/portfolio';
import { validateContactForm, submitContactInquiry, SendMessageResponse } from '../../services/contact';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    recruiterName: '',
    companyName: '',
    workEmail: '',
    opportunityType: 'Full-Time Software Engineer',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResponse, setSubmissionResponse] = useState<SendMessageResponse | null>(null);

  const opportunityOptions = [
    'Full-Time Backend Engineer',
    'Software Developer Role',
    'Python / Django Developer',
    'Associate Software Engineer',
    'Contract / Freelance Project',
    'Other Engineering Query'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await submitContactInquiry(formData);
      setSubmissionResponse(response);
      if (response.success && !response.usedFallback) {
        setFormData({
          recruiterName: '',
          companyName: '',
          workEmail: '',
          opportunityType: 'Full-Time Software Engineer',
          subject: '',
          message: '',
          honeypot: '',
        });
      }
    } catch (err: any) {
      setSubmissionResponse({
        success: false,
        message: err.message || 'An unexpected error occurred while sending your message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-rhythm px-4 sm:px-6 border-t border-white/5 relative bg-black/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime">
                Recruiter Direct Channel
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Get in Touch / Hire Me
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-400 max-w-md">
            Hiring managers and recruiters: connect directly for software engineering positions, technical interviews, or confidential discussions.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Guarantee (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Status Card */}
            <div className="p-6 rounded-2xl bg-ink-900 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-lime">
                <Clock className="w-4 h-4" />
                <span>Response SLA</span>
              </div>
              <h3 className="text-base font-bold text-white">Guaranteed Prompt Turnaround</h3>
              <p className="text-xs text-ink-300 leading-relaxed">
                All recruiter and engineering opportunities sent through this channel receive a verified response within 24 to 48 hours.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-xs group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-accent-lime group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-white font-semibold">Direct Email</div>
                  <div className="text-ink-400 font-mono text-[11px] truncate">{PERSONAL_INFO.email}</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-xs group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-semibold">LinkedIn Profile</div>
                  <div className="text-ink-400 text-[11px]">in/shaik-umar-basha</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all text-xs group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-semibold">GitHub Activity</div>
                  <div className="text-ink-400 text-[11px]">github.com/Basha15</div>
                </div>
              </a>
            </div>

            {/* Security Note */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-[11px] text-ink-400 leading-relaxed">
              <strong className="text-ink-300 block mb-1">Privacy &amp; Anti-Spam:</strong>
              Protected against bot abuse through honeypot fields and client rate limiting. Your email is kept strictly confidential.
            </div>

          </div>

          {/* Right Column: Contact Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bezel-container">
              <div className="bezel-inner">
                
                {/* Form Header */}
                <div className="pb-6 mb-6 border-b border-white/10">
                  <h3 className="font-display text-xl font-bold text-white">
                    Submit Candidate Inquiry
                  </h3>
                  <p className="text-xs text-ink-400 mt-1">
                    Provide the relevant role context and Umar Basha will review your message directly.
                  </p>
                </div>

                {/* Success Notification */}
                {submissionResponse && submissionResponse.success && (
                  <div className="mb-6 p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs space-y-3 animate-fade-in">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-sm text-white">Inquiry Successfully Processed</h4>
                        <p className="mt-1 leading-relaxed">{submissionResponse.message}</p>
                      </div>
                    </div>

                    {submissionResponse.usedFallback && submissionResponse.mailtoUrl && (
                      <div className="pt-2 border-t border-emerald-500/20 flex flex-wrap items-center gap-3">
                        <a
                          href={submissionResponse.mailtoUrl}
                          className="btn-primary-island text-xs py-2 px-4"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Open Mail Client Now</span>
                        </a>
                        <span className="text-[11px] text-emerald-300">
                          Pre-filled subject and body ready to dispatch.
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => setSubmissionResponse(null)}
                      type="button"
                      className="text-[11px] text-emerald-400 hover:underline pt-1 block"
                    >
                      &larr; Submit another inquiry
                    </button>
                  </div>
                )}

                {/* Error Banner */}
                {submissionResponse && !submissionResponse.success && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-start gap-3 animate-fade-in">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Submission Notice</p>
                      <p className="mt-0.5">{submissionResponse.message}</p>
                    </div>
                  </div>
                )}

                {/* The Contact Form */}
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Anti-spam honeypot (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website-url">Leave this empty</label>
                    <input
                      id="website-url"
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="recruiterName" className="block text-xs font-semibold text-ink-200 mb-1.5">
                        Recruiter / Contact Name <span className="text-accent-lime">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="recruiterName"
                          type="text"
                          name="recruiterName"
                          value={formData.recruiterName}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Jenkins"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-ink-950/80 border text-xs text-white placeholder-ink-500 focus:outline-none transition-colors ${
                            errors.recruiterName ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-accent-lime'
                          }`}
                        />
                      </div>
                      {errors.recruiterName && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.recruiterName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-semibold text-ink-200 mb-1.5">
                        Company / Organization <span className="text-accent-lime">*</span>
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. DropXcorp, Google, Stripe"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-ink-950/80 border text-xs text-white placeholder-ink-500 focus:outline-none transition-colors ${
                          errors.companyName ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-accent-lime'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.companyName}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Work Email & Opportunity Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="workEmail" className="block text-xs font-semibold text-ink-200 mb-1.5">
                        Work / Corporate Email <span className="text-accent-lime">*</span>
                      </label>
                      <input
                        id="workEmail"
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-ink-950/80 border text-xs text-white placeholder-ink-500 focus:outline-none transition-colors ${
                          errors.workEmail ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-accent-lime'
                        }`}
                      />
                      {errors.workEmail && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.workEmail}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="opportunityType" className="block text-xs font-semibold text-ink-200 mb-1.5">
                        Job Position / Opportunity
                      </label>
                      <select
                        id="opportunityType"
                        name="opportunityType"
                        value={formData.opportunityType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-ink-950/80 border border-white/10 text-xs text-white focus:outline-none focus:border-accent-lime transition-colors"
                      >
                        {opportunityOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-ink-950 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-ink-200 mb-1.5">
                      Subject / Role Title <span className="text-accent-lime">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Backend Software Engineer Role - Technical Interview Invitation"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-ink-950/80 border text-xs text-white placeholder-ink-500 focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-accent-lime'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-ink-200 mb-1.5">
                      Message / Role Context <span className="text-accent-lime">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell Umar about the team, required tech stack, compensation range, and interview timeline..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-ink-950/80 border text-xs text-white placeholder-ink-500 focus:outline-none transition-colors resize-y ${
                        errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10 focus:border-accent-lime'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-island text-xs py-3 px-6 w-full sm:w-auto justify-center group disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message to Umar Basha</span>
                          <span className="w-5 h-5 rounded-full bg-ink-950/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <Send className="w-3 h-3" />
                          </span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] text-ink-400">
                      Dispatches to <strong className="text-ink-200 font-mono">{PERSONAL_INFO.email}</strong>
                    </span>
                  </div>

                </form>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
