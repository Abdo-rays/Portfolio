import { Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold cursor-pointer dark:text-white"
          onClick={() => scrollToSection("home")}
        >
          HE Portfolio
        </motion.h1>

        <nav className={`${isMenuOpen ? "flex" : "hidden"} md:flex absolute md:static top-full left-0 right-0 md:items-center gap-5 lg:gap-8 flex-col md:flex-row items-stretch bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent border-b md:border-0 border-gray-200 dark:border-gray-800 px-4 py-4 md:p-0`}>
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "education", label: "Education" },
            { id: "experience", label: "Experience" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm transition-colors ${
                activeSection === item.id 
                  ? "text-black dark:text-white font-medium" 
                  : "text-gray-600 dark:text-gray-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? <Sun className="size-5 text-white" /> : <Moon className="size-5" />}
          </motion.button>
        </nav>

        <motion.button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </motion.button>
      </div>
    </motion.header>
  );
}