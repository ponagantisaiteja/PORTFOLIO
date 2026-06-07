import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitBranch, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Zomato Clone',
    description: 'A full-featured food delivery application with real-time order tracking, restaurant listings, user authentication, and payment integration using the MERN stack.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScipt'],
    emoji: '🍔',
    color: 'from-red-600/20 to-orange-600/10',
    border: 'hover:border-red-500/40',
    featured: true,
  },
  {
    title: 'Spotify Clone',
    description: 'A music streaming platform with playlist management, audio player controls, search functionality, and a beautiful responsive UI that mirrors Spotify\'s design.',
    tags: ['React', 'CSS3', 'JavaScript', 'Web Audio API'],
    emoji: '🎵',
    color: 'from-green-600/20 to-emerald-600/10', 
    border: 'hover:border-green-500/40',
    featured: true,
  },
  {
    title: 'Personal Expense Tracker',
    description: 'Track daily expenses with visual charts, budget categories, monthly reports, and data export functionality. Built with local storage persistence.',
    tags: ['React', 'Chart.js', 'Tailwind', 'localStorage'],
    emoji: '💰',
    color: 'from-violet-600/20 to-purple-600/10',
    border: 'hover:border-violet-500/40',
  },
{
  title: 'ShareEasy',
  description: 'A file-sharing platform that enables users to upload, store, and securely share files through unique links. The application provides an intuitive interface for managing files and ensures seamless file transfer between users.',
  tags: ['React', 'Node.js', 'JavaScript', 'Expres.js', 'MongoDb','Multer',],
  emoji: '📁',
  color: 'from-cyan-600/20 to-blue-600/10',
  border: 'hover:border-cyan-500/40',
},
  {
    title: 'To-Do List App',
    description: 'A productivity application with task categorization, priorities, due dates, drag-and-drop reordering, and cloud sync using Firebase.',
    tags: ['React', 'Firebase', 'Tailwind', 'DnD'],
    emoji: '✅',
    color: 'from-amber-600/20 to-yellow-600/10',
    border: 'hover:border-amber-500/40',
  },
  {
    title: 'Walmart Data Pipeline',
    description: 'A data engineering project that transforms raw Walmart shipping data into actionable insights using Python, Pandas, and visualization dashboards.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    emoji: '📊',
    color: 'from-blue-600/20 to-indigo-600/10',
    border: 'hover:border-blue-500/40',
  },
  {
    title: 'Mini Chatbot',
    description: 'An AI-powered chatbot with natural language processing capabilities, context-aware responses, and a clean conversational UI.',
    tags: ['Python', 'NLP', 'Flask', 'JavaScript'],
    emoji: '🤖',
    color: 'from-rose-600/20 to-pink-600/10',
    border: 'hover:border-rose-500/40',
  },
];

function ProjectCard({ project, delay, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative glass shimmer rounded-2xl overflow-hidden border border-white/5 ${project.border} transition-all duration-300 cursor-pointer ${project.featured ? 'md:col-span-1' : ''}`}
    >
      {/* Card top gradient */}
      <div className={`h-40 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}>
        <motion.span
          animate={{ scale: hovered ? 1.2 : 1, rotate: hovered ? 10 : 0 }}
          transition={{ duration: 0.4 }}
          className="text-7xl select-none"
        >
          {project.emoji}
        </motion.span>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />

        {project.featured && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-xs font-mono">
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-display font-700 text-white text-xl mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 font-body">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 text-xs font-mono">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href="https://github.com/ponagantisaiteja"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3 py-2 glass rounded-lg text-slate-400 hover:text-white text-xs font-mono transition-colors border border-white/5 hover:border-white/20"
            onClick={e => e.stopPropagation()}
          >
            <GitBranch size={13} /> GitHub
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-violet-600/80 to-cyan-500/80 text-white text-xs font-mono hover:opacity-90 transition-opacity"
            onClick={e => e.stopPropagation()}
          >
            <ExternalLink size={13} /> Live Demo
          </motion.a>
        </div>
      </div>

      {/* Hover glow */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{ boxShadow: 'inset 0 0 40px rgba(139,92,246,0.05)' }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" ref={ref} className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-violet-400 text-sm tracking-widest uppercase mb-4">— Portfolio —</p>
          <h2 className="font-display text-4xl md:text-5xl font-800 text-white">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto font-body">
            A collection of projects that reflect my skills, creativity, and problem-solving approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.08} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ponagantisaiteja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono text-sm group"
          >
            View all projects on GitHub
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
