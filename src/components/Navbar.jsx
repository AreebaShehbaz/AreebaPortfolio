import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        <motion.h1
          className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          onClick={() => scrollToSection("hero")}
          whileHover={{ scale: 1.05 }}
        >
          Areeba Shehbaz

        </motion.h1>

        <div className="hidden md:flex space-x-8">
          {[ "about", "skills", "experience", "projects", "contact"].map((id) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-gray-300 hover:text-blue-400 transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </div>

        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-lg"
        >
          {[ "about", "skills", "experience", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
