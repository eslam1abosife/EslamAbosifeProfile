import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

const ProjectCard = ({ project, index }) => {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  // ✅ ترجمة الاسم
  const translatedTitle = t.projects?.projectTitles?.[project.title] || project.title
  
  // ✅ ترجمة النوع (type)
  const translatedType = t.projects?.projectTitles?.types?.[project.type] || project.type
  
  // ✅ ترجمة الوصف (description) - تأكد من وجود المفتاح
  const translatedDescription = t.projects?.projectTitles?.descriptions?.[project.description] || project.description

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="card-custom rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border-color)'
      }}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-r from-accent/20 to-purple-500/20">
        <img
          src={project.image || "https://via.placeholder.com/400x200/aa3bff/ffffff?text=Project"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x200/aa3bff/ffffff?text=Project'
          }}
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" className="p-2 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-accent/80 transition-all text-white">
              <FaGithub />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" className="p-2 rounded-lg bg-black/50 backdrop-blur-sm hover:bg-accent/80 transition-all text-white">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-xs text-white">
            {translatedType}
          </span>
        </div>
        <div className="absolute top-3 left-3 text-2xl">
          {project.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary mb-2">
          {translatedTitle}
        </h3>
        <p className="text-sm text-secondary leading-relaxed mb-3 line-clamp-2">
          {translatedDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech, i) => (
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
    </motion.div>
  )
}

export default ProjectCard