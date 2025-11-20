"use client";
import { motion } from 'framer-motion';

export default function About(){
  return (
    <motion.section 
      id="about" 
      className="container mt-12 sm:mt-20 scroll-mt-20 py-12 sm:py-16 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >

      <motion.h2 
        className="text-3xl sm:text-4xl font-bold my-4 px-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span>
          Education
        </span>
      </motion.h2>

      <motion.div 
        className="bg-green-200 dark:bg-green-900 border border-green-500/20 flex flex-col md:flex-row justify-between gap-4 md:gap-0 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="flex flex-col gap-1">
          <span className="font-semibold text-base sm:text-lg text-foreground">
            Indian Institute of Information Technology (IIITDM Kurnool), Andhra Pradesh
          </span>
          <span className="text-text-secondary text-sm">
            B.Tech in Computer Science and Engineering
          </span>
        </span>
        <span className="flex flex-col text-text-secondary gap-1 text-sm sm:text-base">
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

