//app/resume/builder/components/TemplateSwitcher.tsx
"use client";
import React, { useState } from "react";
import TemplateA from "./TemplateA";
import TemplateB from "./TemplateB";

export default function TemplateSwitcher() {
  const [selectedTemplate, setSelectedTemplate] = useState<"A" | "B">("A");

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "A":
        return <TemplateA />;
      case "B":
        return <TemplateB />;
      default:
        return <TemplateA />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Switch Buttons */}
      <div className="flex gap-4 mb-8 justify-center">
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            selectedTemplate === "A"
              ? "bg-yellow-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setSelectedTemplate("A")}
        >
          Template A
        </button>
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            selectedTemplate === "B"
              ? "bg-yellow-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setSelectedTemplate("B")}
        >
          Template B
        </button>
      </div>

      {/* Render Selected Template */}
      <div>{renderTemplate()}</div>
    </div>
  );
}
