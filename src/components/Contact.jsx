import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// Enhanced Contact Section
export default function Contact() {
  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "areebashahbaz08@gmail.com",
      link: "mailto:areebashahbaz08@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/areeba-shehbaz",
      link: "https://www.linkedin.com/in/areeba-shehbaz-ab9b11267/",
    },
   {
  icon: "🐙",
  label: "GitHub",
  value: "github.com/AreebaShehbaz",
  link: "https://github.com/AreebaShehbaz",
},

  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let's{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Connect
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-12"
        >
          Have a project idea or want to collaborate? I'd love to hear from you!
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 p-6 rounded-xl hover:border-blue-500/50 transition-all"
            >
              <div className="text-4xl mb-3">{contact.icon}</div>
              <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
              <div className="text-blue-400 font-medium text-sm break-all">{contact.value}</div>
            </motion.a>
          ))}
        </div>

<motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=areebashahbaz08@gmail.com&su=Let's%20Collaborate!&body=Hi%20Areeba,%0D%0A%0D%0AI’d%20love%20to%20discuss%20an%20opportunity%20with%20you."
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
  whileTap={{ scale: 0.95 }}
  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300"
>
  Let’s Collaborate 🚀
</motion.a>


      </div>
    </section>
  );
}