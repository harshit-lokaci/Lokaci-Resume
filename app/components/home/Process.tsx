"use client";
import React from "react";
import { motion } from "framer-motion";
import PoweredByLokaci from "../other/PoweredByLokaci";
import imageOne from "../../assets/process-image-1.jpg";
import imageTwo from "../../assets/process-image-2.jpg";
import Image from "next/image";
import { FaBolt } from "react-icons/fa";

const resumeSteps = [
  {
    title: "Choose Your Template",
    description:
      "Select from our library of professionally designed, ATS-friendly resume templates.",
  },
  {
    title: "Input Your Data",
    description:
      "Easily add your experience, education, and skills with smart, guided prompts.",
  },
  {
    title: "Optimize & Refine",
    description:
      "Get instant feedback and keyword suggestions to pass the Applicant Tracking System (ATS).",
  },
  {
    title: "Download & Apply",
    description:
      "Download your perfect resume in PDF format and start applying with confidence.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Process = () => {
  const ACCENT_BG = "bg-amber-100";
  const ACCENT_BORDER = "border-amber-500";
  const ACCENT_TEXT = "text-amber-700";
  const HOVER_BG = "bg-amber-500";
  const HOVER_TEXT = "text-yellow-700";
  const HOVER_TITLE = "text-amber-600";

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section (UPDATED) */}
        <div className="mb-16 space-y-4 text-center">
          {/* Centered Badge */}
          <div className="flex justify-center">
            <PoweredByLokaci text="Our Processes" Icon={FaBolt} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-700 mt-6 tracking-tight">
            Build Your Resume in 4 Simple Steps
          </h2>

          {/* Paragraph */}
          <p className="text-gray-500 max-w-4xl mx-auto mt-3 text-lg">
            Our streamlined process guides you from a blank page to a
            job-winning resume in minutes.
          </p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN: Visuals (Overlapping Images) */}
          <div className="relative h-96 w-full max-w-lg mx-auto lg:mx-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-140 bg-yellow-400 rounded-full blur-3xl opacity-25 -z-10"></div>
            {/* Main Image Container (Image 1: Template View) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="absolute w-4/5 h-4/5 top-0 left-0 bg-gray-200 rounded-2xl shadow-xl overflow-hidden transform rotate-[-3deg]"
            >
              <Image
                src={imageOne}
                alt="Template Selection Screen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 30vw"
              />
            </motion.div>

            {/* Overlapping Image/Element (Image 2: Data Input/Review) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`absolute w-3/5 h-3/5 bottom-0 right-0 ${HOVER_BG} rounded-2xl shadow-2xl overflow-hidden transform rotate-[5deg] border-4 border-white`}
            >
              <Image
                src={imageTwo}
                alt="Resume Data Input Form"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 60vw, 20vw"
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Process Steps (Vertical List) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10"
          >
            {resumeSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="flex group"
              >
                {/* Step Number Circle (Yellow Theme) */}
                <div className="flex-shrink-0 mr-6">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${ACCENT_BG} border-2 ${ACCENT_BORDER} ${ACCENT_TEXT} text-xl font-extrabold transition duration-300 group-hover:${HOVER_BG} group-hover:${HOVER_TEXT} group-hover:shadow-lg border hover:border-yellow-600 group-hover:shadow-amber-200`}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Step Content */}
                <div>
                  <h3
                    className={`text-2xl font-semibold text-gray-900 mb-1 transition duration-300 group-hover:${HOVER_TITLE}`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 max-w-md">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
