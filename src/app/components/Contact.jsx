"use client";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone , FaLinkedin} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contact() {
  const icons = [
    {
      href: "mailto:thelinguisticcommittee@gmail.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
    {
      href: "https://www.linkedin.com/in/the-linguistic-committee-367063179/",
      icon: <FaLinkedin />,
      label: "Linkedin",
      external: true,
    },
    {
      href: "https://www.instagram.com/coerlinguists?igsh=MTlvYWt1d3ZucmN4ZQ==",
      icon: <FaInstagram />,
      label: "Instagram",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-surface text-white py-20 px-6 text-center relative overflow-hidden"
    >
      {/* Decorative gradient background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="font-heading text-4xl mb-6 text-accent">Contact Us</h2>
        <p className="text-muted mb-10 text-lg">
          Have questions or want to collaborate? Reach out through any platform below.
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          {icons.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center group"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/20 text-primary text-3xl shadow-lg group-hover:bg-primary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <span className="mt-2 text-sm text-muted group-hover:text-accent transition-colors">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
