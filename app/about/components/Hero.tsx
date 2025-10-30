"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Constants for colors
const ACCENT_COLOR = "bg-yellow-500";
const ACCENT_HOVER = "hover:bg-yellow-600";
const ACCENT_TEXT = "text-yellow-500";

// Framer Motion Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="relative py-32 text-center overflow-hidden bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subheading */}
        <motion.p
          className="font-semibold text-sm uppercase tracking-widest mb-4 text-gray-500"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0 }}
        >
          Build Your Professional Identity
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          Create Stunning Resumes{" "}
          <span className="text-yellow-500">Effortlessly</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          With <strong className="text-yellow-600">LokaciResume</strong>, craft
          professional, modern resumes in minutes. Choose from expertly designed
          templates, customize your content, and download a polished resume that
          stands out to employers.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <button
            className={`inline-flex items-center justify-center px-10 py-4 rounded-lg font-bold text-lg text-white ${ACCENT_COLOR} ${ACCENT_HOVER} shadow-xl transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-200`}
          >
            Start Building Your Resume
            <FaArrowRight className="w-5 h-5 ml-3" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
