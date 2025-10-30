"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Helper component for animating Next.js Link
const MotionLink = motion(Link);

// --- Animation Variants ---

// Variants for staggering the desktop links
const desktopContainerVariants = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};

// Variants for individual desktop links/buttons
const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

// Variants for the Mobile menu dropdown
const mobileMenuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Define navigation items to easily map and animate
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/templates", label: "Templates" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header className="bg-white shadow-sm w-full top-0 z-50">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Animated Entrance */}
          <MotionLink
            href="/"
            className="flex items-center space-x-3 group hover:scale-105 transition-transform origin-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
          >
            {/* Logo Image */}
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.png"
                alt="logo image"
                fill
                className="object-contain"
              />
            </div>

            {/* Brand Text */}
            <h1 className="text-2xl font-bold text-gray-900">
              Lokaci{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Resume
              </span>
            </h1>
          </MotionLink>

          {/* Desktop Menu - Animated Stagger */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial="hidden"
            animate="visible"
            variants={desktopContainerVariants}
          >
            {navItems.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-yellow-600 transition font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            {/* Contact Button */}
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700 transition font-medium shadow-md"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>

          {/* Right-Side Action Buttons - Animated Entrance */}
          <motion.div
            className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
          >
            {/* Primary Button */}
            <Link
              href="/get-started"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-2 rounded-full border-2 border-yellow-600 transition shadow-md"
            >
              Get Started
            </Link>

            {/* Secondary Link */}
            <Link
              href="/login"
              className="text-yellow-600 rounded-full font-semibold hover:bg-yellow-50 transition px-6 py-2 border-2 border-yellow-600"
            >
              Login
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-yellow-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Animated Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-100 px-4 pt-2 pb-4 space-y-2"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-yellow-600 transition py-2 border-b border-gray-50/50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Separate Mobile Contact button/link */}
              <Link
                href="/contact"
                className="block bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition text-center mt-3"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/get-started"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-2 rounded-full border-2 border-yellow-600 transition text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/login"
                  className="text-yellow-600 rounded-full font-semibold hover:bg-yellow-50 transition px-6 py-2 border-2 border-yellow-600 text-center"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
