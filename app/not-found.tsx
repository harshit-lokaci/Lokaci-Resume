"use client";
import { BsEmojiFrown } from "react-icons/bs";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <div
        className="flex flex-col items-center justify-center text-center p-12 bg-white rounded-2xl max-w-lg w-full 
                      border border-gray-200 shadow-2xl shadow-gray-300/50 
                      transition-all duration-700 hover:shadow-gray-400/60"
      >
        <BsEmojiFrown
          className="w-28 h-28 text-yellow-600 mb-6 drop-shadow-sm"
          aria-hidden="true"
        />

        <h2 className="text-9xl font-black mb-4 leading-none bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-orange-600 to-red-500 tracking-tight transform hover:scale-[1.01] transition-transform duration-300">
          404
        </h2>

        <p className="text-2xl text-gray-800 font-bold mb-4 tracking-wider">
          PAGE NOT FOUND
        </p>
        <p className="text-md text-gray-500 mb-10 max-w-xs">
          Uh oh! The requested resume, template, or page appears to have
          vanished into the digital void.
        </p>

        <Link
          href="/"
          className="px-10 py-4 bg-yellow-600 text-white rounded-full font-bold text-lg 
                     shadow-lg shadow-yellow-500/50 hover:bg-yellow-700 transition duration-300 
                     transform hover:scale-105 active:scale-95 ring-2 ring-yellow-600 ring-offset-2 ring-offset-white 
                     flex items-center justify-center gap-2"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
