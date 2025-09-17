"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-28 px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black pointer-events-none"></div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10 space-y-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-extrabold text-5xl md:text-6xl text-purple-400 text-center transition-transform duration-300 hover:scale-105 hover:text-purple-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ABOUT US
        </motion.h2>

        <motion.div
          className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            The{" "}
            <span className="text-purple-400 font-semibold">
              Linguistic Committee
            </span>{" "}
            is one of the most prestigious student bodies of
            <span className="text-purple-300 font-semibold">
              {" "}
              COER University
            </span>
            , renowned for leading Uttarakhand’s literary and cultural movement.
          </p>
          <p>
            Our mission is to enhance communication skills, foster creative
            expression, and nurture leadership qualities among students. We
            provide a dynamic platform for young minds to showcase their talents
            in speech, writing, debating, and literary arts, preparing them to
            excel in today’s competitive world.
          </p>
        </motion.div>
        <motion.div
          className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-purple-400 text-center ">
            EXPRESSIONS 2K25 2.0
          </h3>
          <p>
            <span className="text-purple-300 font-semibold">Expressions</span>{" "}
            is the annual inter-college literary and cultural festival organized
            by The Linguistic Committee of COER University. Celebrated every
            February, this three-day extravaganza brings together participants
            from more than 50 colleges across Uttarakhand and beyond — including
            Dehradun, Haridwar, Chandigarh, Meerut and Delhi.
          </p>
          <p>
            With a legacy of over a decade and 15+ successful editions,
            Expressions stands as a premier platform for literary brilliance,
            creative expression, and cultural exchange. Each year, the fest
            features:
          </p>
          <ul className="list-disc list-inside text-purple-200 pl-4 md:pl-0 max-w-3xl mx-auto space-y-2">
            <li>
              Thrilling competitions across literary and linguistic disciplines
            </li>
            <li>Cultural evenings filled with music, art, and performances</li>
            <li>
              A grand Star Night featuring stand-up comedy and entertainment
              acts
            </li>
          </ul>
          <p>
            Attracting an audience of{" "}
            <span className="text-purple-300 font-medium">5,000+ students</span>{" "}
            annually, Expressions has become a hallmark event in Uttarakhand’s
            literary and cultural calendar, elevating standards of excellence
            year after year.
          </p>
        </motion.div>
        <div className="relative w-full overflow-hidden mt-16">
          <motion.div
            className="flex space-x-12 text-2xl md:text-3xl font-bold text-purple-300 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
          >
            <span className="mx-6">
              🎉 Join us on 3rd & 4th October 2025 🎉
            </span>
            <span className="mx-6">
              🎉 Join us on 3rd & 4th October 2025 🎉
            </span>
            <span className="mx-6">
              🎉 Join us on 3rd & 4th October 2025 🎉
            </span>
            <span className="mx-6">
              🎉 Join us on 3rd & 4th October 2025 🎉
            </span>
            <span className="mx-6">
              🎉 Join us on 3rd & 4th October 2025 🎉
            </span>

            <span className="mx-6">
              🎉 Join us on 3rd & 4th October 2025 🎉
            </span>
            <span className="mx-6">
              🎉 Join us on 3rd & 4th October 2025 🎉
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
