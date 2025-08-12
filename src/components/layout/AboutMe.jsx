"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 overflow-visible"
    >
      {/* images floating around About section */}
      <img
        src="/images/doodle-crown.svg"
        alt="Doodle Crown"
        className="absolute top-4 left-58 w-17 opacity-20 animate-floatSlow rotate-[10deg]"
        style={{ animationDelay: "0s" }}
      />
      <img
        src="/images/star.png"
        alt="Star Doodle"
        className="absolute top-24 right-12 w-12 opacity-50 animate-floatFast rotate-[-15deg]"
        style={{ animationDelay: "1.2s" }}
      />
      <img
        src="/images/abstract-christmas-tree.png"
        alt="Scribble Doodle"
        className="absolute bottom-20 left-10 w-14 opacity-20 filter: brightness(2);
 animate-floatSlow rotate-[20deg]"
        style={{ animationDelay: "2.5s" }}
      />
      <img
        src="/images/beach.png"
        alt="Wave Doodle"
        className="absolute bottom-12 right-20 w-16 opacity-60 animate-floatFast rotate-[-10deg]"
        style={{ animationDelay: "3.7s" }}
      />
      <img
        src="/images/doodle-circle.svg"
        alt="Circle Doodle"
        className="absolute top-1/2 left-1/2 w-20 opacity-40 animate-floatSlow rotate-[5deg] translate-x-[-50%] translate-y-[-50%]"
        style={{ animationDelay: "4.5s" }}
      />

      {/* About Card */}
      <motion.div
        className="relative w-[350px] max-w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Main image */}
        <motion.img
          src="/images/coding.jpg"
          alt="Profile"
          className="rounded-lg shadow-lg object-cover w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* Green square top-left */}
        <motion.div
          className="absolute -top-4 -left-4 w-15 h-15 bg-green-500"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.div>

        {/* Green square bottom-right */}
        <motion.div
          className="absolute -bottom-4 -right-4 w-15 h-15 bg-green-500"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.div>

        {/* Top-right plus icon */}
        <motion.div
          className="absolute -top-5 right-8 text-green-500 text-4xl font-bold"
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

      {/* About Text */}
      <div className="flex-1 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-semibold text-gray-900 mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-700 leading-relaxed text-lg"
        >
          I am Ashik, a dedicated MERN stack developer with a strong foundation in
          web development and a background in Business Administration from National
          University Bangladesh.
          <br />
          <br />
          I specialize in building efficient, scalable, and user-friendly web
          applications using modern technologies such as React, Node.js, and
          MongoDB. My approach combines technical expertise with business insights
          to deliver solutions that align with client goals and enhance user
          experience.
          <br />
          <br />
          Continuously learning and adapting, I aim to contribute effectively in
          professional environments, bringing both creativity and discipline to
          every project.
        </motion.p>
      </div>

      {/* Animations for floating images */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--rotate, 0deg)); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(-15px) rotate(var(--rotate, 0deg)); }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
          --rotate: 10deg;
        }
        .animate-floatFast {
          animation: floatFast 4s ease-in-out infinite;
          --rotate: -10deg;
        }
      `}</style>
    </section>
  );
}


