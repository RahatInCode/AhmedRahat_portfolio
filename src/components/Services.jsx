import { motion } from "framer-motion";
import { Code2, Monitor, Brain } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-12 h-12 text-gray-500" />,
    title: "Web Development",
    desc: "Building blazing-fast, scalable web apps with the MERN stack—clean code, pixel-perfect, future-ready."
  },
  {
    icon: <Monitor className="w-12 h-12 text-gray-500" />,
    title: "Frontend Engineering",
    desc: "Designing sleek, intuitive interfaces with React & Tailwind CSS that feel as good as they look."
  },
  {
    icon: <Brain className="w-12 h-12 text-gray-500" />,
    title: "AI-Powered Features",
    desc: "Experimenting with AI integrations to create smarter, more adaptive user experiences."
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-gray-800 dark:text-white"
        >
          What I Do
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,theme(colors.green.400),transparent_70%)] pointer-events-none"></div>
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

