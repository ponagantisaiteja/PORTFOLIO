import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Experience, Achievements } from './components/Experience';
// import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.style.setProperty('--bg-primary', darkMode ? '#050b18' : '#f8fafc');
    document.documentElement.style.setProperty('--bg-secondary', darkMode ? '#0a1628' : '#f1f5f9');
    document.documentElement.style.setProperty('--text-primary', darkMode ? '#f1f5f9' : '#0f172a');
    document.documentElement.style.setProperty('--text-muted', darkMode ? '#94a3b8' : '#475569');
    document.documentElement.style.setProperty('--glass-bg', darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)');
    document.documentElement.style.setProperty('--glass-border', darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)');
    document.body.style.backgroundColor = darkMode ? '#050b18' : '#f8fafc';
    document.body.style.color = darkMode ? '#f1f5f9' : '#0f172a';
  }, [darkMode]);

  return (
    <div className={`noise min-h-screen ${darkMode ? 'bg-[#050b18] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        {/* <GithubStats /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
