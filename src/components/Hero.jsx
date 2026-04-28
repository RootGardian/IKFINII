import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="hero">
      <div
        className="hero-parallax-bg"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      />
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Le vrai goût du <span>Café Touba</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          L'authenticité et la tradition du Sénégal dans chaque tasse, préparé avec
          passion au cœur de la Médina.
        </motion.p>
        <motion.a
          href="https://wa.me/221705961276?text=Bonjour,%20je%20souhaite%20commander%20du%20Café%20IKFINII."
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(212, 175, 55, 0.5)' }}
          whileTap={{ scale: 0.97 }}
        >
          Commander maintenant <i className="fab fa-whatsapp"></i>
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
