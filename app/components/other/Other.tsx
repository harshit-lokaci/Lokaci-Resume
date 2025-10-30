// components/HeroSection.jsx
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import playstore from "../../assets/playstore.png";
import appstore from "../../assets/appstore.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full h-[100svh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/get-started-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Heading */}
        <motion.h1
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4"
        >
          Welcome to Our Site
        </motion.h1>
        {/* Subheading */}
        <motion.p
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-yellow-200 text-lg md:text-2xl mb-8 max-w-xl"
        >
          Experience top-notch services with our professional team and amazing
          tools.
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/resume"
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Get Started <FaArrowRight />
          </Link>
          <button className="flex items-center gap-2 bg-yellow-100/20 hover:bg-yellow-200/40 text-white px-6 py-3 rounded-lg transition">
            Watch Video <FaPlay />
          </button>
        </motion.div>
        {/* Store Buttons */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap gap-4 justify-center mt-12 md:mt-16"
        >
          <Link
            href="/download/playstore"
            className="transform transition-transform hover:scale-105 rounded-xl border-2 border-white"
          >
            <Image
              src={playstore}
              alt="Play Store button"
              width={200}
              height={60}
              priority
            />
          </Link>
          <Link
            href="/download/appstore"
            className="transform transition-transform hover:scale-105 rounded-xl border-2 border-white"
          >
            <Image
              src={appstore}
              alt="App Store button"
              width={200}
              height={60}
              priority
            />
          </Link>
        </motion.div>
        <button className="flex flex-col items-center gap-1 text-white font-medium text-lg animate-bounce absolute bottom-10 left-1/2 -translate-x-1/2">
          <span>Scroll Down</span>
          <MdKeyboardDoubleArrowDown size={24} />
        </button>{" "}
      </div>
    </section>
  );
}
