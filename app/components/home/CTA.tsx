"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoIosCloudDownload } from "react-icons/io";
import Link from "next/link";
import PoweredByLokaci from "../other/PoweredByLokaci";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";


// --- Animation Variants (consistent with HeroSection) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
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

const MotionLink = motion(Link);

// --- CTA Section Component ---
export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white border-t border-gray-200 py-24">
      {/* Subtle yellow glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-yellow-200 blur-[120px] opacity-30 -z-10"></div>

      <motion.div
        className="max-w-5xl mx-auto text-center px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Tagline */}
        <div className="flex justify-center">
          <PoweredByLokaci
            text="Our Processes"
            Icon={LuChartNoAxesColumnIncreasing}
          />
        </div>

        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
          variants={itemVariants}
        >
          Take your resume to the{" "}
          <span className="text-yellow-600">next level</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          variants={itemVariants}
        >
          Join thousands of professionals using our builder to create stunning,
          ATS-friendly resumes and portfolios that get results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={itemVariants}
        >
          <MotionLink
            href="/templates"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md 
                       bg-yellow-600 text-white font-semibold text-lg shadow-md 
                       hover:bg-yellow-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoIosCloudDownload className="w-6 h-6" />
            Start Building Now
          </MotionLink>

          <MotionLink
            href="/learn-more"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md 
                       border border-gray-300 text-gray-700 font-medium text-lg 
                       hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </MotionLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
