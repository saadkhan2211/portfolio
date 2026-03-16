import { motion } from "framer-motion";
import ThreeBackground from "./components/ThreeBackground";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="noise relative min-h-screen">
      <ThreeBackground />
      <Cursor />
      <div className="scanline" />

      {/* Splash */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="fixed inset-0 z-[9996] bg-bg flex flex-col items-center justify-center gap-5"
      >
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="font-display font-black text-4xl text-gradient"
        >
          {"saad.dev()"}
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #6035F2, transparent)",
          }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="font-body text-xs text-muted font-medium tracking-widest"
        >
          Loading...
        </motion.p>
      </motion.div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
