// src/components/SkeletonChallengeCard.jsx
import { motion } from 'framer-motion'

const SkeletonChallengeCard = ({ isRTL }) => {
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
      <div className="p-4">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            {/* Icon Skeleton */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-8 h-8 rounded-lg"
              style={{ background: 'var(--bg-secondary)' }}
            />
            
            {/* Title Skeleton */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.1
              }}
              className="h-6 rounded-lg w-2/3"
              style={{ background: 'var(--bg-secondary)' }}
            />
          </div>
          
          {/* Chevron Skeleton */}
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
            className="w-5 h-5 rounded"
            style={{ background: 'var(--bg-secondary)' }}
          />
        </div>

        {/* Description Skeleton */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
          className="mt-2 h-4 rounded-lg w-full"
          style={{ background: 'var(--bg-secondary)' }}
        />

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2 mt-3">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4 + i * 0.1
              }}
              className="h-5 rounded-full w-20"
              style={{ background: 'var(--bg-secondary)' }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default SkeletonChallengeCard