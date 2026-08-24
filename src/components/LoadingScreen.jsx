// src/components/LoadingScreen.jsx
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

const LoadingScreen = () => {
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

      </div>
    </motion.div>
  )
}

export default LoadingScreen