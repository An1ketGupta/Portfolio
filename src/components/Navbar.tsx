'use client';

import { FloatingDock } from './ui/floating-dock';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  IconHome, 
  IconUser, 
  IconFolder, 
  IconCode, 
  IconMail,
  IconSun,
  IconMoon
} from '@tabler/icons-react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [showDock, setShowDock] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowDock(heroBottom < window.innerHeight * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  const items = [
    { title: 'Home', icon: <IconHome className="h-full w-full" />, href: '#home' },
    { title: 'Education', icon: <IconUser className="h-full w-full" />, href: '#about' },
    { title: 'Projects', icon: <IconFolder className="h-full w-full" />, href: '#projects' },
    { title: 'Skills', icon: <IconCode className="h-full w-full" />, href: '#skills' },
    { title: 'Contact', icon: <IconMail className="h-full w-full" />, href: '#contact' },
    { 
      title: 'Theme', 
      icon: mounted ? (
        isDark ? <IconSun className="h-full w-full" /> : <IconMoon className="h-full w-full" />
      ) : (
        <IconSun className="h-full w-full" />
      ), 
      onClick: toggleTheme 
    },
  ];

  return (
    <AnimatePresence>
      {showDock && (
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0, 0.2, 1]
          }}
          className="fixed bottom-0 left-0 right-0 flex z-50 items-center justify-center w-full pointer-events-none"
          style={{ 
            paddingBottom: 'max(3rem, calc(3rem + env(safe-area-inset-bottom, 0px)))'
          }}
        >
          <div className="pointer-events-auto">
            <FloatingDock items={items}/>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )  
}

