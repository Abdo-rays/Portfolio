import { motion } from "motion/react";
import { Mail, Github, Linkedin, Youtube, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
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
              Contact
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Whether you have a project, a question, or just want to say hi my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 mb-8 border border-transparent dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white dark:bg-gray-950 rounded-lg">
                  <Mail className="size-6 dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
                  <p className="font-medium dark:text-white">abdelrahmanmohamedahmed540@gmail.com</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">phone</p>
                  <p className="font-medium dark:text-white">01009313757</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Find me on</p>
                <div className="flex gap-3">
                  {[
                    { Icon: Github, label: "GitHub", href: "https://github.com/Abdo-rays" },
                    { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abdelrahman-mohamed-1287872a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app#" },
                    { Icon: Youtube, label: "Youtube", href: "#" },
                  ].map(({ Icon, label, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-white dark:hover:bg-gray-950 transition-colors text-sm dark:text-white"
                    >
                      <Icon className="size-4" />
                      {label}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="font-medium mb-1 dark:text-white">Availability</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Open for freelance & full-time opportunities</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 dark:bg-gray-900 dark:text-white"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 dark:bg-gray-900 dark:text-white"
                  />
                </motion.div>
              </div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 dark:bg-gray-900 dark:text-white"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <textarea
                  placeholder="Your message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 resize-none dark:bg-gray-900 dark:text-white"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium"
              >
                <Send className="size-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}