"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// NOTE: Assuming these paths and components are correctly configured
import imageOne from "../assets/process-image-1.jpg";
import imageTwo from "../assets/process-image-2.jpg";

// A simple utility to simulate a logo icon
const ResumeIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    ></path>
  </svg>
);

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login (true) and Register (false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // --- Theme & Utility Classes ---
  const ACCENT_COLOR = "bg-amber-500";
  const ACCENT_HOVER = "hover:bg-amber-600";
  const ACCENT_TEXT = "text-amber-600";
  const ACCENT_TEXT_HOVER = "hover:text-amber-500";
  const ACCENT_FOCUS_RING = "focus:ring-amber-500";
  const INPUT_FOCUS_RING = "focus:ring-amber-500 focus:border-amber-500";

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login attempt:", { email, password });
    } else {
      console.log("Register attempt:", { name, email, password });
    }
    // Add your authentication logic here
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT HALF: Marketing/Visual Panel with Image */}
      <div
        className={`hidden lg:flex w-1/2 ${ACCENT_COLOR} items-center justify-center p-12 relative overflow-hidden`}
      >
        {/* Background Image Container */}
        <div className="absolute inset-0 opacity-40">
          <Image
            src={isLogin ? imageOne : imageTwo} // Dynamically change image based on state
            alt={
              isLogin ? "Professional Login Screen" : "Resume Builder Signup"
            }
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-lg z-10"
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
            {isLogin ? "Welcome Back to Success" : "Build Your Dream Resume."}
          </h1>
          <p className="text-white text-xl opacity-80 mb-8">
            {isLogin
              ? "Sign in to pick up where you left off."
              : "Join thousands of job seekers and stand out from the crowd."}
          </p>
        </motion.div>
      </div>

      {/* RIGHT HALF: Login/Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-6 sm:p-12">
        <div className="max-w-md w-full">
          {/* Logo/Branding */}
          <div className="flex items-center justify-center lg:justify-start mb-10">
            <ResumeIcon />
            <span className="ml-3 text-2xl font-bold text-gray-900">
              Lokaci Resumes
            </span>
          </div>

          {/* Tabbed Navigation */}
          <div className="flex border-b border-gray-300 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-lg font-bold transition duration-200 ${
                isLogin
                  ? `${ACCENT_TEXT} border-b-2 border-amber-600`
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-lg font-bold transition duration-200 ${
                !isLogin
                  ? `${ACCENT_TEXT} border-b-2 border-amber-600`
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign Up
            </button>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            {isLogin ? "Welcome Back!" : "Create Your Free Account"}
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            {isLogin
              ? "Enter your credentials to manage your resume."
              : "Fill out the form to get started."}
          </p>

          <motion.form
            key={isLogin ? "login" : "register"} // Key change triggers form animation
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
            onSubmit={handleAuthSubmit}
          >
            {/* 1. Full Name Field (Conditional Rendering for Sign Up) */}
            {!isLogin && (
              <div key="name-field">
                <label
                  htmlFor="name-register"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="name-register"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required={!isLogin}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 ${INPUT_FOCUS_RING} sm:text-sm transition`}
                  />
                </div>
              </div>
            )}

            {/* 2. Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 ${INPUT_FOCUS_RING} sm:text-sm transition`}
                />
              </div>
            </div>

            {/* 3. Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                {isLogin ? "Password" : "Create Password"}
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 ${INPUT_FOCUS_RING} sm:text-sm transition`}
                />
              </div>
            </div>

            {/* Conditional Checkboxes/Links */}
            <div
              className={`flex items-center ${
                isLogin ? "justify-between" : "justify-start"
              }`}
            >
              {isLogin ? (
                // Login Checkbox & Forgot Password Link
                <>
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className={`h-4 w-4 ${ACCENT_TEXT} border-gray-300 rounded ${ACCENT_FOCUS_RING}`}
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="/forgot-password"
                      className={`font-medium ${ACCENT_TEXT} ${ACCENT_TEXT_HOVER}`}
                    >
                      Forgot password?
                    </a>
                  </div>
                </>
              ) : (
                // Register Terms Checkbox
                <div className="flex items-start">
                  <input
                    id="terms-register"
                    name="terms-register"
                    type="checkbox"
                    required
                    className={`h-4 w-4 ${ACCENT_TEXT} border-gray-300 rounded ${ACCENT_FOCUS_RING}`}
                  />
                  <label
                    htmlFor="terms-register"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    I agree to the{" "}
                    <a
                      href="/terms"
                      className={`font-medium ${ACCENT_TEXT} ${ACCENT_TEXT_HOVER}`}
                    >
                      Terms
                    </a>
                    .
                  </label>
                </div>
              )}
            </div>

            {/* Submit Button (Yellow Theme) */}
            <div className="pt-4">
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-gray-900 ${ACCENT_COLOR} ${ACCENT_HOVER} focus:outline-none focus:ring-2 ${ACCENT_FOCUS_RING} focus:ring-offset-2 transition duration-300`}
              >
                {isLogin ? "Sign In" : "Get Started Now"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
