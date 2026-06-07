import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Languages',
    color: 'from-violet-600 to-purple-700',
    glow: 'rgba(139,92,246,0.3)',
    skills: [
      { name: 'Java', icon: '☕', level: 90 },
      { name: 'Python', icon: '🐍', level: 70 },
      { name: 'JavaScript', icon: '⚡', level: 70 },
      { name: 'C Programming', icon: '⚙️', level: 80 },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-cyan-600 to-blue-700',
    glow: 'rgba(34,211,238,0.3)',
    skills: [
      { name: 'React.js', icon: '⚛️', level: 85 },
      { name: 'HTML5', icon: '🌐', level: 95 },
      { name: 'CSS3', icon: '🎨', level: 90 },
      { name: 'Bootstrap', icon: '📐', level: 85 },
    ],
  },
  {
    title: 'Backend & DB',
    color: 'from-rose-600 to-pink-700',
    glow: 'rgba(251,113,133,0.3)',
    skills: [
      { name: 'Node.js', icon: '🟢', level: 82 },
      { name: 'Express.js', icon: '🛤️', level: 80 },
      { name: 'MongoDB', icon: '🍃', level: 78 },
      { name: 'MySQL', icon: '🗄️', level: 89 },
    ],
  },
  {
    title: 'Tools & Core CS',
    color: 'from-amber-600 to-orange-700',
    glow: 'rgba(251,191,36,0.3)',
    skills: [
      { name: 'SQL', icon: '🛢️', level: 92 },
      { name: 'DSA', icon: '🧮', level: 90 },
      { name: 'OOPS', icon: '🏛️', level: 95 },
      { name: 'Problem Solving', icon: '🧩', level: 90 },
    ],
  },
];

function SkillCard({ name, icon, level, delay }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass shimmer rounded-xl p-4 border border-white/5 hover:border-violet-500/30 transition-all cursor-default"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <span className="font-display font-600 text-white text-sm">{name}</span>
        <span className="ml-auto font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-4">— Tech Stack —</p>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto font-body">
            Technologies I've mastered and tools I use to build exceptional products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-6 rounded-full bg-gradient-to-b ${cat.color}`} />
                <h3 className="font-display font-700 text-white text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    {...skill}
                    delay={ci * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm font-mono mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['GIT','Spring Framework','Spring Boot', 'JWT', 'Postman', 'VS Code', 'Linux', 'Vercel', 'Firebase','Hibernate','maven','JDBC','IntelliJ'].map((t) => (
              <span key={t} className="px-4 py-2 glass rounded-full text-sm text-slate-400 hover:text-white hover:border-violet-500/40 border border-white/5 transition-all cursor-default font-mono">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
