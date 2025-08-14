"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaBriefcase, FaProjectDiagram, FaSmile, FaCode } from "react-icons/fa";

const stats = [
  { label: "Years of Learning", value: 1, icon: <FaBriefcase className="text-yellow-500" /> },
  { label: "Projects Completed", value: 30, icon: <FaProjectDiagram className="text-blue-500" /> },
  { label: "Assignments", value: 12, icon: <FaSmile className="text-gray-500" /> },
  { label: "Core Technologies", value: 10, icon: <FaCode className="text-purple-500" /> }
];

export default function Stats() {
  return (
    <section className="py-20 bg-base-200 dark:bg-base-300">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-base-100 dark:bg-base-200/70 backdrop-blur-lg border border-base-300 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex justify-center text-4xl mb-3">{stat.icon}</div>
            <p className="text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />+
            </p>
            <p className="mt-2 text-lg font-medium text-base-content">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

