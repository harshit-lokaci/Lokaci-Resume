"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AdvertisementImage from "../../assets/mobile-add.jpg";

// --- Motion variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
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

export default function MobileAdd() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Yellow glow behind image */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-yellow-200 blur-[150px] opacity-30 -z-10 rounded-full" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Left Content (35%) */}
        <motion.div className="lg:w-5/12" variants={itemVariants}>
          <p className="text-sm font-semibold tracking-[0.2em] text-yellow-700 uppercase mb-4">
            Stand Out Instantly
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Showcase Your Professional Brand
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Create engaging resumes and portfolios that grab attention. With our
            intuitive builder, you can highlight your skills, experience, and
            accomplishments in a visually stunning way — optimized for modern
            recruiters and clients.
          </p>
        </motion.div>

        {/* Right Image (65%) */}
        <motion.div
          className="lg:w-7/12 flex justify-center lg:justify-end"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-none h-[500px]">
            <Image
              src={AdvertisementImage.src}
              alt="Person holding phone advertisement"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
