import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

const SectionHeader = ({ icon, title, count, isRTL }) => {
  const { language } = useLanguage()
  const t = translations[language]
  
  // ✅ ترجمة عنوان القسم
  const translatedTitle = t.projects?.projectTitles?.[title] || title

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
    >
      <div className="p-3 rounded-xl bg-accent/10">
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-primary">{translatedTitle}</h2>
        <p className="text-sm text-muted">
          {isRTL ? `عدد المشاريع: ${count}` : `${count} Projects`}
        </p>
      </div>
    </motion.div>
  )
}

export default SectionHeader