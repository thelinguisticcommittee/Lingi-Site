"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const events = [
  {
    title: "DANCE BATTLE",
    image: "/dance battle-01.jpg",
    registerLink: "https://forms.gle/mTznCsybrRMdDAbh7",
    description: `An electrifying showdown where teams and solo performers bring their best moves to the stage! With high-energy music, creativity, and sheer passion, the Dance Battle is all about rhythm, expression, and setting the floor on fire while competing for the ultimate crown of the best performer.`,
    date: `4th Oct 2025`,
    Mode: `Individual`,
    Fee: `₹80`,
    Timings: `Will be updated soon`,
  },
  {
    title: "Moot Court",
    image: "/futsal rec-01.jpg",
    registerLink: "https://forms.gle/HAxfAmjSuT5W96Qq9",
    description: ` Step into the courtroom! Moot Court - Argumentative Arena challenges participants to showcase their legal reasoning and persuasive speaking. Given a case scenario, each participant must argue both for and against it within the allotted time.`,
    date: `4th Oct 2025`,
    Mode: `Individual`,
    Fee: `₹100`,
    Timings: `Will be updated soon`,
  },
  {
    title: "FUTSAL",
    image: "/futsal rec-01.jpg",
    registerLink: "https://forms.gle/uMYjPm4KuzsARoc46",
    description: `Get ready for adrenaline-packed action! Futsal - The Ultimate 3v3 Football Challenge brings you a high-energy match where teams of 3 battle it out. With goalposts changing on every whistle and limited time on the clock, the team scoring the most goals emerges victorious.`,
    date: `3rd Oct 2025`,
    Mode: `Team`,
    Fee: `₹150`,
    Timings: `Will be updated soon`,
  },
  {
    title: "TREASURE HUNT",
    image: "/treasure hunt rec-01.jpg",
    registerLink: "https://forms.gle/42UJPD8Gi1yavxiu6",
    description: `A thrilling adventure filled with clues, riddles, and challenges that test wit, teamwork, and speed. Participants race against time to crack puzzles, follow trails, and outsmart their opponents in the quest to discover the hidden treasure.`,
    date: `3rd Oct 2025`,
    Mode: `Team`,
    Fee: `₹240`,
    Timings: `Will be updated soon`,
  },
  {
    title: "CRICTIC - FILM REVIEW",
    image: "/critic rec-01.jpg",
    registerLink: "https://forms.gle/bJ9JaAfhWchnTZGr5",
    description: `"Critic" is a unique and interactive movie review event 
    where a movie or selected clips will be shown on screen, and the audience
    will have to guess, analyze, and express their creativity. Participants will
    then write a short story inspired by the movie, share their interpretation, or
     pen down a review of what they have watched. This event blends observation with
     imagination, encouraging participants to think critically, interpret creatively,
     and put their thoughts into words. It’s not just about watching a movie—it’s about
     understanding, imagining, and expressing your own perspective on it.`,
    date: `4th Oct 2025`,
    Mode: `Individual`,
    Fee: `₹80`,
    Timings: `Will be updated soon`,
  },
  {
    title: "BIG FIGHT - GROUP DISCUSSION",
    image: "/big fight rec-01.jpg",
    registerLink: "https://forms.gle/VJ88p7P6pyyRcSKt9",
    description: `"Big Fight" is an engaging group discussion event designed to bring 
    out diverse perspectives, critical thinking, and communication skills. Participants
    will be divided into groups and given thought-provoking topics ranging from current
    affairs to abstract ideas. Each team will present their arguments, counterpoints, and
    rebuttals in a structured discussion format, showcasing their ability to analyze, articulate,
     and persuade. The event not only tests knowledge and awareness but also evaluates teamwork, confidence,
      and clarity of expression, making it a true battle of ideas and intellect.`,
    date: `4th Oct 2025`,
    Mode: `Individual`,
    Fee: `₹ 100`,
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
          OUR INFORMAL EVENTS
        </motion.h2>

        {/* Events Grid */}
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-10 max-w-6xl w-full justify-center">
            {events.slice(0, 3).map((e, idx) => (
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
                      <p className=" text-xs uppercase tracking-wide text-purple-400 font-bold">
                        Date
                      </p>
                      <p className="text-sm mt-1 text-purple-100">{e.date}</p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-bold">
                        Mode
                      </p>
                      <p className="text-sm mt-1 text-purple-100">{e.Mode}</p>
                    </div>

                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-bold">
                        Timings
                      </p>
                      <p className="text-sm mt-1 text-purple-100">
                        {e.Timings}
                      </p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-bold">
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
          <div className="grid grid-cols-3 md:grid-cols-3 gap-10 max-w-6xl w-full justify-center">
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
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-bold">
                        Date
                      </p>
                      <p className="text-sm mt-1 text-purple-100">{e.date}</p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-bold">
                        Mode
                      </p>
                      <p className="text-sm mt-1 text-purple-100">{e.Mode}</p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-bold">
                        Timings
                      </p>
                      <p className="text-sm mt-1 text-purple-100">
                        {e.Timings}
                      </p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-xs uppercase tracking-wide text-purple-400 font-bold">
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
    </section>
  );
}
