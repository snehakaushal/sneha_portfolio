import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-cyan-400/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <Code2 size={16} className="text-black" />
            </div>
            <span className="font-display font-black text-sm tracking-widest neon-text text-cyan-400">SK</span>
          </motion.div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/snehakaushal', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sneha-kaushal-4a1720290/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:kaushalsneha36@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-10 h-10 glass rounded-full flex items-center justify-center border border-cyan-400/20 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-slate-500 text-sm font-mono flex items-center gap-2 flex-wrap justify-center"
          >
            Designed &amp; Developed with{' '}
            <Heart size={13} className="text-pink-400 inline fill-current animate-pulse" />{' '}
            by{' '}
            <span className="text-cyan-400 font-semibold">Sneha Kaushal</span>
            <span className="text-slate-600">·</span>
            <span>{new Date().getFullYear()}</span>
          </motion.p>

          <p className="text-slate-600 text-xs font-mono">
            Built with React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
