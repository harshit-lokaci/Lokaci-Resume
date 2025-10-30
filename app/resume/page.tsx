"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Imported Lucide icons (modular components replacing inline SVGs)
import { FiPlus, FiUploadCloud, FiX, FiUser, FiFileText } from "react-icons/fi";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Link from "next/link";


// --- Animation Variants ---
const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    // scale: 0.7,
  },
  visible: {
    y: "0",
    opacity: 1,
    // scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
};

const cardHover = {
  // scale: 1.05,
  boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.3)",
  transition: { duration: 0.2 },
};

// --- Main Application Component ---
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Local state for storing created resumes
  const [resumes, setResumes] = useState([]);

  // Mock Session ID (no longer a real user ID)
  const sessionId = "LOCAL-DEMO-123456789";

  // --- Resume Creation Handler (Local State Write) ---
  const handleCreateResume = (e) => {
    e.preventDefault();
    if (!resumeName.trim()) {
      setErrorMessage("Please enter a valid resume name.");
      return;
    }

    setFormLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Create a new resume object
      const newResume = {
        id: Date.now(), // Unique ID based on timestamp
        name: resumeName.trim(),
        createdAt: new Date().toISOString(),
        status: "draft",
      };

      // Update the local state array
      setResumes((prev) => [...prev, newResume]);

      setSuccessMessage(
        `Resume "${resumeName}" created successfully! It is now saved in local application state.`
      );
      setIsModalOpen(false);
      setResumeName("");
    } catch (error) {
      console.error("Error creating resume:", error);
      setErrorMessage("Failed to create resume locally.");
    } finally {
      setFormLoading(false);
      // Clear messages after a few seconds
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 7000);
    }
  };

  const openModal = () => {
    setResumeName("");
    setErrorMessage("");
    setSuccessMessage("");
    setIsModalOpen(true);
  };

  // --- Upload Existing Handler (Simulated File Picker) ---
  const handleUploadClick = () => {
    const fileInput = document.getElementById("file-upload-input");
    fileInput.click();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(`File selected for upload: ${file.name}`);
      setSuccessMessage(
        `Simulated upload for: ${file.name}. (Data processing logic would go here)`
      );
      // Clear the input so the same file can be selected again
      e.target.value = null;
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          {/* Messages and Indicators */}
          <div className="max-w-4xl mx-auto mb-8 space-y-3">
            {errorMessage && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
                <p className="font-semibold">{errorMessage}</p>
              </div>
            )}
            {successMessage && (
              <div className="bg-green-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg">
                <p className="font-semibold">{successMessage}</p>
              </div>
            )}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Ready to Build Your Future?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your path: start fresh with a new template or upload an
              existing CV for quick editing.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto w-full">
            {/* Create New Resume Button/Card */}
            <motion.div
              className="flex-1 cursor-pointer"
              whileHover={cardHover}
              onClick={openModal}
            >
              <div className="p-8 bg-white rounded-xl shadow-lg border-2 border-yellow-200 h-full flex flex-col items-center justify-center text-center">
                <FiPlus className="text-yellow-600 text-6xl mb-4 p-2 bg-yellow-100 rounded-full w-16 h-16 stroke-1" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Create New Resume
                </h3>
                <p className="text-gray-500">
                  Start from scratch or select a modern, industry-approved
                  template to begin building your profile.
                </p>
                <button className="mt-4 bg-yellow-600 text-white font-medium px-6 py-2 rounded-full hover:bg-yellow-700 transition flex items-center gap-2">
                  Start Building
                  <FiFileText className="w-4 h-4 fill-white stroke-2" />
                </button>
              </div>
            </motion.div>

            {/* Upload Existing Resume Button/Card */}
            <motion.div
              className="flex-1 cursor-pointer"
              whileHover={cardHover}
              onClick={handleUploadClick}
            >
              <div className="p-8 bg-white rounded-xl shadow-lg border-2 border-gray-200 h-full flex flex-col items-center justify-center text-center">
                <FiUploadCloud className="text-gray-600 text-6xl mb-4 p-2 bg-gray-100 rounded-full w-16 h-16 stroke-1" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Upload Existing
                </h3>
                <p className="text-gray-500">
                  Import a PDF or DOCX file to quickly convert it into an
                  editable Lokaci format.
                </p>
                <button className="mt-4 border border-gray-400 text-gray-700 font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition flex items-center gap-2">
                  Browse Files
                </button>
                {/* Hidden file input for native file dialog */}
                <input
                  type="file"
                  id="file-upload-input"
                  className="hidden"
                  accept=".pdf,.docx"
                  onChange={handleFileSelect}
                />
              </div>
            </motion.div>
          </div>

          {/* --- Locally Saved Resumes List --- */}
          {resumes.length > 0 && (
            <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FiFileText className="w-6 h-6 fill-yellow-600 stroke-2" /> Your
                Resumes (Session Only: {resumes.length})
              </h3>
              <div className="space-y-4">
                {resumes.map((resume) => (
                  <motion.div
                    key={resume.id}
                    className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        {resume.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Created:{" "}
                        {new Date(resume.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Link href="/resume/builder" className="text-yellow-600 font-medium hover:text-yellow-700 transition">
                      Edit Draft &rarr;
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Note: These resumes are only visible for the duration of this
                current session.
              </div>
            </div>
          )}
        </main>

        {/* Resume Name Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsModalOpen(false)} // Close when clicking backdrop
            >
              <motion.div
                className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 sm:p-8"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <FiPlus className="text-yellow-600 w-6 h-6 stroke-2" /> Name
                    Your Resume
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition"
                    disabled={formLoading}
                  >
                    <FiX className="w-6 h-6 stroke-2" />
                  </button>
                </div>

                <form onSubmit={handleCreateResume}>
                  <label
                    htmlFor="resumeName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Resume Title:
                  </label>
                  <input
                    id="resumeName"
                    type="text"
                    value={resumeName}
                    onChange={(e) => setResumeName(e.target.value)}
                    placeholder="e.g., Senior Developer CV"
                    required
                    disabled={formLoading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition shadow-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />

                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition disabled:opacity-50"
                      disabled={formLoading}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-yellow-600 text-white rounded-full font-medium hover:bg-yellow-700 transition shadow-md flex items-center gap-2 disabled:bg-gray-400"
                      disabled={formLoading || !resumeName.trim()}
                    >
                      {formLoading ? (
                        <>
                          <FiPlus className="animate-spin w-5 h-5" />{" "}
                          Creating...
                        </>
                      ) : (
                        "Continue"
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
