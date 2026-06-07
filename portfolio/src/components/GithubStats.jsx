import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitBranch, Star, GitCommitHorizontal, Users } from 'lucide-react';

const GITHUB_USERNAME = 'bunny-dev';

const statCards = [
  { label: 'Repositories', value: '15+', icon: GitBranch, color: 'text-violet-400' },
  { label: 'Commits (2024)', value: '400+', icon: GitCommitHorizontal, color: 'text-cyan-400' },
  { label: 'Stars Earned', value: '25+', icon: Star, color: 'text-amber-400' },
  { label: 'Followers', value: '50+', icon: Users, color: 'text-rose-400' },
];

const languages = [
  { name: 'JavaScript', pct: 40, color: '#f7df1e' },
  { name: 'Python', pct: 20, color: '#3776ab' },
  { name: 'Java', pct: 15, color: '#007396' },
  { name: 'HTML/CSS', pct: 15, color: '#e34c26' },
  { name: 'Other', pct: 10, color: '#8b5cf6' },
];

export default function GithubStats() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="github" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-4">— Open Source —</p>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white">
            GitHub{' '}
            <span className="gradient-text">Stats</span>
          </h2>
          <p className="text-slate-400 mt-4 font-body">Building in public, one commit at a time.</p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {statCards.map(({ label, value, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass shimmer rounded-2xl p-5 text-center border border-white/5 hover:border-violet-500/30 transition-all"
            >
              <Icon size={22} className={`${color} mx-auto mb-3`} />
              <div className="font-display font-800 text-3xl text-white mb-1">{value}</div>
              <div className="text-slate-500 text-xs font-mono">{label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* GitHub stats image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 transition-all"
          >
            <div className="flex items-center gap-2 mb-5">
              <GitBranch size={18} className="text-violet-400" />
              <span className="font-display font-700 text-white">GitHub Statistics</span>
            </div>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=8b5cf6&icon_color=22d3ee&text_color=94a3b8&bg_color=00000000`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback */}
            <div className="hidden flex-col items-center justify-center h-40 text-slate-500">
              <GitBranch size={32} className="mb-2 opacity-30" />
              <p className="text-sm font-mono">GitHub stats unavailable in preview</p>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="mt-2 text-violet-400 text-xs hover:text-violet-300">
                View on GitHub →
              </a>
            </div>
          </motion.div>

          {/* Language pie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 transition-all"
          >
            <h3 className="font-display font-700 text-white mb-5">Most Used Languages</h3>

            <div className="space-y-4">
              {languages.map(({ name, pct, color }, i) => (
                <div key={name}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                      <span className="text-slate-300 font-mono">{name}</span>
                    </div>
                    <span className="text-slate-500 font-mono">{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${pct}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="mt-6 flex items-center gap-2 text-violet-400 text-sm font-mono hover:text-violet-300 transition-colors"
            >
              <GitBranch size={14} />
              github.com/{GITHUB_USERNAME}
            </motion.a>
          </motion.div>
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-6 glass rounded-2xl p-6 border border-white/5"
        >
          <h3 className="font-display font-700 text-white mb-5">Contribution Activity</h3>
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&custom_title=&bg_color=00000000&color=94a3b8&line=8b5cf6&point=22d3ee&area=true&area_color=8b5cf6&hide_border=true`}
            alt="Contribution Graph"
            className="w-full rounded-xl opacity-80"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
