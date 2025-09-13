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

  const [dimensions, setDimensions] = useState({ width: 280, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setDimensions({ width: 560, height: 780 }); // larger desktop size
      } else if (window.innerWidth > 768) {
        setDimensions({ width: 440, height: 600 }); // tablet size
      } else {
        setDimensions({ width: 280, height: 400 }); // mobile size
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="brochure"
      className="relative bg-black text-center overflow-hidden py-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-purple-400 hover:text-purple-200 hover:shadow-purple-500/20 hover:shadow-xl transition transform hover:scale-105"
        >
          BROCHURE
        </motion.h2>

        {/* Flipbook */}
        <HTMLFlipBook
          width={dimensions.width}
          height={dimensions.height}
          showCover
          className="rounded-xl shadow-2xl" // removed border here
        >
          {pages.map((src, i) => (
            <div key={i} className="bg-black flex justify-center items-center">
              <img
                src={src}
                alt={`Brochure page ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </HTMLFlipBook>

        {/* Download button */}
        <motion.a
          href="/brochure.pdf"
          download
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(139,92,246,0.6)",
          }}
          className="inline-block mt-8 px-6 py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-400 transition"
        >
          Download Brochure (PDF)
        </motion.a>
      </div>
    </section>
  );
}
