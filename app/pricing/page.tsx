"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaBolt,
  FaDollarSign,
  FaGift,
  FaChartLine,
  FaUsers,
  FaMobileAlt,
  FaChartBar,
} from "react-icons/fa"; // Using react-icons
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

// Pricing Plan Data
const pricingPlans = [
  {
    name: "Free Tier",
    description:
      "Start building your professional resume today, absolutely free.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      { text: "Access to 3 Core Templates", icon: FaMobileAlt },
      { text: "Unlimited Resume Edits", icon: FaChartBar },
      { text: "Basic ATS Scan Score", icon: FaChartLine },
      { text: "Standard PDF Download", icon: FaDollarSign },
    ],
    isPopular: false,
    cta: "Start Free",
    ctaLink: "/signup",
  },
  {
    name: "Pro",
    description:
      "Unlock advanced features and premium tools to land more interviews.",
    monthlyPrice: 9.99,
    annualPrice: 7.99, // $7.99/mo billed annually
    features: [
      { text: "Access to ALL 20+ Premium Templates", icon: FaGift },
      { text: "Advanced ATS Optimization", icon: FaBolt },
      { text: "Cover Letter Builder", icon: FaUsers },
      { text: "AI-Powered Content Suggestions", icon: FaMobileAlt },
      { text: "Priority Email Support", icon: FaChartBar },
      { text: "Multi-Format Download (PDF, DOCX)", icon: FaDollarSign },
    ],
    isPopular: true,
    cta: "Go Pro",
    ctaLink: "/checkout/pro",
  },
  {
    name: "Premium",
    description:
      "Our best value for unlimited, job-search mastery all year long.",
    monthlyPrice: 14.99,
    annualPrice: 9.99, // $9.99/mo billed annually
    features: [
      { text: "All Pro Features Included", icon: FaGift },
      { text: "Dedicated 1-on-1 Resume Review (Once)", icon: FaUsers },
      { text: "Portfolio Website Builder Access", icon: FaBolt },
      { text: "Exclusive Interview Prep Guides", icon: FaChartLine },
      { text: "Priority Chat & Phone Support", icon: FaMobileAlt },
      { text: "Full Data Export & Backup", icon: FaDollarSign },
    ],
    isPopular: false,
    cta: "Save Big Annually",
    ctaLink: "/checkout/premium",
  },
];

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true); // Toggle state for pricing

  const ACCENT_COLOR = "bg-amber-500";
  const ACCENT_HOVER = "hover:bg-amber-600";
  const TEXT_ACCENT = "text-amber-600";
  const TEXT_CTA = "text-gray-900";

  return (
    <>
    <Header/>
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
              Find the Perfect Plan for Your Job Search
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Get the professional edge you need. No hidden fees, just great
              resumes.
            </p>
          </div>

          {/* --- Price Toggle Functionality --- */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl bg-gray-200 p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`py-2 px-6 rounded-lg text-sm font-semibold transition ${
                  !isAnnual
                    ? `${ACCENT_COLOR} text-white shadow-md`
                    : "text-gray-700 hover:bg-gray-300"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`py-2 px-6 rounded-lg text-sm font-semibold transition relative ${
                  isAnnual
                    ? `${ACCENT_COLOR} text-white shadow-md`
                    : "text-gray-700 hover:bg-gray-300"
                }`}
              >
                Annual Billing
                <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full rotate-6">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
          {/* --- End Price Toggle --- */}

          {/* Pricing Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8"
          >
            {pricingPlans.map((plan, index) => {
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
              const billingLabel = isAnnual
                ? plan.annualPrice > 0
                  ? "/month, billed annually"
                  : ""
                : plan.monthlyPrice > 0
                ? "/month"
                : "";

              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  className={`bg-white rounded-xl shadow-2xl p-8 flex flex-col transform transition duration-500 ${
                    plan.isPopular
                      ? "border-4 border-amber-500 scale-[1.03] shadow-amber-300/50"
                      : "hover:shadow-xl"
                  }`}
                >
                  {/* Plan Header */}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <div
                      className={`mt-2 inline-block rounded-full ${ACCENT_COLOR} px-3 py-1 text-xs font-semibold uppercase text-white tracking-widest`}
                    >
                      Most Popular
                    </div>
                  )}
                  <p className="mt-4 text-gray-600">{plan.description}</p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline">
                    <span className="text-6xl font-extrabold text-gray-900">
                      {price === 0 ? "Free" : `$${price}`}
                    </span>
                    {price > 0 && (
                      <span className="ml-2 text-xl font-medium text-gray-500">
                        {isAnnual ? "" : "/mo"}
                      </span>
                    )}
                  </div>
                  {plan.annualPrice > 0 && (
                    <p className="text-sm text-gray-500 mt-1 h-5">
                      {billingLabel}
                    </p>
                  )}

                  {/* Divider */}
                  <div className="h-px bg-gray-200 my-6"></div>

                  {/* Features List */}
                  <ul role="list" className="space-y-4 flex-grow">
                    {plan.features.map((feature, i) => {
                      const FeatureIcon = feature.icon; // React Icon component
                      return (
                        <li key={i} className="flex items-start">
                          <FeatureIcon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                          <p className="ml-3 text-base text-gray-700">
                            {feature.text}
                          </p>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Call to Action Button */}
                  <div className="mt-8">
                    <a
                      href={plan.ctaLink}
                      aria-label={`Get started with the ${plan.name} plan`}
                      className={`block w-full text-center py-3 px-6 border border-transparent rounded-lg text-lg font-bold shadow-md transition duration-300 
                    ${
                      plan.isPopular
                        ? `${ACCENT_COLOR} ${ACCENT_HOVER} ${TEXT_CTA}`
                        : `bg-white border-2 border-gray-300 ${TEXT_ACCENT} hover:border-amber-500`
                    }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer Note */}
          <p className="text-center text-sm text-gray-500 mt-16">
            <strong className={TEXT_ACCENT}>Risk-Free:</strong> All paid plans
            include a 30-day money-back guarantee. Cancel or downgrade anytime.
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default PricingPage;
