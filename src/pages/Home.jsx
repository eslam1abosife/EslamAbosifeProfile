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
      className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className={`grid lg:grid-cols-5 gap-10 items-start ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Left Side - المحتوى */}
          <motion.div
            initial={{ x: isRTL ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            {/* Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-accent/30 ${
                isRTL ? '' : 'flex-row-reverse'
              }`}
              style={{ background: 'var(--bg-card)' }}
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-accent font-medium text-sm">{t.home.badge}</span>
            </motion.div>

            {/* الاسم */}
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-2"
            >
              <span className="gradient-text">{t.home.name}</span>
            </motion.h1>

            {/* العمر والتخرج */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-muted mb-3 flex items-center gap-2"
            >
              <span>🇪🇬</span>
              <span>•</span>
              <span>{t.home.age}</span>
              <span>•</span>
              <FaUserGraduate className="text-accent" />
              <span>{t.home.graduate}</span>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl mb-4 text-secondary"
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
              className="text-base text-secondary max-w-lg mb-5 leading-relaxed"
            >
              {t.home.description}
            </motion.p>

            {/* الأزرار */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`flex flex-wrap gap-3 ${isRTL ? 'justify-start' : 'justify-start'}`}
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t.home.viewProjects}
                </motion.button>
              </Link>
              
              <a href="/Eslam-Abosife.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <FaFileDownload /> {t.home.downloadCV}
                </motion.button>
              </a>
            </motion.div>

            {/* السوشيال ميديا */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={`flex gap-3 mt-6 ${isRTL ? '' : ''}`}
            >
              <a 
                href="https://github.com/eslamabosife" 
                target="_blank" 
                className="p-3 rounded-xl border transition-all group"
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <FaGithub className="text-xl text-secondary group-hover:text-accent transition-colors" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                className="p-3 rounded-xl border transition-all group"
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <FaLinkedin className="text-xl text-secondary group-hover:text-accent transition-colors" />
              </a>
              <a 
                href="mailto:eslamabosife69@gmail.com" 
                className="p-3 rounded-xl border transition-all group"
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <MdEmail className="text-xl text-secondary group-hover:text-accent transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - الصورة */}
          <motion.div
            initial={{ x: isRTL ? 50 : -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="relative w-72 h-72 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute -inset-2 rounded-full border-2 border-accent/30 animate-spin-slow"></div>
                <div className="absolute -inset-4 rounded-full border border-purple-500/20"></div>
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

              {/* بطاقة الخبرة */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`absolute -bottom-4 ${isRTL ? 'right-4' : 'left-4'} p-3.5 rounded-2xl border shadow-xl`}
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  boxShadow: '0 4px 20px var(--shadow-color)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-accent/20 rounded-xl">
                    <span className="text-accent text-2xl font-bold">2+</span>
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="text-xs text-muted">{t.home.experience}</p>
                    <p className="text-sm font-semibold text-primary">{t.home.experienceLabel}</p>
                  </div>
                </div>
              </motion.div>

              {/* بطاقة العمر */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className={`absolute -top-4 ${isRTL ? 'left-4' : 'right-4'} p-3.5 rounded-2xl border shadow-xl`}
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  boxShadow: '0 4px 20px var(--shadow-color)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-purple-500/20 rounded-xl">
                    <FaUserGraduate className="text-purple-400 text-2xl" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="text-2xl font-bold text-purple-400">26</p>
                    <p className="text-xs text-muted">{t.home.age}</p>
                  </div>
                </div>
              </motion.div>

              {/* بطاقة المشاريع */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className={`absolute -bottom-4 ${isRTL ? 'left-4' : 'right-4'} p-3.5 rounded-2xl border shadow-xl`}
                style={{ 
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  boxShadow: '0 4px 20px var(--shadow-color)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-green-500/20 rounded-xl">
                    <FaCode className="text-green-400 text-2xl" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="text-2xl font-bold text-green-400">6+</p>
                    <p className="text-xs text-muted">{t.home.projects}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* التقنيات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-14 pt-6 border-t"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p className="text-center text-xs text-muted mb-4">{t.home.techStack}</p>
          <div className="flex flex-wrap gap-2.5 justify-center">
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
                className={`px-3.5 py-1.5 rounded-full ${tech.bg} text-xs flex items-center gap-1.5 border transition-all hover:scale-105 cursor-default`}
                style={{ 
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)'
                }}
              >
                <span className={tech.color}>{tech.icon}</span>
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home