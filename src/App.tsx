import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { EducationSection } from './components/education/EducationSection';
import { ResumeSection } from './components/resume/ResumeSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { ScrollReveal } from './components/ui/ScrollReveal';
import { CustomCursor } from './components/ui/CustomCursor';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('umar_portfolio_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('umar_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-ground)] text-[var(--text-primary)] selection:bg-accent-lime selection:text-ink-950 transition-colors duration-300">
      {/* Top Floating Island Header */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal delay={0.04}><SkillsSection /></ScrollReveal>
        <ScrollReveal><ExperienceSection /></ScrollReveal>
        <ScrollReveal delay={0.04}><ProjectsSection /></ScrollReveal>
        <ScrollReveal><EducationSection /></ScrollReveal>
        <ScrollReveal delay={0.04}><ResumeSection /></ScrollReveal>
        <ScrollReveal><ContactSection /></ScrollReveal>
      </main>

      {/* Recruiter-friendly Footer */}
      <Footer />
      <CustomCursor />
    </div>
  );
};

export default App;
