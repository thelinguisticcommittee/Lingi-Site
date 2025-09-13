"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

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

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="font-bold text-4xl md:text-5xl mb-12 text-purple-400"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          OUR SPONSORS
        </motion.h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch lg:h-[560px]">
          {/* Scrollable Logos */}
          <div className="h-full rounded-xl border border-purple-700/30 overflow-hidden bg-gradient-to-br from-purple-300/10 to-purple-300/10">
            <div className="h-full overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sponsor-scroll">
              {sponsors.map((s, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center h-28 rounded-lg border border-purple-700/30 bg-purple/40 shadow-md hover:scale-[1.02] transition-transform hover:text-purple-200 hover:shadow-purple-500/20 hover:shadow-xl"
                >
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="max-h-full max-w-full object-contain p-3"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Video Box */}
          <div className="h-full flex items-center justify-center">
            <div className="relative h-full aspect-[9/16] max-w-[340px] w-full rounded-3xl border-[10px] border-purple-500/30 shadow-2xl overflow-hidden bg-black">
              <video
                src="/Sponsers/site.mp4"
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
        <div className="mt-12 w-full overflow-hidden border-y border-purple-700/30 bg-gradient-to-r from-purple-950/40 to-purple-900/20">
          <motion.div
            className="flex gap-12 py-4"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...sponsors, ...sponsors].map((s, idx) => (
              <img
                key={idx}
                src={s.logo}
                alt={s.name}
                className="h-14 object-contain"
              />
            ))}
          </motion.div>
        </div>

        {/* Contact */}
        <motion.div
          className="mt-16 bg-purple-900/30 border border-purple-500/40 rounded-xl p-8 max-w-2xl mx-auto hover:text-purple-200 hover:shadow-purple-500/20 hover:shadow-xl transition transform hover:scale-105"
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
                <p className=" text-lg text-purple-200 mb-3 font-bold hover:text-purple-600 ">
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

      {/* Scrollbar Styling */}
      <style jsx>{`
        .sponsor-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .sponsor-scroll::-webkit-scrollbar-track {
          background: rgba(128, 90, 213, 0.2);
          border-radius: 10px;
        }
        .sponsor-scroll::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.7);
          border-radius: 10px;
        }
        .sponsor-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(192, 132, 252, 1);
        }
      `}</style>
    </section>
  );
}
