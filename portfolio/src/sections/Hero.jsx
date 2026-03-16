import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg";

const roles = [
  "Full Stack Developer",
  "AWS Cloud Engineer",
  "React & Node.js Expert",
  "Real-time Systems Builder",
];

function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[idx % words.length];
    let t;
    if (!del && text.length < word.length)
      t = setTimeout(() => setText(word.slice(0, text.length + 1)), 72);
    else if (!del && text.length === word.length)
      t = setTimeout(() => setDel(true), 2200);
    else if (del && text.length > 0)
      t = setTimeout(() => setText(text.slice(0, -1)), 36);
    else {
      setDel(false);
      setIdx((i) => i + 1);
    }
    return () => clearTimeout(t);
  }, [text, del, idx, words]);

  return (
    <span className="text-primary2">
      {text}
      <span className="inline-block w-0.5 h-[0.8em] bg-primary ml-0.5 animate-pulse align-middle" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(96,53,242,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="section-content max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/8">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-body text-xs font-medium tracking-wide text-primary2">
                  Available for work
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="font-display font-black leading-[1.05] mb-4"
            >
              <span className="block text-[clamp(3rem,7.5vw,5.5rem)] text-text">
                Saad
              </span>
              <span className="block text-[clamp(3rem,7.5vw,5.5rem)] text-gradient">
                Saifullah
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="font-body text-xl font-medium text-muted mb-7 h-8"
            >
              <Typewriter words={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="font-body text-base text-muted leading-relaxed mb-10 max-w-lg"
            >
              Full Stack Engineer with{" "}
              <span className="text-text font-semibold">2+ years</span> of
              production experience. I architect real-time systems, cloud
              infrastructure on AWS, and ship code that solves real problems —
              from database design to DevOps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 28px rgba(96,53,242,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary px-8 py-3 text-sm"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline px-8 py-3 text-sm"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-5"
            >
              {[
                { label: "GitHub", href: "https://github.com/saadkhan2211" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/saadsaifullah0315",
                },
                { label: "Email", href: "mailto:saadsaifullahk@gmail.com" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  className="font-body text-sm text-muted hover:text-primary2 transition-colors font-medium cursor-pointer"
                >
                  {label}
                </a>
              ))}
            </motion.div> */}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.85,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="hidden md:block"
          >
            <div
              className="stat-window p-0 overflow-hidden relative"
              style={{
                boxShadow:
                  "0 0 60px rgba(96,53,242,0.12), 0 0 120px rgba(96,53,242,0.05)",
              }}
            >
              <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-surface2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-xs text-textDim tracking-widest">
                    developer.profile
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {["bg-rose/60", "bg-amber/60", "bg-emerald-400/60"].map(
                    (c) => (
                      <div
                        key={c}
                        className={`w-2.5 h-2.5 rounded-full ${c}`}
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-4 mb-7">
                  <img
                    src={avatar}
                    className="w-14 h-14 rounded-xl object-cover"
                    alt="Saad Saifullah"
                  />
                  <div>
                    <div className="font-display font-bold text-lg text-text">
                      Saad Saifullah
                    </div>
                    <div className="font-body text-sm text-muted">
                      Full Stack Developer
                    </div>
                  </div>
                </div>

                {/* Stats */}
                {[
                  {
                    label: "Experience",
                    value: "2+ Years",
                    pct: 75,
                    color: "#6035F2",
                  },
                  {
                    label: "Projects & Work",
                    value: "7+",
                    pct: 80,
                    color: "#8B5CF6",
                  },
                  {
                    label: "Tech Stack",
                    value: "20+ Tools",
                    pct: 88,
                    color: "#06b6d4",
                  },
                  {
                    label: "AWS Services",
                    value: "8+",
                    pct: 70,
                    color: "#f59e0b",
                  },
                ].map(({ label, value, pct, color }, i) => (
                  <div key={label} className="mb-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm text-muted font-medium">
                        {label}
                      </span>
                      <span
                        className="font-body text-sm font-bold"
                        style={{ color }}
                      >
                        {value}
                      </span>
                    </div>
                    <div className="power-bar-track">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{
                          duration: 1.1,
                          delay: 0.9 + i * 0.1,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                        className="power-bar-fill"
                        style={{
                          background: `linear-gradient(90deg,${color}80,${color})`,
                          boxShadow: `0 0 6px ${color}`,
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-body text-xs text-muted mb-0.5 font-medium">
                      Currently at
                    </div>
                    <div className="font-body text-sm font-semibold text-text">
                      Kreadevs
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/25">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-body text-xs font-medium text-emerald-400">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="section-content absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[11px] text-muted font-medium tracking-widest">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
