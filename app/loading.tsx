"use client";

import { FiZap } from "react-icons/fi";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <div
        className="flex flex-col items-center justify-center text-center p-12 bg-white rounded-2xl max-w-lg w-full 
                      border border-gray-200 shadow-2xl shadow-gray-300/50 fade-in"
      >
        <FiZap
          className="w-20 h-20 text-yellow-600 mb-6 pulse-text transform transition-transform duration-500 hover:scale-110"
          aria-hidden="true"
        />

        <h2 className="text-3xl font-bold text-gray-800 mb-2 tracking-wider pulse-text">
          LOADING...
        </h2>

        <p className="text-lg text-gray-500 max-w-xs pulse-text">
          Please wait!
        </p>

        <div className="mt-8 w-full max-w-sm h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner relative">
          <div className="absolute h-full bg-yellow-500 loading-bar" />
        </div>
      </div>
    </div>
  );
}
