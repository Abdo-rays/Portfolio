import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "./components/SEO";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEO />
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}