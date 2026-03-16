import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { SectionHeading } from './About'

const groups = [
  { category: 'Frontend',       icon: '🎨', color: '#6035F2',
    skills: [['React.js',92],['Next.js',80],['TypeScript',78],['JavaScript ES6+',95],['Tailwind CSS',90],['Vite',85]] },
  { category: 'Backend',        icon: '⚙️', color: '#8B5CF6',
    skills: [['Node.js',90],['Express.js',88],['ASP.NET Core MVC',82],['GraphQL + Apollo',72],['REST API',95]] },
  { category: 'Cloud & DevOps', icon: '☁️', color: '#06b6d4',
    skills: [['AWS EC2 / RDS / S3',85],['CloudFront / ALB',78],['ElastiCache',75],['Auto Scaling',75],['Docker',70],['Nginx',72],['PM2',80]] },
  { category: 'Databases',      icon: '🗄️', color: '#f59e0b',
    skills: [['PostgreSQL',84],['SQL Server',80],['MongoDB',78],['Redis',80]] },
  { category: 'Mobile & RT',    icon: '📱', color: '#f43f5e',
    skills: [['React Native (Expo)',75],['WebSockets / Socket.io',85],['Redis Pub/Sub',80],['Stripe',80]] },
]

function SkillBar({ name, pct, color, inView, delay }) {
  return (
    <div className="mb-3.5 group">
      <div className="flex justify-between mb-1.5">
        <span className="font-body text-sm text-textDim font-medium group-hover:text-text transition-colors">{name}</span>
        <span className="font-mono text-xs text-muted">{pct}%</span>
      </div>
      <div className="power-bar-track">
        <motion.div
          initial={{ width: 0 }} animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.1, delay, ease: [0.23,1,0.32,1] }}
          className="power-bar-fill"
          style={{ background: `linear-gradient(90deg,${color}60,${color})`, boxShadow: `0 0 6px ${color}80` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView(0.05)
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute left-0 right-0 top-0 glow-line" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(96,53,242,0.05) 0%, transparent 70%)' }} />

      <div ref={ref} className="section-content max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
          <SectionHeading number="03" label="Technical Skills" title={"Tech\nArsenal"} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, gi) => (
            <motion.div key={g.category}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: gi*0.1 }}
              className="card rounded-2xl p-6 group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${g.color}08, transparent 65%)` }} />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                  style={{ background: `${g.color}15`, border: `1px solid ${g.color}25` }}>
                  {g.icon}
                </div>
                <div>
                  <div className="font-body font-bold text-sm text-text">{g.category}</div>
                  <div className="font-mono text-[10px]" style={{ color: g.color }}>{g.skills.length} skills</div>
                </div>
              </div>

              {g.skills.map(([name, pct], si) => (
                <SkillBar key={name} name={name} pct={pct} color={g.color} inView={inView} delay={gi*0.1+si*0.07} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }}
          className="card rounded-2xl mt-5 p-6">
          <div className="font-body text-xs font-semibold text-muted uppercase tracking-wider mb-4">Also familiar with</div>
          <div className="flex flex-wrap gap-2">
            {['Python','PyTorch','FastAPI','OpenCV','EfficientNet','Git','Linux','Zod','NPM Publishing','Push Notifications','JWT','CI/CD'].map(t => (
              <span key={t} className="tech-tag opacity-60 hover:opacity-100 transition-opacity cursor-default">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
