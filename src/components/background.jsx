import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Animated Background Particles
export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// // Enhanced Navbar
// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setIsOpen(false);
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-blue-500/10"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
//         <motion.h1
//           className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
//           onClick={() => scrollToSection("hero")}
//           whileHover={{ scale: 1.05 }}
//         >
//           Areeba.dev
//         </motion.h1>

//         <div className="hidden md:flex space-x-8">
//           {["hero", "about", "skills", "experience", "projects", "contact"].map((id) => (
//             <motion.button
//               key={id}
//               onClick={() => scrollToSection(id)}
//               className="text-gray-300 hover:text-blue-400 transition-colors relative group"
//               whileHover={{ y: -2 }}
//             >
//               {id.charAt(0).toUpperCase() + id.slice(1)}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
//             </motion.button>
//           ))}
//         </div>

//         <button
//           className="md:hidden text-2xl text-white"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           exit={{ opacity: 0, height: 0 }}
//           className="md:hidden bg-gray-900/95 backdrop-blur-lg"
//         >
//           {["hero", "about", "skills", "experience", "projects", "contact"].map((id) => (
//             <button
//               key={id}
//               onClick={() => scrollToSection(id)}
//               className="block w-full py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition"
//             >
//               {id.charAt(0).toUpperCase() + id.slice(1)}
//             </button>
//           ))}
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }

// // Enhanced Hero Section
// function  Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden"
//     >
//       {/* Animated gradient background */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"
//         animate={{
//           backgroundPosition: ["0% 0%", "100% 100%"],
//         }}
//         transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
//       />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 text-center px-6 max-w-4xl"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
//             Hi, I'm{" "}
//             <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               Areeba Shahbaz
//             </span>
//             <motion.span
//               animate={{ rotate: [0, 14, -8, 14, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
//               className="inline-block ml-2"
//             >
//               👋
//             </motion.span>
//           </h1>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="text-xl md:text-2xl text-gray-300 mb-8"
//         >
//           AI & Full-Stack Developer | Passionate about NLP & Voice Cloning
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="flex gap-4 justify-center flex-wrap"
//         >
//           <motion.a
//             href="#projects"
//             className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
//             whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
//             whileTap={{ scale: 0.95 }}
//           >
//             View My Work 🚀
//           </motion.a>
//           <motion.a
//             href="#contact"
//             className="bg-gray-800 border-2 border-blue-500 text-white font-bold py-3 px-8 rounded-full"
//             whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Contact Me 📧
//           </motion.a>
//         </motion.div>
//       </motion.div>

//       {/* Floating orbs */}
//       <motion.div
//         className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
//         animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
//         transition={{ duration: 8, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
//         animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//       />
//     </section>
//   );
// }

// Enhanced About Section
// function About() {
//   return (
//     <section id="about" className="py-20 px-6">
//       <div className="max-w-4xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold mb-12 text-center"
//         >
//           About{" "}
//           <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             Me
//           </span>
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="bg-gray-800/50 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
//         >
//           <p className="text-lg text-gray-300 leading-relaxed mb-6">
//             I'm <span className="text-blue-400 font-semibold">Areeba Shahbaz</span>, 
//             a passionate <span className="text-purple-400 font-semibold">AI & Full-Stack Developer</span> 
//             with hands-on experience in building intelligent and scalable web applications.  
//             My work revolves around 
//             <span className="text-blue-400 font-semibold"> Machine Learning, Natural Language Processing (NLP), and Voice Cloning</span> — 
//             where I combine creativity with data-driven solutions.
//           </p>

//           <p className="text-lg text-gray-300 leading-relaxed">
//             I enjoy transforming complex ideas into user-friendly products.  
//             When I'm not coding, I explore emerging AI trends or work on improving 
//             my skills in full-stack development.
//           </p>

//           <motion.div
//             className="mt-8 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
//             initial={{ width: 0 }}
//             whileInView={{ width: 128 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// Enhanced Skills Section
// function Skills() {
//   const skills = [
//     { name: "Python", icon: "🐍" },
//     { name: "C++", icon: "⚡" },
//     { name: "Java", icon: "☕" },
//     { name: "JavaScript", icon: "✨" },
//     { name: "React.js", icon: "⚛️" },
//     { name: "Node.js", icon: "🟢" },
//     { name: "Tailwind CSS", icon: "🎨" },
//     { name: "MySQL", icon: "🗄️" },
//     { name: "PHP", icon: "🐘" },
//     { name: "TensorFlow", icon: "🧠" },
//     { name: "PyTorch", icon: "🔥" },
//     { name: "Selenium", icon: "🤖" },
//   ];

//   return (
//     <section id="skills" className="py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold mb-12 text-center"
//         >
//           My{" "}
//           <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             Skills
//           </span>
//         </motion.h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.05 }}
//               whileHover={{ 
//                 scale: 1.1, 
//                 rotate: [0, -5, 5, 0],
//                 boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
//               }}
//               className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 p-6 rounded-xl text-center cursor-pointer group"
//             >
//               <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
//                 {skill.icon}
//               </div>
//               <div className="text-gray-300 font-semibold group-hover:text-blue-400 transition-colors">
//                 {skill.name}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Enhanced Experience Section
// function Experience() {
//   const experiences = [
//     {
//       role: "AI Developer Intern",
//       company: "Sabasoft Games Studio",
//       duration: "Oct 2025 - Present",
//       description:
//         "Working on AI model optimization and implementing machine learning algorithms for real-time game enhancements.",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       role: "Web Developer Intern",
//       company: "Freelance / Personal Projects",
//       duration: "Mar 2024 - Sep 2025",
//       description:
//         "Developed responsive web applications using React, Node.js, and Tailwind CSS. Focused on UI/UX design and performance.",
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       role: "Quality Assurance Trainee",
//       company: "Software Testing Project",
//       duration: "Jan 2024 - Mar 2024",
//       description:
//         "Performed manual and automated testing using Selenium IDE and TestProject, ensuring product reliability and performance.",
//       color: "from-green-500 to-teal-500",
//     },
//   ];

//   return (
//     <section id="experience" className="py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold mb-12 text-center"
//         >
//           My{" "}
//           <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             Experience
//           </span>
//         </motion.h2>

//         <div className="space-y-6">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ x: 10 }}
//               className="relative bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 p-6 md:p-8 rounded-xl group"
//             >
//               <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.color} rounded-l-xl`} />
              
//               <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
//                 {exp.role}
//               </h3>
//               <p className="text-lg text-gray-400 mb-3">
//                 {exp.company} <span className="text-gray-500">|</span>{" "}
//                 <span className="italic text-gray-500">{exp.duration}</span>
//               </p>
//               <p className="text-gray-300">{exp.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Enhanced Projects Section
// function Projects() {
//   const projects = [
//     {
//       title: "U-CLONE (Urdu Voice Cloning System)",
//       description:
//         "Developed an Urdu voice cloning system using Tacotron2 and WaveNet with high naturalness and accuracy.",
//       tech: ["Python", "PyTorch", "TensorFlow", "NLP"],
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "E-Commerce Website",
//       description:
//         "A full-featured e-commerce platform with product management, user authentication, and admin dashboard.",
//       tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Student Mess Bill System",
//       description:
//         "Web app for managing mess bill payments with admin controls and reporting features.",
//       tech: ["PHP", "MySQL", "Bootstrap"],
//       gradient: "from-green-500 to-teal-500",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold mb-12 text-center"
//         >
//           Featured{" "}
//           <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             Projects
//           </span>
//         </motion.h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl overflow-hidden group cursor-pointer"
//             >
//               <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="bg-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-500/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <motion.button
//                   whileHover={{ x: 5 }}
//                   className="text-blue-400 font-semibold flex items-center gap-2 group-hover:text-purple-400 transition-colors"
//                 >
//                   View Project 
//                   <span className="group-hover:translate-x-1 transition-transform">→</span>
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Enhanced Contact Section
// function Contact() {
//   const contacts = [
//     {
//       icon: "📧",
//       label: "Email",
//       value: "areebashahbaz@example.com",
//       link: "mailto:areebashahbaz@example.com",
//     },
//     {
//       icon: "💼",
//       label: "LinkedIn",
//       value: "linkedin.com/in/areebashahbaz",
//       link: "https://linkedin.com/in/areebashahbaz",
//     },
//     {
//       icon: "🐙",
//       label: "GitHub",
//       value: "github.com/areebashahbaz",
//       link: "https://github.com/areebashahbaz",
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-bold mb-6"
//         >
//           Let's{" "}
//           <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             Connect
//           </span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-xl text-gray-300 mb-12"
//         >
//           Have a project idea or want to collaborate? I'd love to hear from you!
//         </motion.p>

//         <div className="grid md:grid-cols-3 gap-6 mb-12">
//           {contacts.map((contact, index) => (
//             <motion.a
//               key={index}
//               href={contact.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5, scale: 1.05 }}
//               className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 p-6 rounded-xl hover:border-blue-500/50 transition-all"
//             >
//               <div className="text-4xl mb-3">{contact.icon}</div>
//               <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
//               <div className="text-blue-400 font-medium text-sm break-all">{contact.value}</div>
//             </motion.a>
//           ))}
//         </div>

//         <motion.a
//           href="mailto:areebashahbaz@example.com"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full shadow-lg"
//         >
//           Say Hello 👋
//         </motion.a>
//       </div>
//     </section>
//   );
// }

// // Section Divider
// function SectionDivider() {
//   return (
//     <motion.div
//       initial={{ scaleX: 0 }}
//       whileInView={{ scaleX: 1 }}
//       viewport={{ once: true }}
//       className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-16"
//     />
//   );
// }

// // Main App
// export default function App() {
//   return (
//     <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white min-h-screen overflow-x-hidden">
//       <ParticleBackground />
//       <Navbar />
      
//       <Hero />
//       <SectionDivider />
      
//       <About />
//       <SectionDivider />
      
//       <Skills />
//       <SectionDivider />
      
//       <Experience />
//       <SectionDivider />
      
//       <Projects />
//       <SectionDivider />
      
//       <Contact />
      
//       <footer className="text-center py-8 text-gray-500">
//         <p>© 2025 Areeba Shahbaz. Built with React & Framer Motion</p>
//       </footer>
//     </div>
//   );
// }