"use client";
import React from "react";
import {
  FaFileAlt,
  FaBriefcase,
  FaStar,
  FaCheckCircle,
  FaUsers,
  FaDownload,
  FaPaintBrush,
} from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import Image from "next/image";
import templateImage from "../assets/template1.webp";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

// --- Template Data ---
const templates = [
  {
    id: 1,
    name: "The Executive",
    tagline: "The industry standard for seasoned professionals and management.",
    description:
      "A classic, elegant design focused on maximizing readability and highlighting career progression. Perfect for candidates with 5+ years.",
    features: [
      { text: "Two-Column, ATS-Friendly", icon: FaFileAlt },
      { text: "Dedicated Career Summary", icon: FaBriefcase },
      { text: "Includes Modern Font Styles", icon: FaStar },
      { text: "Proven to pass 99% of ATS", icon: FaCheckCircle },
    ],
    isPremium: true,
    imageSrc: "/template-executive-screenshot.png",
  },
  {
    id: 2,
    name: "The Technical Pro",
    tagline:
      "Optimized for software engineers, data scientists, and tech roles.",
    description:
      "A clean, skill-focused template that puts technical proficiency and project results front and center. Highly favored by recruiters in the tech industry.",
    features: [
      { text: "Skills-Centric Section Layout", icon: FaUsers },
      { text: "Space for GitHub/Portfolio Links", icon: FaDownload },
      { text: "Clean, Bold Headings", icon: FaStar },
      { text: "Multi-page Flexibility", icon: FaCheckCircle },
    ],
    isPremium: false,
    imageSrc: "/template-techpro-screenshot.png",
  },
  {
    id: 3,
    name: "The Creative Edge",
    tagline: "For designers, marketers, and creative professionals.",
    description:
      "A template that balances professionalism with a touch of modern flair. Features subtle design elements and an optional profile photo.",
    features: [
      { text: "Optional Color Accent Palette", icon: FaPaintBrush },
      { text: "Integrated Portfolio Link Spot", icon: FaBriefcase },
      { text: "Single-page Resume Focused", icon: FaFileAlt },
      { text: "Free for All Users", icon: FaCheckCircle },
    ],
    isPremium: false,
    imageSrc: "/template-creative-screenshot.png",
  },
];

// --- Feature Item ---
const FeatureItem = ({ icon: Icon, text }) => (
  <li className="flex items-start space-x-3">
    <Icon className="w-5 h-5 flex-shrink-0 mt-1 text-amber-500" />
    <span className="text-gray-700">{text}</span>
  </li>
);

// --- Templates Page ---
const TemplatesPage = () => {
  const ACCENT_COLOR = "bg-amber-600";
  const ACCENT_HOVER = "hover:bg-amber-700";

  return (
    <>
      <Header />
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20 max-w-5xl">
            <h1 className="text-4xl font-extrabold tracking-wide text-gray-900 sm:text-6xl">
              Choose Your Blueprint for{" "}
              <span className="text-yellow-600">Success & Growth</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Our <strong className="text-yellow-600">expert-designed</strong>{" "}
              resume templates are tailored for every industry and career level.
              Engineered to pass modern ATS software and impress recruiters.
            </p>
          </div>

          {/* Templates */}
          <div className="space-y-20">
            {templates.map((template) => (
              <div
                key={template.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-100 rounded-2xl overflow-hidden h-96"
              >
                {/* Left: Content */}
                <div className="p-8 flex flex-col justify-between h-full">
                  <div>
                    {template.isPremium && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500 text-white mb-3">
                        <FaStar className="w-3 h-3 mr-1" /> PREMIUM
                      </span>
                    )}

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {template.name}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      {template.description}
                    </p>

                    {/* Features */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {template.features.map((feature, i) => (
                        <FeatureItem
                          key={i}
                          icon={feature.icon}
                          text={feature.text}
                        />
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-4">
                    <button
                      className={`px-6 py-2 border border-transparent rounded-lg text-lg font-bold shadow-lg text-white ${ACCENT_COLOR} ${ACCENT_HOVER} transition duration-300 transform hover:scale-[1.02]`}
                    >
                      <FaDownload className="w-5 h-5 mr-2 inline" />
                      {template.isPremium ? "Get Pro Access" : "Get for Free"}
                    </button>
                    <button className="px-6 py-2 border-2 border-gray-300 rounded-lg text-lg font-bold text-gray-700 hover:border-amber-600 transition duration-300 hover:text-amber-600">
                      <AiOutlineEye className="w-5 h-5 mr-2 inline" />
                      View Details
                    </button>
                  </div>
                </div>

                {/* Right: Screenshot */}
                <div className="h-full bg-gray-100 overflow-hidden">
                  <Image
                    src={templateImage}
                    alt="template image"
                    className="h-96 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TemplatesPage;
