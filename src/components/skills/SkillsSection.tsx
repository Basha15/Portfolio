import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Coffee, 
  Cpu, 
  Server, 
  Network, 
  Database, 
  HardDrive, 
  FileCode, 
  Table, 
  Binary, 
  LineChart, 
  Boxes, 
  Component, 
  Waypoints, 
  GitMerge,
  Filter,
  Layers,
  BrainCircuit,
  Layout
} from 'lucide-react';
import { SKILLS_DATA } from '../../data/portfolioData';
import { SkillItem, ProficiencyLevel } from '../../types/portfolio';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    'All',
    'Programming',
    'Backend & Web',
    'Databases & ORM',
    'Data & ML',
    'Tools & Practices',
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'Server': return <Server className="w-4 h-4" />;
      case 'Network': return <Network className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'HardDrive': return <HardDrive className="w-4 h-4" />;
      case 'Code2': return <Code2 className="w-4 h-4" />;
      case 'FileCode': return <FileCode className="w-4 h-4" />;
      case 'Table': return <Table className="w-4 h-4" />;
      case 'Binary': return <Binary className="w-4 h-4" />;
      case 'LineChart': return <LineChart className="w-4 h-4" />;
      case 'Boxes': return <Boxes className="w-4 h-4" />;
      case 'Component': return <Component className="w-4 h-4" />;
      case 'Waypoints': return <Waypoints className="w-4 h-4" />;
      case 'GitMerge': return <GitMerge className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'BrainCircuit': return <BrainCircuit className="w-4 h-4" />;
      case 'Layout': return <Layout className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  const getProficiencyBadge = (level: ProficiencyLevel) => {
    switch (level) {
      case 'Proficient':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-accent-lime/10 text-accent-lime border border-accent-lime/20">
            Proficient
          </span>
        );
      case 'Working Knowledge':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Working Knowledge
          </span>
        );
      case 'Foundational':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
            Foundational
          </span>
        );
    }
  };

  return (
    <section id="skills" className="section-rhythm px-4 sm:px-6 border-t border-white/5 relative bg-black/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-white/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime mb-2">
              Technical Stack &amp; Core Competencies
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-400 max-w-md">
            Verified directly from resume credentials. Clear, honest proficiency indications demonstrating practical experience across backends, databases, and data workflows.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-ink-400 shrink-0 ml-1 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-accent-lime text-ink-950 font-semibold shadow-sm'
                  : 'bg-white/5 text-ink-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredSkills.map((skill: SkillItem, index) => (
              <motion.div
                key={skill.name}
                layout="position"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.22,
                  delay: shouldReduceMotion ? 0 : Math.min(index * 0.025, 0.16),
                  layout: { duration: shouldReduceMotion ? 0 : 0.2 },
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="p-5 rounded-2xl bg-ink-900/70 border border-white/10 hover:border-white/25 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent-lime group-hover:scale-105 transition-transform">
                      {getIcon(skill.iconName)}
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-accent-lime transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  {getProficiencyBadge(skill.level)}
                </div>

                <p className="text-xs text-ink-400 leading-relaxed pl-10">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Evaluation Transparency Note */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
            <span><strong>Proficient:</strong> Hands-on daily usage in internships (DropXCorp/Amdox) and team projects.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span><strong>Working Knowledge:</strong> Production feature contributions &amp; university coursework.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
            <span><strong>Foundational:</strong> Algorithmic understanding &amp; low-level concepts.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
