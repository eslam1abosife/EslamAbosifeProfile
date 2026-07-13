import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  const socialLinks = [
    { icon: <FaGithub />, link: 'https://github.com/eslamabosife', label: 'GitHub' },
    { icon: <FaLinkedin />, link: '#', label: 'LinkedIn' },
    { icon: <FaEnvelope />, link: 'mailto:eslamabosife69@gmail.com', label: 'Email' },
    { icon: <FaPhone />, link: 'tel:01201253897', label: 'Phone' },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-auto py-8 border-t"
      style={{ 
        background: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target={social.link.startsWith('http') ? '_blank' : '_self'}
                whileHover={{ 
                  scale: 1.15,
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group p-3 rounded-xl transition-all duration-300"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)'
                }}
              >
                <span className="text-xl group-hover:text-accent transition-colors duration-300">
                  {social.icon}
                </span>
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  style={{
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="w-24 h-0.5 rounded-full"
            style={{ background: 'var(--border-color)' }}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          {/* Footer Text */}
          <motion.div 
            className={`flex flex-col items-center gap-1 ${isRTL ? 'text-right' : 'text-left'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm text-muted flex items-center gap-2">
              <FaCode className="text-accent text-xs" />
              <span>
                {isRTL ? 'صنع بـ' : 'Built with'} 
                <span className="text-red-500 mx-1">❤️</span>
                {isRTL ? 'بواسطة' : 'by'}
                <span className="font-semibold text-accent"> Eslam Abosife</span>
              </span>
            </p>
            <p className="text-xs text-muted/60">
              © {new Date().getFullYear()} {isRTL ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}
            </p>
          </motion.div>

          {/* Version Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] px-3 py-1 rounded-full border"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-muted)'
            }}
          >
            v2.0.0
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer