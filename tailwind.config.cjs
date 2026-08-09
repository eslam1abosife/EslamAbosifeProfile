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
        // أضف ألوان إضافية لتسهيل الاستخدام
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        border: "var(--border-color)",
        card: "var(--bg-card)",
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
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        shimmer: "shimmer 4s ease-in-out infinite",
        spinSlow: "spinSlow 8s linear infinite",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};