import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaDribbble,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white via-yellow-100 to-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2">
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                MyBrand
              </h3>
              <span className="inline-block h-2 w-2 rounded-full bg-yellow-600 translate-y-1" />
            </div>
          </div>

          {/* Product */}
          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-600 hover:text-yellow-600 transition">Home</a></li>
              <li><a href="#support" className="text-gray-600 hover:text-yellow-600 transition">Support</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-yellow-600 transition">Pricing</a></li>
              <li><a href="#affiliate" className="text-gray-600 hover:text-yellow-600 transition">Affiliate</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3">
            <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#company" className="text-gray-600 hover:text-yellow-600 transition">Company</a></li>
              <li><a href="#blogs" className="text-gray-600 hover:text-yellow-600 transition">Blogs</a></li>
              <li><a href="#community" className="text-gray-600 hover:text-yellow-600 transition">Community</a></li>
              <li className="flex items-center gap-2">
                <a href="#careers" className="text-gray-600 hover:text-yellow-600 transition">Careers</a>
                <span className="inline-flex items-center rounded-full bg-yellow-600 text-white text-xs px-2 py-0.5">
                  We’re hiring!
                </span>
              </li>
              <li><a href="#about" className="text-gray-600 hover:text-yellow-600 transition">About</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#privacy" className="text-gray-600 hover:text-yellow-600 transition">Privacy</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-yellow-600 transition">Terms</a></li>
            </ul>
          </div>

          {/* Tagline + Social */}
          <div className="md:col-span-2 md:ml-auto">
            <p className="text-gray-700">
              Making every customer feel valued—no matter the size of your audience.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-600 transition">
                <FaDribbble size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-600 transition">
                <FaLinkedin size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-600 transition">
                <FaTwitter size={22} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-600 transition">
                <FaYoutube size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="mt-12 border-t border-yellow-100 pt-6 text-sm text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} MyBrand. All rights reserved.</span>
          <div className="hidden sm:block text-gray-400">
            Crafted with Next.js + Tailwind.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;