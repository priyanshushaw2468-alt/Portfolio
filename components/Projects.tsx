
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-[10vw] leading-[0.9] font-semibold tracking-tighter text-neutral-900 dark:text-white transition-colors">
            Selected <br />
            <span className="text-neutral-400 dark:text-neutral-700">Work.</span>
          </h2>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px] md:auto-rows-[500px]">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                onClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
