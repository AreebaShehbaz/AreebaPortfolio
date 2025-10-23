import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center min-h-[70vh] overflow-hidden px-4"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Areeba Shehbaz
          </span>
          <motion.span
            animate={{ rotate: [0, 14, -8, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block ml-2"
          >
            👋
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-6"
        >
          AI & Full-Stack Developer | Building Smart & Scalable Web Apps with ML
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work 🚀
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-gray-800 border-2 border-blue-500 text-white font-bold py-2 px-6 rounded-full"
            whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me 📧
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}
