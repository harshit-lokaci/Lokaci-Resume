'use client'
"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/other/Other";
import Link from "next/link";
import MobileAdd from "./components/MobileAdd";
import Comp2 from "./components/Comp2";
import Footer from "./components/Footer";

// Global variable containing the uploaded image ID
// This image should now visually represent an Offer Letter creation interface.
const mainImagePath =
  "uploaded:image_4ad1a0.jpg-a4f3446b-5639-402b-8df5-f3e42a01e6b5";

// --- Feature Icons (Inline SVG for clean rendering) ---

// Icon for Speed/Instant Generation (ZapIcon remains relevant)
const ZapIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

// Icon for Professional Quality/Templates (CheckCircleIcon remains relevant)
const CheckCircleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>
);

// Icon for Tracking/E-Signature (Swapping Trophy for a Send/Mail Icon)
const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

// Icon for Play button overlay
const PlayIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

// --- Component Data ---
const features = [
  {
    icon: ZapIcon,
    title: "Instant Generation",
    description:
      "Create legally compliant offer letters in minutes, not hours.",
    color: "text-yellow-500",
  },
  {
    icon: CheckCircleIcon,
    title: "Dynamic Templates",
    description:
      "Choose from approved templates and easily customize all compensation details.",
    color: "text-yellow-500",
  },
  {
    icon: MailIcon, // Updated Icon
    title: "E-Signature & Tracking",
    description:
      "Securely send letters and track candidate acceptance in real-time.",
    color: "text-blue-500",
  },
];

// --- Sub-Components ---

// Simulated Video Showcase
const VideoShowcase = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-md cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src="/get-started-video.mp4" // replace with your video file
        className="w-full h-full object-cover transition duration-300 filter brightness-75 group-hover:brightness-80"
        loop
        muted
        playsInline
        autoPlay
        // poster="/get-started-image-1.jpg" // fallback image
      >
        Your browser does not support the video tag.
      </video>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
          onClick={togglePlay}
        >
          <motion.div
            className="p-4 rounded-full bg-white text-yellow-600 shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <PlayIcon className="w-12 h-12" />
          </motion.div>
        </div>
      )}

      {/* Text Overlay */}
      <p className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-lg">
        See How Offer Letters are Created
      </p>
    </motion.div>
  );
};

// Feature Card
const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <motion.div
    className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 bg-white shadow-md hover:shadow-lg transition duration-300"
    whileHover={{ y: -2 }}
  >
    <div className={`p-2 rounded-lg bg-gray-50 ${color}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </motion.div>
);

// --- Main Ad Component ---
const AdvertisementComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <>
      <HeroSection />
      <div className="min-h-screen bg-gray-50 flex items-center py-16 font-sans">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest mb-2">
              The Future of Talent Acquisition
            </p>
            {/* Updated Headline */}
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl lg:text-7xl">
              Create Winning{" "}
              <span className="text-yellow-600">Offer Letters</span>. Close the
              Deal.
            </h1>
            {/* Updated Subhead */}
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Instantly generate, customize, and track professional offer
              letters that impress top talent.
            </p>
          </div>

          {/* Content Grid: Video/Image + Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Main Visual/Video Showcase (Left side on desktop) */}
            <motion.div className="lg:col-span-8" variants={containerVariants}>
              <VideoShowcase />
            </motion.div>

            {/* Feature Highlights (Right side on desktop) */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">
                Key Platform Features
              </h3>
              {features.map((feature, index) => (
                <motion.div key={index} variants={containerVariants}>
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Primary Call to Action */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* <Link
              href="/resume/builder"
              className="inline-flex items-center justify-center px-12 py-4 border border-transparent text-xl font-bold rounded-full shadow-2xl text-white bg-yellow-600 hover:bg-yellow-700 transition duration-300 transform hover:scale-105 hover:shadow-yellow-500/50"
            >
              Start Generating Offers Now!
            </Link> */}
            <p className="mt-4 text-sm text-gray-500">
              No credit card required. Cancel anytime.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <MobileAdd/>
      <Comp2/>
      <Footer/>
    </>
  );
};

export default AdvertisementComponent;
