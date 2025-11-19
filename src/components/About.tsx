"use client";
import { motion } from 'framer-motion';

export default function About(){
  return (
    <motion.section 
      id="about" 
      className="w-auto mt-30 scroll-mt-20 px-4 sm:px-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >

      <motion.h2 
        className="text-4xl font-bold my-4 px-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="gradient-text">
          Education
        </span>
        <div className="w-auto max-w-43 bg-gradient-to-r from-green-600 to-green-400 h-1 mt-2"></div>
      </motion.h2>

      <motion.div 
        className="bg-green-900/40 dark:bg-green-500/10 border border-green-500/20 flex flex-col md:flex-row justify-between gap-4 md:gap-0 rounded-xl p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="flex flex-col gap-1">
          <span className="font-semibold text-lg text-foreground">
            Indian Institute of Information Technology (IIITDM Kurnool), Andhra Pradesh
          </span>
          <span className="text-text-secondary font-small">
            B.Tech in Computer Science and Engineering
          </span>
        </span>
        <span className="flex flex-col text-text-secondary gap-1">
          <span>
            Aug 2023 - May 2027
          </span>
          <span>
            CGPA: 8.86
          </span>
        </span>
      </motion.div>
    </motion.section>
  );
}

