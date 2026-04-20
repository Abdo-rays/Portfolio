import { motion } from "motion/react";

export function AboutSection() {
  const skills = [
    "Git & GitHub",
    "postman",
    "vs code",
    "vercel",
    "figma",
  ];

  const education = [
    {
      degree: "Bachelor Degree",
      institution: "Bachelor of Science in Information Technology (IT)Minya University — Faculty of Science",
      year: "2021 - 2025",
      gradient: "from-cyan-500/20 to-transparent",
    },
  ];

  const experience = [
    {
      company: "Programming Instructor",
      position: "",
      period: "2024",
      description:
        "• Delivering a private programming course covering( Html5,css3,js) with ACM Team for 6 months",
      gradient: "from-blue-500/20 to-transparent",
    },
    {
      company: "National Technology Institute(NTI)",
      position: "",
      period: "2026",
      description:
        "•Executed full-stack web applications using MongoDB, Express.js,Angular, and Minya,EgypNode.js (210-hour training). •Improved application performance using caching techniques. •Implemented input validation using Joi to ensure data correctness and securit",
      gradient: "from-cyan-500/20 to-transparent",
    },
    {
      company: "Web Design",
      position: "",
      period: "9/2023- 12/2023",
      description:
        "• National Telecommunication Institute (NTI) ) - Minya Branch",
      gradient: "from-blue-400/20 to-transparent",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Biography Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src="../assets/por.jpg"
                alt="Abdelrahman Mohamed"
                className="relative rounded-3xl w-full shadow-2xl"
              />
            </motion.div>

            {/* Right - Biography Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold mb-6 dark:text-white"
                >
                  MY BIOGRAPHY
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="h-1 w-64 bg-gradient-to-r from-blue-500 to-cyan-400 mb-8"
                  style={{ transformOrigin: "left" }}
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              >
              Full Stack Developer(Angular&React)with a strong foundation in object-Oriented Programming, Data Structures, Algorithms, and Design Patterns, complemented by solid problem-solving skills. Experienced in building scalable, production-ready
applications using Angular and React for dynamic front-end development, alongside Node.js, Express, and MongoDB for robust
backend systems. Skilled in designing secure authentication systems, clean backend architecture, and high-performance
RESTful APIs
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
              >
                {/* Aliquam lectus faucibus augue, in porttitor eros imperdiet sit. Vivamus eu tortor sit risus ut mi ultrices sit ac, accumsan sed anta. */}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4 dark:text-white">
                  Tools & Interest
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium dark:text-white cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="relative">
            {/* Left Side - Title and Items */}
            <div className="flex gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-96"
              >
                <h2 className="text-5xl font-bold mb-6 dark:text-white">EDUCATION</h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="h-1 w-48 bg-gradient-to-r from-blue-500 to-cyan-400 mb-12"
                  style={{ transformOrigin: "left" }}
                />

                {/* Education Items */}
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="flex gap-4 items-start"
                    >
                      {/* Chevron Icon */}
                      <svg
                        className="w-10 h-10 text-cyan-400 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        <path d="M13.59 16.59L18.17 12l-4.58-4.59L15 6l6 6-6 6-1.41-1.41z" />
                      </svg>

                      <div>
                        <h3 className="text-xl font-bold dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {edu.institution} {edu.year}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Side - Large Year and Description */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                {/* Large Outlined Year */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h3
                    className="text-8xl font-bold mb-8"
                    style={{
                      WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
                      color: "transparent",
                    }}
                  >
                    2021 - 2025
                  </h3>
                </motion.div>

                {/* Description Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-400 dark:text-gray-400 leading-relaxed mb-6"
                >
                  GPA: 2.3 / 4.0 <br />
                     Graduation Project: Mentor Hub Platform — Grade: A+
                </motion.p>


              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left - Title and Items */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6 dark:text-white">EXPERIENCE</h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="h-1 w-48 bg-gradient-to-r from-blue-500 to-cyan-400 mb-12"
                style={{ transformOrigin: "left" }}
              />

              {/* Experience Items */}
              <div className="space-y-10">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Header Outside Card */}
                    <div className="flex gap-4 items-start mb-4">
                      {/* Chevron Icon */}
                      <svg
                        className="w-10 h-10 text-cyan-400 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        <path d="M13.59 16.59L18.17 12l-4.58-4.59L15 6l6 6-6 6-1.41-1.41z" />
                      </svg>

                      <div>
                        <h3 className="text-xl font-bold dark:text-white">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-gray-300 dark:text-gray-300">
                          {exp.position} {exp.period}
                        </p>
                      </div>
                    </div>

                    {/* Description Card */}
                    <div className="ml-14 p-6 bg-gray-800/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                      <p className="text-gray-300 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Large Year */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              {/* Large Outlined Year */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3
                  className="text-8xl font-bold"
                  style={{
                    WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
                    color: "transparent",
                  }}
                >
                  2023 - 2026
                </h3>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}