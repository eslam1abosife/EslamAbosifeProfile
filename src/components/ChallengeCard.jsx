import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCode, FaPlay, FaCopy, FaCheck, FaChevronUp, FaChevronDown } from 'react-icons/fa'

const ChallengeCard = ({ challenge, index, isRTL }) => {
  const [expanded, setExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleExpand = () => setExpanded(!expanded)

  const copyCode = (code) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className="card-custom rounded-2xl overflow-hidden hover:shadow-xl transition-all"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border-color)'
      }}
    >
      {/* Header */}
      <div 
        className="p-4 cursor-pointer hover:bg-accent/5 transition-colors flex items-center justify-between"
        onClick={toggleExpand}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{challenge.icon}</span>
            <h3 className="text-lg font-bold text-primary">{challenge.title}</h3>
          </div>
          <p className="text-sm text-muted mt-1">{challenge.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {challenge.tech.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-full text-[10px] border"
                style={{
                  background: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-muted)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="ml-4">
          {expanded ? <FaChevronUp className="text-muted" /> : <FaChevronDown className="text-muted" />}
        </div>
      </div>

      {/* Code & Output */}
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-4 pt-0 border-t" style={{ borderColor: 'var(--border-color)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Code */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-medium text-muted flex items-center gap-1">
                    <FaCode /> Code
                  </span>
                  <button
                    onClick={() => copyCode(challenge.code)}
                    className="p-1 rounded-lg hover:bg-accent/10 transition-colors text-muted hover:text-accent"
                  >
                    {copied ? (
                      <FaCheck className="text-green-400 text-xs" />
                    ) : (
                      <FaCopy className="text-xs" />
                    )}
                  </button>
                </div>
                <pre className="p-3 rounded-lg text-[11px] overflow-x-auto" style={{
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  fontFamily: 'monospace'
                }}>
                  <code>{challenge.code}</code>
                </pre>
              </div>

              {/* Output */}
              <div>
                <span className="text-[10px] font-medium text-muted flex items-center gap-1 mb-2">
                  <FaPlay className="text-green-400" /> Output
                </span>
                <div className="p-3 rounded-lg" style={{
                  background: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)'
                }}>
                  <pre className="text-[11px] text-green-400 font-mono">
                    {challenge.output}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default ChallengeCard