
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, PenTool, Cpu, Calendar, ArrowRight } from 'lucide-react';
import { EXPERIENCE_DATA, SKILLS, AI_TOOLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-[5vw] md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white transition-colors">
            About & Experience
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Bio & Skills (5 cols) */}
            <div className="lg:col-span-5 space-y-16">
                
                {/* Bio */}
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-neutral-900 dark:text-white flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-neutral-400"></span>
                        The Designer
                    </h3>
                    <div className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 space-y-6">
                        <p>
                            Highly motivated and detail-oriented. With a background in <span className="text-neutral-900 dark:text-white font-medium">Commerce (B.Com Hons)</span>, 
                            I bring a unique perspective to design—balancing aesthetic creativity with business logic.
                        </p>
                        <p>
                            I specialize in turning complex ideas into intuitive interfaces using <span className="text-neutral-900 dark:text-white font-medium">Figma</span> and <span className="text-neutral-900 dark:text-white font-medium">Framer</span>.
                            Currently bridging the gap between design and development with Next.js and Tailwind.
                        </p>
                    </div>
                </div>

                {/* Skills Block */}
                <div className="space-y-8">
                     {/* Design Stack */}
                     <div className="space-y-4">
                        <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-medium">
                            <PenTool size={18} />
                            <h4>Design Stack</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-lg text-sm text-neutral-600 dark:text-neutral-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                     </div>

                     {/* AI Stack */}
                     <div className="space-y-4">
                        <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-medium">
                            <Cpu size={18} />
                            <h4>AI Integration</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {AI_TOOLS.map(tool => (
                                <span key={tool} className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-lg text-sm text-indigo-700 dark:text-indigo-300">
                                    {tool}
                                </span>
                            ))}
                        </div>
                     </div>
                </div>
            </div>

            {/* Right Column: Experience (7 cols) */}
            <div className="lg:col-span-7">
                <h3 className="text-xl font-medium text-neutral-900 dark:text-white flex items-center gap-3 mb-12">
                    <span className="w-8 h-[1px] bg-neutral-400"></span>
                    Work History
                </h3>

                <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-0 before:w-[1px] before:bg-neutral-200 dark:before:bg-neutral-800">
                    {EXPERIENCE_DATA.map((job, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-12 group"
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-0 top-1.5 w-10 h-10 bg-white dark:bg-[#050505] border border-neutral-200 dark:border-neutral-800 rounded-full flex items-center justify-center z-10 group-hover:border-indigo-500 transition-colors">
                                <Briefcase size={16} className="text-neutral-400 group-hover:text-indigo-500 transition-colors" />
                            </div>
                            
                            {/* Card Content */}
                            <div className="bg-neutral-50 dark:bg-[#0f0f0f] p-8 rounded-2xl border border-neutral-100 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 group-hover:translate-x-2">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-neutral-900 dark:text-white">{job.role}</h4>
                                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">{job.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-neutral-500 font-mono bg-white dark:bg-white/5 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/5 w-fit">
                                        <Calendar size={14} />
                                        {job.period}
                                    </div>
                                </div>
                                
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200 dark:border-white/5 pt-4 mt-4">
                                    {job.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;
