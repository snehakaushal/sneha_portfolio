import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, Github, Linkedin, Send, MapPin, CheckCircle } from 'lucide-react';

const contacts = [
  { icon: Phone, label: 'Phone', value: '+91-7717623925', href: 'tel:+917717623925', color: 'green' },
  { icon: Mail, label: 'Email', value: 'kaushalsneha36@gmail.com', href: 'mailto:kaushalsneha36@gmail.com', color: 'cyan' },
  { icon: Github, label: 'GitHub', value: 'github.com/snehakaushal', href: 'https://github.com/snehakaushal', color: 'purple' },
  { icon: Linkedin, label: 'LinkedIn', value: 'sneha-kaushal', href: 'https://www.linkedin.com/in/sneha-kaushal-4a1720290/', color: 'blue' },
];

const colorMap = {
  green: { border: 'border-green-500/20', icon: 'text-green-400', iconBg: 'bg-green-400/10', hover: 'hover:border-green-400/50' },
  cyan: { border: 'border-cyan-500/20', icon: 'text-cyan-400', iconBg: 'bg-cyan-400/10', hover: 'hover:border-cyan-400/50' },
  purple: { border: 'border-purple-500/20', icon: 'text-purple-400', iconBg: 'bg-purple-400/10', hover: 'hover:border-purple-400/50' },
  blue: { border: 'border-blue-500/20', icon: 'text-blue-400', iconBg: 'bg-blue-400/10', hover: 'hover:border-blue-400/50' },
};

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate send
    setTimeout(() => setSent(true), 600);
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(ellipse at 50% 80%, rgba(0,245,255,0.06) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">// get_in_touch</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-black text-white">
            Contact <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400" />
          <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="font-mono text-xs text-slate-500 mb-6">// contact_info</div>
            {contacts.map((item, i) => {
              const c = colorMap[item.color];
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className={`flex items-center gap-4 glass rounded-xl p-4 border ${c.border} ${c.hover} transition-all group`}
                >
                  <div className={`p-3 rounded-xl ${c.iconBg} group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} className={c.icon} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500">{item.label}</div>
                    <div className="text-sm text-slate-200 font-medium group-hover:text-white transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 mt-6 text-slate-500 text-xs font-mono"
            >
              <MapPin size={12} className="text-cyan-400" />
              Punjab, India
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center glass rounded-2xl border border-green-500/20 p-12 text-center"
              >
                <CheckCircle size={56} className="text-green-400 mb-4" />
                <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-xs font-mono text-cyan-400 hover:text-cyan-300">
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl border border-cyan-400/10 p-8 space-y-4">
                <div className="font-mono text-xs text-cyan-400 mb-2">// send_message()</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Sneha Kaushal"
                      className="input-glow w-full px-4 py-3 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="input-glow w-full px-4 py-3 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-400 mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="Project Collaboration"
                    className="input-glow w-full px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-400 mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="input-glow w-full px-4 py-3 text-sm resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="btn-glow w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm font-display tracking-wide shadow-lg shadow-cyan-500/20"
                >
                  <Send size={16} /> Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
