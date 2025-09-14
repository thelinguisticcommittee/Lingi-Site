"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Brochure", href: "#brochure" },
    { name: "Contact", href: "#contact" },
  ];

  // Enable smooth scroll globally
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <Link href="#home" className="flex items-center space-x-2">
          <img
            src="/lingi logo new white.png"
            alt="Logo"
            className="h-10 w-auto object-contain mask-circle"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative text-white/80 hover:text-purple-400 transition-colors group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none text-2xl"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-xl text-white md:hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-3xl text-white hover:text-purple-400 transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ✖
            </button>

            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-purple-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
