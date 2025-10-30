"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaCheckCircle, FaSyncAlt, FaUsers } from "react-icons/fa";

// MotionDiv wrapper for smooth fade-in animations
const MotionDiv = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const CoreValuesSection = () => {
  // Core values data contained inside the component
  const CORE_VALUES = [
    {
      icon: FaRocket,
      title: "Speed & Efficiency",
      description:
        "Create a polished resume in minutes without compromising quality.",
    },
    {
      icon: FaCheckCircle,
      title: "Professional Templates",
      description:
        "Choose from expertly designed, modern, and recruiter-friendly templates.",
    },
    {
      icon: FaSyncAlt,
      title: "Continuous Updates",
      description:
        "Our templates and features evolve to match the latest hiring standards.",
    },
    {
      icon: FaUsers,
      title: "User-Focused",
      description:
        "We prioritize your needs to make resume creation intuitive and effortless.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <MotionDiv>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Our Commitments to You
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              The four pillars that guarantee value and professionalism in every
              resume you create.
            </p>
          </MotionDiv>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_VALUES.map((value, index) => (
            <MotionDiv
              key={index}
              delay={index * 0.15}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100 mb-4">
                <value.icon className="w-8 h-8 text-yellow-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{value.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
