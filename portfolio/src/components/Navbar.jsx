import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Experience", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "py-3 bg-bg/80 backdrop-blur-2xl border-b border-border"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-xl tracking-wide text-gradient"
        >
          {"saad.dev()"}
        </motion.button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.button
              key={link}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i + 0.25 }}
              onClick={() => go(link)}
              className={`font-body font-medium text-sm tracking-wide transition-colors duration-200 ${
                active === link ? "text-primary2" : "text-muted hover:text-text"
              }`}
            >
              {active === link && (
                <motion.span layoutId="nav-dot" className="mr-1.5 text-primary">
                  ·
                </motion.span>
              )}
              {link}
            </motion.button>
          ))}
          <motion.a
            href="mailto:saadsaifullahk@gmail.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 22px rgba(96,53,242,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary px-5 py-2 text-sm"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
            className="block w-5 h-px bg-text origin-center"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="block w-5 h-px bg-text"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
            className="block w-5 h-px bg-text origin-center"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => go(link)}
                className="block w-full text-left px-6 py-4 font-body font-medium text-sm text-muted hover:text-primary2 border-b border-border/30 transition-colors"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
