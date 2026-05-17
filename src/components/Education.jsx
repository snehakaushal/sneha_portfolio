import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const education = [
  {
    institution: 'Chitkara University',
    location: 'Punjab',
    degree: 'B.Tech in Computer Science Engineering',
    period: '2023 – 2027',
    detail: 'CGPA: 8.32',
    icon: GraduationCap,
    color: 'cyan',
    current: true,
  },
  {
    institution: 'DAV Public School',
    location: 'Mehtpur',
    degree: 'Class 12th',
    period: '2021 – 2023',
    detail: 'Science Stream',
    icon: Award,
    color: 'purple',
    current: false,
  },
  {
    institution: "Bhavan's SL Public School",
    location: 'Amritsar',
    degree: 'Class 10th',
    period: 'Until 2021',
    detail: '',
    icon: Award,
    color: 'green',
    current: false,
  },
];

const colorMap = {
  cyan: { border: 'border-cyan-400/40', dot: 'bg-cyan-400', shadow: 'shadow-cyan-400/30', text: 'text-cyan-400', badge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20' },
  purple: { border: 'border-purple-400/40', dot: 'bg-purple-400', shadow: 'shadow-purple-400/30', text: 'text-purple-400', badge: 'bg-purple-400/10 text-purple-400 border-purple-400/20' },
  green: { border: 'border-green-400/40', dot: 'bg-green-400', shadow: 'shadow-green-400/30', text: 'text-green-400', badge: 'bg-green-400/10 text-green-400 border-green-400/20' },
};

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(191,95,255,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">// academic_journey</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
            Edu<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">cation</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden sm:block" />

          <div className="space-y-8">
            {education.map((edu, i) => {
              const c = colorMap[edu.color];
              return (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex gap-6 relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-shrink-0 w-16 flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: i * 0.15 + 0.3, type: 'spring' }}
                      className={`w-5 h-5 rounded-full ${c.dot} z-10 shadow-lg ${c.shadow} border-2 border-black flex-shrink-0 mt-6`}
                    />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 glass rounded-2xl p-6 border ${c.border} hover:shadow-lg transition-all group relative overflow-hidden`}>
                    <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 ${c.text}`} />

                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${edu.color === 'cyan' ? 'from-cyan-500/10 to-blue-500/10' : edu.color === 'purple' ? 'from-purple-500/10 to-pink-500/10' : 'from-green-500/10 to-emerald-500/10'}`}>
                          <edu.icon size={24} className={c.text} />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-100 transition-colors">
                            {edu.institution}
                          </h3>
                          <div className="flex items-center gap-1 mt-1 text-slate-400 text-sm">
                            <MapPin size={12} />
                            <span className="font-mono">{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-1 text-slate-400 text-xs font-mono justify-end">
                          <Calendar size={11} />
                          <span>{edu.period}</span>
                        </div>
                        {edu.current && (
                          <span className="mt-2 inline-block px-2 py-0.5 rounded-full text-xs font-mono bg-green-500/10 text-green-400 border border-green-400/20">
                            ● Current
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-3">
                      <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${c.badge}`}>
                        {edu.degree}
                      </span>
                      {edu.detail && (
                        <span className="px-3 py-1 rounded-lg text-sm font-mono border border-white/10 text-slate-300 bg-white/3">
                          {edu.detail}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
