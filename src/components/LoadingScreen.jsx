import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => { setDone(true); setTimeout(onDone, 500); }, 300);
          return 100;
        }
        return p + Math.random() * 12 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#030712' }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          {/* Glowing orbs */}
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Logo */}
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-24 h-24 rounded-full"
                style={{ background: 'conic-gradient(from 0deg, #00f5ff, #bf5fff, #00ffcc, #00f5ff)', padding: '3px' }}
              >
                <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
                  <span className="font-display font-black text-2xl" style={{ color: '#00f5ff', textShadow: '0 0 20px #00f5ff' }}>SK</span>
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <h1 className="font-display font-black text-2xl" style={{ color: '#00f5ff', textShadow: '0 0 20px #00f5ff' }}>
                Sneha Kaushal
              </h1>
              <p className="font-mono text-xs text-slate-500 mt-1 tracking-widest">PORTFOLIO_LOADING...</p>
            </div>

            {/* Progress bar */}
            <div className="w-64">
              <div className="h-px bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="loading-bar h-full rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-mono text-xs text-slate-600">init()</span>
                <span className="font-mono text-xs text-cyan-400">{Math.min(Math.round(progress), 100)}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
