"use client";
import React from "react";
import { motion } from "framer-motion"; // <-- Added motion import
import Image from "next/image";
import CommingSoonImage from "../../assets/comming-soon.png";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import { FiArrowRight, FiInfo } from "react-icons/fi";
import Link from "next/link";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children slightly
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
      delay: 0.5, // Delay the image entrance slightly
    },
  },
};
// --- End Animation Variants ---

// Use motion.custom(Link) to correctly wrap the next/link component
const MotionLink = motion(Link);

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-yellow-200 blur-[100px] opacity-30"></div>

      <motion.div // Main container animation
        className="mx-auto max-w-screen-xl px-4 py-16 text-center lg:pt-24 lg:flex lg:items-center lg:justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left content */}
        <div className="max-w-2xl mx-auto">
          <motion.div // Users count
            className="text-base font-semibold text-yellow-800 mb-6 flex flex-col items-center gap-2"
            variants={itemVariants}
          >
            {/* Stars */}
            <div className="flex gap-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Users */}
            <p className="flex items-center gap-2">
              <FaUsers className="text-yellow-600 text-xl" />
              <span>Used by 10,000+ professionals</span>
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl font-extrabold tracking-wide text-gray-900 sm:text-6xl"
            variants={itemVariants}
          >
            Create professional{" "}
            <span className="text-yellow-600">resumes & portfolios</span>{" "}
            effortlessly
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 text-lg text-gray-600"
            variants={itemVariants}
          >
            Build standout resumes that get noticed by recruiters. Choose from
            modern templates, highlight your skills, and share your portfolio in
            minutes.
          </motion.p>

          {/* Call to action buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-3"
            variants={itemVariants}
          >
            <MotionLink // CORRECTED: Use MotionLink component
              href="/get-started"
              className="rounded-md bg-yellow-600 px-6 py-3 text-white font-medium hover:bg-yellow-700 transition flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <FiArrowRight className="w-5 h-5" />
            </MotionLink>
            <MotionLink // CORRECTED: Use MotionLink component
              href="/learn-more"
              className="rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <FiInfo className="w-5 h-5" />
            </MotionLink>
          </motion.div>

          {/* Trusted by leading brands */}
          <motion.p
            className="mt-8 text-sm text-gray-500"
            variants={itemVariants}
          >
            Trusted by leading companies
          </motion.p>
          <motion.div
            className="mt-12 flex flex-wrap gap-20 justify-center items-center"
            variants={containerVariants} // Use container to stagger brand logos
          >
            <motion.div
              className="flex gap-2 items-center"
              variants={itemVariants}
            >
              <FaApple className="text-gray-400 text-3xl" />
              <span className="font-serif mt-1 text-lg text-gray-400">
                Apple
              </span>
            </motion.div>
            <motion.div
              className="flex gap-2 items-center"
              variants={itemVariants}
            >
              <FaGoogle className="text-gray-400 text-3xl" />
              <span className="font-mono mt-1 text-lg text-gray-400">
                Google
              </span>
            </motion.div>
            <motion.div
              className="flex gap-2 items-center"
              variants={itemVariants}
            >
              <FaAmazon className="text-gray-400 text-3xl" />
              <span className="font-sans mt-1 text-lg text-gray-400">
                Amazon
              </span>
            </motion.div>
            <motion.div
              className="flex gap-2 items-center"
              variants={itemVariants}
            >
              <FaMicrosoft className="text-gray-400 text-3xl" />
              <span className="font-cursive mt-1 text-lg text-gray-400">
                Microsoft
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          className="mt-12 lg:mt-0"
          variants={imageVariants} // Apply image-specific variant
        >
          <Image
            src={CommingSoonImage}
            alt="Resume Builder Illustration"
            className="w-full max-w-lg mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
