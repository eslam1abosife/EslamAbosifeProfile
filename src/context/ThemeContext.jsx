import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // ✅ التحقق من localStorage أولاً
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    // ✅ ثم التحقق من تفضيلات النظام
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // ✅ حفظ التفضيل في localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // ✅ تطبيق الـ class على الـ html (مهم جداً لـ Vercel)
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [isDark]);

  // ✅ التأكد من تطبيق الثيم عند تحميل الصفحة (للـ Vercel)
  useEffect(() => {
    // تطبيق الثيم المخزن عند التحميل
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};