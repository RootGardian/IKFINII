import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Mamy Yade',
    role: "Cheffe d'entreprise",
    location: 'Médina, Dakar',
    text: "Le Café IKFINII a changé ma routine matinale. L'arôme du Jar me rappelle le café que préparait ma grand-mère. C'est le seul café que j'achète maintenant pour toute la famille.",
    rating: 5,
    initials: 'MY',
  },
  {
    name: 'Ahmed Rashid Bangoure',
    role: 'Client fidèle',
    location: 'Plateau, Dakar',
    text: "En tant qu'entrepreneur, j'ai besoin d'un café qui me donne de l'énergie tout en restant naturel. IKFINII est parfait — un goût authentique sans compromis. Je commande le format 1kg chaque mois.",
    rating: 5,
    initials: 'AB',
  },
  {
    name: 'Mohamed Sall',
    role: 'Enseignant',
    location: 'Guédiawaye',
    text: "J'ai découvert IKFINII grâce à un collègue. Depuis, je ne peux plus m'en passer. La qualité est constante, la livraison rapide, et le prix est très raisonnable pour un café de cette qualité.",
    rating: 5,
    initials: 'MS',
  },
  {
    name: 'Khadim Fall',
    role: 'Commerçant',
    location: 'Touba',
    text: "Le vrai Café Touba comme on l'aime ! IKFINII respecte la tradition. Je l'offre à mes clients dans ma boutique et tout le monde en redemande. Un produit d'exception.",
    rating: 5,
    initials: 'KF',
  },
  {
    name: 'Amy Gueye',
    role: 'Étudiante',
    location: 'Parcelles Assainies, Dakar',
    text: "Le format découverte m'a conquise dès la première tasse. Le goût est riche et intense, parfait pour les longues soirées de révision. Et le service via WhatsApp est super pratique !",
    rating: 4,
    initials: 'AG',
  },
]

function StarRating({ count }) {
  return (
    <div className="testimonial-stars">
      {[...Array(5)].map((_, i) => (
        <i key={i} className={`fas fa-star${i < count ? '' : ' empty'}`}></i>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px rgba(44, 24, 16, 0.12)',
        transition: { duration: 0.3 },
      }}
    >
      <div className="testimonial-quote">
        <i className="fas fa-quote-left"></i>
      </div>
      <p className="testimonial-text">{testimonial.text}</p>
      <StarRating count={testimonial.rating} />
      <div className="testimonial-author">
        <div className="testimonial-avatar">
          {testimonial.initials}
        </div>
        <div className="testimonial-info">
          <h5>{testimonial.name}</h5>
          <p>{testimonial.role} — {testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  )
}

function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const displayed = showAll ? testimonials : testimonials.slice(0, 3)

  return (
    <section id="testimonials" className="testimonials section-padding" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3>Ce que disent nos clients</h3>
          <div className="underline"></div>
          <p>Découvrez les avis de ceux qui ont adopté le Café IKFINII au quotidien.</p>
        </motion.div>
        <div className="testimonials-grid">
          <AnimatePresence>
            {displayed.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
        {testimonials.length > 3 && (
          <motion.div
            className="testimonials-toggle"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="btn btn-secondary"
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Voir moins' : 'Voir tous les avis'}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
