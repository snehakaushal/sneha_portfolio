import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Trophy, Code2, Star } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: '3rd Prize – CYBPRO-2025',
    detail: 'AI-based Cybersecurity project under patent filing process',
    badge: '🏆 Award Winner',
    color: 'yellow',
    year: '2025',
  },
  {
    icon: Code2,
    title: '300+ Problems Solved',
    detail: 'Solved 300+ coding problems on LeetCode covering arrays, trees, graphs, DP and more',
    badge: '⚡ LeetCode',
    color: 'orange',
    year: 'Ongoing',
  },
];

const colorMap = {
  yellow: { border: 'border-yellow-400/30', bg: 'from-yellow-500/10 to-orange-500/5', icon: 'text-yellow-400', badge: 'bg-yellow-400/10 text-yellow-300', glow: 'hover:shadow-yellow-500/10' },
  orange: { border: 'border-orange-400/30', bg: 'from-orange-500/10 to-red-500/5', icon: 'text-orange-400', badge: 'bg-orange-400/10 text-orange-300', glow: 'hover:shadow-orange-500/10' },
};

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="achievements" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(255,200,0,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">// milestones</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
            Achieve<span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">ments</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, type: 'spring' }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`achievement-card glass rounded-2xl p-8 border ${c.border} bg-gradient-to-br ${c.bg} hover:shadow-2xl ${c.glow} transition-all`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${c.bg.split(' ')[0]} border ${c.border}`}>
                    <item.icon size={32} className={c.icon} />
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono ${c.badge}`}>{item.badge}</span>
                    <div className="mt-2 text-xs font-mono text-slate-500">{item.year}</div>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>

                {/* Decorative stars */}
                <div className="mt-6 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className={`${c.icon} fill-current opacity-60`} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
