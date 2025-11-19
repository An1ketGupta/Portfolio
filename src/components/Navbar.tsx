'use client';

import { FloatingDock } from './ui/floating-dock';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
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
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
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
    <div className="sticky top-165 flex z-50 items-center justify-center w-full py-4">
      <FloatingDock items={items}/>
    </div>
  )  
}

