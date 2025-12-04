"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { profile } from "../../data/profile";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const statsVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-subtle py-20">
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob
                dark:bg-primary-900 dark:opacity-20 dark:mix-blend-screen dark:scale-75"
      ></div>

      <div
        className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000
                dark:bg-accent-900 dark:opacity-20 dark:mix-blend-screen dark:scale-75"
      ></div>

      <div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000
                dark:bg-primary-950 dark:opacity-20 dark:mix-blend-screen dark:scale-75"
      ></div>

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8 flex justify-center"
          variants={imageVariants}
        >
          <Image
            src="/images/profile/nadir.png"
            alt={profile.name}
            width={400}
            height={400}
            className="rounded-full object-cover w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          {profile.title}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-primary-600 dark:text-primary-300 mb-3 font-semibold"
          variants={itemVariants}
        >
          {profile.name}
        </motion.p>

        <motion.p
          className="text-base text-gray-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {profile.subtitle}
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-colors font-medium shadow-md"
          >
            View My Work
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 dark:border-primary-300 dark:text-primary-100 dark:hover:bg-primary-900 transition-colors font-medium"
          >
            Hire Me
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          variants={statsVariants}
        >
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-1">
              {profile.stats.projects}+
            </div>
            <div className="text-sm text-gray-600 dark:text-slate-300">
              Projects
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-1">
              {profile.stats.experienceYears}+
            </div>
            <div className="text-sm text-gray-600 dark:text-slate-300">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-1">
              {profile.stats.technologies}+
            </div>
            <div className="text-sm text-gray-600 dark:text-slate-300">
              Technologies
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-1">
              {profile.stats.languages}
            </div>
            <div className="text-sm text-gray-600 dark:text-slate-300">
              Languages
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
