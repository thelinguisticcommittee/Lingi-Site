"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [
    "/Lingi1.jpg",
    "/Lingi2.jpg",
    "/Lingi3.jpg",
    "/Lingi4.jpg",
    "/Lingi5.jpg",
  ];
  const [current, setCurrent] = useState(0);

  // Auto-change images every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-[-2]">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt="Committee"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-black/60 z-[-1]" />

      {/* Heading */}
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