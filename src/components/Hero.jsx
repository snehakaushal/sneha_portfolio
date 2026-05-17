import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

const roles = [
  'Software Developer',
  'AI Enthusiast',
  'Cybersecurity Learner',
  'Full Stack Developer',
];

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '0,245,255' : '191,95,255';
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,245,255,${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 w-full h-full" />;
}

function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, 70);
      if (charIdx === current.length) {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx(c => c - 1);
      }, 35);
      if (charIdx === 0) {
        setDeleting(false);
        setRoleIndex(r => (r + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIndex]);

  return (
    <div className="h-10 flex items-center">
      <span className="text-xl sm:text-2xl font-mono text-cyan-400 typing-cursor">{displayed}</span>
    </div>
  );
}

export default function Hero() {
  const scrollToProjects = () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient hex-pattern">
      <ParticleCanvas />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-tag">Hello, World! 👋</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="text-white">Sneha</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ backgroundSize: '200%', animation: 'gradientX 3s ease infinite' }}>
                Kaushal
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4"
            >
              <TypingAnimation />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-slate-400 max-w-lg text-base leading-relaxed"
            >
              CSE Student @ Chitkara University · Building scalable web apps, AI-powered systems &amp; real-time platforms with modern tech.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="btn-glow flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm font-display tracking-wide shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50"
              >
                <Eye size={16} /> View Projects
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="btn-glow flex items-center gap-2 px-6 py-3 rounded-xl glass border border-cyan-400/30 text-cyan-400 font-bold text-sm font-display tracking-wide hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                <Download size={16} /> Download Resume
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-glow flex items-center gap-2 px-6 py-3 rounded-xl glass border border-purple-400/30 text-purple-400 font-bold text-sm font-display tracking-wide hover:border-purple-400/60 transition-all"
              >
                <Mail size={16} /> Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4"
            >
              <a href="https://github.com/snehakaushal" target="_blank" rel="noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center border border-cyan-400/20 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/20">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/sneha-kaushal-4a1720290/" target="_blank" rel="noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center border border-cyan-400/20 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/20">
                <Linkedin size={18} />
              </a>
              <a href="mailto:kaushalsneha36@gmail.com"
                className="w-10 h-10 glass rounded-full flex items-center justify-center border border-cyan-400/20 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/20">
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            className="relative flex-shrink-0"
          >
            {/* Outer spinning ring */}
            <div className="absolute inset-[-12px] profile-ring opacity-70" />
            {/* Middle ring */}
            <div className="absolute inset-[-4px] rounded-full border border-cyan-400/30 animate-ping" style={{ animationDuration: '3s' }} />

            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden glass border-2 border-cyan-400/30"
              style={{ boxShadow: '0 0 40px rgba(0,245,255,0.2), 0 0 80px rgba(191,95,255,0.1)' }}>
              {/* Placeholder avatar */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-cyan-900/40 via-purple-900/40 to-blue-900/40">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-2">
                  <span className="font-display font-black text-4xl text-black">SK</span>
                </div>
                <span className="font-mono text-xs text-cyan-400/60 mt-2">[ profile.img ]</span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass border border-cyan-400/30 rounded-xl px-3 py-2 text-xs font-mono text-cyan-400"
            >
              &lt;code /&gt;
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 glass border border-purple-400/30 rounded-xl px-3 py-2 text-xs font-mono text-purple-400"
            >
              AI + Security 🔐
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} className="text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
