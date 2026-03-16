import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const facts = [
  { label: "Role", value: "Full Stack Developer", icon: "⚡" },
  { label: "Location", value: "Karachi, Pakistan", icon: "📍" },
  { label: "Current", value: "Full Stack Dev @ Kreadevs", icon: "💼" },
  {
    label: "Education",
    value: "B.Sc Computer Science, UoK (2021–2026)",
    icon: "🎓",
  },
  { label: "Email", value: "saadsaifullahk@gmail.com", icon: "✉️" },
  { label: "Status", value: "Open to Opportunities", icon: "🟢" },
];

function SectionHeading({ number, label, title, gradient }) {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-primary/70 tracking-widest">
          {number}
        </span>
        <div className="w-6 h-px bg-primary/40" />
        <span className="font-body text-xs font-semibold text-muted tracking-wider uppercase">
          {label}
        </span>
      </div>
      <h2 className="font-display font-black leading-none text-[clamp(2.4rem,5.5vw,4.5rem)]">
        {title.split("\n").map((line, i) => (
          <span
            key={i}
            className={`block ${i === 1 ? "text-gradient" : "text-text"}`}
          >
            {line}
          </span>
        ))}
      </h2>
    </div>
  );
}

export { SectionHeading };

export default function About() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute left-0 right-0 top-0 glow-line" />
      <div
        className="absolute top-1/2 right-0 w-[350px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="section-content max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading number="01" label="About Me" title={"Who\nI Am"} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <p className="font-body text-base text-textDim leading-relaxed mb-5">
              I'm a{" "}
              <span className="text-text font-semibold">
                Full Stack Engineer
              </span>{" "}
              based in Karachi, Pakistan with 2+ years of production experience
              building and shipping scalable web and mobile platforms.
            </p>
            <p className="font-body text-base text-muted leading-relaxed mb-5">
              My work spans the full stack from database design and backend APIs
              to cloud infrastructure on AWS and polished frontends. I've
              shipped ERP systems handling 1,000+ employees and real-time
              delivery platforms with live tracking and Stripe payments.
            </p>
            <p className="font-body text-base text-muted leading-relaxed mb-8">
              I'm currently completing my B.Sc in Computer Science at the
              University of Karachi while working full-time. I love building
              side projects, publishing open-source tools, and diving into new
              technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Clean Architecture",
                "Real-time Systems",
                "Cloud Infrastructure",
                "Open Source",
                "AI/ML",
              ].map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-3">
            {facts.map(({ label, value, icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="card rounded-xl group flex items-start gap-4 p-4 cursor-default"
              >
                <span className="text-lg mt-0.5 flex-shrink-0">{icon}</span>
                <div>
                  <div className="font-body text-xs font-semibold text-muted uppercase tracking-wider mb-0.5">
                    {label}
                  </div>
                  <div className="font-body text-sm font-medium text-text group-hover:text-primary2 transition-colors">
                    {value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
