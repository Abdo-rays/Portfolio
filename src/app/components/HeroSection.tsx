import { motion } from "motion/react";
import { Github, Linkedin, Youtube } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "Front-end Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Web Performance Expert",
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-6"
            >
              <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-green-700 dark:text-green-400">OPEN TO WORK</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 dark:text-white"
            > 
              Abdelrahman mohamed Ahmed
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="min-h-16 mb-6"
            >
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400"
              >
                {roles[currentRole]} crafting fast & accessible web interfaces
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              I build production ready web applications using React and Next.js, with a strong focus on
              performance, accessibility, and clean UI architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium text-center"
              >
                View My Work
              </motion.a>
              <motion.a
                href="https://flowcv.com/resume/8hnv53cbnr76"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-white text-center"
              >
                View CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              {[
                { Icon: Github, href: "https://github.com/Abdo-rays" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/abdelrahman-mohamed-1287872a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-white"
                >
                  <Icon className="size-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="../assets/por.jpg"
                alt="Abdelrahman Mohamed - Full-stack Developer"
                className="relative rounded-3xl shadow-2xl w-full h-[350px] sm:h-[500px] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center mt-20"
        >
          <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">Explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full mx-auto mt-4 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}