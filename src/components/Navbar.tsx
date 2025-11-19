'use client';

import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const isMobile = window.innerWidth < 768;
    
    const navbarOffset = isMobile
      ? (id === 'home' || id === 'about') ? 400 : 350
      : (id === 'home' || id === 'about') ? 90 : 40;
      
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementTop - navbarOffset;

    setTimeout(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }, isMobile ? 150 : 0);

    setActiveSection(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map(link => link.href.substring(1));

      let currentSection = 'home';
      const navbarOffset = 90;
      const scrollPosition = window.scrollY + navbarOffset;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;

          if (scrollPosition >= sectionTop) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur transition-all duration-300 w-full left-0 right-0 ${
      scrolled 
        ? 'border-b border-border/60 bg-background/80 shadow-lg shadow-black/5' 
        : 'border-b border-border/30 bg-background/70'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a 
          href="#home" 
          className="font-bold text-lg tracking-tight relative group"
        >
          <span className="relative z-10 text-green-600 dark:text-green-500 text-2xl md:text-3xl font-bold">
            Aniket
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
        </a>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex gap-1 text-sm">
            {links.map(l => {
              const isActive = activeSection === l.href.substring(1);
              return (
                <a 
                  key={l.href} 
                  href={l.href}
                  onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    scrollToSection(l.href.substring(1));
                  }}
                  className={`relative px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-green-900 dark:text-green-50 bg-green-500/30 dark:bg-green-500/40' 
                      : 'text-text-secondary hover:text-green-600 dark:hover:text-green-500'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId={activeSection}
                      className="absolute inset-0 bg-green-900/30 dark:bg-green-500/10 border border-green-500/30 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="p-2 rounded-lg hover:bg-muted transition-colors" 
            onClick={() => setOpen(v => !v)} 
            aria-label="Toggle menu"
          >
            <motion.div
              animate={open ? "open" : "closed"}
              className="w-6 h-5 flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                className="w-full h-0.5 bg-foreground origin-center transition-all"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-full h-0.5 bg-foreground transition-all"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                className="w-full h-0.5 bg-foreground origin-center transition-all"
              />
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((l, idx) => {
                const isActive = activeSection === l.href.substring(1);
                return (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`px-4 py-3 rounded-lg transition-all ${
                      isActive 
                        ? 'text-green-900 dark:text-green-50 bg-green-500/30 dark:bg-green-500/40' 
                        : 'text-text-secondary hover:text-green-600 dark:hover:text-green-500 hover:bg-muted'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const sectionId = l.href.substring(1);
                      scrollToSection(sectionId);
                      setOpen(false);
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const sectionId = l.href.substring(1);
                      scrollToSection(sectionId);
                      setOpen(false);
                    }}
                  >
                    {l.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

