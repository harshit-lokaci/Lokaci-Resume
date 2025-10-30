"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import questionImage from "../../assets/question-image1.png"; // adjust path if needed

const FAQSection = () => {
  const faqs = [
    {
      question: "Can I create a resume for free?",
      answer:
        "Yes! Our platform allows you to create and download a basic resume for free. Premium templates and features are available via subscription.",
    },
    {
      question: "Are the templates customizable?",
      answer:
        "Absolutely! You can edit all sections, fonts, colors, and layouts to match your personal style and professional needs.",
    },
    {
      question: "Can I download my resume in PDF format?",
      answer:
        "Yes, every resume can be downloaded in PDF format, ready to share with employers or upload to job platforms.",
    },
    {
      question: "Do you offer templates for different industries?",
      answer:
        "Yes! We offer a variety of professionally designed templates tailored for tech, business, design, and more.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything you need to know about creating professional resumes with
            ease.
          </motion.p>
        </div>

        {/* Left-Right Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left: FAQ Accordion */}
          <div className="w-full lg:w-1/2 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-gray-900 font-medium focus:outline-none"
                >
                  <span className="text-lg sm:text-xl">{faq.question}</span>
                  <span className="ml-4">
                    {openIndex === index ? (
                      <FaChevronUp className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <FaChevronDown className="w-5 h-5 text-yellow-500" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-700 text-base sm:text-lg"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={questionImage}
              alt="question thinking image"
              className=""
              width={500} // adjust based on your design
              height={500} // adjust based on your design
              priority // optional, for faster load
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
