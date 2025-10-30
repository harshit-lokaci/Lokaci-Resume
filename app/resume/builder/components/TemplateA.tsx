import React from "react";

// Helper component for bullet points
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

export default function TemplateA({ data }) {
  // Safely extract skills
  const skillsToDisplay = Array.isArray(data.skills.technical)
    ? data.skills.technical.join(", ")
    : typeof data.skills === "string"
    ? data.skills
    : "";

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm w-full max-w-4xl h-fit mx-auto my-8 font-sans">
      {/* Header */}
      <header className="mb-6 pb-2 border-b-4 border-green-700">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 tracking-tight">
          {data.personal.name}
        </h1>
        <h2 className="text-xl font-semibold text-center text-green-700 mt-1 mb-2">
          {data.personal.title}
        </h2>
        <p className="text-sm text-gray-600 text-center flex justify-center flex-wrap gap-x-4">
          <span>{data.personal.phone}</span> |<span>{data.personal.email}</span>{" "}
          | <span className="truncate">{data.personal.linkedin}</span>
        </p>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-lg font-bold border-b-2 border-gray-300 pb-1 mb-3 text-green-700 uppercase tracking-wider">
          Professional Summary
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm">{data.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h3 className="text-lg font-bold border-b-2 border-gray-300 pb-1 mb-3 text-green-700 uppercase tracking-wider">
          Experience
        </h3>
        {data.experience.map((job) => (
          <div key={job.id} className="mb-4">
            <p className="font-bold text-base text-gray-800">
              {job.title} at {job.company}{" "}
              <span className="italic text-gray-500 text-sm font-normal">
                — {job.years}
              </span>
            </p>
            <ResumeBulletPoints description={job.description} />
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h3 className="text-lg font-bold border-b-2 border-gray-300 pb-1 mb-3 text-green-700 uppercase tracking-wider">
          Education
        </h3>
        <div className="space-y-1">
          {data.education &&
            data.education.map((edu) => (
              <p key={edu.id} className="text-sm text-gray-700">
                <span className="font-semibold">{edu.degree}</span> from{" "}
                <span className="italic">{edu.institution}</span>
                <span className="text-gray-500 ml-2">({edu.years})</span>
              </p>
            ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-lg font-bold border-b-2 border-gray-300 pb-1 mb-3 text-green-700 uppercase tracking-wider">
          Technical Skills
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          {skillsToDisplay}
        </p>
      </section>
    </div>
  );
}
