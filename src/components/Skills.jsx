import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiExpress, SiFirebase, SiNextdotjs, SiTypescript, SiJsonwebtokens } from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-base-content dark:text-base-content" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-base-content dark:text-base-content" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-purple-600" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-base-content dark:text-base-content" /> },
      { name: "Docker (Basics)", icon: <FaDocker className="text-blue-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-base-100 dark:bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-base-content"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-base-100 dark:bg-base-200 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-base-content">{group.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 dark:hover:bg-base-300 transition"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-base-content">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center max-w-xl mx-auto opacity-70 italic text-base-content"
        >
          Currently expanding my skill set by integrating AI technologies to build smarter, more innovative web applications.
        </motion.p>
      </div>
    </section>
  );
}


