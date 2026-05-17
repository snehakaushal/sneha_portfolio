/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f5ff',
          purple: '#bf5fff',
          cyan: '#00ffcc',
          pink: '#ff006e',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
        body: ['Syne', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'gradient-x': 'gradientX 4s ease infinite',
        'type': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px #00f5ff, 0 0 40px #00f5ff' },
          to: { boxShadow: '0 0 30px #bf5fff, 0 0 60px #bf5fff' },
        },
        pulseNeon: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
};
