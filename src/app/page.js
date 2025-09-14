import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Brochure from "./components/Brochure";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Sponsors from "./components/Sponsers";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Events />
        <Brochure />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
