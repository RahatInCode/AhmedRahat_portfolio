"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Example projects data
const projectsData = [
  {
    id: 1,
    title: "React Portfolio",
    category: "React",
    description: "A sleek personal portfolio built with React & Framer Motion.",
    image: "/images/react-portfolio.png",
    live: "https://your-portfolio-live-link.com",
    github: "https://github.com/your-username/react-portfolio",
  },
  {
    id: 2,
    title: "Weather App",
    category: "JavaScript",
    description: "Vanilla JS weather app using OpenWeather API.",
    image: "/images/weather-app.png",
    live: "https://your-weather-live-link.com",
    github: "https://github.com/your-username/weather-app",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "MERN stack e-commerce with payments integration.",
    image: "/images/ecommerce.png",
    live: "https://your-ecommerce-live-link.com",
    github: "https://github.com/your-username/ecommerce",
  },
  {
    id: 4,
    title: "Business Website",
    category: "WordPress",
    description: "Custom WordPress theme for a business site.",
    image: "/images/wordpress.png",
    live: "https://your-wordpress-live-link.com",
    github: "https://github.com/your-username/wordpress",
  },
];

const categories = ["All", "React", "JavaScript", "Full Stack", "WordPress"];

export default function ProjectsAll() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm rounded-full transition-all duration-300 ${
              selectedCategory === cat ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <figure>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="text-sm opacity-80 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3">
                    <span className="badge badge-outline">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal for project details */}
      {activeProject && (
        <dialog
          open
          className="modal modal-open"
          onClose={() => setActiveProject(null)}
        >
          <div className="modal-box max-w-3xl">
            <figure className="mb-4">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </figure>
            <h3 className="font-bold text-2xl mb-2">{activeProject.title}</h3>
            <p className="mb-4">{activeProject.description}</p>
            <div className="mb-4">
              <span className="badge badge-primary">{activeProject.category}</span>
            </div>
            <div className="flex gap-3">
              <a
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub Repo
              </a>
            </div>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setActiveProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}


