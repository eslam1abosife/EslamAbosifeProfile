/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ مهم عشان الدارك مود يشتغل مع الكلاس
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#aa3bff",
        dark: "#16171d",
        light: "#f3f4f6",
        // ألوان إضافية لتسهيل الاستخدام
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        border: "var(--border-color)",
        card: "var(--bg-card)",
        // ألوان الخلفيات
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        bgCard: "var(--bg-card)",
        // ألوان الإضاءة
        glow: "var(--glow-color)",
        accentBg: "var(--accent-bg)",
        accentBorder: "var(--accent-border)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "200% center" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        shimmer: "shimmer 4s ease-in-out infinite",
        spinSlow: "spinSlow 8s linear linear infinite",
        pulse: "pulse 2s ease-in-out infinite",
        bounce: "bounce 1s ease-in-out infinite",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      // إضافة خيارات إضافية مفيدة
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 30px var(--glow-color)',
        'card': '0 4px 20px var(--shadow-color)',
        'card-hover': '0 8px 30px var(--shadow-color)',
        'accent': '0 8px 20px rgba(170, 59, 255, 0.4)',
        'accent-hover': '0 12px 30px rgba(170, 59, 255, 0.5)',
      },
      backdropBlur: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
};