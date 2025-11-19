"use client";
import { skills } from "../data/site";
import { motion } from 'framer-motion';
import { staggerChildren } from "../lib/motion";

export default function Skills(){
  const skillSymbols: Record<string, string> = {
    "JavaScript": "JS",
    "Python": "🐍",
    "C++": "C++",
    "TypeScript": "TS",
    "SQL": "SQL",
    "CSS": "CSS",
    "Next.js": "⚡",
    "React.js": "⚛️",
    "Node.js": "🟢",
    "Express.js": "🚂",
    "Tailwind CSS": "🎨",
    "MongoDB": "🍃",
    "MySQL": "🐬",
    "PostgreSQL": "🐘",
    "Git": "📌",
    "GitHub": "🐙",
    "Postman": "📮",
    "AWS EC2": "☁️",
    "Netlify": "🌐",
    "Vercel":"💻",
    "REST APIs": "🔌",
    "JWT Auth": "🔐",
    "Payment Gateway": "💳",
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
      className="container pt-16 md:pt-24 overflow-visible" 
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
      
      <div className="hidden md:block relative w-full max-w-5xl mx-auto min-h-[700px] flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl dark:shadow-white/30 dark:shadow-xl ">
            <span className="text-sm font-bold text-black">SKILLS</span>
          </div>
        </div>

        {[1, 2, 3].map((orbit) => (
          <div
            key={`orbit-${orbit}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-muted/40"
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
            <motion.div
              key={skill}
              className="absolute top-1/2 left-1/2"
              style={{
                width: radius * 2,
                height: radius * 2,
                marginLeft: -radius,
                marginTop: -radius,
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-card to-card/80 text-card-foreground rounded-full text-2xl font-bold shadow-xl border-2 border-border flex items-center justify-center backdrop-blur-sm">
                  {skillSymbols[skill] || skill.substring(0, 2).toUpperCase()}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:hidden grid grid-cols-4 gap-4 max-w-sm mx-auto"
      >
        {allSkills.map((skill) => (
          <div 
            key={skill} 
            className="relative flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-card to-card/80 text-card-foreground rounded-full text-xl font-bold shadow-lg border-2 border-border flex items-center justify-center">
              {skillSymbols[skill] || skill.substring(0, 2).toUpperCase()}
            </div>
            
            <span className="text-xs text-center text-muted-foreground font-medium max-w-[4rem] truncate">
              {skill}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

