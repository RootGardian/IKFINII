import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about section-padding" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3>À propos de nous</h3>
          <div className="underline"></div>
        </motion.div>
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4>Une tradition préservée à la Médina</h4>
            <p>
              Le Café IKFINII n'est pas seulement une boisson, c'est un héritage. Situé au cœur historique
              de Dakar, dans le quartier vibrant de la Médina, nous perpétuons l'art de la préparation
              naturelle du Café Touba.
            </p>
            <p>
              Chaque grain est sélectionné avec soin, torréfié selon les méthodes traditionnelles et moulu
              pour libérer cet arôme unique de poivre de Guinée (Jar) qui fait la renommée du vrai Café
              Touba.
            </p>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="img-frame">
              <img src="/assets/about-img.png" alt="Préparation Café Touba Artisanale" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
