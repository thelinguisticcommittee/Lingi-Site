"use client";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Brochure() {
  const pages = [
    "/Linguistic InterCollege_page-0007.jpg",
    "/Linguistic InterCollege_page-0001.jpg",
    "/Linguistic InterCollege_page-0003.jpg",
  ];

  const [dimensions, setDimensions] = useState({ width: 300, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setDimensions({ width: 700, height: 900 });
      } else if (window.innerWidth > 768) {
        setDimensions({ width: 600, height: 800 });
      } else {
        setDimensions({ width: 300, height: 400 });
      }
    };

    handleResize(); // initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="brochure"
      className="relative bg-black text-center overflow-hidden min-h-screen flex flex-col justify-center"
    >
    
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-4xl md:text-5xl font-bold mb-12 text-purple-400"
      >
        Our Brochure
      </motion.h2>

      <div className="relative z-10 flex justify-center items-center w-full">
        <HTMLFlipBook
          width={dimensions.width}
          height={dimensions.height}
          showCover
          className="rounded-xl shadow-2xl border border-purple-500/20"
        >
          {pages.map((src, i) => (
            <div
              key={i}
              className="bg-black flex justify-center items-center"
            >
              <img
                src={src}
                alt={`Brochure page ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <motion.a
        href="/brochure.pdf"
        download
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(139,92,246,0.6)",
        }}
        className="inline-block mt-12 px-8 py-3 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-400 transition relative z-10"
      >
        Download Brochure (PDF)
      </motion.a>
    </section>
  );
}
