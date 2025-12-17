
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, ArrowUpRight, Play, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex flex-col bg-white dark:bg-[#050505] overflow-y-auto"
    >
      {/* Navbar for Modal */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/5">
        <h2 className="text-lg font-medium text-neutral-900 dark:text-white">Case Study</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="max-w-4xl mx-auto w-full px-6 md:px-12 py-12 pb-32">
        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
        >
            <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium border border-indigo-100 dark:border-indigo-500/30">
                    {project.category}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-sm font-mono border border-neutral-200 dark:border-white/5">
                    {project.year}
                </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
                {project.title}
            </h1>
            
            <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-8">
                {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.prototypeUrl && (
                <a 
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
                >
                  <Play size={18} className="fill-current" />
                  View Prototype
                </a>
              )}
              
              {project.behanceUrl && (
                <a 
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-neutral-200 dark:border-white/20 text-neutral-900 dark:text-white rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
                >
                  <ExternalLink size={18} />
                  Behance Case Study
                </a>
              )}
            </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl border border-neutral-200 dark:border-white/5"
        >
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
            />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1 space-y-8">
                <div>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-3">Role</h3>
                    <p className="text-neutral-900 dark:text-white font-medium">{project.role || "UI/UX Designer"}</p>
                </div>
                <div>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-3">Timeline</h3>
                    <p className="text-neutral-900 dark:text-white font-medium">{project.timeline || "4 Weeks"}</p>
                </div>
                <div>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-3">Tools</h3>
                    <p className="text-neutral-900 dark:text-white font-medium">{project.tools || "Figma"}</p>
                </div>
            </div>

            <div className="md:col-span-2 space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">The Challenge</h3>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {project.challenge || "Every project begins with a problem. For this specific case, we needed to identify the core user pain points and address them through intuitive design patterns."}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">The Solution</h3>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {project.solution || "Our solution focused on simplifying the user journey. By reducing cognitive load and improving visual hierarchy, we created an experience that feels natural and efficient."}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">The Outcome</h3>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {project.outcome || "The final design resulted in higher engagement rates and positive user feedback. It stands as a testament to the power of user-centered design thinking."}
                    </p>
                </motion.div>
            </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-24 pt-12 border-t border-neutral-200 dark:border-white/10 flex justify-between items-center">
            <p className="text-neutral-500">Next Project</p>
            <button onClick={onClose} className="group flex items-center gap-2 text-neutral-900 dark:text-white font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                View all work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectDetails;
