"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

// NOTE: We rely on pdfmake and pdfmake/vfs_fonts being available at runtime
// via CDN imports or dynamic imports as shown below.

// --- Initial Resume Data (Enhanced for both templates) ---
const initialResumeData = {
  personal: {
    name: "JANE DOE",
    title: "Senior Full-Stack Software Engineer",
    phone: "555-123-4567",
    email: "jane.doe@example.com",
    linkedin: "linkedin.com/in/janedoe",
    location: "San Francisco, CA", // Added for Template B
    github: "github.com/janedoe", // Added for Template B
  },
  summary:
    "Highly motivated and results-driven Software Engineer with 5+ years of experience leading complex full-stack projects. Expertise in cloud architectures, modern JavaScript frameworks (React), and database optimization. Dedicated to mentoring and continuous process improvement.",
  experience: [
    {
      id: 1,
      title: "Lead Developer",
      company: "TechCorp Solutions",
      years: "2020 - Present",
      description:
        "Led a team of 5 engineers in redesigning core services. Increased system performance by 30%. Mentored 3 junior developers. Successfully managed CI/CD pipelines.",
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Innovate Solutions",
      years: "2018 - 2020",
      description:
        "Developed and maintained RESTful APIs using Node.js. Implemented unit and integration tests to ensure code quality. Contributed to database schema design.",
    },
  ],
  education: [
    // Ensured education data is present
    {
      id: 1,
      degree: "M.S. Computer Science",
      institution: "Stanford University",
      years: "2016 - 2018",
    },
    {
      id: 2,
      degree: "B.S. Software Engineering",
      institution: "University of Washington",
      years: "2012 - 2016",
    },
  ],
  skills: {
    // Using object structure compatible with Template B
    technical: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "AWS",
      "PostgreSQL",
      "Tailwind CSS",
      "Git",
      "REST APIs",
      "Docker",
      "Kubernetes",
    ],
    soft: [
      "Agile Development",
      "Team Leadership",
      "Mentoring",
      "Process Improvement",
      "Problem Solving",
      "Communication",
    ],
  },
};

// --- Create Context ---
const ResumeContext = createContext();

/**
 * Provides state management and PDF generation logic for the resume builder.
 * Assumes pdfmake and pdfmake/vfs_fonts are loaded globally or via dynamic import.
 */
export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState("B"); // Default to B
  const [isGenerating, setIsGenerating] = useState(false);

  // Helper to safely format skills array/object into a single string for Template A
  const getSkillsString = (skills) => {
    if (typeof skills === "string") return skills;
    if (skills && Array.isArray(skills.technical)) {
      return skills.technical.join(", ");
    }
    return "";
  };

  /**
   * Helper to handle converting descriptive text into an array of bullet point objects for pdfmake.
   */
  const getBulletPointsArray = (description, style = "listText") => {
    if (!description) return [];
    return description
      .split(/([.!?])\s+/) // Split by sentence-ending punctuation + space
      .reduce((acc, part, i, arr) => {
        // Recombine punctuation with the preceding text part
        if (i % 2 === 0) {
          const punctuation = arr[i + 1] || "";
          const combined = (part + punctuation).trim();
          if (combined) acc.push(combined);
        }
        return acc;
      }, [])
      .map((point) => {
        // Ensure point ends with punctuation or add a period
        const finalPoint =
          point.endsWith(".") || point.endsWith("!") || point.endsWith("?")
            ? point
            : point + ".";
        return { text: finalPoint, style: style }; // Apply specific style
      });
  };

  const generateResumePDF = useCallback(async () => {
    setIsGenerating(true);
    try {
      // Use dynamic imports for pdfmake (required in Next.js/client component)
      // Assume these succeed or are globally available
      const pdfMakeModule = await import("pdfmake/build/pdfmake");
      const pdfFontsModule = await import("pdfmake/build/vfs_fonts");
      const pdfMake = pdfMakeModule.default || pdfMakeModule;
      const pdfFonts = pdfFontsModule.default || pdfFontsModule;

      // Assign the fonts to pdfmake
      pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;

      let docDefinition;
      const data = resumeData; // Alias for cleaner access

      // --- TEMPLATE A: Classic Single Column (Green Accent) ---
      if (selectedTemplate === "A") {
        docDefinition = {
          pageSize: "A4",
          pageMargins: [50, 40, 50, 40], // Generous margins
          content: [
            // Header: Name, Title, Contact
            {
              text: data.personal.name.toUpperCase(),
              style: "headerA",
              alignment: "center",
              margin: [0, 0, 0, 2],
            },
            {
              text: data.personal.title,
              style: "subheaderA",
              alignment: "center",
              margin: [0, 0, 0, 8],
            },
            {
              text: `${data.personal.phone}  |  ${data.personal.email}  |  ${data.personal.linkedin}`,
              style: "contactA",
              alignment: "center",
              margin: [0, 0, 0, 15],
            },
            // Thick underline below header
            {
              canvas: [
                {
                  type: "line",
                  x1: 0,
                  y1: 5,
                  x2: 595.28 - 100,
                  y2: 5,
                  lineWidth: 2,
                  lineColor: "#047857",
                },
              ],
              margin: [0, -5, 0, 10],
            }, // Green 700 line

            // Summary
            { text: "PROFESSIONAL SUMMARY", style: "sectionHeaderA" },
            { text: data.summary, style: "bodyA", margin: [0, 0, 0, 15] },

            // Experience
            { text: "EXPERIENCE", style: "sectionHeaderA" },
            {
              stack: (data.experience || []).flatMap((job) => [
                {
                  text: [
                    { text: `${job.title} at ${job.company}`, bold: true },
                    {
                      text: ` — ${job.years}`,
                      italics: true,
                      color: "#6B7280",
                      fontSize: 10,
                    },
                  ],
                  style: "jobTitleA",
                  margin: [0, 5, 0, 2],
                },
                {
                  ul: getBulletPointsArray(job.description, "listTextA"),
                  margin: [10, 0, 0, 10],
                },
              ]),
            },

            // Education
            { text: "EDUCATION", style: "sectionHeaderA" },
            {
              ul: (data.education || []).map((edu) => ({
                text: [
                  { text: edu.degree, bold: true },
                  { text: ` from ${edu.institution}`, italics: true },
                  { text: ` (${edu.years})`, color: "#6B7280" },
                ],
                style: "bodyA",
                margin: [0, 2, 0, 2],
              })),
              margin: [0, 0, 0, 15],
            },

            // Skills
            { text: "TECHNICAL SKILLS", style: "sectionHeaderA" },
            {
              text: getSkillsString(data.skills),
              style: "bodyA",
              margin: [0, 0, 0, 0],
            },
          ],
          styles: {
            headerA: { fontSize: 24, bold: true, color: "#111827" }, // Gray 900
            subheaderA: { fontSize: 16, bold: false, color: "#047857" }, // Green 700
            contactA: { fontSize: 9, color: "#4B5563" }, // Gray 600
            sectionHeaderA: {
              fontSize: 12,
              bold: true,
              color: "#047857",
              margin: [0, 10, 0, 5],
              decoration: "underline",
              decorationColor: "#D1D5DB",
            },
            jobTitleA: { fontSize: 11 },
            bodyA: { fontSize: 10, color: "#374151", lineHeight: 1.3 }, // Gray 700
            listTextA: { fontSize: 10, color: "#374151", lineHeight: 1.3 },
          },
          defaultStyle: { font: "Roboto" }, // Ensure default font is set
        };
      }
      // --- TEMPLATE B: Modern Two Column (Blue/Gray Accent) ---
      else if (selectedTemplate === "B") {
        const technicalSkills = Array.isArray(data.skills?.technical)
          ? data.skills.technical
          : [];
        const softSkills = Array.isArray(data.skills?.soft)
          ? data.skills.soft
          : [];
        const educationList = data.education || [];

        // Sidebar Content Definition
        const sidebarContent = {
          // No width property here, applied in columns array
          stack: [
            // Name & Title Section
            {
              text: data.personal.name.toUpperCase(),
              style: "headerB",
              alignment: "center",
              margin: [0, 0, 0, 2],
            },
            {
              text: data.personal.title,
              style: "subheaderB",
              alignment: "center",
              margin: [0, 0, 0, 15],
            },
            {
              canvas: [
                {
                  type: "line",
                  x1: 0,
                  y1: 5,
                  x2: 150,
                  y2: 5,
                  lineWidth: 0.5,
                  lineColor: "#D1D5DB",
                },
              ],
              margin: [0, 0, 0, 15],
            }, // Divider

            // Contact
            { text: "CONTACT", style: "sidebarHeaderB", margin: [0, 0, 0, 5] },
            {
              text: data.personal.phone,
              style: "contactB",
              margin: [0, 0, 0, 2],
            },
            {
              text: data.personal.email,
              style: "contactB",
              margin: [0, 0, 0, 2],
            },
            {
              text: data.personal.location,
              style: "contactB",
              margin: [0, 0, 0, 2],
            },
            {
              text: data.personal.linkedin,
              style: "contactLinkB",
              margin: [0, 0, 0, 2],
            },
            {
              text: data.personal.github,
              style: "contactLinkB",
              margin: [0, 0, 0, 15],
            },
            {
              canvas: [
                {
                  type: "line",
                  x1: 0,
                  y1: 5,
                  x2: 150,
                  y2: 5,
                  lineWidth: 0.5,
                  lineColor: "#D1D5DB",
                },
              ],
              margin: [0, 0, 0, 15],
            }, // Divider

            // Technical Skills
            {
              text: "TECHNICAL SKILLS",
              style: "sidebarHeaderB",
              margin: [0, 0, 0, 5],
            },
            {
              ul: technicalSkills.map((skill) => ({
                text: skill,
                style: "skillItemB",
              })),
              margin: [0, 0, 0, 15],
            },
            {
              canvas: [
                {
                  type: "line",
                  x1: 0,
                  y1: 5,
                  x2: 150,
                  y2: 5,
                  lineWidth: 0.5,
                  lineColor: "#D1D5DB",
                },
              ],
              margin: [0, 0, 0, 15],
            }, // Divider

            // Soft Skills (Conditional)
            ...(softSkills.length > 0
              ? [
                  {
                    text: "SOFT SKILLS",
                    style: "sidebarHeaderB",
                    margin: [0, 0, 0, 5],
                  },
                  {
                    ul: softSkills.map((skill) => ({
                      text: skill,
                      style: "skillItemB",
                    })),
                    margin: [0, 0, 0, 15],
                  },
                  {
                    canvas: [
                      {
                        type: "line",
                        x1: 0,
                        y1: 5,
                        x2: 150,
                        y2: 5,
                        lineWidth: 0.5,
                        lineColor: "#D1D5DB",
                      },
                    ],
                    margin: [0, 0, 0, 15],
                  }, // Divider
                ]
              : []),

            // Education
            {
              text: "EDUCATION",
              style: "sidebarHeaderB",
              margin: [0, 0, 0, 5],
            },
            ...educationList.flatMap((edu) => [
              { text: edu.degree, style: "eduDegreeB", margin: [0, 0, 0, 0] },
              {
                text: edu.institution,
                style: "eduInstitutionB",
                margin: [0, 0, 0, 0],
              },
              { text: edu.years, style: "eduYearsB", margin: [0, 0, 0, 10] },
            ]),
          ],
          // Add padding within the stack for the sidebar
          margin: [20, 30, 20, 20], // Top, Right, Bottom, Left
        };

        // Main Content Definition
        const mainContent = {
          // No width property here, applied in columns array
          stack: [
            // Profile/Summary
            {
              text: "PROFILE",
              style: "mainSectionHeaderB",
              margin: [0, 0, 0, 5],
            },
            { text: data.summary, style: "bodyB", margin: [0, 0, 0, 20] },

            // Experience
            {
              text: "PROFESSIONAL EXPERIENCE",
              style: "mainSectionHeaderB",
              margin: [0, 0, 0, 10],
            },
            ...(data.experience || []).flatMap((job) => [
              {
                columns: [
                  { text: job.title, style: "jobTitleB", width: "auto" },
                  {
                    text: job.years,
                    style: "jobYearsB",
                    alignment: "right",
                    width: "*",
                  },
                ],
                columnGap: 10,
                margin: [0, 0, 0, 2],
              },
              { text: job.company, style: "jobCompanyB", margin: [0, 0, 0, 5] },
              {
                ul: getBulletPointsArray(job.description, "listTextB"),
                margin: [10, 0, 0, 15],
              },
            ]),
          ],
          // Add padding within the stack for the main content
          margin: [20, 30, 20, 20], // Top, Right, Bottom, Left
        };

        docDefinition = {
          pageSize: "A4",
          pageMargins: [0, 0, 0, 0], // Remove global margins, apply via columns
          header: {
            canvas: [
              { type: "rect", x: 0, y: 0, w: 595.28, h: 8, color: "#2563EB" },
            ], // Blue 600
          },
          background: [
            // Background layer for sidebar color
            {
              canvas: [
                {
                  type: "rect",
                  x: 0,
                  y: 0,
                  w: 595.28 * 0.33,
                  h: 841.89,
                  color: "#F9FAFB",
                }, // Gray 50 background for sidebar width
              ],
            },
          ],
          content: [
            // Content layer: columns sit on top of the background
            {
              columns: [
                { ...sidebarContent, width: "33%" }, // Apply width here
                { ...mainContent, width: "67%" }, // Apply width here
              ],
              columnGap: 0, // No gap, handled by margins within stacks
            },
          ],
          styles: {
            headerB: { fontSize: 20, bold: true, color: "#111827" }, // Gray 900
            subheaderB: { fontSize: 14, color: "#2563EB" }, // Blue 600
            bodyB: { fontSize: 9, color: "#374151", lineHeight: 1.3 }, // Gray 700
            listTextB: { fontSize: 9, color: "#374151", lineHeight: 1.3 },

            // Sidebar Styles
            sidebarHeaderB: {
              fontSize: 9,
              bold: true,
              color: "#6B7280",
              margin: [0, 0, 0, 5],
            }, // Gray 500, Added bottom margin
            contactB: { fontSize: 9, color: "#374151", lineHeight: 1.2 }, // Gray 700
            contactLinkB: {
              fontSize: 9,
              color: "#1D4ED8",
              decoration: "underline",
            }, // Blue 700
            skillItemB: { fontSize: 9, color: "#1F2937", margin: [0, 1, 0, 1] }, // Gray 800
            eduDegreeB: { fontSize: 10, bold: true, color: "#1F2937" },
            eduInstitutionB: { fontSize: 9, italics: true, color: "#4B5563" }, // Gray 600
            eduYearsB: { fontSize: 8, color: "#6B7280" }, // Gray 500

            // Main Content Styles
            mainSectionHeaderB: {
              fontSize: 12,
              bold: true,
              color: "#111827",
              margin: [0, 0, 0, 5],
              border: [false, false, false, true],
              borderColor: ["#E5E7EB"],
            }, // Gray 900, Gray 200 border
            jobTitleB: { fontSize: 11, bold: true, color: "#111827" },
            jobCompanyB: { fontSize: 10, bold: false, color: "#1D4ED8" }, // Blue 700
            jobYearsB: { fontSize: 10, italics: true, color: "#4B5563" }, // Gray 600
          },
          defaultStyle: { font: "Roboto" },
        };
      } else {
        throw new Error("Invalid template selected");
      }

      pdfMake
        .createPdf(docDefinition)
        .download(
          `${data.personal.name
            .toLowerCase()
            .replace(/\s/g, "_")}_resume_${selectedTemplate}.pdf`
        );
    } catch (err) {
      console.error("PDF Generation Error:", err);
      // Optional: Add a client-side notification here for the user
    } finally {
      setIsGenerating(false);
    }
  }, [resumeData, selectedTemplate, getBulletPointsArray]);

  const value = {
    resumeData,
    setResumeData,
    selectedTemplate,
    setSelectedTemplate,
    generateResumePDF,
    isGenerating,
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};

// --- Custom Hook ---
export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};
