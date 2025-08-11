import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Junior Web Developer",
    place: "Freelance",
    year: "2024 - Present",
    desc: "Developing MERN stack applications for small businesses."
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "BBA in management",
    place: "National University",
    year: "2022 - 2027",
    desc: "Focused on  Business Administration with a specialization in management."
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Mern Stack Development",
    place: "Programming Hero",
    year: "2025 - 2025(june)",
    desc: "Focused on  Business Administration with a specialization in management."
  }
];

export default function ExperienceEducation() {
  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Education</h2>
        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-4"
            >
              <div className="bg-gray-500 text-white p-3 rounded-full">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.place} | {item.year}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
