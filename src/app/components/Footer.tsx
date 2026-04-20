import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-semibold mb-1 dark:text-white">Abdelrahman Mohamed</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">full-stack Developer - React & Next.js & Node.js</p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { Icon: Github, href: "https://github.com/Abdo-rays" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/abdelrahman-mohamed-1287872a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
              { Icon: Mail, href: "mailto:abdelrahman.mohamed.ahmed@gmail.com" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors dark:text-white"
              >
                <Icon className="size-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2026 Abdelrahman Mohamed. All rights reserved.
        </div>
      </div>
    </footer>
  );
}