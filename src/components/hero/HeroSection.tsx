import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { 
  ArrowUpRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Copy, 
  Check, 
  Database,
  Server,
  Sparkles,
  MapPin,
  BriefcaseBusiness,
  CarFront,
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const roleInterval = window.setInterval(() => {
      setActiveRoleIndex((current) => (current + 1) % PERSONAL_INFO.openRoles.length);
    }, 2800);

    return () => window.clearInterval(roleInterval);
  }, [shouldReduceMotion]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      id="hero"
      initial={shouldReduceMotion ? false : 'hidden'}
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
      }}
      className="relative min-h-[92dvh] flex items-center pt-28 pb-16 md:py-32 px-4 sm:px-6"
    >
      {/* Background subtle radial grid */}
      <div className="absolute inset-0 bg-grid-dots pointer-events-none opacity-40"></div>
      <motion.div
        aria-hidden="true"
        className="absolute -top-20 right-[8%] w-72 h-72 rounded-full bg-accent-lime/10 blur-3xl pointer-events-none"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Narrative & CTAs (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-4">
              <motion.h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ type: 'spring', stiffness: 90, damping: 16, mass: 1.1 }}
              >
                {PERSONAL_INFO.name}<span className="text-accent-lime">.</span>
              </motion.h1>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime">
                Software Engineer &amp; Backend Developer
              </p>
            </div>
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-ink-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime"></span>
              </span>
              <span>Fresher (2026 Batch) &bull; <strong className="text-white">Backend Developer Intern @ DropXCorp</strong></span>
            </div>

            <h2 className="text-lg sm:text-xl font-medium text-ink-300 leading-snug">
              {PERSONAL_INFO.heroSubtitle}
            </h2>

            {/* Verified Fresher Narrative */}
            <p className="text-sm sm:text-base text-ink-400 leading-relaxed max-w-xl">
              I am an <strong className="text-ink-100 font-semibold">Information Technology graduate (May 2026)</strong> and <strong className="text-ink-100 font-semibold">Backend Developer Intern at DropXCorp</strong>. With hands-on experience building Django web applications, TypeScript REST APIs with Prisma &amp; PostgreSQL, and integrating machine learning prediction models (89% &amp; 84% accuracy), I am eager to contribute as an <strong className="text-accent-lime font-semibold">entry-level Software Engineer or Backend Developer</strong>.
            </p>

            {/* Recruiter Primary CTAs with Button-in-Button Architecture */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-primary-island group"
              >
                <span>Explore Featured Projects</span>
                <span className="w-6 h-6 rounded-full bg-ink-950/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="#resume"
                className="btn-ghost-island group"
              >
                <Download className="w-4 h-4 text-accent-lime" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-ink-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Umar</span>
              </a>
            </div>

            {/* Social & Channel Verification Row */}
            <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-white/5 text-xs">
              <span className="text-ink-400">Direct Connect:</span>
              
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

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-ink-300 hover:text-white hover:bg-white/5 border border-white/5 transition-all"
                title="Call phone"
              >
                <Phone className="w-3.5 h-3.5 text-accent-lime" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-ink-300 hover:text-white hover:bg-white/5 border border-white/5 transition-all"
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
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            variants={{ hidden: { opacity: 0, y: 28, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1 } }}
            transition={{ type: 'spring', stiffness: 70, damping: 15, mass: 1.1, delay: 0.2 }}
          >
            <div className="bezel-container relative overflow-hidden">
              <div className="bezel-inner relative overflow-hidden min-h-[450px] flex flex-col justify-between">
                <div aria-hidden="true" className="absolute -right-5 -top-16 w-52 h-52 rounded-full border border-accent-lime/20" />
                <div aria-hidden="true" className="absolute right-3 -top-10 w-36 h-36 rounded-full border border-accent-lime/20" />
                <div
                  aria-hidden="true"
                  className="absolute right-3 -top-10 z-10 h-36 w-36 pointer-events-none"
                >
                  <motion.div
                    className="absolute left-1/2 top-1/2"
                    style={{ translate: '-50% -50%' }}
                    animate={shouldReduceMotion ? undefined : {
                      x: [0, 12, 18, 12, 0, -12, -18, -12, 0],
                      y: [-12, -18, -12, 0, 12, 18, 12, 0, -12],
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={PERSONAL_INFO.openRoles[activeRoleIndex]}
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -5 }}
                        transition={{ duration: 0.22 }}
                        className="inline-flex whitespace-nowrap items-center gap-1.5 rounded-full border border-accent-lime/30 bg-ink-900 px-2.5 py-1 text-[10px] font-semibold text-accent-lime shadow-[0_0_18px_rgba(184,243,74,0.12)]"
                      >
                        <BriefcaseBusiness className="h-3 w-3" />
                        {PERSONAL_INFO.openRoles[activeRoleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>
                </div>
                <div className="relative">
                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                      <Sparkles className="w-3.5 h-3.5 text-accent-lime" />
                      Engineering profile
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 bg-accent-lime/10 text-accent-lime text-[10px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                      Open to roles
                    </span>
                  </div>

                  <motion.div
                    className="relative mt-10 h-24 w-24 shrink-0 overflow-hidden rounded-3xl border border-accent-lime/60 shadow-[0_0_14px_rgba(184,243,74,0.2)]"
                    animate={shouldReduceMotion ? undefined : { y: [0, -6, 0], rotate: [0, 1, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <img
                      src="/umar-basha-portrait.png"
                      alt="Portrait of Shaik Umar Basha"
                      className="absolute left-1/2 top-[-15px] h-72 w-48 max-w-none -translate-x-1/2 object-cover"
                    />
                  </motion.div>
                  <h3 className="mt-5 text-2xl font-bold text-white">{PERSONAL_INFO.shortName}</h3>
                  <p className="mt-1 text-sm text-ink-300">Backend Developer Intern <span className="text-accent-lime">@</span> DropXCorp</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-300">
                    <MapPin className="w-3.5 h-3.5 text-accent-lime" />
                    {PERSONAL_INFO.location}
                  </p>
                </div>

                <div className="relative mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center gap-2 text-accent-lime">
                      <Server className="w-4 h-4" />
                      <span className="text-xs font-semibold text-white">Backend</span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-ink-400">Django · TypeScript · REST</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center gap-2 text-accent-lime">
                      <Database className="w-4 h-4" />
                      <span className="text-xs font-semibold text-white">Data</span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-ink-400">PostgreSQL · ML workflows</p>
                  </div>
                </div>

                <div aria-hidden="true" className="relative mt-5 h-7 overflow-hidden border-y border-dashed border-white/10">
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 text-accent-lime drop-shadow-[0_0_8px_rgba(184,243,74,0.5)]"
                    animate={shouldReduceMotion ? undefined : { left: ['3%', '82%', '3%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <CarFront className="h-4 w-4" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};
