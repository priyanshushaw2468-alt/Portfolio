
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../constants';

const Navigation: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Initialize theme based on HTML class or system preference
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 backdrop-blur-xl bg-background/80 border-b border-neutral-200 dark:border-white/5 transition-colors duration-300"
      >
        <a href="#" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white z-50 transition-colors">
          Priyanshu
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors relative group"
            >
              {item.label}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            className="text-neutral-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-white dark:bg-[#050505] flex flex-col items-center justify-center space-y-8 md:hidden transition-colors duration-300"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-neutral-900 dark:text-white/90 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
