module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#B8A9FF',
          secondary: '#A8D8FF',
          accent: '#FFB8A9',
          bg: '#FAFAFA',
          text: '#333333',
        },
        dark: {
          primary: '#6B5B95',
          secondary: '#2C3E50',
          accent: '#FF6B6B',
          bg: '#1A1A2E',
          text: '#E0E0E0',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(184, 169, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(184, 169, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
