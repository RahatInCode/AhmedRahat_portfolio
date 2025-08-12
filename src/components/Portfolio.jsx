import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Rocket  } from "lucide-react";


const projects = [
  {
    title: "Ranna Banna",
    img: "/images/ranna banna.png",
    live: "https://ranna-banna-93ff1.web.app",
    github: "https://github.com/RahatInCode/ranna-banna-client-public.git",
    description:
      "Ranna Banna is a cooking recipe sharing platform where users can browse, upload, and save recipes. It features an intuitive interface, recipe categories, and search functionality for an enhanced culinary experience."
  },
  {
    title: "Medicamp",
    img: "/images/medicamp.png",
    live: "https://medicamp-1e9cc.web.app/",
    github: "https://github.com/RahatInCode/medicamp-public.git",
    description:
      "Medicamp is a medical camp management system that streamlines the organization of healthcare events. It allows administrators to manage schedules, doctors, patient registrations, and resources efficiently."
  },
  {
    title: "Where Is It",
    img: "/images/lost and found.png",
    live: "https://whereisit-43e1b.web.app/",
    github: "https://github.com/RahatInCode/whereisit-client-public.git",
    description:
      "Where Is It is a lost and found items listing website that connects finders and owners. Users can post lost items, search for found items, and communicate to facilitate item recovery."
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Recent Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden shadow-lg group bg-gray-100 dark:bg-gray-800"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {proj.title}
                </h3>
             <div className="flex justify-start p-4 gap-3">
  {/* View Details */}
  <button
    onClick={() => setSelectedProject(proj)}
    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-500 hover:text-white transition"
    title="View Details"
  >
    <Rocket size={18} />
  </button>

  {/* GitHub Link */}
  <a
    href={proj.github}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-500 hover:text-white transition"
    title="GitHub"
  >
    <Github size={18} />
  </a>

  {/* Live Site Link */}
  <a
    href={proj.live}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-500 hover:text-white transition"
    title="Live Site"
  >
    <ExternalLink size={18} />
  </a>
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
      className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-md w-full shadow-xl border border-gray-300 dark:border-gray-700 pointer-events-auto"
      >
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          {selectedProject.title}
        </h3>
        <img
          src={selectedProject.img}
          alt={selectedProject.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {selectedProject.description}
        </p>

        {/* Organizer login info (Medicamp only) */}
        {selectedProject.title === "Medicamp" && (
          <div className="mb-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg border border-gray-300 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-white text-sm mb-2">Organizer Credentials  (To add , edit , delete camps)</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <strong>Email:</strong> organizer@medicamp.com
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              <strong>Password:</strong> passWord123
            </p>
          </div>
        )}

        {/* Created With */}
       {/* Created With */}
<div className="mb-4">
  <h4 className="font-semibold text-gray-800 dark:text-white text-sm mb-2">Created With</h4>
  <div className="flex flex-wrap gap-3 items-center">
    {/* MERN stack split into 4 icons */}
    <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" title="MongoDB" className="h-6 w-6" />
    <img src="https://cdn.simpleicons.org/express/000000" alt="Express" title="Express" className="h-6 w-6 bg-white rounded" />
    <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" title="React" className="h-6 w-6" />
    <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" title="Node.js" className="h-6 w-6" />

    {/* Firebase */}
    <img src="https://cdn.simpleicons.org/firebase/FFCA28" alt="Firebase" title="Firebase" className="h-6 w-6" />

    {/* JWT */}
    <img src="https://cdn.simpleicons.org/jsonwebtokens/000000" alt="JWT" title="JWT" className="h-6 w-6" />
  </div>
</div>


        <div className="flex gap-4">
          <a
            href={selectedProject.live}
            target="_blank"
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <ExternalLink size={16} /> Live Site
          </a>
          <a
            href={selectedProject.github}
            target="_blank"
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
        <button
          onClick={() => setSelectedProject(null)}
          className="mt-4 w-full text-center py-2 rounded bg-red-500 hover:bg-red-600 text-white"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}
