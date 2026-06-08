import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Coffee, Zap, Heart, Terminal } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '6+', label: 'Tech Stack' },
  { value: '1', label: 'Internship' },
  { value: '∞', label: 'Curiosity' },
];

const interests = [
  { icon: Terminal, label: 'Open Source' },
  { icon: Zap, label: 'Problem Solving' },
  { icon: Coffee, label: 'Coding 24/7' },
  { icon: Heart, label: 'Building Products' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-28 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-4">— About Me —</p>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white">
            Crafting Code with{' '}
            <span className="gradient-text">Passion</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-5 text-slate-400 font-body leading-relaxed text-lg mb-10">
              <p>
                I'm <span className="text-white font-medium">SAI TEJA</span>, Completed Graduation in Computer Science Engineering from RGUKT IIIT Basar." — a place where I discovered my deep love for building things that live on the internet.
              </p>
              <p>
                My journey started with curiosity about how websites worked, which quickly evolved into a full-on obsession with the MERN stack. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to projects, or thinking about how to build the next great product. I believe great software is about more than just code — it's about the experience it creates.
              </p>
            </div>

            {/* Education card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass shimmer rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-violet-400 uppercase tracking-wider">Education</span>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-mono"></span>
                  </div>
                  <h3 className="font-display font-700 text-white text-lg mb-1">B.Tech — Computer Science Engineering</h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={13} className="text-cyan-400" />
                    <span>Rajiv Gandhi University of Knowledge Technologies (RGUKT), Basar</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {interests.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl px-4 py-3 flex items-center gap-3 hover:border-violet-500/30 transition-all cursor-default"
                >
                  <Icon size={16} className="text-violet-400" />
                  <span className="text-slate-300 text-sm">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="glass shimmer rounded-2xl p-6 text-center border border-white/5 hover:border-violet-500/30 transition-all cursor-default"
                >
                  <div className="font-display font-800 text-4xl gradient-text mb-2">{value}</div>
                  <div className="text-slate-400 text-sm font-body">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Career goal card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass shimmer rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap size={18} className="text-cyan-400" />
                <span className="font-display font-700 text-white">Career Vision</span>
              </div>
              <p className="text-slate-400 font-body leading-relaxed">
                I aspire to become a Software Engineer at an innovative product company, building scalable full-stack applications and distributed systems that impact millions of users. I am focused on mastering cloud architecture and delivering exceptional user experiences.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Full Stack', 'software developer', 'Java', 'DSA'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full glass text-xs text-slate-400 border border-white/5 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
