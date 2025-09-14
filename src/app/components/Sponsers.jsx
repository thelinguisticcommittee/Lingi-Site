"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const sponsors = [
  { name: "ROYAL ENFIELD", logo: "/Sponsers/Royal-removebg-preview.png" },
  { name: "YAMAHA", logo: "/Sponsers/yamaha-seeklogo.png" },
  { name: "JOY E-BIKE", logo: "/Sponsers/Joy-ebike-logo-removebg-preview.png" },
  { name: "VADILAL", logo: "/Sponsers/vadilal-ice-cream-seeklogo.png" },
  { name: "HAVMOR", logo: "/Sponsers/Havmor_logo-removebg-preview.png" },
  { name: "ZEBRONICS", logo: "/Sponsers/zeb-removebg-preview.png" },
  { name: "MODULUS", logo: "/Sponsers/MODULUS COSMETICS FINAL LOGO.png" },
  { name: "DESI-TADKA", logo: "/Sponsers/image-removebg-preview.png" },
  {
    name: "5-MIN-DINE",
    logo: "/Sponsers/WhatsApp_Image_2025-09-07_at_13.30.36_4c8a7923-removebg-preview.png",
  },
  {
    name: "CORPORATE-CHAI-WALA",
    logo: "/Sponsers/WhatsApp_Image_2025-09-07_at_13.34.56_13af9ae8-removebg-preview.png",
  },
  { name: "THE-BIG-NUTS", logo: "/Sponsers/Big_Nuts-removebg-preview (1).png" },
];

const contacts = [
  {
    name: "Shourya Gupta",
    linkedin: "https://www.linkedin.com/in/shourya-gupta-8a8876250",
    email: "mailto:gshourya665@gmail.com",
  },
  {
    name: "Pradhumay Gaur",
    linkedin: "https://www.linkedin.com/in/pradhumay-gaur/",
    email: "mailto:pradhumay@example.com",
  },
];

// Typing effect component
function TypingText({ text, speed = 40 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="text-lg md:text-xl font-Comfortaa leading-relaxed text-purple-100">
      {displayed}
    </p>
  );
}

export default function Sponsors() {
  const paragraph = `We are grateful for the incredible support of our sponsors, 
  who make this event possible. Their commitment fuels innovation, 
  growth, and opportunities for everyone involved. Together, we aim 
  to create a meaningful and impactful experience.`;

  return (
    <section
      id="sponsors"
      className="relative bg-gradient-to-br from-black purple-950 to-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-800/20 rounded-full blur-[180px] pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <motion.div
        className="max-w-7xl mx-auto text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Premium Heading */}
        <motion.h2
          className="font-extrabold text-5xl md:text-6xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-200 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Proudly Backed By
        </motion.h2>
        <p className="text-purple-200/80 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          Our sponsors empower us to bring innovation, creativity, and impact to
          life.
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch lg:h-[560px]">
          {/* Typing Text */}
          <div className="h-full rounded-xl border border-purple-700/30 p-8 bg-gradient-to-br from-purple-300/10 to-purple-300/10 flex items-center justify-center">
            <TypingText text={paragraph} speed={40} />
          </div>

          {/* Video Box */}
          <div className="h-full flex items-center justify-center">
            <div className="relative h-full aspect-[9/16] max-w-[340px] w-full rounded-3xl border-[10px] border-purple-500/30 shadow-2xl overflow-hidden bg-black">
              <video
                src="https://res.cloudinary.com/djti9upwy/video/upload/v1757877383/site_rl5zix.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl" />
            </div>
          </div>
        </div>

        {/* Marquee Strip */}
        <div className="mt-16 w-full overflow-hidden border-y border-purple-700/30 bg-gradient-to-r from-purple-950/40 to-purple-900/20">
          <motion.div
            className="flex gap-12 py-4"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            {[...sponsors, ...sponsors].map((s, idx) => (
              <img
                key={idx}
                src={s.logo}
                alt={s.name}
                className="h-14 object-contain hover:scale-110 transition-transform duration-300"
              />
            ))}
          </motion.div>
        </div>

        {/* Contact */}
        <motion.div
          className="mt-16 bg-purple-900/20 border border-purple-900/40 rounded-xl p-8 max-w-2xl mx-auto hover:text-purple-200 hover:shadow-purple-500/20 hover:shadow-xl transition transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-purple-300 mb-4">
            Want to promote your brand?
          </h3>
          <p className="text-purple-100 mb-6">Reach out to:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {contacts.map((c, i) => (
              <div
                key={i}
                className="bg-black/40 p-4 rounded-lg border border-purple-700/40 w-full sm:w-1/2"
              >
                <p className=" text-lg text-purple-200 mb-3 font-bold hover:text-purple-600">
                  {c.name}
                </p>
                <div className="flex justify-center gap-6 text-3xl text-purple-400">
                  <a
                    href={c.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-200 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={c.email}
                    className="hover:text-purple-200 transition-colors"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
