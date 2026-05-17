import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  // Custom cursor
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
      if (ringRef.current) {
        setTimeout(() => {
          ringRef.current.style.left = e.clientX + 'px';
          ringRef.current.style.top = e.clientY + 'px';
        }, 80);
      }
    };
    document.addEventListener('mousemove', handleMouse);
    return () => document.removeEventListener('mousemove', handleMouse);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const prog = (window.scrollY / total) * 100;
      setScrollProgress(prog);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle('light', !darkMode);
  }, [darkMode]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Custom cursor */}
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />

      {/* Scroll progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Loading screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className={darkMode ? '' : 'light'} style={{ background: darkMode ? 'var(--bg-dark)' : '#f0f4ff', minHeight: '100vh', transition: 'background 0.3s ease' }}>
          <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(d => !d)} />

          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Achievements />
            <Certifications />
            <Contact />
          </main>

          <Footer />

          {/* Back to top */}
          <AnimatePresence>
            {showTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={scrollToTop}
                className="back-to-top fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center"
              >
                <ArrowUp size={20} className="text-cyan-400" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
