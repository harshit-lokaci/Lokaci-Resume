"use client";
import { motion } from "framer-motion";
import React from "react";

// Framer Motion Wrapper for Fade-Up
const MotionDiv = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// Accent Color
const ACCENT_TEXT = "text-amber-500";

// Example Metrics Data
const METRICS = [
  { value: "120K+", unit: "Users", description: "Active users worldwide" },
  { value: "500+", unit: "Templates", description: "Ready-to-use designs" },
  { value: "99%", unit: "Satisfaction", description: "Customer happiness" },
  { value: "24/7", unit: "Support", description: "Always here for you" },
];

const MetricsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-gray-100 rounded-xl p-8 shadow-inner">
          {METRICS.map((metric, index) => (
            <MotionDiv key={index} delay={index * 0.1}>
              <div className="space-y-1">
                <p
                  className={`text-4xl sm:text-5xl font-extrabold ${ACCENT_TEXT}`}
                >
                  {metric.value}
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 uppercase tracking-wider">
                  {metric.unit}
                </p>
                <p className="text-sm text-gray-500 sm:text-base">
                  {metric.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
