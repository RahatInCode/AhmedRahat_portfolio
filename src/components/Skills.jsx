"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML5", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript (ES6+)", level: 85, icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React.js", level: 85, icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", level: 80, icon: <FaNodeJs className="text-gray-500" /> },
  { name: "Express.js", level: 80, icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", level: 75, icon: <SiMongodb className="text-gray-600" /> },
  { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Git", level: 85, icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", level: 80, icon: <FaGithub className="text-gray-300" /> }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-black bg-clip-text "
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.07 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Circular Progress */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - skill.level / 100)}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.level / 100) }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-500">
                  {skill.level}%
                </div>
              </div>

              {/* Icon */}
              <div className="text-3xl mb-2 flex justify-center">{skill.icon}</div>

              {/* Name */}
              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
