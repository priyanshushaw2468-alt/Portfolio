
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getGridClasses = (style: Project['layoutStyle']) => {
    switch (style) {
      case 'featured_large':
        return 'md:col-span-2 md:row-span-1';
      case 'tall':
        return 'md:col-span-1 md:row-span-2';
      case 'grid_square':
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(project)}
      className={`group relative overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900 cursor-pointer ${getGridClasses(project.layoutStyle)}`}
    >
      {/* Image Container with Grayscale Effect */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
      </div>

      {/* Hover Reveal Button (Top Right) */}
      <div className="absolute top-6 right-6 z-20 overflow-hidden rounded-full">
        <div className="flex h-12 w-12 items-center justify-center bg-white text-black transition-all duration-300 translate-y-[-150%] group-hover:translate-y-0 shadow-lg">
          <ArrowUpRight size={24} />
        </div>
      </div>

      {/* Content (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-20">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-3">
                 <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide text-white/90 border border-white/20 rounded-full backdrop-blur-sm">
                    {project.category}
                </span>
                <span className="text-white/50 text-xs font-mono">
                    {project.year}
                </span>
            </div>
            
            <h3 className="text-3xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                {project.title}
            </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
