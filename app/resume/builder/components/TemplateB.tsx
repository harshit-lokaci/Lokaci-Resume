import React from "react";

// Helper to render bullet points
const ResumeBulletPoints = ({ description }) => (
  <ul className="list-disc ml-5 text-gray-700 mt-1 space-y-1 text-sm">
    {description
      .split(/([.!?])\s+/)
      .filter(Boolean)
      .map((point, i) => {
        const trimmed = point.trim();
        if (!trimmed) return null;
        const finalPoint =
          trimmed.endsWith(".") ||
          trimmed.endsWith("!") ||
          trimmed.endsWith("?")
            ? trimmed
            : trimmed + ".";
        return <li key={i}>{finalPoint}</li>;
      })}
  </ul>
);

export default function TemplateB({ data }) {
  // Ensure skills are arrays
  const skillsData =
    data.skills && typeof data.skills === "object"
      ? data.skills
      : {
          technical:
            typeof data.skills === "string"
              ? data.skills.split(",").map((s) => s.trim())
              : [],
          soft: [],
        };

  return (
    <div className="p-0 bg-white shadow-sm w-full max-w-5xl mx-auto my-8 font-sans flex flex-col lg:flex-row h-fit border-t-8 border-blue-600">
      {/* Sidebar */}
      <aside className="lg:w-1/3 bg-gray-50 p-6 space-y-6 border-r border-gray-200">
        <div className="text-center pb-4 border-b border-gray-300">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {data.personal.name}
          </h1>
          <h2 className="text-lg font-semibold text-blue-600 mt-1">
            {data.personal.title}
          </h2>
        </div>

        {/* Contact Info */}
        <section className="space-y-1">
          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest pb-1 border-b border-blue-200">
            Contact
          </h3>
          <p className="text-sm text-gray-700">{data.personal.phone}</p>
          <p className="text-sm text-gray-700 break-all">
            {data.personal.email}
          </p>
          {data.personal.location && (
            <p className="text-sm text-gray-700">{data.personal.location}</p>
          )}
          <p className="text-sm text-blue-700 break-all truncate hover:underline">
            {data.personal.linkedin}
          </p>
          {data.personal.github && (
            <p className="text-sm text-blue-700 break-all truncate hover:underline">
              {data.personal.github}
            </p>
          )}
        </section>

        {/* Technical Skills */}
        <section>
          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest pb-1 border-b border-blue-200 mb-3">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.technical.map((skill, index) => (
              <span
                key={index}
                className="text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        {skillsData.soft && skillsData.soft.length > 0 && (
          <section>
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest pb-1 border-b border-blue-200 mb-2">
              Soft Skills
            </h3>
            <ul className="list-disc ml-4 text-gray-700 text-sm space-y-1">
              {skillsData.soft.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Education */}
        <section>
          <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest pb-1 border-b border-blue-200 mb-3">
            Education
          </h3>
          <div className="space-y-3">
            {data.education &&
              data.education.map((edu) => (
                <div key={edu.id}>
                  <p className="font-semibold text-sm text-gray-800">
                    {edu.degree}
                  </p>
                  <p className="italic text-xs text-gray-600">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{edu.years}</p>
                </div>
              ))}
          </div>
        </section>
      </aside>

      {/* Main Content */}
      <main className="lg:w-2/3 p-6 space-y-6">
        {/* Profile */}
        <section className="pb-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">
            Profile
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm">
            {data.summary}
          </p>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider pb-1 mb-4 border-b border-gray-200">
            Professional Experience
          </h3>
          {data.experience.map((job) => (
            <div key={job.id} className="mb-5">
              <div className="flex justify-between items-start mb-1">
                <p className="font-bold text-base text-gray-900">{job.title}</p>
                <span className="text-sm italic text-gray-500 font-medium">
                  {job.years}
                </span>
              </div>
              <p className="text-sm font-semibold text-blue-700 mb-2">
                {job.company}
              </p>
              <ResumeBulletPoints description={job.description} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
