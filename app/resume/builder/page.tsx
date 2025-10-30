"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Update from "@/app/components/layout/Update";
import { useResume } from "@/app/context/ResumeContext";
import TemplatePreview from "./components/TemplatePreview";

// --- Form Input Components ---
const SectionTitle = ({ children }) => (
  <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4 mt-6">
    {children}
  </h3>
);

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows="4"
      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150 resize-none"
    />
  </div>
);

// --- Main Resume Builder ---
export default function ResumeBuilderApp() {
  const previewRef = useRef(null);
  const {
    resumeData,
    setResumeData,
    selectedTemplate,
    setSelectedTemplate,
    generateResumePDF,
    isGenerating,
  } = useResume();

  // --- Handlers ---
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [name]: value },
    }));
  };

  const handleJobChange = (e, id) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((job) =>
        job.id === id ? { ...job, [name]: value } : job
      ),
    }));
  };

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [name]: value } : edu
      ),
    }));
  };

  const handleAddJob = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { id: Date.now(), title: "", company: "", years: "", description: "" },
      ],
    }));
  };

  const handleRemoveJob = (id) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((job) => job.id !== id),
    }));
  };

  // --- JSX ---
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Update />
      <Header />

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 gap-8">
        {/* Left Column: Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl border border-gray-200 lg:sticky lg:top-8 lg:h-fit">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Resume Data Builder
          </h2>

          {/* Template Select */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Resume Template
            </label>
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition duration-150"
            >
              <option value="A">Template A</option>
              <option value="B">Template B</option>
            </select>
          </div>

          {/* Personal Info */}
          <SectionTitle>Personal Information</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Full Name"
              name="name"
              value={resumeData.personal.name}
              onChange={handlePersonalChange}
              placeholder="Jane Doe"
            />
            <InputField
              label="Professional Title"
              name="title"
              value={resumeData.personal.title}
              onChange={handlePersonalChange}
              placeholder="Software Engineer"
            />
            <InputField
              label="Phone"
              name="phone"
              value={resumeData.personal.phone}
              onChange={handlePersonalChange}
              placeholder="555-123-4567"
            />
            <InputField
              label="Email"
              name="email"
              value={resumeData.personal.email}
              onChange={handlePersonalChange}
              placeholder="name@email.com"
              type="email"
            />
            <div className="md:col-span-2">
              <InputField
                label="LinkedIn URL"
                name="linkedin"
                value={resumeData.personal.linkedin}
                onChange={handlePersonalChange}
                placeholder="linkedin.com/in/yourname"
              />
            </div>
          </div>

          {/* Summary */}
          <SectionTitle>Professional Summary</SectionTitle>
          <TextAreaField
            name="summary"
            value={resumeData.summary}
            onChange={(e) =>
              setResumeData((prev) => ({ ...prev, summary: e.target.value }))
            }
            placeholder="A brief summary..."
          />

          {/* Experience */}
          <SectionTitle>Experience</SectionTitle>
          {resumeData.experience.map((job) => (
            <motion.div
              key={job.id}
              className="p-4 border border-emerald-200 bg-emerald-50 rounded-lg mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => handleRemoveJob(job.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove Job
                </button>
              </div>
              <InputField
                label="Job Title"
                name="title"
                value={job.title}
                onChange={(e) => handleJobChange(e, job.id)}
                placeholder="Senior Developer"
              />
              <InputField
                label="Company Name"
                name="company"
                value={job.company}
                onChange={(e) => handleJobChange(e, job.id)}
                placeholder="TechCorp Inc."
              />
              <InputField
                label="Years"
                name="years"
                value={job.years}
                onChange={(e) => handleJobChange(e, job.id)}
                placeholder="2020 - Present"
              />
              <TextAreaField
                label="Description"
                name="description"
                value={job.description}
                onChange={(e) => handleJobChange(e, job.id)}
                placeholder="Led project X. Increased performance..."
              />
            </motion.div>
          ))}
          <button
            onClick={handleAddJob}
            className="w-full py-2 border-2 border-emerald-500 text-emerald-500 rounded-lg font-semibold hover:bg-emerald-50 transition duration-150 mb-6"
          >
            + Add New Job
          </button>

          {/* Education */}
          <SectionTitle>Education</SectionTitle>
          {resumeData.education &&
            resumeData.education.map((edu) => (
              <div
                key={edu.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4 mb-4"
              >
                <InputField
                  label="Degree"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(e, edu.id)}
                  placeholder="M.S. Computer Science"
                />
                <InputField
                  label="Years"
                  name="years"
                  value={edu.years}
                  onChange={(e) => handleEducationChange(e, edu.id)}
                  placeholder="2018 - 2020"
                />
                <div className="md:col-span-2">
                  <InputField
                    label="Institution"
                    name="institution"
                    value={edu.institution}
                    onChange={(e) => handleEducationChange(e, edu.id)}
                    placeholder="State University"
                  />
                </div>
              </div>
            ))}

          {/* Skills */}
          <SectionTitle>Skills (Comma Separated)</SectionTitle>
          <TextAreaField
            name="skills"
            value={resumeData.skills}
            onChange={(e) =>
              setResumeData((prev) => ({ ...prev, skills: e.target.value }))
            }
            placeholder="React, Node.js, AWS..."
          />

          {/* Download PDF */}
          <button
            onClick={generateResumePDF}
            disabled={isGenerating}
            className={`w-full py-3 mt-8 text-xl font-bold text-white rounded-lg transition duration-300 ${
              isGenerating
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
            {isGenerating ? "Generating PDF..." : "Download PDF Resume"}
          </button>
        </div>

        {/* Right Column: Preview */}
        <div className="w-full lg:w-1/2 flex justify-center lg:p-4">
          <TemplatePreview
            data={resumeData}
            selectedTemplate={selectedTemplate}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
