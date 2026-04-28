import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="contact section-padding" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3>Contactez-nous</h3>
          <div className="underline"></div>
        </motion.div>
        <div className="contact-container">
          <div className="contact-info">
            <motion.div
              className="info-item"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <i className="fas fa-phone-alt"></i>
              <div>
                <h5>Téléphone / WhatsApp</h5>
                <p>+221 70 596 12 76</p>
              </div>
            </motion.div>
            <motion.div
              className="info-item"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h5>Adresse</h5>
                <p>Médina, Dakar, Sénégal</p>
              </div>
            </motion.div>
            <motion.div
              className="whatsapp-direct"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a
                href="https://wa.me/221705961276?text=Bonjour,%20j'aimerais%20en%20savoir%20plus%20sur%20le%20Café%20IKFINII."
                className="whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-whatsapp"></i> Discuter sur WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
