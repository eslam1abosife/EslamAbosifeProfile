import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone } from 'react-icons/md'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import emailjs from 'emailjs-com'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === 'ar'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)
    
    // 🔥 بياناتك الحقيقية
    emailjs.sendForm(
      'service_vpp4dhc',        // Service ID
      'template_szkkpp4',       // Template ID
      e.target,
      'UD2SVU6kzFvaKtMne'       // User ID (Public Key)
    ).then(() => {
      alert(isRTL ? '✅ تم إرسال رسالتك بنجاح! 🎉' : '✅ Message sent successfully! 🎉')
      setFormData({ name: '', email: '', message: '' })
      setIsSending(false)
    }).catch((error) => {
      console.error('Error:', error)
      alert(isRTL ? '❌ حدث خطأ، حاول مرة أخرى' : '❌ Error, please try again')
      setIsSending(false)
    })
  }

  const contactInfo = [
    {
      icon: <MdEmail className="text-2xl text-accent" />,
      label: isRTL ? 'البريد الإلكتروني' : 'Email',
      value: 'eslamabosife69@gmail.com',
      link: 'mailto:eslamabosife69@gmail.com'
    },
    {
      icon: <MdPhone className="text-2xl text-accent" />,
      label: isRTL ? 'الهاتف' : 'Phone',
      value: '01201253897',
      link: 'tel:01201253897'
    },
    {
      icon: <FaGithub className="text-2xl text-accent" />,
      label: 'GitHub',
      value: 'github.com/eslamabosife',
      link: 'https://github.com/eslam1abosife'
    },
    {
      icon: <FaLinkedin className="text-2xl text-accent" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/eslamabosife',
      link: '#'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 px-6 pb-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`mb-12 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="gradient-text">{t.contact.title}</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ x: isRTL ? 50 : -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl card-custom hover:shadow-xl transition-all hover:-translate-y-0.5 group"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border-color)'
                  }}
                >
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-all">
                    {info.icon}
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="text-xs text-muted">{info.label}</p>
                    <p className="text-sm font-medium text-primary">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 rounded-2xl card-custom"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border-color)'
              }}
            >
              <p className={`text-sm text-muted mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? '🌐 تابعني على' : '🌐 Follow me on'}
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <FaGithub />, link: 'https://github.com/eslam1abosife', color: 'hover:text-gray-400' },
                  { icon: <FaLinkedin />, link: '#', color: 'hover:text-blue-500' },
                  { icon: <FaEnvelope />, link: 'mailto:eslamabosife69@gmail.com', color: 'hover:text-red-500' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    className={`p-3 rounded-xl border transition-all ${social.color}`}
                    style={{
                      background: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ x: isRTL ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-custom rounded-2xl p-8"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border-color)'
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className={`block text-sm font-medium mb-2 text-secondary ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 rounded-xl border transition-all focus:ring-2 focus:ring-accent/50 outline-none"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  required
                />
              </div>

              <div className="mb-5">
                <label className={`block text-sm font-medium mb-2 text-secondary ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 rounded-xl border transition-all focus:ring-2 focus:ring-accent/50 outline-none"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  required
                />
              </div>

              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 text-secondary ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.contact.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full p-3 rounded-xl border transition-all focus:ring-2 focus:ring-accent/50 outline-none resize-none"
                  style={{
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSending}
                className="w-full p-3.5 bg-gradient-to-r from-accent to-purple-500 rounded-xl font-semibold text-white shadow-lg shadow-accent/50 hover:shadow-2xl transition-all disabled:opacity-50"
              >
                {isSending ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    {t.contact.sending}
                  </span>
                ) : (
                  t.contact.send
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact