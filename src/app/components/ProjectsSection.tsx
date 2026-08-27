import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Rento",
    description: "Car rental and sales platform...",
    image: "../assets/scen1.png",
    tags: ["React", "Next.js", "js", "Api","Node.js", "Tailwind", "MongoDB"],
      live: "https://rento-frontend-rho.vercel.app/ar",
    code: "https://github.com/Cars-Rental/CarRental1",
  },
  {
    title: "wagpaty",
    description: "A platform for restaurants, allowing you to buy meals from multiple restaurants and receive discounts.",
    image: "../assets/scen2.png",
    tags: ["React", "Tailwind", "Api","Node.js", "js", "MongoDB"],
     live: "https://wagpaty.vercel.app/home",
    code: "https://github.com/Abdo-rays/wagpaty",
  
  },
  {
    title: "Pet Adoption",
    description: "A platform for adopting pets...",
    image: "../assets/scen3.png",
    tags: ["Node.js", "Api", "MongoDB","swagger" ],
     live: "#",
    code: "https://github.com/AbdelrahmanEssam17/animals-adoptation-project",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
            <span className="px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-sm dark:text-white">
              Projects
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">Selected Work</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            A collection of projects where I focused on performance, clean UI, and real-world usability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-transparent dark:border-gray-800"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-900 dark:text-white rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
  <motion.a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium"
  >
    <ExternalLink className="size-4" />
    Live
  </motion.a>

  <motion.a
    href={project.code}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-white"
  >
    <Github className="size-4" />
    Code
  </motion.a>
</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}