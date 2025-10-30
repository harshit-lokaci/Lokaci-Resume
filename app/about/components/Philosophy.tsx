"use client"; // ← Add this at the top

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "../../assets/about-image-5.jpg";

// MotionDiv wrapper for smooth animations
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

const PhilosophySection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Philosophy Content */}
          <MotionDiv className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Our Core Philosophy:{" "}
              <span className="text-yellow-600">Code & Creativity</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that building resumes and professional profiles
              shouldn't be complicated. Our goal is to{" "}
              <span className="font-semibold text-gray-900">
                empower everyone
              </span>{" "}
              to create sleek, professional resumes effortlessly using our
              platform.
            </p>

            <ul className="space-y-4 text-gray-700">
              {[
                {
                  title: "Efficiency",
                  desc: "Create a polished resume in minutes with minimal effort.",
                },
                {
                  title: "Precision",
                  desc: "Each template is professionally designed and responsive for any device.",
                },
                {
                  title: "Continuous Improvement",
                  desc: "Our tools and templates are updated regularly to meet modern hiring standards.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-yellow-500" />
                  <span className="font-medium">
                    <strong>{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Right Side: Image / Illustration */}
          <MotionDiv delay={0.2}>
            <div className="relative rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={image}
                alt="Resume Builder Illustration"
                className="w-full h-full object-cover"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/40 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
                <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">
                  Our Vision
                </h3>
                <p className="mt-2 text-lg font-medium text-white drop-shadow-sm max-w-xs">
                  To make professional resumes accessible, modern, and
                  effortless for everyone.
                </p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
