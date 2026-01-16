"use client";
import { projectCategories } from "../data/site";
import { motion, AnimatePresence } from 'framer-motion';
import { staggerChildren } from "../lib/motion";
import { useState } from 'react';

type CategoryKey = keyof typeof projectCategories;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('webdev');
  const categories = Object.keys(projectCategories) as CategoryKey[];
  const currentProjects = projectCategories[activeCategory].projects;

  return (
    <motion.section
      id="projects"
      className="container py-12 scroll-mt-0"
      variants={staggerChildren()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-text-secondary mb-8 max-w-2xl"
      >
        I&apos;ve been working on various projects. Here&apos;s a showcase of my work.
      </motion.p>

      {/* Category Tabs */}
      <motion.div
        className="inline-flex p-1 bg-muted/30 rounded-full border border-border/50 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
              ${activeCategory === category
                ? 'bg-green-600/80 text-white/90 shadow-md shadow-green-500/15'
                : 'text-text-secondary hover:text-foreground'
              }
            `}
          >
            {projectCategories[category].label}
          </button>
        ))}
      </motion.div>

      {/* Projects List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative"
            >
              {idx !== currentProjects.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-px bg-green-500/20 hidden md:block"></div>
              )}

              <div className="relative">
                <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-green-500 hidden md:block"></div>

                <div className="md:ml-16 card p-4 sm:p-6 md:p-8 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map(tech => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded bg-muted text-text-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-text-secondary hover:text-green-500 transition-colors flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-text-secondary hover:text-green-500 transition-colors flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 text-text-secondary">
                    {project.features.split('.').filter(f => f.trim()).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>{feature.trim()}.</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
