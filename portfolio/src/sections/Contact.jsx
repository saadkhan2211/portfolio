import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { SectionHeading } from "./About";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:saadsaifullahk@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`,
    );
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute left-0 right-0 top-0 glow-line" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom center, rgba(96,53,242,0.04) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="section-content max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            number="05"
            label="Get In Touch"
            title={"Let's\nConnect"}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <p className="font-body text-base text-muted leading-relaxed mb-10">
              Whether you have a project in mind, an opportunity to explore, or
              just want to talk tech my inbox is always open. I'll get back to
              you within 24 hours.
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: <Mail size={15} />,
                  label: "Email",
                  value: "saadsaifullahk@gmail.com",
                  href: "mailto:saadsaifullahk@gmail.com",
                  color: "#6035F2",
                },
                {
                  icon: <Phone size={15} />,
                  label: "Phone",
                  value: "+92 315 1030280",
                  href: "tel:+923151030280",
                  color: "#8B5CF6",
                },
                {
                  icon: <Github size={15} />,
                  label: "GitHub",
                  value: "github.com/saadkhan2211",
                  href: "https://github.com/saadkhan2211",
                  color: "#06b6d4",
                },
                {
                  icon: <Linkedin size={15} />,
                  label: "LinkedIn",
                  value: "linkedin.com/in/saadsaifullah031",
                  href: "https://www.linkedin.com/in/saadsaifullah0315",
                  color: "#f59e0b",
                },
              ].map(({ icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="card rounded-xl flex items-center gap-4 p-4 group transition-all duration-200"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${color}15`,
                      color,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="font-body text-xs font-semibold text-muted uppercase tracking-wider mb-0.5">
                      {label}
                    </div>
                    <div className="font-body text-sm font-medium text-text group-hover:text-primary2 transition-colors">
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <div className="card rounded-2xl p-7">
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  {
                    name: "name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "John Doe",
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "john@example.com",
                  },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block font-body text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[name]}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, [name]: e.target.value }))
                      }
                      className="sl-input"
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-body text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="sl-input resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 28px rgba(96,53,242,0.45)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
                >
                  {sent ? (
                    "✓ Message Sent!"
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
