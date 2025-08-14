"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const achievements = [
  { title: "MERN Stack Certification", desc: "Completed full-stack web development training with excellence.", year: "2024" },
  { title: "Top Performer - Programming Hero", desc: "Ranked in top 5% of participants in the course.", year: "2025" }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-base-200 dark:bg-base-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-base-content dark:text-base-100">Achievements</h2>
        <div className="space-y-6">
          {achievements.map((item, idx) => (
            <motion.div key={idx} whileHover={{scale:1.02}} className="card bg-base-100 dark:bg-base-200 p-6 rounded-lg shadow flex gap-4 items-start">
              <Award className="w-10 h-10 text-primary" />
              <div>
                <h3 className="text-xl font-semibold text-base-content dark:text-base-100">{item.title}</h3>
                <p className="text-base-content/80 dark:text-base-100/80">{item.desc}</p>
                <span className="text-sm text-base-content/60 dark:text-base-100/60">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

