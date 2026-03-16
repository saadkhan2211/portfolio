export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border section-content">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-display font-bold text-lg text-gradient">Saad.</span>
        <p className="font-body text-sm text-muted text-center">
          Designed & Built by <span className="text-primary2 font-medium">Saad Saifullah</span> · {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-muted">React · Three.js · Framer Motion</p>
      </div>
    </footer>
  )
}
