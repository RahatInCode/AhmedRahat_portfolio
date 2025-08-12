"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaBriefcase, FaProjectDiagram, FaSmile, FaCode } from "react-icons/fa";

const stats = [
  { label: "Years of Learning", value: 1 
, icon: <FaBriefcase className="text-yellow-500" /> },
  { label: "Projects Completed", value: 30, icon: <FaProjectDiagram className="text-blue-500" /> },
  { label: "Happy Clients", value: 15, icon: <FaSmile className="text-gray-500" /> },
  { label: "Technologies Mastered", value: 10, icon: <FaCode className="text-purple-500" /> }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-all"
          >
            {/* Icon */}
            <div className="flex justify-center text-4xl mb-3">{stat.icon}</div>

            {/* Number with CountUp */}
            <p className="text-5xl font-extrabold bg-gradient-to-r from-gray-500 to-blue-500 bg-clip-text text-transparent">
              <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>

            {/* Label */}
            <p className="mt-2 text-lg font-medium text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
