/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'rgb(var(--background-primary))',
        'secondary': 'rgb(var(--background-secondary))',
        'tertiary': 'rgb(var(--background-tertiary))',
        'accent-primary': 'rgb(var(--background-accent-primary))',
        'accent-secondary': 'rgb(var(--background-accent-secondary))',
        'invert-primary': 'rgb(var(--background-invert-primary))',
        'invert-secondary': 'rgb(var(--background-invert-secondary))',
        
        'primary-hover': 'rgb(var(--background-primary-hover))',
        'secondary-hover': 'rgb(var(--background-secondary-hover))',
        'tertiary-hover': 'rgb(var(--background-tertiary-hover))',
        'accent-primary-hover': 'rgb(var(--background-accent-primary-hover))',
        'accent-secondary-hover': 'rgb(var(--background-accent-secondary-hover))',
        'invert-primary-hover': 'rgb(var(--background-invert-primary-hover))',
        'invert-secondary-hover': 'rgb(var(--background-invert-secondary-hover))',
      },
      borderColor: {
        'primary': 'rgb(var(--border-primary))',
        'secondary': 'rgb(var(--border-secondary))',
        'tertiary': 'rgb(var(--border-tertiary))',
        'accent-primary': 'rgb(var(--border-accent-primary))',
        'accent-secondary': 'rgb(var(--border-accent-secondary))',
        'invert-primary': 'rgb(var(--border-invert-primary))',
        'invert-secondary': 'rgb(var(--border-invert-secondary))',
        
        'primary-hover': 'rgb(var(--border-primary-hover))',
        'secondary-hover': 'rgb(var(--border-secondary-hover))',
        'tertiary-hover': 'rgb(var(--border-tertiary-hover))',
        'accent-primary-hover': 'rgb(var(--border-accent-primary-hover))',
        'accent-secondary-hover': 'rgb(var(--border-accent-secondary-hover))',
        'invert-primary-hover': 'rgb(var(--border-invert-primary-hover))',
        'invert-secondary-hover': 'rgb(var(--border-invert-secondary-hover))',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
        'geist': ['Geist', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
      },
      fontSize: {
        'sm': '15px',
        '2xs': '.625rem', 
        '3xs': '.5rem'
      },
      height: {'120': '30rem'},
      outlineColor: {
        'primary': 'rgb(var(--border-primary))',
        'secondary': 'rgb(var(--border-secondary))',
        'tertiary': 'rgb(var(--border-tertiary))',
        'accent-primary': 'rgb(var(--border-accent-primary))',
        'accent-secondary': 'rgb(var(--border-accent-secondary))',
        'invert-primary': 'rgb(var(--border-invert-primary))',
        'invert-secondary': 'rgb(var(--border-invert-secondary))',
        
        'primary-hover': 'rgb(var(--border-primary-hover))',
        'secondary-hover': 'rgb(var(--border-secondary-hover))',
        'tertiary-hover': 'rgb(var(--border-tertiary-hover))',
        'accent-primary-hover': 'rgb(var(--border-accent-primary-hover))',
        'accent-secondary-hover': 'rgb(var(--border-accent-secondary-hover))',
        'invert-primary-hover': 'rgb(var(--border-invert-primary-hover))',
        'invert-secondary-hover': 'rgb(var(--border-invert-secondary-hover))',
      },
      screens: {
        'xs': '375px',
      },
      textColor: {
        'primary': 'rgb(var(--text-primary))',
        'secondary': 'rgb(var(--text-secondary))',
        'tertiary': 'rgb(var(--text-tertiary))',
        'accent-primary': 'rgb(var(--text-accent-primary))',
        'accent-secondary': 'rgb(var(--text-accent-secondary))',
        'invert-primary': 'rgb(var(--text-invert-primary))',
        'invert-secondary': 'rgb(var(--text-invert-secondary))',
        
        'primary-hover': 'rgb(var(--text-primary-hover))',
        'secondary-hover': 'rgb(var(--text-secondary-hover))',
        'tertiary-hover': 'rgb(var(--text-tertiary-hover))',
        'accent-primary-hover': 'rgb(var(--text-accent-primary-hover))',
        'accent-secondary-hover': 'rgb(var(--text-accent-secondary-hover))',
        'invert-primary-hover': 'rgb(var(--text-invert-primary-hover))',
        'invert-secondary-hover': 'rgb(var(--text-invert-secondary-hover))',


        'blurple': '#5865F2',
        'moby-blue': '#1D63ED',
        'git-red': '#F03C2E',
      },
      width: {
        '120': '30rem',
        '150': '37.5rem',
        '180': '45rem',
        '210': '52.5rem',
        '240': '60rem',
        '270': '67.5rem',
        '300': '75rem',
        '330': '82.5rem',
        '360': '90rem'
      },
    },
  },
};
