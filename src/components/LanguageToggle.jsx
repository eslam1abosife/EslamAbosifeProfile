import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-xl border transition-all text-sm font-medium"
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