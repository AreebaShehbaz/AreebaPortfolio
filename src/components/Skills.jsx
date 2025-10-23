import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

 const skillCategories = {
  "Languages": [
    { name: "Python", icon: "🐍", level: 90 },
    { name: "C++", icon: "⚡", level: 85 },
    { name: "C", icon: "🔹", level: 75 },
    { name: "Java", icon: "☕", level: 78 },
    { name: "JavaScript", icon: "✨", level: 88 },
    { name: "PHP", icon: "🐘", level: 78 },
    { name: "SQL", icon: "🗄️", level: 85 },
  ],
  "Web": [
    { name: "HTML", icon: "📄", level: 95 },
    { name: "CSS", icon: "🎨", level: 92 },
    { name: "Bootstrap", icon: "🅱️", level: 88 },
    { name: "Tailwind CSS", icon: "🌬️", level: 90 },
    { name: "React.js", icon: "⚛️", level: 90 },
    { name: "NestJS", icon: "🌐", level: 80 },
    { name: ".NET", icon: "🖥️", level: 75 },
    { name: "WordPress", icon: "📝", level: 85 },
    { name: "Shopify", icon: "🛒", level: 78 },
  ],
  "AI & ML": [
    { name: "TensorFlow", icon: "🧠", level: 88 },
    { name: "PyTorch", icon: "🔥", level: 85 },
    { name: "NLP", icon: "💬", level: 82 },
  ],
  "Database": [
    { name: "MySQL", icon: "🗄️", level: 87 },
    { name: "PostgreSQL", icon: "🐘", level: 83 },
    { name: "XAMPP", icon: "💻", level: 80 },
  ],
  "Tools": [
    { name: "GitHub", icon: "🐙", level: 90 },
    { name: "VS Code", icon: "💻", level: 95 },
    { name: "Jupyter", icon: "📓", level: 90 },
    { name: "Linux", icon: "🐧", level: 82 },
    { name: "Selenium", icon: "🤖", level: 80 },
    { name: "Postman", icon: "🚀", level: 88 },
    { name: "Jira", icon: "📋", level: 85 },
    { name: "Trello", icon: "🗂️", level: 87 },
  ],
  "Soft Skills": [
    { name: "Critical Thinking", icon: "🧠", level: 92 },
    { name: "Problem Solving", icon: "💡", level: 94 },
    { name: "Documentation", icon: "📝", level: 88 },
  ],
};


  const categories = ["all", ...Object.keys(skillCategories)];

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return Object.entries(skillCategories).flatMap(([_, skills]) => skills);
    }
    return skillCategories[activeCategory];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-gray-700/50 text-gray-300 hover:text-white"
              }`}
            >
              {category === "all" ? "All" : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Compact Skills Grid with Progress */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-3 rounded-lg hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-lg group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-blue-400 transition-colors flex-1">
                  {skill.name}
                </span>
                <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {skill.level}%
                </span>
              </div>

              {/* Compact Progress Bar */}
              <div className="h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.02 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}