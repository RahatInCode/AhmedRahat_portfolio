import { motion } from "framer-motion";
import { Code2, Monitor, Brain } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-12 h-12 text-primary" />,
    title: "Web Development",
    desc: "Building blazing-fast, scalable web apps with the MERN stack—clean code, pixel-perfect, future-ready."
  },
  {
    icon: <Monitor className="w-12 h-12 text-primary" />,
    title: "Frontend Engineering",
    desc: "Designing sleek, intuitive interfaces with React & Tailwind CSS that feel as good as they look."
  },
  {
    icon: <Brain className="w-12 h-12 text-primary" />,
    title: "AI-Powered Features",
    desc: "Experimenting with AI integrations to create smarter, more adaptive user experiences."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-base-200 dark:bg-base-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-base-content"
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
              className="bg-base-100 dark:bg-base-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition relative overflow-hidden"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-base-content">{service.title}</h3>
              <p className="text-base-content/80 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

