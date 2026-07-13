import { motion } from 'framer-motion'

const SkillBar = ({ skill, delay, isRTL }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="mb-4"
    >
      <div className={`flex justify-between mb-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <span className="text-sm text-secondary">{skill.name}</span>
        <span className={`text-sm font-medium ${skill.color || 'text-accent'}`}>{skill.level}%</span>
      </div>
      <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default SkillBar