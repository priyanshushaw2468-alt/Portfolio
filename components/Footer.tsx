
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-[#050505] text-neutral-900 dark:text-white pt-24 pb-12 px-6 md:px-12 border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Header Section */}
        <div className="mb-32">
            <h2 className="text-[12vw] leading-[0.85] font-semibold tracking-tighter text-neutral-900 dark:text-white mb-16">
              Let's work <br/>
              <span className="text-neutral-400 dark:text-neutral-700">together.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-3">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Email</span>
                    <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="block text-xl font-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors decoration-1 underline-offset-4 hover:underline"
                    >
                        {CONTACT_INFO.email}
                    </a>
                </div>

                <div className="space-y-3">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Phone</span>
                    <p className="text-xl font-light text-neutral-600 dark:text-neutral-300">
                        {CONTACT_INFO.phone}
                    </p>
                </div>
                 <div className="space-y-3">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Location</span>
                    <p className="text-xl font-light text-neutral-600 dark:text-neutral-300">
                        {CONTACT_INFO.location}
                    </p>
                </div>
            </div>
        </div>

        {/* Connect Section - Redesigned */}
        <div className="border-t border-neutral-200 dark:border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 min-h-[200px]">
                <div className="col-span-1 py-8 md:py-12 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-white/10">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Connect</span>
                </div>
                
                <div className="col-span-3 flex flex-col md:flex-row md:items-center justify-between md:pl-12 py-8 md:py-12 gap-6">
                    <div className="flex flex-wrap gap-8 md:gap-16 w-full">
                        {SOCIAL_LINKS.map((link) => (
                            <a 
                                key={link.platform}
                                href={link.url}
                                className="group flex items-center gap-3 text-3xl md:text-5xl font-medium tracking-tight text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                            >
                                {link.platform}
                                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-indigo-600 dark:text-indigo-500" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-neutral-200 dark:border-white/5">
            <p className="text-xs text-neutral-600 uppercase tracking-wider font-mono">
                © {new Date().getFullYear()} Priyanshu Shaw
            </p>
            <p className="text-xs text-neutral-600 uppercase tracking-wider font-mono mt-4 md:mt-0">
                Designed & Built with Next.js
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
