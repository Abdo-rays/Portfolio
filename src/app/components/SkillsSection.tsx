import { motion } from "motion/react";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Redux Toolkit",
  "Angular",
  "React Query",
  "React Hook Form",
  "Node.js",
  "Express.js",
  "Supabase",
  "postman",
  "Git",
  "GitHub",
  "Vercel",
  "Netlify",
];

const tools = [
  "React ⚛️",
  "Next.js ▲",
  "TypeScript 📘",
  "Tailwind CSS 🌊",
  "JavaScript 📜",
  "Node.js 🟢",
  "GitHub 🐙",
  "Figma 🎨",
  "VSCode 💻",
  "Redux 🔄",
  "postman 🐻",
  "Git 📦",
  "Supabase 🗄️",
  "Vercel ▲",
  "shadcn/ui 🎯",
  "Framer Motion ✨",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-900 dark:text-white rounded-lg text-sm font-medium cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 mb-20"
        >
          <p className="text-lg dark:text-white">
            Interested in working together?🤝{" "}
            <span className="font-semibold">Let's build something great.</span>
          </p>
        </motion.div>

        {/* Tools - Simple Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Tools I Use Daily</h2>

          {/* Single smooth scrolling line */}
          <div className="relative">
            <div className="flex gap-8 animate-scroll-smooth">
              {[...tools, ...tools, ...tools].map((tool, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="flex-shrink-0 text-2xl font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent cursor-default whitespace-nowrap"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
            
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none z-10" />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-smooth {
          animation: scroll-smooth 40s linear infinite;
        }

        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
