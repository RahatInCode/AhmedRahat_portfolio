import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Ranna Banna",
    img: "/images/ranna banna.png",
    live: "https://ranna-banna-93ff1.web.app",
    github: "https://github.com/RahatInCode/ranna-banna-client-public.git"
  },
  {
    title: "Medicamp",
    img: "/images/medicamp.png",
    live: "https://medicamp-1e9cc.web.app/",
    github: "https://github.com/RahatInCode/medicamp-public.git"
  },
  {
    title: "Where Is It",
    img: "/images/lost and found.png",
    live: "https://whereisit-43e1b.web.app/",
    github: "https://github.com/RahatInCode/whereisit-client-public.git"
  }
];

export default function Portfolio() {
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
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              <img src={proj.img} alt={proj.title} className="w-full h-56 object-cover group-hover:scale-110 transition duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-lg mb-4">{proj.title}</h3>
                <div className="flex gap-4">
                  <a href={proj.live} target="_blank" className="bg-gray-500 p-2 rounded-full text-white">
                    <ExternalLink />
                  </a>
                  <a href={proj.github} target="_blank" className="bg-gray-700 p-2 rounded-full text-white">
                    <Github />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
