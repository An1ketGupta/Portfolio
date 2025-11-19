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
      ? (id === 'home' || id === 'about') ? 400 : (id === 'contact') ? 100 : 350
      : (id === 'home' || id === 'about') ? 90 : (id === 'contact') ? 100 : 40;
      
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
    let ticking = false;
    const sections = links.map(link => link.href.substring(1));

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          let currentSection = 'home';
          const navbarOffset = 90;
          const scrollPosition = window.scrollY + navbarOffset;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollBottom = window.scrollY + windowHeight;

          // Check if we're near the bottom of the page (for contact section)
          const isNearBottom = scrollBottom >= documentHeight - 150;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              const sectionTop = element.offsetTop;
              const sectionBottom = sectionTop + element.offsetHeight;
              
              // Check if section is in viewport (visible in the viewport)
              const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
              
              // Check if we're within the section bounds
              const isWithinSection = scrollPosition >= sectionTop - 100 && scrollPosition <= sectionBottom + 100;

              // For the last section (contact), check multiple conditions
              if (i === sections.length - 1) {
                // If near bottom, in viewport, or within section bounds, mark as active
                if (isNearBottom || isInViewport || isWithinSection) {
                  currentSection = section;
                  break;
                }
              }
              // For other sections, check if scroll position is past the section start
              else if (scrollPosition >= sectionTop - 50) {
                currentSection = section;
                break;
              }
            }
          }

          setActiveSection(prev => prev !== currentSection ? currentSection : prev);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    // Handle hash changes (when clicking nav links)
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && sections.includes(hash)) {
        setActiveSection(hash);
        // Also trigger scroll check after a delay to ensure proper detection
        setTimeout(handleScroll, 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash on mount
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky transform translate-y-3 top-0 z-50 backdrop-blur transition-all duration-300 w-fit mx-auto px-3 rounded-xl ${
        scrolled 
          ? 'border-b border-border/60 bg-background/80 shadow-lg shadow-black/5' 
          : 'border-b border-border/30 bg-background/70'
      }`}
    >
      <div className="px-4 flex items-center justify-center h-16 gap-6">
        <motion.a 
          href="#home" 
          onClick={(e: MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="font-bold text-lg tracking-tight relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="text-foreground group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">AG</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
        </motion.a>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex gap-1 text-sm">
            {links.map((l, idx) => {
              const isActive = activeSection === l.href.substring(1);
              return (
                <motion.a 
                  key={l.href} 
                  href={l.href}
                  onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    scrollToSection(l.href.substring(1));
                  }}
                  className={`relative px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive 
                      ? 'text-green-700 dark:text-green-50 bg-green-100 dark:bg-green-500/40 border border-green-200 dark:border-green-500/30' 
                      : 'text-text-secondary hover:text-green-600 dark:hover:text-green-500'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-green-100/50 dark:bg-green-500/10 border border-green-200/50 dark:border-green-500/30 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ThemeToggle />
          </motion.div>
          <motion.button 
            className="p-2 rounded-lg hover:bg-muted transition-colors" 
            onClick={() => setOpen(v => !v)} 
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
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
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l, idx) => {
                const isActive = activeSection === l.href.substring(1);
                return (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{ 
                      delay: idx * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    whileHover={{ x: 4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-3 rounded-lg transition-all relative ${
                      isActive 
                        ? 'text-green-700 dark:text-green-50 bg-green-100 dark:bg-green-500/40 border-l-2 border-green-500' 
                        : 'text-text-secondary hover:text-green-600 dark:hover:text-green-500 hover:bg-green-50 dark:hover:bg-muted'
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
                    {isActive && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-r-full"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

