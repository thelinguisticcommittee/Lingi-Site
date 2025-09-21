"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const events = [
  {
    title: "DIALECTIQUE – Debate Competition",
    image:
      "https://res.cloudinary.com/dkibai6o7/image/upload/v1757879313/dialectique_rectangle_wryon8.jpg",
    registerLink: "https://forms.gle/2vqqvAwAhAL9KVh19",
    description: `Dialectique is a dynamic debate competition consisting of two rounds. 
    Teams of two members (same institution) debate in either Hindi or English. 
    Preliminary round requires video submissions; finalists compete on campus with 
    speeches and rebuttals, judged on content, clarity, and delivery.`,
    date: `3rd Oct 2025`,
    Mode: `Team`,
    Fee: `₹599`,
    Timings: `Will be updated soon`,
  },
  {
    title: "UNPLUGGED UNISON – Open Mic",
    image:
      "https://res.cloudinary.com/dkibai6o7/image/upload/v1757879326/Untitled-1-01_muey1k.jpg",
    registerLink: "https://forms.gle/LFMqjZGoECzdkstJA",
    description: `Unplugged Unison is an open-mic platform for poetry, music, stand-up, 
    storytelling, and more. Participants perform original content that respects all 
    sentiments. Selected entries from the preliminary video round perform live on 
    campus.`,
    date: `3rd Oct 2025`,
    Mode: `Individual/Team`,
    Fee: `₹299 / ₹799 `,
    Timings: `Will be updated soon`,
  },
  {
    title: "BRAIN BRAWL - QUIZ",
    image:
      "https://res.cloudinary.com/dkibai6o7/image/upload/v1757879348/BRAIN_BRAWL-01-01_o3azgj.jpg",
    registerLink: "https://forms.gle/BWHFLwKgaNpBZe7k6",
    description: `Join Brain Brawl  and test your knowledge, speed, and teamwork!
Teams of up to two members will first compete in a written screening round. The top scorers move on to an exciting panel round with rapid-fire, audio-visual, and buzzer challenges. No phones or external help allowed; answers must be within the time limit.
Think fast, score high, and claim the title of quiz champions!`,
    date: `3rd Oct 2025`,
    Mode: `Team`,
    Fee: `₹199`,
    Timings: `Will be updated soon`,
  },
  {
    title: "MOCK IAS",
    image:
      "https://res.cloudinary.com/dkibai6o7/image/upload/v1757879338/Untitled-1-01_ieqrfc.jpg",
    registerLink: "https://forms.gle/idbNwusEN7kKJSZB8",
    description: `Join the simulation of highly competitive civil services
    examination in India i.e., Indian Administrative Service (IAS). The mock IAS event
     is designed to help students prepare for the real IAS exam by providing them with 
     a similar experience of the actual test conditions. It is typically structured to mimic 
     the format, pressure, and content of the original exam.`,
    date: `3rd Oct 2025`,
    Mode: `Individual`,
    Fee: `₹299`,
    Timings: `Will be updated soon`,
  },
  {
    title: "THE QUILL QUEST - ESCAPE ROOM",
    image:
      "https://res.cloudinary.com/dkibai6o7/image/upload/v1757879304/Quill_quest_rectangle-01_yy5wzd.jpg",
    registerLink: "https://forms.gle/AhcPi2ePGmBdFxcp7",
    description: `Join the shadows of mystery with Quill Quest. This offline competition challenges
    you to solve a murder mystery in real time! Everything you see or hear 
    is a clue to finding out the real killer. Each participant gets to hear a 10 minute alibi 
    of the given suspects and another 20 minutes to observe the clues hidden in different parts 
    of the crime scene. Informal discussions, external help , use of phone or other gadgets, ChatGPT and other AI tools is NOT prohibited.
    In case of a tie, the fastest correct answer wins..`,
    date: `3rd Oct 2025`,
    Mode: `Individual`,
    Fee: `₹199`,
    Timings: `Will be updated soon`,
  },
];

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
      id="events"
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black pointer-events-none"></div>

      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Section Heading */}
        <motion.h2
          className="font-bold text-4xl md:text-5xl mb-16 text-purple-400"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          OUR EVENTS
        </motion.h2>

        {/* Events Grid */}
        <div className="flex flex-col gap-12 justify-center items-center">
          {/* First Row → 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full justify-center">
            {events.slice(0, 2).map((e, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(139, 92, 246, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-purple-800/30 to-purple-900/10
                           border border-purple-700/30 rounded-xl shadow-lg
                           backdrop-blur-sm overflow-hidden flex flex-col"
              >
                {e.image && (
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-60 object-cover"
                  />
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">
                    {e.title}
                  </h3>

                  {/* Event Info Grid */}
                  <div className="grid grid-cols-2 gap-4 text-center mb-6">
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-semibold">
                        Date
                      </p>
                      <p className="text-sm mt-1 text-purple-100">{e.date}</p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-semibold">
                        Mode
                      </p>
                      <p className="text-sm mt-1 text-purple-100">{e.Mode}</p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-semibold">
                        Timings
                      </p>
                      <p className="text-sm mt-1 text-purple-100">
                        {e.Timings}
                      </p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-semibold">
                        Fee
                      </p>
                      <p className="text-sm mt-1 text-purple-100">{e.Fee}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 justify-center mt-auto">
                    <a
                      href={e.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-400 text-white font-medium transition"
                    >
                      Register
                    </a>
                    <button
                      onClick={() => setSelectedEvent(e)}
                      className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-medium transition"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row → 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full justify-center">
            {events.slice(2).map((e, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 35px rgba(139, 92, 246, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-purple-800/30 to-purple-900/10
                           border border-purple-700/30 rounded-xl shadow-lg
                           backdrop-blur-sm overflow-hidden flex flex-col"
              >
                {e.image && (
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-60 object-cover"
                  />
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">
                    {e.title}
                  </h3>

                  {/* Event Info Grid */}
                  <div className="grid grid-cols-2 gap-4 text-center mb-6">
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-semibold">
                        Date
                      </p>
                      <p className="text-sm mt-1 text-purple-100">{e.date}</p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-semibold">
                        Mode
                      </p>
                      <p className="text-sm mt-1 text-purple-100">{e.Mode}</p>
                    </div>

                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-semibold">
                        Timings
                      </p>
                      <p className="text-sm mt-1 text-purple-100">
                        {e.Timings}
                      </p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-semibold">
                        Fee
                      </p>
                      <p className="text-sm mt-1 text-purple-100">{e.Fee}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 justify-center mt-auto">
                    <a
                      href={e.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-400 text-white font-medium transition"
                    >
                      Register
                    </a>
                    <button
                      onClick={() => setSelectedEvent(e)}
                      className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-medium transition"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-black rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full border border-purple-700/30"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedEvent.image && (
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-72 object-cover"
                />
              )}
              <div className="p-6 text-left">
                <h2 className="text-2xl font-bold text-purple-400">
                  {selectedEvent.title}
                </h2>
                <p className="mt-4 text-purple-100 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>
              <div className="p-4 border-t border-purple-700/30 text-right">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-400 text-white font-medium transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="/inFormal"
        initial={{ opacity: 80, y: 40 }}
        animate={{
          opacity: 60,
          y: 0,
          scale: [1, 1.05, 1], // subtle pulse
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.15,
        }}
        className="w-88 mt-12 mx-auto flex items-center justify-center gap-2
             px-8 py-3 text-lg font-semibold
             bg-gradient-to-r from-purple-600 to-pink-500
             text-white rounded-full shadow-xl
             hover:from-purple-500 hover:to-pink-400
             transition-all"
      >
        <img
          src="/COER2.jpg"
          alt="student icon"
          className="h-10 w-10 object-contain"
        />
        For COER University Students
      </motion.a>
    </section>
  );
}
