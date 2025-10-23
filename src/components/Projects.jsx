import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Projects() {
  const projects = [
   
{
  title: "U-CLONE (Urdu Voice Cloning System) 🌟 FYP",
  description:
    "Final Year Project focused on Urdu voice cloning using Tacotron2 and Griffin-Lim. Users can upload text in a specific format, and the system processes it securely. Once processing is complete, users can generate speech in the voice of the specific speaker they provided. The system features real-time synthesis, speaker voice adaptation, and a user-friendly web interface for seamless text input and audio output. Email notifications confirm data receipt and readiness of the cloned voice.",
  tech: ["Python", "PyTorch", "TensorFlow", "NLP", "Flask", "HTML", "Tailwind CSS"],
  gradient: "from-blue-500 to-cyan-500",
    link: "https://github.com/AreebaShehbaz/G_05-U-CLONE" 
}

,
   {
  title: "Police Khidmat Chatbot – AI Assistant",
  description:
    "Developed an AI-powered chatbot for Police Khidmat Markaz using LLM and Flask. Users can query verified information about services like license renewal, character certificates, and vehicle verification. The system extracts web data, generates embeddings, and uses OpenAI GPT to answer user queries contextually. The project includes a simple Flask web interface for chat interaction.",
  tech: ["Python", "Flask", "Jupyter Notebook", "OpenAI", "LangChain", "HTML", "CSS"],
  gradient: "from-purple-500 to-pink-500",
  link: "https://github.com/AreebaShehbaz/Police-Khidmat-Chatbot"
}
,
   {
  title: "Neural Machine Translation (English → French)",
  description:
    "Implemented a character-level Seq2Seq model using Keras LSTM networks to translate English sentences into French. The system encodes English sentences into vector representations and decodes them into corresponding French sentences. Includes training, inference scripts, and demonstrates deep learning-based sequence-to-sequence translation.",
  tech: ["Python", "Keras", "TensorFlow", "LSTM", "Seq2Seq", "Numpy"],
  gradient: "from-green-500 to-teal-500",
  link: "https://github.com/AreebaShehbaz/Neural-Machine-Translation"
}

,

{
  title: "Bank Account Management System (C++)",
  description:
    "C++ OOP-based Bank Account Management System simulating basic banking operations such as deposits, withdrawals, and monthly interest calculation. Supports Savings and Checking accounts, includes service charges, account activity checks, and a menu-driven interface for user interaction. Demonstrates polymorphism and dynamic account management.",
  tech: ["C++", "OOP", "Polymorphism", "Command Line Interface"],
  gradient: "from-yellow-500 to-orange-500",
  link: "https://github.com/AreebaShehbaz/BankAccountSystem"
}
,
{
  title: "BudgetBuddy – Personal Budget Management 💰",
  description:
    "A desktop-based personal budget management system built with WPF (.NET) and WCF for client-server communication. Users can manage income and expenses, generate detailed financial reports, and visualize spending through interactive charts. Supports multiple accounts, secure data storage, and real-time updates via WCF services.",
  tech: ["C#", "WPF", "WCF", "SQL Server", ".NET Framework", "Entity Framework"],
  gradient: "from-yellow-500 to-green-500",
  link: "https://github.com/AreebaShehbaz/BudgetBuddy" // Replace with actual GitHub repo link
},
{
  title: "Hospital Management System 🏥",
  description:
    "A C# and MySQL-based desktop application designed to digitalize hospital operations. Automates management of patients, doctors, nurses, rooms, billing, and hospital records through a user-friendly GUI. Ensures fast, secure, and reliable workflow with data accuracy and efficient reporting.",
  tech: ["C#", "MySQL", "Windows Forms", "Visual Studio", "SQL Server"],
  gradient: "from-red-500 to-pink-500",
  link: "https://github.com/AreebaShehbaz/Hospital-Management-System"
},
{
  title: "Pinterest Clone 📌",
  description:
    "A front-end Pinterest Clone web application built using HTML, CSS, and Bootstrap. Replicates the core UI and navigation of Pinterest, allowing users to sign up, log in, explore pins, search content, view updates, and manage their account. Features responsive layouts, smooth navigation, and a user-friendly interface.",
  tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  gradient: "from-red-500 to-pink-500",
  link: "https://github.com/AreebaShehbaz/pinterest-clone" // Replace with actual repo link if available
},
{
  title: "🍯 Honey Store – eCommerce Website",
  description:
    "Honey Store is a fully functional eCommerce web application developed using PHP, MySQL, HTML, CSS, JavaScript, and Bootstrap. Users can browse products, add to cart, make purchases, and the Admin Panel allows management of products, users, and orders.",
  tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
  gradient: "from-yellow-400 to-orange-500",
  link: "https://github.com/AreebaShehbaz/StoreSphere"
}
,
{
    title: "📰 BlogSphere – WordPress Blogging Website",
description: "BlogSphere is a modern, fully responsive WordPress blogging website developed using Elementor and various plugins. It features a clean and attractive interface for readers, easy content management for admins, and an optimized experience across devices.",
tech: ["WordPress", "Elementor", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
gradient: "from-blue-400 to-indigo-500",
link: "https://github.com/AreebaShehbaz/BlogSphere"
}
,

,{
  title: "E-Commerce Website 🌐",
  description:
    "Fully functional e-commerce website developed using WordPress and WooCommerce. Provides a seamless shopping experience with product listings, secure payments, and a user-friendly interface. Enables quick customization and deployment of an online store, demonstrating full-stack web development skills.",
  tech: ["WordPress", "WooCommerce", "PHP", "HTML", "CSS", "JavaScript"],
  gradient: "from-purple-500 to-pink-500",
  link: "https://github.com/AreebaShehbaz/Ecommerce-Website" // Replace with actual repo link if available
}

    
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               <motion.a
  href={project.link}      // open the link
  target="_blank"          // opens in a new tab
  rel="noopener noreferrer"
  whileHover={{ x: 5 }}
  className="text-blue-400 font-semibold flex items-center gap-2 group-hover:text-purple-400 transition-colors"
>
  View Project
  <span className="group-hover:translate-x-1 transition-transform">→</span>
</motion.a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}