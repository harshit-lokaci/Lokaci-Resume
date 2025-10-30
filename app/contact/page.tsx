"use client";

import React, { useState } from "react";
import {
  FaMailBulk,
  FaPhoneAlt,
  FaPaperPlane,
  FaCommentDots,
  FaCheckCircle,
} from "react-icons/fa";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ACCENT_COLOR = "bg-amber-500";
  const ACCENT_HOVER = "hover:bg-amber-600";
  const ACCENT_TEXT = "text-amber-500";
  const INPUT_FOCUS = "focus:ring-amber-400 focus:border-amber-400";

  const contactChannels = [
    { icon: FaPhoneAlt, value: "+1 (800) 555-RSUM" },
    { icon: FaMailBulk, value: "support@lokaciresumes.com" },
    { icon: FaCommentDots, value: "Live Chat (M-F, 9am-5pm EST)" },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <section className="min-h-screen flex items-center justify-center bg-gray-50 py-24 sm:py-40">
          <div className="max-w-lg p-12 text-center bg-white rounded-xl shadow-2xl border-t-4 border-amber-500">
            <FaCheckCircle
              className={`mx-auto w-14 h-14 ${ACCENT_TEXT} mb-4`}
            />
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              Message Sent Successfully
            </h2>
            <p className="text-gray-600 text-lg">
              Thank you! We’ve received your message and will respond within{" "}
              <strong>24 business hours</strong>.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className={`mt-6 px-6 py-3 rounded-lg font-bold text-white shadow-md transition duration-300 ${ACCENT_COLOR} ${ACCENT_HOVER}`}
            >
              Send Another Inquiry
            </button>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
        {/* LEFT: Lottie */}
        <div className="lg:w-5/12 relative flex items-center justify-center bg-amber-50 p-12 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="absolute inset-0 bg-amber-100 opacity-20 rounded-lg"></div>
          <div className="relative z-10 w-full h-full max-h-[700px] flex items-center justify-center">
            <iframe
              src="https://lottie.host/embed/306f706d-2619-44cf-91f8-9a10c731c9ef/iOdVYqcbMC.lottie"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              title="Customer Support Animation"
            ></iframe>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="lg:w-7/12 flex flex-col justify-center p-8 sm:p-16 lg:p-24 bg-white">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Get in Touch with Our Experts
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Have questions about your resume, ATS, or technical support? We're
            here to help.
          </p>

          {/* Contact Cards */}
          <div className="flex flex-wrap gap-6 mb-10">
            {contactChannels.map(({ icon: Icon, value }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-amber-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Icon className={`w-6 h-6 ${ACCENT_TEXT}`} />
                <span className="text-gray-700 font-medium">{value}</span>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm ${INPUT_FOCUS} sm:text-base`}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm ${INPUT_FOCUS} sm:text-base`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Resume Review"
                className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm ${INPUT_FOCUS} sm:text-base`}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className={`mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm ${INPUT_FOCUS} sm:text-base`}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-lg text-lg font-bold text-white shadow-md ${ACCENT_COLOR} ${ACCENT_HOVER} transition duration-300`}
            >
              <FaPaperPlane className="w-5 h-5 mr-3" />
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
