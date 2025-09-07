"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-[-1]" />

      {/* Heading with hover */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        whileHover={{
          scale: 1.05,
          textShadow: "0 0 20px rgba(255,255,255,0.8)",
        }}
        className="text-4xl md:text-6xl font-bold text-accent drop-shadow-lg cursor-pointer"
      >
        The Linguistic Committee
      </motion.h1>

      {/* Committee Image */}
      <motion.img
        src="./WhatsApp Image 2025-09-06 at 02.28.39_7f76da00.jpg"
        alt="Linguistic Committee"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 w-64 md:w-96 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
      />

      {/* Button */}
      <motion.a
        href="#events"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 15px rgba(255,255,255,0.5)",
        }}
        className="mt-8 inline-block px-6 py-3 bg-accent text-white rounded-full shadow-lg hover:bg-accent/80 transition"
      >
        Explore Our Events
      </motion.a>
    </motion.section>
  );
}
