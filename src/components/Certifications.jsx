import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { BadgeCheck, ExternalLink } from 'lucide-react';

const certs = [
  { title: 'Java (Basic)', issuer: 'HackerRank', color: 'green', year: '2024' },
  { title: 'Introductory C Programming', issuer: 'Coursera', color: 'blue', year: '2023' },
  { title: 'IBM Cybersecurity Essentials', issuer: 'Coursera', color: 'purple', year: '2024' },
  { title: 'Introduction to Cloud Infrastructure', issuer: 'Microsoft', color: 'cyan', year: '2024' },
  { title: 'AZ-900T00-A: Azure Fundamentals', issuer: 'Microsoft', color: 'blue', year: '2024' },
];

const colorMap = {
  green: { border: 'border-green-500/20', icon: 'text-green-400', bg: 'from-green-500/8 to-transparent', issuer: 'text-green-400/70', badge: 'bg-green-500/10 text-green-300' },
  blue: { border: 'border-blue-500/20', icon: 'text-blue-400', bg: 'from-blue-500/8 to-transparent', issuer: 'text-blue-400/70', badge: 'bg-blue-500/10 text-blue-300' },
  purple: { border: 'border-purple-500/20', icon: 'text-purple-400', bg: 'from-purple-500/8 to-transparent', issuer: 'text-purple-400/70', badge: 'bg-purple-500/10 text-purple-300' },
  cyan: { border: 'border-cyan-500/20', icon: 'text-cyan-400', bg: 'from-cyan-500/8 to-transparent', issuer: 'text-cyan-400/70', badge: 'bg-cyan-500/10 text-cyan-300' },
};

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="certifications" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(ellipse at 30% 60%, rgba(0,245,255,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">// credentials</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
            Certifi<span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">cations</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => {
            const c = colorMap[cert.color];
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`glass rounded-xl p-5 border ${c.border} bg-gradient-to-br ${c.bg} hover:border-current transition-all group cursor-default`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <BadgeCheck size={22} className={`${c.icon} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm leading-snug">{cert.title}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs font-mono ${c.issuer}`}>{cert.issuer}</span>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded ${c.badge}`}>{cert.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
