import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Code2, Layout, Server, Brain, Cloud, Wrench } from 'lucide-react';

const categories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: Code2,
    color: 'cyan',
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Layout,
    color: 'blue',
    skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    color: 'purple',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'Flask', 'REST APIs', 'Maven'],
  },
  {
    id: 'core',
    label: 'Core Concepts',
    icon: Brain,
    color: 'pink',
    skills: ['Data Structures & Algorithms', 'OOPs', 'DBMS', 'Computer Networks', 'System Design', 'SDLC', 'Agile'],
  },
  {
    id: 'cloud',
    label: 'Cloud & Security',
    icon: Cloud,
    color: 'green',
    skills: ['AWS', 'Cloud Computing', 'Cybersecurity Fundamentals', 'Network Security', 'TryHackMe', 'CyberChef'],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: Wrench,
    color: 'orange',
    skills: ['Git', 'GitHub', 'Postman', 'Selenium', 'Jira', 'API Testing'],
  },
];

const colorMap = {
  cyan: { bg: 'from-cyan-500/10 to-blue-500/10', border: 'border-cyan-500/25', icon: 'text-cyan-400', badge: 'bg-cyan-400/8 text-cyan-300 border-cyan-400/20 hover:border-cyan-400/60 hover:bg-cyan-400/15', tab: 'border-cyan-400 text-cyan-400' },
  blue: { bg: 'from-blue-500/10 to-indigo-500/10', border: 'border-blue-500/25', icon: 'text-blue-400', badge: 'bg-blue-400/8 text-blue-300 border-blue-400/20 hover:border-blue-400/60 hover:bg-blue-400/15', tab: 'border-blue-400 text-blue-400' },
  purple: { bg: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/25', icon: 'text-purple-400', badge: 'bg-purple-400/8 text-purple-300 border-purple-400/20 hover:border-purple-400/60 hover:bg-purple-400/15', tab: 'border-purple-400 text-purple-400' },
  pink: { bg: 'from-pink-500/10 to-rose-500/10', border: 'border-pink-500/25', icon: 'text-pink-400', badge: 'bg-pink-400/8 text-pink-300 border-pink-400/20 hover:border-pink-400/60 hover:bg-pink-400/15', tab: 'border-pink-400 text-pink-400' },
  green: { bg: 'from-green-500/10 to-emerald-500/10', border: 'border-green-500/25', icon: 'text-green-400', badge: 'bg-green-400/8 text-green-300 border-green-400/20 hover:border-green-400/60 hover:bg-green-400/15', tab: 'border-green-400 text-green-400' },
  orange: { bg: 'from-orange-500/10 to-amber-500/10', border: 'border-orange-500/25', icon: 'text-orange-400', badge: 'bg-orange-400/8 text-orange-300 border-orange-400/20 hover:border-orange-400/60 hover:bg-orange-400/15', tab: 'border-orange-400 text-orange-400' },
};

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [active, setActive] = useState('languages');

  const current = categories.find(c => c.id === active);
  const c = colorMap[current.color];

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(0,245,255,0.07) 0%, transparent 55%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">// tech_stack[]</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const cc = colorMap[cat.color];
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl glass border text-sm font-mono transition-all ${
                  isActive
                    ? `border-current ${cc.tab} bg-white/5`
                    : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-300'
                }`}
              >
                <cat.icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className={`glass rounded-2xl p-8 border ${c.border} bg-gradient-to-br ${c.bg}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${c.bg.replace('from-', 'bg-').split(' ')[0]}`}>
                  <current.icon size={22} className={c.icon} />
                </div>
                <h3 className="font-display font-bold text-xl text-white">{current.label}</h3>
                <span className="ml-auto font-mono text-xs text-slate-500">{current.skills.length} skills</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {current.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className={`skill-badge border ${c.badge}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All skills mini overview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {categories.map((cat, i) => {
            const cc = colorMap[cat.color];
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActive(cat.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className={`glass rounded-xl p-4 border text-center cursor-pointer transition-all ${
                  active === cat.id ? `${cc.border} bg-gradient-to-br ${cc.bg}` : 'border-white/8 hover:border-white/20'
                }`}
              >
                <cat.icon size={20} className={`mx-auto ${cc.icon}`} />
                <div className="mt-2 text-xs font-mono text-slate-400">{cat.label}</div>
                <div className={`mt-1 text-lg font-display font-bold ${cc.icon}`}>{cat.skills.length}</div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
