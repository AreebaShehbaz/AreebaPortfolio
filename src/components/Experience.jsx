import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Experience() {
  const experiences = [
    {
  role: "Software Developer", 
  company: "QuidSol Lahore", 
  duration: "June 2025 - Present", 
  description: [
    "Designed and implemented a real-time Face Recognition system using YOLO.",
    "Integrated pre-trained models to detect and recognize faces accurately.",
    "Optimized the system for edge devices, ensuring low-latency inference.",
    "Developed a user-friendly web interface to display recognition results live using React and Next.js for frontend, and FastAPI for backend."
  ],
  color: "from-blue-500 to-cyan-500",
}
,
 {
  role: "AI/ML Intern",
  company: "KICS, UET Lahore",
  duration: "June 2024 - Sep 2024",
  description:
    "Worked on AI/ML research projects, focusing on voice cloning and NLP model development. Responsibilities included dataset collection and preprocessing, training deep learning models using Python, TensorFlow, and PyTorch, optimizing models for performance,",
  color: "from-purple-500 to-pink-500",
},

   {
  role: "Quality Assurance Intern",
  company: "Arbisoft, Lahore",
  duration: "June 2024 - August 2024",
  description:
    "Worked on manual and automated testing of web applications, performed test case design, execution, and bug reporting. Utilized Selenium IDE and TestProject to ensure software quality and improve testing efficiency.",
  color: "from-green-500 to-teal-500",
},

  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="relative bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 p-6 md:p-8 rounded-xl group"
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.color} rounded-l-xl`} />
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {exp.role}
              </h3>
              <p className="text-lg text-gray-400 mb-3">
                {exp.company} <span className="text-gray-500">|</span>{" "}
                <span className="italic text-gray-500">{exp.duration}</span>
              </p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}