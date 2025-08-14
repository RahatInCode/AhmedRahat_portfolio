"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  { icon: <Briefcase className="w-6 h-6" />, title: "Junior Web Developer", place: "Freelance", year: "2024 - Present", desc: "Developing MERN stack applications for small businesses." },
  { icon: <GraduationCap className="w-6 h-6" />, title: "BBA in Management", place: "National University", year: "2022 - 2027", desc: "Focused on Business Administration with a specialization in management." },
  { icon: <GraduationCap className="w-6 h-6" />, title: "MERN Stack Development", place: "Programming Hero", year: "2025 - 2025 (June)", desc: "Completed full-stack web development training." }
];

export default function ExperienceEducation() {
  return (
    <section id="timeline" className="py-20 bg-base-100 dark:bg-base-200">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-base-content dark:text-base-100">Experience & Education</h2>
        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <motion.div key={idx} initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} transition={{duration:0.6}} className="flex gap-4 items-start">
              <div className="bg-primary text-primary-content p-3 rounded-full">{item.icon}</div>
              <div className="card bg-base-100 dark:bg-base-300 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-base-content dark:text-base-100">{item.title}</h3>
                <p className="text-sm text-base-content/60 dark:text-base-100/60">{item.place} | {item.year}</p>
                <p className="text-base-content/80 dark:text-base-100/80 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

