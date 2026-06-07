import { motion } from 'framer-motion';
import { GitBranch, Link2, Mail, Heart, Code2, ArrowUp } from 'lucide-react';

const socials = [
  { icon: GitBranch, href: 'https://github.com/ponagantisaiteja', label: 'GitHub' },
  { icon: Link2, href: 'https://www.linkedin.com/in/saiteja-ponaganti-44025532a/', label: 'LinkedIn' },
  { icon: Mail, href: 'saitejaponaganti0611@gmail.com', label: 'Email' },
];

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={scrollTop}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center glow-violet">
              <Code2 size={18} className="text-white" />
            </div>
            <span className="font-display font-700 text-xl text-white">SAITEJA<span className="gradient-text">.</span></span>
          </motion.div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-500 hover:text-white text-sm font-body transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:border-violet-500/40 transition-all"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm font-body flex items-center gap-1.5">
            Designed & Built with{' '}
            <Heart size={12} className="text-rose-500 fill-rose-500" />
            {' '}by{' '}
            <span className="gradient-text font-medium">SAITEJA</span>
            {' '}· © {new Date().getFullYear()}
          </p>

          <p className="text-slate-700 text-xs font-mono">
            
          </p>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollTop}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:border-violet-500/40 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
