import { motion } from 'framer-motion'
import SkillBar from '../components/SkillBar'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { FaGraduationCap, FaCode, FaLaptopCode, FaUserGraduate } from 'react-icons/fa'
import { GiBrain, GiSkills } from 'react-icons/gi'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  const skills = [
    { name: 'JavaScript', level: 90, color: 'text-yellow-400' },
    { name: 'React.js', level: 85, color: 'text-blue-400' },
    { name: 'Vue.js', level: 90, color: 'text-green-400' },
    { name: 'C++', level: 80, color: 'text-blue-500' },
    { name: 'Node.js', level: 80, color: 'text-green-500' },
    { name: 'HTML/CSS', level: 95, color: 'text-orange-400' },
    { name: 'MongoDB', level: 75, color: 'text-green-600' },
    { name: 'Data Structures', level: 85, color: 'text-purple-400' },
  ]

  const stats = [
    { icon: <FaUserGraduate />, value: '2+', label: isRTL ? 'سنوات خبرة' : 'Years Experience' },
    { icon: <FaCode />, value: '6+', label: isRTL ? 'مشاريع' : 'Projects' },
    { icon: <FaGraduationCap />, value: '2021', label: isRTL ? 'بداية الجامعة' : 'University Start' },
    { icon: <GiBrain />, value: '10+', label: isRTL ? 'مشكلة محلولة' : 'Problems Solved' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 px-6 pb-16"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`mb-12 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="gradient-text">{t.about.title}</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="card-custom rounded-2xl p-5 text-center"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border-color)'
              }}
            >
              <div className="text-3xl text-accent mb-2 flex justify-center">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 card-custom rounded-2xl p-8"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border-color)'
            }}
          >
            <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="p-3 bg-accent/10 rounded-xl">
                <FaLaptopCode className="text-2xl text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-primary">
                {isRTL ? 'من أنا؟' : 'Who Am I?'}
              </h2>
            </div>
            
            <p className="text-secondary leading-relaxed">
              {t.about.description}
            </p>

            <div className={`mt-6 flex flex-wrap gap-3 ${isRTL ? 'justify-start' : 'justify-start'}`}>
              {['React.js', 'Vue.js', 'C++', 'Node.js', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs border"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="card-custom rounded-2xl p-8"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border-color)'
            }}
          >
            <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <GiSkills className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-primary">
                {isRTL ? 'معلومات سريعة' : 'Quick Info'}
              </h2>
            </div>

            <div className="space-y-3">
              <div className={`flex justify-between items-center border-b pb-2`} style={{ borderColor: 'var(--border-color)' }}>
                <span className="text-sm text-muted">{isRTL ? 'العمر' : 'Age'}</span>
                <span className="text-sm font-medium text-primary">26 {isRTL ? 'سنة' : 'Years'}</span>
              </div>
              <div className={`flex justify-between items-center border-b pb-2`} style={{ borderColor: 'var(--border-color)' }}>
                <span className="text-sm text-muted">{isRTL ? 'التعليم' : 'Education'}</span>
                <span className="text-sm font-medium text-primary">{isRTL ? 'هندسة' : 'Engineering'}</span>
              </div>
              <div className={`flex justify-between items-center border-b pb-2`} style={{ borderColor: 'var(--border-color)' }}>
                <span className="text-sm text-muted">{isRTL ? 'الخبرة' : 'Experience'}</span>
                <span className="text-sm font-medium text-primary">2+ {isRTL ? 'سنوات' : 'Years'}</span>
              </div>
              <div className={`flex justify-between items-center`}>
                <span className="text-sm text-muted">{isRTL ? 'الموقع' : 'Location'}</span>
                <span className="text-sm font-medium text-primary">🇪🇬 {isRTL ? 'مصر' : 'Egypt'}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 card-custom rounded-2xl p-8"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border-color)'
          }}
        >
          <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="p-3 bg-accent/10 rounded-xl">
              <GiSkills className="text-2xl text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-primary">
              {isRTL ? 'المهارات التقنية' : 'Technical Skills'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 0.05} isRTL={isRTL} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About