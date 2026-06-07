import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, GitBranch, Link2, ChevronDown, Sparkles } from 'lucide-react';

const roles = ['Full Stack Developer', 'Frontend Developer', 'Problem Solver', 'CSE Graduate','Java'];

export default function Hero() {
  const canvasRef = useRef(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIdx];
    let i = 0;
    let timer;

    if (typing) {
      timer = setInterval(() => {
        if (i <= current.length) {
          setDisplayed(current.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => setTyping(false), 1800);
        }
      }, 60);
    } else {
      let j = current.length;
      timer = setInterval(() => {
        if (j >= 0) {
          setDisplayed(current.slice(0, j));
          j--;
        } else {
          clearInterval(timer);
          setRoleIdx((r) => (r + 1) % roles.length);
          setTyping(true);
        }
      }, 35);
    }

    return () => clearInterval(timer);
  }, [roleIdx, typing]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '139,92,246' : '34,211,238',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(139,92,246,${0.08 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 text-sm text-slate-400"
          >
            <Sparkles size={14} className="text-violet-400" />
            <span>Open to opportunities</span>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-800 leading-none mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">SAITEJA</span>
            <span className="text-violet-400">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-display text-xl md:text-2xl text-slate-400 mb-6 h-8"
          >
            <span className="text-white typing-cursor">{displayed}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-400 font-body text-lg leading-relaxed max-w-xl mb-10"
          >
          Enthusiastic and detail-oriented Computer Science graduate with a strong foundation in full-stack web
development and software engineering. Passionate about building scalable applications and leveraging machine learning
tools to solve complex, real-world engineering challenges. Eager to collaborate in a dynamic environment and
contribute effectively to innovative engineering teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
          >
         <motion.a
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  href="https://drive.google.com/uc?export=download&id=1oO2ZR0jZihruRY9iN3Od9IKKfOGaLvIq"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium glow-violet hover:opacity-90 transition-all"
>
  <Download size={18} />
  Download Resume
</motion.a>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-medium hover:border-violet-500/50 transition-all"
            >
              <Mail size={18} />
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            {[
              { icon: GitBranch, href: 'https://github.com/ponagantisaiteja', label: 'GitHub' },
              { icon: Link2, href: 'https://www.linkedin.com/in/saiteja-ponaganti-44025532a/', label: 'LinkedIn' },
              { icon: Mail, href: 'saitejaponaganti0611@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/50 transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <span className="text-slate-600 text-sm ml-2 font-mono"></span>
          </motion.div>
        </div>

        {/* Right — Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 relative"
        >
          {/* Orbit rings */}
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-cyan-400/15" style={{ animation: 'spin 15s linear infinite reverse' }} />

            {/* Orbiting dots */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="orbit-1 w-3 h-3 bg-violet-400 rounded-full shadow-lg" style={{ boxShadow: '0 0 12px rgba(139,92,246,0.8)' }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="orbit-2 w-2 h-2 bg-cyan-400 rounded-full" style={{ boxShadow: '0 0 10px rgba(34,211,238,0.8)' }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="orbit-3 w-2 h-2 bg-rose-400 rounded-full" style={{ boxShadow: '0 0 10px rgba(251,113,133,0.8)' }} />
            </div>

            {/* Profile image circle */}
            <div className="absolute inset-8 rounded-full overflow-hidden glow-violet">
              <div className="w-full h-full bg-gradient-to-br from-violet-900 via-navy-800 to-cyan-900 flex items-center justify-center relative">
                {/* Abstract avatar */}
                <div className="relative flex items-center justify-center w-full h-full">
                  <div className="absolute w-28 h-28 bg-gradient-to-br from-violet-500/30 to-cyan-400/20 rounded-full blur-2xl" />
                  <div className="absolute inset-8 rounded-full overflow-hidden glow-violet">
                          <img
                            src="/profile.jpg"
                            alt="Bunny"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge cards */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-8 top-8 glass rounded-2xl px-4 py-3 text-xs whitespace-nowrap"
          >
            <div className="text-slate-400">Experience</div>
            <div className="font-display font-700 text-white text-sm">MERN Stack Dev</div>
          </motion.div>

          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -right-8 bottom-12 glass rounded-2xl px-4 py-3 text-xs whitespace-nowrap"
          >
            <div className="text-slate-400">Focus</div>
            <div className="font-display font-700 text-white text-sm">Full Stack,Software Dev</div>
          </motion.div>

          <motion.div
            animate={{ y: [-3, 8, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-4 top-4 glass rounded-2xl px-3 py-2 text-xs"
          >
            <span className="gradient-text font-700 font-display">7+ Projects</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
