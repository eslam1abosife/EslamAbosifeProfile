import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="inline-flex h-10 w-[78px] items-center justify-center whitespace-nowrap rounded-xl border text-sm font-medium transition-all"
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border-color)',
        color: 'var(--text-secondary)'
      }}
    >
      {language === 'ar' ? '🇬🇧 EN' : '🇪🇬 عربي'}
    </motion.button>
  )
}

export default LanguageToggle