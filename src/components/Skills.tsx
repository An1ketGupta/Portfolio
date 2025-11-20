"use client";
import { skills } from "../data/site";
import { motion } from 'framer-motion';
import { staggerChildren } from "../lib/motion";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  SiJavascript, 
  SiPython, 
  SiCplusplus, 
  SiTypescript, 
  SiMysql, 
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiAmazon,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { 
  FaDatabase, 
  FaPlug, 
  FaLock, 
  FaCreditCard 
} from "react-icons/fa";

function SkillIcon({
  skill,
  skillIcons,
  skillColors,
  radius,
  angle,
  duration,
  isDark,
}: {
  skill: string;
  skillIcons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>>;
  skillColors: Record<string, string | { light: string; dark: string }>;
  radius: number;
  angle: number;
  duration: number;
  isDark: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const colorValue = skillColors[skill];
  const iconColor = typeof colorValue === 'object' 
    ? (isDark ? colorValue.dark : colorValue.light)
    : (colorValue || '#6b7280');

  // Helper function to convert hex to RGB for glow effect
  const hexToRgb = (hex: string): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '255, 255, 255';
  };

  const glowRgb = hexToRgb(iconColor);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
        pointerEvents: 'none',
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
      initial={{
        rotate: angle,
      }}
    >
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ zIndex: 50, pointerEvents: 'auto' }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-card to-card/80 text-card-foreground rounded-full shadow-xl shadow-green-500/5 border-2 border-green-500/10 dark:border-green-500/15 flex items-center justify-center backdrop-blur-sm hover:border-green-500/20 hover:shadow-green-500/10 transition-all cursor-pointer relative">
          {(() => {
            const IconComponent = skillIcons[skill];
            return IconComponent ? (
              <IconComponent 
                className="w-8 h-8 transition-all duration-300" 
                style={{ 
                  color: iconColor,
                  filter: isDark 
                    ? `drop-shadow(0 0 8px rgba(${glowRgb}, 0.5)) drop-shadow(0 0 12px rgba(${glowRgb}, 0.3)) drop-shadow(0 0 16px rgba(${glowRgb}, 0.15))`
                    : 'drop-shadow(0 0 8px rgba(34,197,94,0.15))'
                }}
              />
            ) : (
              <span className="text-xl font-bold text-foreground">{skill.substring(0, 2).toUpperCase()}</span>
            );
          })()}
        </div>
        <div 
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: 10000 }}
        >
          <div className="bg-card/95 dark:bg-card/95 backdrop-blur-sm border border-green-500/20 dark:border-green-500/25 rounded-lg px-3 py-1.5 shadow-lg shadow-green-500/5 whitespace-nowrap">
            <span className="text-xs font-semibold text-foreground">{skill}</span>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card/95 dark:bg-card/95 border-r border-b border-green-500/20 dark:border-green-500/25 rotate-45"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
  
export default function Skills(){
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Default to dark theme if not mounted yet (matches defaultTheme in layout)
  const isDark = mounted ? theme === 'dark' : true;

  const skillIcons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
    "JavaScript": SiJavascript,
    "Python": SiPython,
    "C++": SiCplusplus,
    "TypeScript": SiTypescript,
    "SQL": FaDatabase,
    "CSS": SiCss3,
    "Next.js": SiNextdotjs,
    "React.js": SiReact,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    "Tailwind CSS": SiTailwindcss,
    "MongoDB": SiMongodb,
    "MySQL": SiMysql,
    "PostgreSQL": SiPostgresql,
    "Git": SiGit,
    "GitHub": SiGithub,
    "Postman": SiPostman,
    "AWS EC2": SiAmazon,
    "Netlify": SiNetlify,
    "Vercel": SiVercel,
    "REST APIs": FaPlug,
    "JWT Auth": FaLock,
    "Payment Gateway": FaCreditCard,
  };

  const skillColors: Record<string, string | { light: string; dark: string }> = {
    "JavaScript": { light: "#F7DF1E", dark: "#FDD835" }, // Brighter yellow in dark mode
    "Python": { light: "#3776AB", dark: "#4A9FD8" }, // Brighter blue in dark mode
    "C++": { light: "#00599C", dark: "#007ACC" }, // Brighter blue in dark mode
    "TypeScript": { light: "#3178C6", dark: "#4A9FD8" }, // Brighter blue in dark mode
    "SQL": { light: "#336791", dark: "#5A9FD8" }, // Brighter blue-gray in dark mode
    "CSS": { light: "#1572B6", dark: "#2E8FD8" }, // Brighter blue in dark mode
    "Next.js": { light: "#000000", dark: "#ffffff" },
    "React.js": { light: "#61DAFB", dark: "#7EE7FF" }, // Brighter cyan in dark mode
    "Node.js": { light: "#339933", dark: "#4CD964" }, // Brighter green in dark mode
    "Express.js": { light: "#000000", dark: "#f3f4f6" }, // Lighter gray in dark mode
    "Tailwind CSS": { light: "#06B6D4", dark: "#22D3EE" }, // Brighter cyan in dark mode
    "MongoDB": { light: "#47A248", dark: "#5FD964" }, // Brighter green in dark mode
    "MySQL": { light: "#4479A1", dark: "#5FA3D8" }, // Brighter blue in dark mode
    "PostgreSQL": { light: "#336791", dark: "#5A9FD8" }, // Brighter blue-gray in dark mode
    "Git": { light: "#F05032", dark: "#FF6B4A" }, // Brighter red-orange in dark mode
    "GitHub": { light: "#181717", dark: "#ffffff" },
    "Postman": { light: "#FF6C37", dark: "#FF8C5A" }, // Brighter orange in dark mode
    "AWS EC2": { light: "#FF9900", dark: "#FFB84D" }, // Brighter orange in dark mode
    "Netlify": { light: "#00C7B7", dark: "#00E6D4" }, // Brighter teal in dark mode
    "Vercel": { light: "#000000", dark: "#ffffff" },
    "REST APIs": { light: "#FF6C37", dark: "#FF8C5A" }, // Brighter orange in dark mode
    "JWT Auth": { light: "#000000", dark: "#a78bfa" }, // Brighter purple in dark mode
    "Payment Gateway": { light: "#00A86B", dark: "#00D98B" }, // Brighter green in dark mode
  };

  const allSkills = [
    ...skills.programming,
    ...skills.frameworks,
    ...skills.databases,
    ...skills.tools,
    ...skills.cloud,
    ...skills.specializations,
  ];

  const totalSkills = allSkills.length;
  const orbits = 3;
  const skillsPerOrbit = Math.ceil(totalSkills / orbits);

  const getSkillOrbit = (index: number) => {
    return Math.floor(index / skillsPerOrbit) + 1;
  };

  const getOrbitRadius = (orbit: number) => {
    return 140 + (orbit - 1) * 90;
  };

  const getOrbitDuration = (orbit: number) => {
    return 25 + orbit * 15;
  };

  return (
    <motion.section 
      id="skills" 
      className="container pt-16 md:pt-20 overflow-visible" 
      variants={staggerChildren()} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills & Tools
      </motion.h2>
      
      <div className="hidden md:block relative w-full max-w-5xl mx-auto min-h-[700px] flex items-center justify-center overflow-visible">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-24 h-24 bg-white dark:bg-card rounded-full flex items-center justify-center shadow-xl dark:shadow-white/10 dark:shadow-xl border-2 border-green-500/10 dark:border-green-500/15">
            <span className="text-sm font-bold text-black dark:text-foreground">SKILLS</span>
          </div>
        </div>

        {[1, 2, 3].map((orbit) => (
          <div
            key={`orbit-${orbit}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-muted/40 border-green-500/5 dark:border-green-500/8 pointer-events-none"
            style={{
              width: `${getOrbitRadius(orbit) * 2}px`,
              height: `${getOrbitRadius(orbit) * 2}px`,
            }}
          />
        ))}

        {allSkills.map((skill, index) => {
          const orbit = getSkillOrbit(index);
          const skillsInOrbit = allSkills.filter((_, i) => getSkillOrbit(i) === orbit).length;
          const indexInOrbit = allSkills.slice(0, index).filter((_, i) => getSkillOrbit(i) === orbit).length;
          const angle = (indexInOrbit / skillsInOrbit) * 360;
          const radius = getOrbitRadius(orbit);
          const duration = getOrbitDuration(orbit);

          return (
            <SkillIcon
              key={skill}
              skill={skill}
              skillIcons={skillIcons}
              skillColors={skillColors}
              radius={radius}
              angle={angle}
              duration={duration}
              isDark={isDark}
            />
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:hidden grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 max-w-sm mx-auto px-4"
      >
        {allSkills.map((skill) => (
          <div 
            key={skill} 
            className="relative flex flex-col items-center gap-2"
          >
            <div className="relative group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-card to-card/80 text-card-foreground rounded-full shadow-lg shadow-green-500/5 border-2 border-green-500/10 dark:border-green-500/15 flex items-center justify-center hover:border-green-500/20 hover:shadow-green-500/10 transition-all cursor-pointer">
                {(() => {
                  const IconComponent = skillIcons[skill];
                  const colorValue = skillColors[skill];
                  const iconColor = typeof colorValue === 'object' 
                    ? (isDark ? colorValue.dark : colorValue.light)
                    : (colorValue || '#6b7280');
                  
                  // Helper function to convert hex to RGB for glow effect
                  const hexToRgb = (hex: string): string => {
                    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result 
                      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
                      : '255, 255, 255';
                  };
                  
                  const glowRgb = hexToRgb(iconColor);
                  
                  return IconComponent ? (
                    <IconComponent 
                      className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300" 
                      style={{ 
                        color: iconColor,
                        filter: isDark 
                          ? `drop-shadow(0 0 6px rgba(${glowRgb}, 0.5)) drop-shadow(0 0 10px rgba(${glowRgb}, 0.3)) drop-shadow(0 0 14px rgba(${glowRgb}, 0.15))`
                          : 'drop-shadow(0 0 6px rgba(34,197,94,0.15))'
                      }}
                    />
                  ) : (
                    <span className="text-sm sm:text-lg font-bold text-foreground">{skill.substring(0, 2).toUpperCase()}</span>
                  );
                })()}
              </div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50">
                <div className="bg-card/95 dark:bg-card/95 backdrop-blur-sm border border-green-500/20 dark:border-green-500/25 rounded-lg px-2 py-1 shadow-lg shadow-green-500/5 whitespace-nowrap">
                  <span className="text-[10px] font-semibold text-foreground">{skill}</span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card/95 dark:bg-card/95 border-r border-b border-green-500/20 dark:border-green-500/25 rotate-45"></div>
                </div>
              </div>
            </div>
            
            <span className="text-[10px] sm:text-xs text-center text-muted-foreground font-medium max-w-[3.5rem] sm:max-w-[4rem] truncate">
              {skill}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

