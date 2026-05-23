import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  ExternalLink,
  Github,
  Brain,
  Radio,
  ShoppingCart
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Resume Analyzer',
    subtitle: 'ATS Resume Intelligence Platform',
    icon: Brain,
    category: 'AI / ML',
    tech: [
      'Python',
      'Flask',
      'Scikit-learn',
      'PyPDF2',
      'TF-IDF',
      'Machine Learning'
    ],
    color: 'cyan',
    description:
      'AI-powered ATS Resume Analyzer using Machine Learning and NLP. Parses PDF resumes, calculates ATS scores using TF-IDF and Cosine Similarity, detects missing skills, performs grammar checking, and generates AI-powered resume improvement suggestions and summaries.',
    features: [
      'PDF Resume Parsing',
      'ATS Score Calculation',
      'TF-IDF & Cosine Similarity',
      'Grammar Checking',
      'AI Resume Suggestions'
    ],
    live: 'https://resume-analyzer-3-0vya.onrender.com/',
    github: 'https://github.com/snehakaushal?tab=repositories',
  },

  {
    id: 2,
    title: 'PhishGuard',
    subtitle: 'AI Threat Analyzer',
    icon: Brain,
    category: 'Cybersecurity / AI',
    tech: [
      'Python',
      'Flask',
      'Machine Learning',
      'NLP',
      'TF-IDF'
    ],
    color: 'cyan',
    description:
      'AI-powered phishing email detection system that analyzes email subject and body content using NLP and Machine Learning. Detects phishing, spam, and safe emails while generating intelligent threat analysis reports and security recommendations.',
    features: [
      'Email Threat Detection',
      'NLP Processing',
      'TF-IDF Vectorization',
      'ML Classification',
      'Risk Report Generation'
    ],
    live: 'https://phishing-email-detector-six.vercel.app/',
    github: 'https://github.com/snehakaushal?tab=repositories',
  },

  {
    id: 3,
    title: 'E-Commerce Platform',
    subtitle: 'Full Stack Shopping Website',
    icon: ShoppingCart,
    category: 'Full Stack Development',
    tech: [
      'Java',
      'Spring Boot',
      'JavaScript',
      'HTML',
      'CSS',
      'Maven'
    ],
    color: 'green',
    description:
      'Full-stack E-Commerce platform with modern shopping features including product listings, cart management, authentication, and responsive UI. Built using Spring Boot backend with JavaScript frontend integration for seamless online shopping experience.',
    features: [
      'Product Management',
      'Shopping Cart',
      'Responsive UI',
      'User Authentication',
      'Order Management'
    ],
    github: 'https://github.com/snehakaushal/Ecommerce',
  },

  {
    id: 4,
    title: 'AEGIS v3',
    subtitle: 'Global Multi-Domain Threat Detection Platform',
    icon: Radio,
    category: 'Cybersecurity',
    tech: [
      'React 18',
      'Node.js',
      'Express',
      'Socket.IO',
      'Leaflet',
      'OpenSky API',
      'AISHub API'
    ],
    color: 'purple',
    description:
      'Advanced real-time global threat intelligence and situational awareness platform for tracking worldwide aircraft and naval vessels. Integrates ADS-B and AIS data streams, AI-powered threat analysis, drone swarm detection, collaborative operations, and tactical monitoring using WebSockets and geospatial mapping.',
    features: [
      'Worldwide Flight Tracking',
      'Naval Vessel Monitoring',
      'Military Aircraft Detection',
      'Drone Swarm Detection',
      'AI SITREP Reports',
      'Real-time WebSocket Updates',
      'Natural Language Queries',
      'Incident Playbooks',
      'Collaborative Operations',
      'Audit Log & Analytics'
    ],
    github: 'https://github.com/snehakaushal/aegis-v3/tree/master/aegis-v3',
  },
];

const colorMap = {
  cyan: {
    gradient: 'from-cyan-500/20 via-blue-600/10 to-transparent',
    border: 'border-cyan-500/20',
    hoverBorder: 'hover:border-cyan-400/50',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    icon: 'text-cyan-400',
    iconBg: 'bg-cyan-400/10',
    glow: 'hover:shadow-cyan-500/10',
    btn: 'bg-cyan-500 hover:bg-cyan-400 text-black',
    line: 'from-cyan-400',
    tag: 'bg-cyan-500/10 text-cyan-300',
  },

  purple: {
    gradient: 'from-purple-500/20 via-pink-600/10 to-transparent',
    border: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-400/50',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    icon: 'text-purple-400',
    iconBg: 'bg-purple-400/10',
    glow: 'hover:shadow-purple-500/10',
    btn: 'bg-purple-500 hover:bg-purple-400 text-white',
    line: 'from-purple-400',
    tag: 'bg-purple-500/10 text-purple-300',
  },

  green: {
    gradient: 'from-green-500/20 via-emerald-600/10 to-transparent',
    border: 'border-green-500/20',
    hoverBorder: 'hover:border-green-400/50',
    badge: 'bg-green-500/10 text-green-400 border-green-500/20',
    icon: 'text-green-400',
    iconBg: 'bg-green-400/10',
    glow: 'hover:shadow-green-500/10',
    btn: 'bg-green-500 hover:bg-green-400 text-black',
    line: 'from-green-400',
    tag: 'bg-green-500/10 text-green-300',
  },
};

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" ref={ref} className="py-24 relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 20%, rgba(191,95,255,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">// my_projects[]</span>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((proj, i) => {
            const c = colorMap[proj.color];

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                onHoverStart={() => setHovered(proj.id)}
                onHoverEnd={() => setHovered(null)}
                className={`glass rounded-2xl overflow-hidden ${c.border} ${c.hoverBorder} hover:shadow-2xl ${c.glow} transition-all duration-300 flex flex-col`}
              >
                <div className={`relative p-6 bg-gradient-to-br ${c.gradient}`}>
                  <div
                    className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${c.line} to-transparent`}
                  />

                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl ${c.iconBg}`}>
                      <proj.icon size={26} className={c.icon} />
                    </div>

                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-mono border ${c.badge}`}
                    >
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display font-bold text-xl text-white leading-tight">
                    {proj.title}
                  </h3>

                  {proj.subtitle && (
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {proj.subtitle}
                    </p>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {proj.features.map((f) => (
                      <span
                        key={f}
                        className={`px-2 py-0.5 rounded text-xs font-mono ${c.tag} border border-white/5`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="text-xs font-mono text-slate-500 mb-2">
                      Tech Stack
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/8"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    {proj.live && (
                      <motion.a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all ${c.btn}`}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </motion.a>
                    )}

                    <motion.a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/15 text-slate-300 hover:text-white hover:border-white/30 font-bold text-sm transition-all"
                    >
                      <Github size={14} />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/snehakaushal?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-cyan-400/20 text-cyan-400 font-mono text-sm hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}