"use client";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Brochure() {
  const pages = [
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757883101/Inter_College_Brochure_page-0001-min_zbry3e.jpg",
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757884063/Inter_College_Brochure_page-0005-min_kmjakr.jpg",
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757884065/Inter_College_Brochure_page-0006-min_humrot.jpg",
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757884069/Inter_College_Brochure_page-0007-min_fsdnas.jpg",
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757884615/Inter_College_Brochure_page-0008-min_iaztkz.jpg",
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757884077/Inter_College_Brochure_page-0009-min_xiuocq.jpg",
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757884071/Inter_College_Brochure_page-0010-min_fmzxle.jpg",
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757884077/Inter_College_Brochure_page-0011-min_f0lulo.jpg",
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757884639/Inter_College_Brochure_page-0012-min_nfbyz0.jpg",
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757884067/Inter_College_Brochure_page-0013-min_romi6l.jpg",
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757884070/Inter_College_Brochure_page-0014-min_jvemwp.jpg",
    "https://res.cloudinary.com/dkibai6o7/image/upload/v1757884071/Inter_College_Brochure_page-0015-min_tgzsb6.jpg",
  ];

  const [dimensions, setDimensions] = useState({ width: 280, height: 400 });
  const flipBookRef = useRef(null);

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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-purple-400 hover:text-purple-200 hover:shadow-purple-500/20 hover:shadow-xl transition transform hover:scale-105"
        >
          BROCHURE
        </motion.h2>

        <div className="relative flex justify-center items-center">
          <HTMLFlipBook
            width={dimensions.width}
            height={dimensions.height}
            showCover
            ref={flipBookRef}
            className="rounded-xl shadow-2xl"
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

          <button
            onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-600/70 hover:bg-purple-500 text-white rounded-full p-3 shadow-md transition transform hover:scale-110"
          >
            ◀
          </button>

          <button
            onClick={() => flipBookRef.current?.pageFlip().flipNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600/70 hover:bg-purple-500 text-white rounded-full p-3 shadow-md transition transform hover:scale-110"
          >
            ▶
          </button>
        </div>

        <motion.a
          href="/Inter College Brochure.pdf"
          download
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(139,92,246,0.6)",
          }}
          className="inline-block mt-8 px-6 py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-400 transition"
        >
          Download Full Brochure (PDF)
        </motion.a>
      </div>
    </section>
  );
}
