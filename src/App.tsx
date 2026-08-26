import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ATSResumeModal } from './components/ATSResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Toast } from './components/Toast';
import { Project, RoleFocus } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [atsModalOpen, setAtsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeRoleFilter, setActiveRoleFilter] = useState<RoleFocus>('all');

  // Handle Dark Mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDemo = () => {
    const demoElem = document.getElementById('demo-hr');
    if (demoElem) {
      demoElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAtsModalOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-200`}>
      
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenATS={() => setAtsModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Hero Section */}
      <main id="main-content">
        <Hero
          onOpenATS={() => setAtsModalOpen(true)}
          onOpenContact={handleOpenContact}
          onShowToast={showToast}
          activeRoleFilter={activeRoleFilter}
          onSelectRoleFilter={setActiveRoleFilter}
        />

        {/* About Section */}
        <AboutSection />

        {/* Projects Section */}
        <ProjectsSection onSelectProject={setSelectedProject} />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Education Section */}
        <EducationSection />

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Contact Section */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onOpenATS={() => setAtsModalOpen(true)} />

      {/* ATS Resume Modal */}
      <ATSResumeModal
        isOpen={atsModalOpen}
        onClose={() => setAtsModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenDemo={handleOpenDemo}
      />

      {/* Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

    </div>
  );
}
