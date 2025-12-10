
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] selection:bg-indigo-500/30 selection:text-indigo-800 dark:selection:text-indigo-200 transition-colors duration-300">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Projects onProjectClick={setSelectedProject} />
      </main>
      
      <Footer />

      {/* Project Details Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
