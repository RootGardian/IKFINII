import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/221705961276?text=Bonjour,%20je%20souhaite%20commander%20du%20Café%20IKFINII."
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          title="Commander sur WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppFloat
