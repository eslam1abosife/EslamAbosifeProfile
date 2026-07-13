// src/components/SkeletonCard.jsx
import { motion } from 'framer-motion'

const SkeletonCard = ({ isRTL }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="card-custom rounded-2xl overflow-hidden"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border-color)'
      }}
    >
      {/* Image Skeleton */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-r from-accent/20 to-purple-500/20">
        <motion.div
          animate={{
            background: [
              'linear-gradient(90deg, var(--bg-secondary) 25%, var(--bg-card) 50%, var(--bg-secondary) 75%)',
              'linear-gradient(90deg, var(--bg-secondary) 25%, var(--bg-card) 50%, var(--bg-secondary) 75%)',
            ],
            backgroundSize: ['200% 100%', '200% 100%'],
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full"
        />
      </div>

      {/* Content Skeleton */}
      <div className="p-5 space-y-3">
        {/* Title Skeleton */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="h-6 rounded-lg w-3/4"
          style={{ background: 'var(--bg-secondary)' }}
        />

        {/* Description Skeleton */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
          className="space-y-2"
        >
          <div className="h-4 rounded-lg w-full" style={{ background: 'var(--bg-secondary)' }} />
          <div className="h-4 rounded-lg w-5/6" style={{ background: 'var(--bg-secondary)' }} />
        </motion.div>

        {/* Tech Tags Skeleton */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15
              }}
              className="h-6 rounded-full w-16"
              style={{ background: 'var(--bg-secondary)' }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default SkeletonCard