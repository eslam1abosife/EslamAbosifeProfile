// src/components/LoadingScreen.jsx
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

const LoadingScreen = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'var(--bg-primary)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-6xl mb-6 text-accent"
        >
          <FaCode />
        </motion.div>

        {/* Animated Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-primary mb-2"
        >
          {isRTL ? 'جاري التحميل...' : 'Loading...'}
        </motion.h2>

        {/* Animated Dots */}
        <div className="flex justify-center gap-3 mt-4">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: dot * 0.2,
                ease: "easeInOut"
              }}
              className="w-3 h-3 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-64 h-1 rounded-full mt-6 overflow-hidden"
          style={{ background: 'var(--bg-secondary)' }}
        >
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full"
            style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
          />
        </motion.div>

        {/* Loading Percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-muted mt-4"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ████
          </motion.span>
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen