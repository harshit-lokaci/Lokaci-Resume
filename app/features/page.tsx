"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
// React Icons
import {
  FaFileAlt,
  FaMagic,
  FaCloudDownloadAlt,
  FaSyncAlt,
  FaPalette,
  FaCheckCircle,
  FaAngleDown,
  FaQuoteLeft,
  FaStar,
  FaRegStar,
  FaArrowRight,
  FaUserTie,
  FaPencilRuler,
  FaSearch,
  FaCogs,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import CTASection from "../components/home/CTA";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";


// --- Data Configuration ---
const ACCENT_COLOR_CLASS = "bg-yellow-500"; // Sleek, modern green for success
const ACCENT_HOVER_CLASS = "hover:bg-yellow-600";
const ACCENT_TEXT_CLASS = "text-yellow-500";

const HERO_SECTION = {
  superheading: "Your Career Accelerator",
  heading:
    "The <span className='text-yellow-500'>Job-Winning</span> Features You Need",
  description:
    "Lokaci is engineered to solve the toughest challenges job seekers face: beating the ATS, crafting professional design, and customizing for every role.",
  ctaText: "Start Building Your Resume Free",
  ctaLink: "/build",
};

const MAIN_HIGHLIGHT = {
  title: "ATS Optimization: Guaranteed to Pass",
  description:
    "Our proprietary **ATS ScoreCheck** guarantees compatibility with 99% of Applicant Tracking Systems used globally. Don't let a formatting error cost you the interview.",
  features: [
    { text: "Real-time ATS Score Check", icon: FaSearch },
    { text: "Clean, Parseable Section Headers", icon: FaClipboardList },
    { text: "Industry-Specific Keyword Suggestions", icon: FaMagic },
    { text: "Multiple Download Formats (PDF/DOCX)", icon: FaCloudDownloadAlt },
  ],
};

const CORE_FEATURES = [
  {
    id: 1,
    title: "One-Click Design Switch",
    description:
      "Instantly change the look of your entire resume without losing any content. Choose from 20+ expert-approved templates seamlessly.",
    icon: FaPencilRuler,
  },
  {
    id: 2,
    title: "Pre-written Content Library",
    description:
      "Over 500 achievement-focused bullet points written by certified career experts. Eliminate writer's block and craft powerful statements.",
    icon: FaFileAlt,
  },
  {
    id: 3,
    title: "Targeted Version Control",
    description:
      "Easily duplicate and edit your master resume to perfectly match specific job descriptions. Manage all your applications efficiently.",
    icon: FaSyncAlt,
  },
  {
    id: 4,
    title: "Expert Color & Font Control",
    description:
      "Maintain professional branding with a simple style editor. Customize appearance while adhering to strict recruiter readability standards.",
    icon: FaPalette,
  },
];

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Select Template",
    description:
      "Choose a clean, ATS-friendly design tailored to your industry.",
    icon: FaPencilRuler,
  },
  {
    id: 2,
    title: "Add Content",
    description:
      "Use guided forms and expert suggestions to input your experience.",
    icon: FaClipboardList,
  },
  {
    id: 3,
    title: "Optimize",
    description:
      "Run the ATS check and review smart suggestions for maximum impact.",
    icon: FaUserTie,
  },
  {
    id: 4,
    title: "Download & Apply",
    description:
      "Download your perfect PDF or DOCX resume and start sending applications.",
    icon: FaCloudDownloadAlt,
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "The ATS check feature is a game-changer; I got an interview call within 24 hours of using my Lokaci resume.",
    author: "Mark L., Software Engineer",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The pre-written bullet points saved me hours of agonizing over wording. Highly professional and easy to use.",
    author: "Sarah P., Marketing Manager",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The design variety is excellent. I created three unique, professional resumes for different fields seamlessly.",
    author: "David T., Financial Analyst",
    rating: 4,
  },
];

const FAQS = [
  {
    question: "Is the final resume ATS-friendly?",
    answer:
      "Yes, every template is rigorously tested to ensure it is 100% parseable by all major Applicant Tracking Systems.",
  },
  {
    question: "Can I download my resume as a Word document (DOCX)?",
    answer:
      "Absolutely. We support both PDF (recommended for applying) and DOCX formats for maximum flexibility.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "You can build, edit, and save your resume for free. You only pay a small fee when you are ready to download the final, watermark-free document.",
  },
];

// --- Framer Motion Variants ---
const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

// --- Reusable Utility Components ---

const SectionHeader = ({ superheading, heading, description }) => (
  <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-20">
    <p className="font-semibold text-base uppercase tracking-widest mb-3 text-gray-500">
      {superheading}
    </p>
    <h2
      className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4"
      dangerouslySetInnerHTML={{ __html: heading }}
    ></h2>
    <p className="text-xl text-gray-600">{description}</p>
  </motion.div>
);

const ProcessStep = ({ title, description, icon: Icon, index }) => (
  <motion.div
    variants={item}
    className="flex flex-col items-center text-center p-6 border-2 border-gray-100 rounded-xl transition duration-300 hover:border-yellow-300"
  >
    <div
      className={`w-14 h-14 rounded-full ${ACCENT_COLOR_CLASS}/10 flex items-center justify-center mb-4`}
    >
      <Icon className={`w-7 h-7 ${ACCENT_TEXT_CLASS}`} />
    </div>
    <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ quote, author, rating }) => (
  <motion.div
    variants={item}
    className="bg-white p-8 rounded-xl border-t-4 border-yellow-500/80 flex flex-col h-full border-2 border-gray-100"
  >
    <FaQuoteLeft className={`${ACCENT_TEXT_CLASS} opacity-10 w-8 h-8 mb-4`} />
    <p className="text-lg text-gray-700 italic flex-grow">"{quote}"</p>
    <div className="mt-6">
      <p className="font-semibold text-gray-900">{author}</p>
      <div className="flex text-amber-400 text-xs mt-1">
        {[...Array(5)].map((_, i) =>
          i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
        )}
      </div>
    </div>
  </motion.div>
);

const FAQItem = ({ question, answer, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;
  return (
    <motion.div variants={item} className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <FaAngleDown
          className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-3 text-gray-600 pr-12"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

// --- Main Features Page Component ---
const FeaturesPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* ---------------------------------------------------------------------------------- */}
      {/* ## Hero Section */}
      {/* ---------------------------------------------------------------------------------- */}
      <section className="pt-40 pb-32 text-center bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0 }}
          >
            <p className="font-semibold text-base uppercase tracking-widest mb-4 text-gray-500">
              {HERO_SECTION.superheading}
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
          >
            <h1
              className="text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{ __html: HERO_SECTION.heading }}
            ></h1>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-normal">
              {HERO_SECTION.description}
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <a
              href={HERO_SECTION.ctaLink}
              className={`inline-flex items-center justify-center px-10 py-4 border-2 border-transparent rounded-lg text-lg font-bold text-white ${ACCENT_COLOR_CLASS} ${ACCENT_HOVER_CLASS} transition duration-300 hover:scale-[1.03]`}
            >
              {HERO_SECTION.ctaText}
              <FaArrowRight className="w-5 h-5 ml-3" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------------- */}
      {/* ## Main Feature Highlight Section: ATS Focus (Clean Two-Column) */}
      {/* ---------------------------------------------------------------------------------- */}
      <section className="bg-gray-50 py-24 border-b border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Content */}
            <motion.div variants={item}>
              <p className="font-semibold text-base uppercase tracking-widest mb-2 text-gray-500">
                The Core Difference
              </p>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
                {MAIN_HIGHLIGHT.title}
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                {MAIN_HIGHLIGHT.description}
              </p>
              <ul className="space-y-4 text-gray-700">
                {MAIN_HIGHLIGHT.features.map((feature, index) => (
                  <motion.li
                    variants={item}
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <FaCheckCircle
                      className={`w-6 h-6 flex-shrink-0 mt-1 ${ACCENT_TEXT_CLASS}`}
                    />
                    <span className="text-lg font-medium">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Video Section */}
            <motion.div
              variants={item}
              className="relative w-full rounded-xl overflow-hidden border-4 border-gray-200 bg-white flex items-center justify-center"
              style={{ height: "500px" }} // <-- Fixed height
            >
              <video
                src="/magnifying-glass-animation.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------------- */}
      {/* ## Core Features Grid Section (Clean 4-Column Grid) */}
      {/* ---------------------------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            superheading="The Builder's Toolkit"
            heading="Powerful <span className='text-yellow-500'>Resume Creation</span> Features"
            description="Our app is a dedicated partner in your job search, providing tools that simplify, professionalize, and optimize every application."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {CORE_FEATURES.map((feature, index) => (
              <motion.div
                variants={item}
                key={feature.id}
                className="p-8 bg-gray-50 rounded-xl border-2 border-gray-100 transition duration-300 hover:border-yellow-500"
              >
                <feature.icon className={`w-8 h-8 ${ACCENT_TEXT_CLASS} mb-4`} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------------- */}
      {/* ## How It Works / Process Section */}
      {/* ---------------------------------------------------------------------------------- */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            superheading="Your Simple Path to Success"
            heading="Get Hired in <span className='text-yellow-500'>4 Simple Steps</span>"
            description="Building a professional resume shouldn't be complicated. We make it easy, fast, and highly effective."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Visual Timeline Connector */}
            <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gray-300 mx-16"></div>
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep key={step.id} {...step} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------------- */}
      {/* ## Testimonials Section (Social Proof) */}
      {/* ---------------------------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            superheading="Social Proof"
            heading="Trusted by <span className='text-yellow-500'>Successful Job Seekers</span>"
            description="See what users who landed their dream jobs have to say about the Lokaci Resume Builder."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------------- */}
      {/* ## FAQ Section */}
      {/* ---------------------------------------------------------------------------------- */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            superheading="Common Questions"
            heading="Get the <span className='text-yellow-500'>Answers</span> You Need."
            description="Everything you need to know about getting started with the Lokaci Resume Builder."
          />
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 border-t border-gray-200 pt-4"
          >
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                {...faq}
                index={index}
                openIndex={openFaqIndex}
                setOpenIndex={setOpenFaqIndex}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------------- */}
      {/* ## Final Call to Action Section (High Contrast) */}
      {/* ---------------------------------------------------------------------------------- */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
