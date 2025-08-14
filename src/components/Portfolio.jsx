import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";

const projects = [
  {
    title: "Ranna Banna",
    img: "/images/ranna banna.png",
    live: "https://ranna-banna-93ff1.web.app",
    github: "https://github.com/RahatInCode/ranna-banna-client-public.git",
    description:
      "Ranna Banna is a cooking recipe sharing platform where users can browse, upload, and save recipes. It features an intuitive interface, recipe categories, and search functionality for an enhanced culinary experience.",
    stack: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    title: "Medicamp",
    img: "/images/medicamp.png",
    live: "https://medicamp-1e9cc.web.app/",
    github: "https://github.com/RahatInCode/medicamp-public.git",
    description:
      "Medicamp is a medical camp management system that streamlines the organization of healthcare events. It allows administrators to manage schedules, doctors, patient registrations, and resources efficiently.",
    stack: ["MERN", "Firebase", "JWT"]
  },
  {
    title: "Where Is It",
    img: "/images/lost and found.png",
    live: "https://whereisit-43e1b.web.app/",
    github: "https://github.com/RahatInCode/whereisit-client-public.git",
    description:
      "Where Is It is a lost and found items listing website that connects finders and owners. Users can post lost items, search for found items, and communicate to facilitate item recovery.",
    stack: ["React", "Node.js", "MongoDB"]
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-base-100 via-base-200 to-base-100 font-inter">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-poppins font-bold text-center mb-14 text-primary">
          My Recent Works
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-primary via-secondary to-accent shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-base-100 dark:bg-base-200 rounded-2xl overflow-hidden flex flex-col h-full">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-56 object-cover"
                />

                {/* Title */}
                <h3 className="text-lg font-semibold text-base-content text-center mt-4">
                  {proj.title}
                </h3>

                {/* Stack */}
                <div className="flex gap-2 flex-wrap justify-center p-4">
                  {proj.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-primary text-primary-content rounded-full shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-3 pb-5">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary-focus text-secondary-content flex items-center gap-1 shadow"
                  >
                    <Rocket size={16} /> Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
     <AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full text-base-content"
        style={{ backgroundColor: "#FFFDD0" }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          <img
            src={selectedProject.img}
            alt={selectedProject.title}
            className="w-full h-full object-contain object-center rounded-l-2xl"
          />
          <div className="p-8 flex flex-col">
            <h3 className="text-3xl font-poppins font-bold text-primary mb-4">
              {selectedProject.title}
            </h3>
            <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              {selectedProject.description}
            </p>

            <div className="mb-6 flex gap-2 flex-wrap">
              {selectedProject.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-semibold bg-primary text-primary-content rounded-full shadow"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mb-6">
              <a
                href={selectedProject.live}
                target="_blank"
                className="bg-primary hover:bg-primary-focus text-primary-content px-5 py-2 rounded-lg flex items-center gap-2 transition shadow"
              >
                <ExternalLink size={16} /> Live Site
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                className="bg-neutral hover:bg-neutral-focus text-neutral-content px-5 py-2 rounded-lg flex items-center gap-2 transition shadow"
              >
                <Github size={16} /> GitHub
              </a>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-auto w-full text-center py-3 rounded-lg bg-error hover:bg-error-focus text-error-content transition shadow font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}




