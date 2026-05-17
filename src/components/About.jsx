import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Cpu, Shield, Cloud, Code, Database, Zap } from 'lucide-react';

const passions = [
  { icon: Code, label: 'Software Development', color: 'text-cyan-400', bg: 'from-cyan-500/10 to-blue-500/10', border: 'border-cyan-500/20' },
  { icon: Cpu, label: 'Artificial Intelligence', color: 'text-purple-400', bg: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/20' },
  { icon: Shield, label: 'Cybersecurity', color: 'text-green-400', bg: 'from-green-500/10 to-emerald-500/10', border: 'border-green-500/20' },
  { icon: Cloud, label: 'Cloud Computing', color: 'text-blue-400', bg: 'from-blue-500/10 to-indigo-500/10', border: 'border-blue-500/20' },
  { icon: Database, label: 'System Design', color: 'text-orange-400', bg: 'from-orange-500/10 to-amber-500/10', border: 'border-orange-500/20' },
  { icon: Zap, label: 'Problem Solving', color: 'text-yellow-400', bg: 'from-yellow-500/10 to-orange-500/10', border: 'border-yellow-500/20' },
];

const stats = [
  { label: 'CGPA', value: '8.32' },
  { label: 'Projects', value: '10+' },
  { label: 'Problems Solved', value: '300+' },
  { label: 'Certifications', value: '5+' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background blur orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">// get_to_know_me</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: About text + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl border border-cyan-400/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
              <div className="font-mono text-xs text-cyan-400 mb-4">// about.md</div>
              <p className="text-slate-300 text-base leading-relaxed">
                I am a <span className="text-cyan-400 font-semibold">Computer Science Engineering</span> student passionate about{' '}
                <span className="text-purple-400 font-semibold">software development, AI, cybersecurity, cloud computing</span>, and problem solving.
              </p>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                I enjoy building <span className="text-cyan-400 font-semibold">scalable web applications</span>,{' '}
                <span className="text-purple-400 font-semibold">AI-powered systems</span>, and real-time dashboards using modern technologies.
              </p>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                I am highly motivated to learn, explore new technologies, and contribute to <span className="text-green-400 font-semibold">impactful projects</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass rounded-xl p-5 border border-cyan-400/10 text-center hover:border-cyan-400/30 transition-all group"
                >
                  <div className="font-display font-black text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:neon-text">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-mono text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Passion cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="font-mono text-xs text-slate-500 mb-4">// passions[]</div>
            <div className="grid grid-cols-2 gap-4">
              {passions.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className={`glass rounded-xl p-5 border ${item.border} bg-gradient-to-br ${item.bg} cursor-default transition-all group`}
                >
                  <item.icon size={28} className={`${item.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <div className="text-sm font-semibold text-slate-300 leading-snug">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
