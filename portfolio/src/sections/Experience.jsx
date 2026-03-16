import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { SectionHeading } from './About'

const jobs = [
  {
    company: 'Kreadevs',
    role: 'Full Stack Developer',
    period: 'Feb 2024 — Present',
    location: 'Karachi, Pakistan',
    badge: 'On-site',
    color: '#6035F2',
    desc: 'Building and scaling a live multi-vendor food delivery platform serving customers, restaurants, riders, and admins across separate applications.',
    bullets: [
      'Architected full AWS infrastructure (EC2, RDS, S3, CloudFront, ElastiCache, ALB, Auto Scaling) supporting production with zero-downtime releases via PM2 cluster mode.',
      'Engineered real-time order & delivery tracking using Redis pub/sub and WebSockets, enabling instant status updates across all platform roles simultaneously.',
      'Designed a distance-based rider assignment engine with automated fallback & decline handling, reducing average delivery assignment time by ~40%.',
      'Integrated Stripe payment processing with full webhook handling across test and live environments, including restaurant wallet management and withdrawal workflows.',
      'Migrated frontend state management from Context API to Zustand, reducing component re-renders and improving perceived UI responsiveness.',
      'Implemented push notifications and real-time audio alerts for operational events, significantly improving order acknowledgment rates.',
    ],
    stack: ['Node.js','React','React Native','AWS','Redis','WebSockets','Stripe','PostgreSQL','Nginx','PM2'],
  },
  {
    company: 'Sur-Solution',
    role: 'Full Stack Developer',
    period: 'Nov 2022 — Feb 2024',
    location: 'Qatar (Remote)',
    badge: 'Remote',
    color: '#8B5CF6',
    desc: 'Designed and shipped a centralized ERP system managing workforce operations for 1,000+ employees across multiple departments.',
    bullets: [
      'Built a comprehensive ERP platform using ASP.NET Core MVC 7 covering employee records, project allocation, attendance tracking, and admin reporting.',
      'Implemented fine-grained role-based access control across all departments, ensuring data isolation and audit compliance for sensitive HR and payroll data.',
      'Designed optimized database schemas and SQL queries for large-scale employee records, reducing data retrieval latency on HR reporting dashboards.',
      'Digitized manual HR processes end-to-end, eliminating an estimated 20+ hours of weekly administrative overhead across teams.',
    ],
    stack: ['ASP.NET Core MVC 7','SQL Server','JavaScript','CSS3'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView(0.08)
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="absolute left-0 right-0 top-0 glow-line" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.04) 0%, transparent 70%)' }} />

      <div ref={ref} className="section-content max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
          <SectionHeading number="02" label="Work Experience" title={"Where I've\nWorked"} />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px overflow-hidden" style={{ transform: 'translateX(-50%)' }}>
            <motion.div
              initial={{ height: 0 }} animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
              style={{ background: 'linear-gradient(to bottom, #6035F2, #8B5CF6 60%, transparent)' }}
              className="w-full"
            />
          </div>

          {jobs.map((job, i) => (
            <motion.div key={job.company}
              initial={{ opacity: 0, x: i%2===0 ? -32 : 32 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2 + i*0.2 }}
              className={`relative mb-14 md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 ${i%2===0 ? '' : 'md:ml-auto'}`}
            >
              {/* Dot */}
              <div
                className="absolute top-6 -left-9 md:left-auto md:-right-[2.7rem] w-4 h-4 rounded-full border-2 bg-bg flex items-center justify-center"
                style={{ borderColor: job.color, boxShadow: `0 0 10px ${job.color}` }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: job.color }} />
              </div>

              {/* Card */}
              <div className="card rounded-2xl overflow-hidden group">
                <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${job.color}, transparent)` }} />
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="font-display font-bold text-xl text-text mb-0.5">{job.company}</div>
                      <div className="font-body font-semibold text-base" style={{ color: job.color }}>{job.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs text-muted mb-1">{job.period}</div>
                      <div className="font-mono text-xs text-muted mb-1.5">{job.location}</div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-body font-medium border border-border2 text-muted">{job.badge}</span>
                    </div>
                  </div>

                  <p className="font-body text-sm text-muted leading-relaxed mb-4">{job.desc}</p>

                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-sm text-textDim leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: job.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                    {job.stack.map(s => <span key={s} className="tech-tag">{s}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
