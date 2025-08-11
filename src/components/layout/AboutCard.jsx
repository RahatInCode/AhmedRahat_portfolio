"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function AboutCard() {
  return (
    <motion.div
      className="relative w-[350px] max-w-full mx-auto bg-[#F5F5F4]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Main image */}
      <motion.img
        src="https://i.imghippo.com/files/XQ9091RRo.jpg"
        alt="Profile"
        className="rounded-lg shadow-lg object-cover w-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      {/* Green square top-left */}
      <motion.div
        className="absolute -top-4 -left-4 w-6 h-6 bg-green-500"
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      ></motion.div>

      {/* Green square bottom-right */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-500"
        animate={{ y: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      ></motion.div>

      {/* Top-right plus icon */}
      <motion.div
        className="absolute -top-5 right-8 text-green-500 text-2xl font-bold"
        animate={{ rotate: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        +
      </motion.div>

      {/* CV download button */}
      <motion.a
        href="/files/AhmedRahat_Resume.pdf"
        download
        className="absolute -left-12 bottom-1/2 translate-y-1/2 rounded-full border-2 border-green-500 bg-white w-20 h-20 flex flex-col items-center justify-center text-green-500 font-semibold text-xs tracking-widest gap-1 hover:bg-green-500 hover:text-white transition-colors"
        whileHover={{ rotate: 10, scale: 1.05 }}
      >
        <FaDownload className="text-lg" />
        CV
      </motion.a>
    </motion.div>
  );
}
