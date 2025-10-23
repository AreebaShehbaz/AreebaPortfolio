import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useTransform } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleBackground from "./components/background"

 function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      
      <Hero />
      <SectionDivider />
      
      <About />
      <SectionDivider />
      
      <Skills />
      <SectionDivider />
      
      <Experience />
      <SectionDivider />
      
      <Projects />
      <SectionDivider />
      
      <Contact />
      
      <footer className="text-center py-8 text-gray-500">
        <p>© 2025 Areeba Shehbaz. Built with React & Framer Motion</p>
      </footer>
    </div>
  );
  // Section Divider
function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-16"
    />
  );
}
}
export default App;