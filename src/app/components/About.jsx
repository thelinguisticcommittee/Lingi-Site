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
          {/*About heading */}
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
          className="bg-gradient-to-br from-purple-800/20 to-purple-900/10 border border-purple-700/30 rounded-xl p-10 shadow-lg backdrop-blur-sm text-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.h3
            className="text-3xl font-bold text-purple-300 mb-12 transition-transform duration-300 hover:scale-105 hover:text-purple-200"
            whileHover={{ scale: 1.05 }}
          >
            LEADERSHIP TEAM
          </motion.h3>

          {/* Convener - always centered */}
          <div className="grid grid-cols-1 justify-items-center mb-8">
            <div className="bg-black/40 border border-purple-700/30 rounded-xl p-6 hover:shadow-purple-500/20 hover:shadow-xl transition transform hover:scale-105 max-w-xs w-full">
              <img
                src="/ConvenerLingi.jpg"
                alt="Coordinator"
                className="w-28 h-28 mx-auto rounded-full mb-4 border-2 border-purple-400 object-cover"
              />
              <h4 className="text-xl font-semibold text-purple-200">
                Dr. Gesu Thakur
              </h4>
              <p className="text-purple-300 text-sm mb-3">Convener</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-8">
            <div></div>
            <div className="bg-black/40 border border-purple-700/30 rounded-xl p-6 hover:shadow-purple-500/20 hover:shadow-xl transition transform hover:scale-105 max-w-xs w-full">
              <img
                src="/WhatsApp Image 2025-09-07 at 17.24.14_11e5900d.jpg"
                alt="Coordinator"
                className="w-28 h-28 mx-auto rounded-full mb-4 border-2 border-purple-400 object-cover"
              />
              <h4 className="text-xl font-semibold text-purple-200">
                Vandana Bhakuni
              </h4>
              <p className="text-purple-300 text-sm mb-3">Coordinator</p>
              <div className="flex justify-center space-x-4 text-purple-300">
                <a
                  href="mailto:vandanabhakuni06@gmail.com"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fas fa-envelope text-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/vandana-bhakuni-16b2ba271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
              </div>
            </div>

            <div className="bg-black/40 border border-purple-700/30 rounded-xl p-6 hover:shadow-purple-500/20 hover:shadow-xl transition transform hover:scale-105 max-w-xs w-full">
              <img
                src="/WhatsApp Image 2025-09-07 at 17.43.20_c34b6126.jpg"
                alt="Co-Coordinator"
                className="w-28 h-28 mx-auto rounded-full mb-4 border-2 border-purple-400 object-cover"
              />
              <h4 className="text-xl font-semibold text-purple-200">
                Abhinandan Sharma
              </h4>
              <p className="text-purple-300 text-sm mb-3">Co-Coordinator</p>
              <div className="flex justify-center space-x-4 text-purple-300">
                <a
                  href="mailto:abhinandansharma2468@gmail.com"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fas fa-envelope text-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhinandan-sharma-1011b5258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
              </div>
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <div className="bg-black/40 border border-purple-700/30 rounded-xl p-6 hover:shadow-purple-500/20 hover:shadow-xl transition transform hover:scale-105 max-w-xs w-full">
              <img
                src="/WhatsApp Image 2025-09-07 at 18.08.26_48c5c819.jpg"
                alt="Managerial Head"
                className="w-28 h-28 mx-auto rounded-full mb-4 border-2 border-purple-400 object-cover"
              />
              <h4 className="text-xl font-semibold text-purple-200">
                Vansh Jain
              </h4>
              <p className="text-purple-300 text-sm mb-3">
                Management Coordinator
              </p>
              <div className="flex justify-center space-x-4 text-purple-300">
                <a
                  href="mailto:jainankurvansh@gmail.com"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fas fa-envelope text-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/vansh-jain-89501825a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
              </div>
            </div>

            <div className="bg-black/40 border border-purple-700/30 rounded-xl p-6 hover:shadow-purple-500/20 hover:shadow-xl transition transform hover:scale-105 max-w-xs w-full">
              <img
                src="/WhatsApp Image 2025-09-07 at 17.42.28_ac212b24.jpg"
                alt="Sponsorship Coordinator"
                className="w-28 h-28 mx-auto rounded-full mb-4 border-2 border-purple-400 object-cover"
              />
              <h4 className="text-xl font-semibold text-purple-200">
                Shourya Gupta
              </h4>
              <p className="text-purple-300 text-sm mb-3">
                Sponsorship Coordinator
              </p>
              <div className="flex justify-center space-x-4 text-purple-300">
                <a
                  href="mailto:awayontech@gmail.com"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fas fa-envelope text-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/shourya-gupta-8a8876250/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
              </div>
            </div>

            <div className="bg-black/40 border border-purple-700/30 rounded-xl p-6 hover:shadow-purple-500/20 hover:shadow-xl transition transform hover:scale-105 max-w-xs w-full">
              <img
                src="/PradumaySir.jpg"
                alt="Fest Coordinator"
                className="w-28 h-28 mx-auto rounded-full mb-4 border-2 border-purple-400 object-cover"
              />
              <h4 className="text-xl font-semibold text-purple-200">
                Pradhumay Gaur
              </h4>
              <p className="text-purple-300 text-sm mb-3">Fest Coordinator</p>
              <div className="flex justify-center space-x-4 text-purple-300">
                <a
                  href="mailto:pradhumaygaur@myyahoo.com"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fas fa-envelope text-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/vandana-bhakuni-16b2ba271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
              </div>
            </div>
            <div className="bg-black/40 border border-purple-700/30 rounded-xl p-6 hover:shadow-purple-500/20 hover:shadow-xl transition transform hover:scale-105 max-w-xs w-full">
              <img
                src="/Disha-Nain.jpg"
                alt="Fest Coordinator"
                className="w-28 h-28 mx-auto rounded-full mb-4 border-2 border-purple-400 object-cover"
              />
              <h4 className="text-xl font-semibold text-purple-200">
                Disha Nain
              </h4>
              <p className="text-purple-300 text-sm mb-3">Fest Coordinator</p>
              <div className="flex justify-center space-x-4 text-purple-300">
                <a
                  href="mailto:dishanain971@gmail.com"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fas fa-envelope text-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/disha-nain-6a40b825b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-100 transition"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
              </div>
            </div>
          </div>
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
            from more than 10 colleges across Uttarakhand and beyond — including
            Dehradun, Haridwar, Chandigarh, and Meerut.
          </p>
          <p>
            With a legacy of over a decade and 10+ successful editions,
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
      </motion.div>
    </section>
  );
}
