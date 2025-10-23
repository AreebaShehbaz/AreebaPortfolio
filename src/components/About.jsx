import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
        >
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            I'm <span className="text-blue-400 font-semibold">Areeba Shehbaz</span>, 
            a passionate <span className="text-purple-400 font-semibold">AI & Full-Stack Developer</span> 
            building intelligent and scalable web apps. My work focuses on 
            <span className="text-blue-400 font-semibold"> Machine Learning, NLP, Voice Cloning, and Web Development</span>.
          </p>

          <p className="text-base text-gray-300 leading-relaxed mb-4">
  I enjoy turning complex ideas into user-friendly products.  
  When not coding, I explore emerging AI trends like <span className="text-blue-400 font-semibold">RAG (Retrieval-Augmented Generation)</span> 
  and continuously improve my skills in 
  <span className="text-purple-400 font-semibold"> Python, TensorFlow, PyTorch, React.js, Tailwind CSS, and SQL</span>.
</p>


          {/* Skills badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {["Python", "TensorFlow", "PyTorch", "React.js", "Tailwind CSS", "SQL", "FastAPI"].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Separator line */}
          <motion.div
            className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
