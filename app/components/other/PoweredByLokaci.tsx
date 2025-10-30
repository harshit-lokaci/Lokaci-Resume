"use client";

import { motion } from "framer-motion";

export default function PoweredByLokaci({ text = "Our Processes", Icon }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="inline-flex animate-pulse items-center gap-2 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-full px-5 py-2 border border-yellow-400 shadow-md hover:shadow-xl transition-all duration-300">
        {Icon && <Icon className="text-yellow-600 w-4 h-4 animate-pulse" />}
        <span className="text-sm font-medium text-yellow-700">{text}</span>
      </div>
    </motion.div>
  );
}
