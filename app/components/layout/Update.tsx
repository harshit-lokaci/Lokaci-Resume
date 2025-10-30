"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaMagic } from "react-icons/fa";

// Framer Motion Variants
const bannerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.2 },
  },
};

const glowVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Update = () => {
  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-r from-yellow-300 to-white text-gray-900 py-3 px-2 sm:px-4 text-center font-medium"
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle animated glow */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50 bg-yellow-100 blur-lg"
        variants={glowVariants}
        animate="animate"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-wrap justify-center items-center space-x-2 sm:space-x-4 tracking-wide">
        {/* Bolt Icon with subtle pulse & rotate */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          className="text-amber-700"
        >
          <FaBolt className="w-4 h-4" />
        </motion.div>

        <span>New</span>

        {/* Gradient shimmer text */}
        <motion.span
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-600 to-white relative"
          style={{ backgroundSize: "200% auto" }}
          animate={{ backgroundPositionX: ["0%", "100%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          AI Feature
        </motion.span>

        <span>Added! Optimize your resume instantly.</span>

        {/* Magic Icon */}
        <FaMagic className="w-4 h-4 text-amber-700" />
      </div>
    </motion.div>
  );
};

export default Update;
