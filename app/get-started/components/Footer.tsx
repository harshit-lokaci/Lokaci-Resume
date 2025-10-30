"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
    "Custom, professional templates",
    "Optimized for recruiters and clients",
    "Quick and easy to use",
    "Highlight your skills and achievements",
];

export default function GetStartedSection() {
    return (
        <section className="relative bg-gray-50 py-28 overflow-hidden">
            {/* Decorative floating shapes */}
            <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-yellow-200 opacity-20 rounded-full blur-[250px]" />
            <div className="absolute -bottom-32 -right-32 w-[50rem] h-[50rem] bg-yellow-300 opacity-20 rounded-full blur-[300px]" />

            <div className="max-w-5xl mx-auto text-center px-6 sm:px-8">
                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
                >
                    Start Building Your Resume Today
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
                >
                    Create a professional resume that stands out. Simple, modern, and recruiter-ready. Highlight your skills and achievements effortlessly.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a
                        href="/get-started"
                        className="inline-flex items-center gap-3 bg-yellow-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-600 transition-all text-lg"
                    >
                        Get Started Now
                        <FaCheckCircle />
                    </a>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer flex items-start gap-4"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <FaCheckCircle className="text-yellow-500 mt-1" />
                            <p className="text-gray-700 font-medium">{feature}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
