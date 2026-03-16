import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { SectionHeading } from "./About";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Enterprise ERP System",
    tag: "Production · 1,000+ Employees",
    year: "2022 – 2024",
    color: "#6035F2",
    desc: "Centralized workforce management ERP covering employee records, project allocation, attendance tracking, and administrative reporting used daily by 1,000+ employees across multiple departments.",
    highlights: [
      "Built with ASP.NET Core MVC 7 covering all HR and operational workflows in a single unified system.",
      "Fine-grained role-based access control with data isolation and audit compliance for sensitive payroll data.",
      "Optimized SQL schemas and queries, significantly reducing data retrieval latency on HR reporting dashboards.",
      "Fully digitized manual HR processes eliminated ~20+ hours of weekly administrative overhead.",
      "Zero critical downtime maintained throughout continuous feature enhancements.",
    ],
    stack: ["ASP.NET Core MVC 7", "SQL Server", "JavaScript", "CSS3", "RBAC"],
    featured: true,
  },
  {
    id: 2,
    name: "Oralytist",
    tag: "AI · Oral Disease Detection",
    year: "Oct 2025 – Jan 2026",
    color: "#06b6d4",
    desc: "AI-powered full-stack platform that detects oral conditions from dental X-ray images using an EfficientNet-based ML model.",
    highlights: [
      "EfficientNet-based ML model for multi-class oral disease detection from dental X-ray images.",
      "Dual-service backend: Node.js for auth/coordination, FastAPI for isolated model inference.",
      "Full ML pipeline including dataset structuring, image preprocessing, and dynamic class handling.",
      "Modular architecture designed for independent scaling and future model upgrades.",
    ],
    stack: [
      "Python",
      "PyTorch",
      "EfficientNet",
      "FastAPI",
      "React (Vite)",
      "OpenCV",
      "Node.js",
    ],
    github: "#",
  },
  {
    id: 3,
    name: "ManaTree",
    tag: "CLI Tool · NPM Published",
    year: "Feb 2026 – Present",
    color: "#f59e0b",
    desc: "Published CLI tool on NPM that generates complete project folder structures from simple text-based definitions eliminating repetitive manual scaffolding.",
    highlights: [
      "Shared generation engine powering both the REST API and CLI with a single core.",
      "Zod validation, secure file path handling, and automatic ZIP archive generation.",
      "Published on NPM and available to developers worldwide.",
      "TypeScript throughout with Express.js API and PostgreSQL for project persistence.",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "React (Vite)",
      "Express.js",
      "PostgreSQL",
      "Zod",
      "NPM",
    ],
    github: "#",
  },
  {
    id: 4,
    name: "Trakify",
    tag: "Web App · Task Management",
    year: "Oct 2025",
    color: "#8B5CF6",
    desc: "Full-stack task management web app for streamlining personal and team productivity with JWT auth, RESTful APIs, and real-time updates.",
    highlights: [
      "RESTful APIs with Node.js + Express for task creation, updates, and status tracking.",
      "JWT-based authentication with protected routes and session management.",
      "MongoDB with optimized schema design for efficient task storage.",
      "Task prioritization, deadlines, and real-time updates with clean UX.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "#",
  },
];

function ProjectCard({ project, inView, delay }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className={`card rounded-2xl overflow-hidden group ${project.featured ? "md:col-span-2" : ""}`}
    >
      <div
        className="h-0.5"
        style={{
          background: `linear-gradient(90deg, ${project.color}, transparent)`,
        }}
      />
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-display font-bold text-xl text-text mb-1">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="font-body text-xs font-semibold"
                style={{ color: project.color }}
              >
                {project.tag}
              </span>
              <span className="text-border">·</span>
              <span className="font-mono text-xs text-muted">
                {project.year}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0 mt-1">
            {project.github && (
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.12 }}
                className="text-muted hover:text-primary2 transition-colors"
              >
                <Github size={16} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                whileHover={{ scale: 1.12 }}
                className="text-muted hover:text-primary2 transition-colors"
              >
                <ExternalLink size={16} />
              </motion.a>
            )}
          </div>
        </div>

        <p className="font-body text-sm text-muted leading-relaxed mb-4">
          {project.desc}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 mb-4">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm text-textDim leading-relaxed"
                  >
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: project.color }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 font-body text-xs font-semibold text-muted hover:text-primary2 transition-colors mb-4"
        >
          {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          {expanded ? "Hide details" : "Show details"}
        </button>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
          {project.stack.map((s) => (
            <span key={s} className="tech-tag">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView(0.05);
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="absolute left-0 right-0 top-0 glow-line" />
      <div
        className="absolute top-1/2 left-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(96,53,242,0.05) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="section-content max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            number="04"
            label="Selected Projects"
            title={"Things I've\nBuilt"}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              inView={inView}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
