import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import profileImg from '../assets/profile.jpeg'
import { 
  FaGithub, 
  FaLinkedin, 
  FaFileDownload, 
  FaReact, 
  FaVuejs,
  FaNodeJs,
  FaDatabase,
  FaUserGraduate,
  FaCode
} from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiCplusplus } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { GiBrain, GiSkills } from 'react-icons/gi'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

const Home = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className={`grid lg:grid-cols-5 gap-6 md:gap-10 items-center ${isRTL ? 'text-right' : 'text-left'}`}>
          
          {/* Left Side - المحتوى */}
          <motion.div
            initial={{ x: isRTL ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/30 ${
                isRTL ? '' : 'flex-row-reverse'
              }`}
              style={{ background: 'var(--bg-card)' }}
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-accent font-medium text-xs sm:text-sm">{t.home.badge}</span>
            </motion.div>

            {/* الاسم */}
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2"
            >
              <span className="gradient-text">{t.home.name}</span>
            </motion.h1>

            {/* العمر والتخرج */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-muted mb-2 sm:mb-3 flex flex-wrap items-center gap-1 sm:gap-2"
            >
              <span>🇪🇬</span>
              <span>•</span>
              <span>{t.home.age}</span>
              <span>•</span>
              <FaUserGraduate className="text-accent text-xs sm:text-sm" />
              <span className="text-xs sm:text-sm">{t.home.graduate}</span>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-xl md:text-2xl mb-3 sm:mb-4 text-secondary"
            >
              <Typewriter
                words={[
                  'React.js Developer ⚛️',
                  'Vue.js Developer 🟢',
                  'Full-Stack Developer 💻',
                  'C++ Developer 🔷',
                  'Problem Solver 🧩'
                ]}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>

            {/* الوصف */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base text-secondary max-w-lg mb-4 sm:mb-5 leading-relaxed"
            >
              {t.home.description}
            </motion.p>

            {/* الأزرار */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`flex flex-wrap gap-2 sm:gap-3 ${isRTL ? 'justify-start' : 'justify-start'}`}
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                >
                  {t.home.viewProjects}
                </motion.button>
              </Link>
              
              <a href="/Eslam-Abosife.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                >
                  <FaFileDownload className="text-sm sm:text-base" /> {t.home.downloadCV}
                </motion.button>
              </a>
            </motion.div>

            {/* السوشيال ميديا */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={`flex gap-2 sm:gap-3 mt-4 sm:mt-6 ${isRTL ? '' : ''}`}
            >
              <a 
                href="https://github.com/eslamabosife" 
                target="_blank" 
                className="p-2 sm:p-3 rounded-xl border transition-all group"
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <FaGithub className="text-base sm:text-xl text-secondary group-hover:text-accent transition-colors" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                className="p-2 sm:p-3 rounded-xl border transition-all group"
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <FaLinkedin className="text-base sm:text-xl text-secondary group-hover:text-accent transition-colors" />
              </a>
              <a 
                href="mailto:eslamabosife69@gmail.com" 
                className="p-2 sm:p-3 rounded-xl border transition-all group"
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <MdEmail className="text-base sm:text-xl text-secondary group-hover:text-accent transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - الصورة */}
          <motion.div
            initial={{ x: isRTL ? 50 : -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 order-1 lg:order-2 mb-6 lg:mb-0"
          >
            <div className="relative max-w-[200px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] mx-auto">
              {/* الحاوية الرئيسية للصورة */}
              <div className="relative aspect-square w-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full blur-2xl sm:blur-3xl opacity-40 animate-pulse"></div>
                
                {/* Rotating Border */}
                <div className="absolute -inset-1 sm:-inset-2 rounded-full border-2 border-accent/30 animate-spin-slow"></div>
                <div className="absolute -inset-2 sm:-inset-4 rounded-full border border-purple-500/20"></div>
                
                {/* الصورة */}
                <div className="relative w-full h-full rounded-full border-4 border-accent/40 overflow-hidden shadow-2xl shadow-accent/30">
                  <img
                    src={profileImg}
                    alt="Eslam Abosife"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.src = 'https://ui-avatars.com/api/?name=Eslam+Abosife&size=300&background=aa3bff&color=fff&bold=true'
                    }}
                  />
                </div>
              </div>

              {/* بطاقة الخبرة - موضعة بشكل responsive */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`absolute -bottom-2 sm:-bottom-4 ${isRTL ? 'right-2 sm:right-4' : 'left-2 sm:left-4'} p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border shadow-xl`}
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  boxShadow: '0 4px 20px var(--shadow-color)'
                }}
              >
                <div className="flex items-center gap-1.5 sm:gap-3">
                  <div className="p-1.5 sm:p-2.5 bg-accent/20 rounded-lg sm:rounded-xl">
                    <span className="text-accent text-base sm:text-2xl font-bold">2+</span>
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="text-[8px] sm:text-xs text-muted">{t.home.experience}</p>
                    <p className="text-[10px] sm:text-sm font-semibold text-primary">{t.home.experienceLabel}</p>
                  </div>
                </div>
              </motion.div>

              {/* بطاقة العمر */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className={`absolute -top-2 sm:-top-4 ${isRTL ? 'left-2 sm:left-4' : 'right-2 sm:right-4'} p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border shadow-xl`}
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  boxShadow: '0 4px 20px var(--shadow-color)'
                }}
              >
                <div className="flex items-center gap-1.5 sm:gap-3">
                  <div className="p-1.5 sm:p-2.5 bg-purple-500/20 rounded-lg sm:rounded-xl">
                    <FaUserGraduate className="text-purple-400 text-base sm:text-2xl" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="text-base sm:text-2xl font-bold text-purple-400">26</p>
                    <p className="text-[8px] sm:text-xs text-muted">{t.home.age}</p>
                  </div>
                </div>
              </motion.div>

              {/* بطاقة المشاريع - تظهر في الشاشات المتوسطة والكبيرة */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className={`absolute -bottom-2 sm:-bottom-4 ${isRTL ? 'left-2 sm:left-4' : 'right-2 sm:right-4'} p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border shadow-xl hidden sm:block`}
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  boxShadow: '0 4px 20px var(--shadow-color)'
                }}
              >
                <div className="flex items-center gap-1.5 sm:gap-3">
                  <div className="p-1.5 sm:p-2.5 bg-green-500/20 rounded-lg sm:rounded-xl">
                    <FaCode className="text-green-400 text-base sm:text-2xl" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="text-base sm:text-2xl font-bold text-green-400">10+</p>
                    <p className="text-[8px] sm:text-xs text-muted">{t.home.projects}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* التقنيات - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-14 pt-4 sm:pt-6 border-t"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p className="text-center text-[10px] sm:text-xs text-muted mb-3 sm:mb-4">{t.home.techStack}</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2.5 justify-center">
            {[
              { icon: <FaReact />, name: 'React.js', color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { icon: <FaVuejs />, name: 'Vue.js', color: 'text-green-400', bg: 'bg-green-500/10' },
              { icon: <SiJavascript />, name: 'JavaScript', color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
              { icon: <SiCplusplus />, name: 'C++', color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-500', bg: 'bg-green-500/10' },
              { icon: <FaDatabase />, name: 'MongoDB', color: 'text-green-600', bg: 'bg-green-600/10' },
              { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
              { icon: <GiSkills />, name: 'Data Structures', color: 'text-purple-400', bg: 'bg-purple-500/10' },
            ].map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.08 }}
                className={`px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full ${tech.bg} text-[9px] sm:text-xs flex items-center gap-1 sm:gap-1.5 border transition-all hover:scale-105 cursor-default`}
                style={{ 
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)'
                }}
              >
                <span className={`${tech.color} text-[10px] sm:text-sm`}>{tech.icon}</span>
                <span className="hidden xs:inline">{tech.name}</span>
                <span className="xs:hidden">{tech.name.slice(0, 3)}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home