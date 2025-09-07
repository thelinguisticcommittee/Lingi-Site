"use client";
import { motion } from "framer-motion";

const sponsors = [
  { name: "Royal Enfield", logo: "/Sponsers/Rotal enfeild.jpg" },
  { name: "Sponsor B", logo: "/Sponsers/wp2596901.jpg" },
  { name: "Joy E-Bike", logo: "/Sponsers/JoyEbike.jpg" },
  { name: "Vadilal", logo: "/Sponsers/Vadilal-Ice-Cream-Logo-Vector.svg-.png" },
  { name: "Havmor", logo: "/Sponsers/72-727062_havmor-ice-cream-logo-hd-png-download.png" },
  { name: "Zebronics", logo: "/Sponsers/zebronics.jpg" },
];

export default function Sponsors() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="sponsors"
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black pointer-events-none"></div>

      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="font-bold text-4xl md:text-5xl mb-12 text-purple-400 hover:text-purple-300 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Sponsors
        </motion.h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-10">
          {sponsors.map((s, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg border border-purple-700/30 bg-gradient-to-br from-purple-800/20 to-purple-900/10 backdrop-blur-sm"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-purple-200 text-sm font-medium py-1">
                {s.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
