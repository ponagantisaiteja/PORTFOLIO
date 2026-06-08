import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Award, Star, Trophy, CheckCircle2, Calendar } from 'lucide-react';


const experiences = [
  {
    role: 'MERN Stack Intern',
    company: 'Edunet Foundation (AICTE)',
    period: '2024', 
    type: 'Internship',
    color: 'from-violet-600 to-cyan-500',
    description: 'Completed an intensive MERN stack internship, building production-ready applications. Worked on React frontends, Node.js APIs, and MongoDB databases. Delivered 2 full-stack projects.',
    highlights: ['Built 2 full-stack applications', 'Learned industry best practices', 'Worked with REST APIs', 'Got certified by AICTE'],
  },
  {
    role: 'Full Stack Development Training',
    company: 'Self-Learning & Online Platforms',
    period: '2023 — Present',
    type: 'Training',
    color: 'from-cyan-600 to-blue-500',
    description: 'Completed comprehensive courses on full-stack development covering React, Node.js, databases, deployment, and system design patterns.',
    highlights: ['100+ hours of video courses', 'Built 10+ projects', 'Completed DSA challenges', 'Open source contributions'],
  },
  {
    role: 'Frontend Development Projects',
    company: 'Personal & Academic Projects',
    period: '2022 — Present',
    type: 'Projects',
    color: 'from-rose-600 to-pink-500',
    description: 'Designed and developed multiple frontend projects ranging from static portfolios to complex SPAs with advanced state management and animations.',
    highlights: ['7+ frontend projects', 'Responsive design mastery', 'Performance optimization', 'UI/UX best practices'],
  },
];

const achievements = [
  {
    icon: '🏆',
    title: 'MERN Stack Certification',
    subtitle: 'Edunet Foundation × AICTE',
    description: 'Successfully completed MERN Stack internship and received certification from AICTE, India\'s national technical education body.',
    color: 'from-amber-600/20 to-yellow-600/10',
    border: 'hover:border-amber-500/40',
  },
  {
    icon: '🧩',
    title: 'Problem Solving',
    subtitle: 'Competitive Programming',
    description: 'Solved 400+ problems on GeeksForGekks and LeetCode, demonstrating strong algorithmic thinking and data structures mastery.',
    color: 'from-violet-600/20 to-purple-600/10',
    border: 'hover:border-violet-500/40',
  },
  {
    icon: '🚀',
    title: '6+ Projects Shipped',
    subtitle: 'Full Stack Applications',
    description: 'Built and deployed over 10 complete applications across different domains — from clones to original products.',
    color: 'from-cyan-600/20 to-blue-600/10',
    border: 'hover:border-cyan-500/40',
  },
  {
    icon: '⭐',
    title: 'Academic Excellence',
    subtitle: 'RGUKT Basar',
    description: 'Maintained strong academic performance while pursuing hands-on projects and extracurricular learning in computer science.',
    color: 'from-green-600/20 to-emerald-600/10',
    border: 'hover:border-green-500/40',
  },
];

export function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-4">— Journey —</p>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white">
            Experience &{' '}
            <span className="gradient-text">Training</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600/50 via-cyan-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 border-2 border-navy-900 top-6 z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />

                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex-1 ml-12 md:ml-0 glass shimmer rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-mono bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 text-xs font-mono">
                          <Calendar size={11} /> {exp.period}
                        </span>
                      </div>
                      <h3 className="font-display font-700 text-white text-xl">{exp.role}</h3>
                      <p className="text-slate-400 text-sm">{exp.company}</p>
                    </div>
                    <Briefcase size={18} className="text-slate-600 flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-slate-400 font-body text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-slate-400 text-xs">
                        <CheckCircle2 size={12} className="text-cyan-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="achievements" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-4">— Recognition —</p>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white">
            Achievements &{' '}
            <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass shimmer rounded-2xl p-6 border border-white/5 ${a.border} transition-all cursor-default`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center mb-4 text-3xl`}>
                {a.icon}
              </div>
              <h3 className="font-display font-700 text-white text-lg mb-1">{a.title}</h3>
              <p className="text-violet-400 text-xs font-mono mb-3">{a.subtitle}</p>
              <p className="text-slate-400 text-sm font-body leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  ); 
}
