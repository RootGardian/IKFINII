import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqData = [
  {
    category: 'Commande',
    questions: [
      {
        q: 'Comment passer une commande ?',
        a: "C'est très simple ! Cliquez sur le bouton \"Commander\" de votre format préféré ou contactez-nous directement sur WhatsApp au +221 70 596 12 76. Indiquez le format souhaité, la quantité et votre adresse de livraison. Nous vous confirmerons votre commande dans les minutes qui suivent.",
      },
      {
        q: 'Quels sont les modes de paiement acceptés ?',
        a: "Nous acceptons le paiement en espèces à la livraison, les transferts via Wave, Orange Money, et Free Money. Pour les commandes importantes, un acompte peut être demandé via mobile money.",
      },
      {
        q: 'Puis-je commander en gros pour revendre ?',
        a: "Absolument ! Nous proposons des tarifs spéciaux pour les revendeurs et les commandes en gros. Contactez-nous sur WhatsApp pour discuter de vos besoins et obtenir un devis personnalisé.",
      },
    ],
  },
  {
    category: 'Produit',
    questions: [
      {
        q: "Qu'est-ce qui rend le Café IKFINII différent ?",
        a: "Notre café est 100% naturel, torréfié artisanalement dans notre atelier de la Médina à Dakar. Nous utilisons un mélange soigneusement dosé de grains de café de qualité supérieure et de poivre de Guinée (Jar) authentique. Aucun additif chimique, aucun conservateur — juste du vrai Café Touba comme la tradition le veut.",
      },
      {
        q: 'Comment conserver le Café IKFINII ?',
        a: "Pour préserver toute la fraîcheur et l'arôme de votre café, conservez-le dans un récipient hermétique, à l'abri de la lumière et de l'humidité. À température ambiante, il se conserve parfaitement pendant 3 à 6 mois après ouverture.",
      },
      {
        q: 'Le café contient-il des allergènes ?',
        a: "Le Café IKFINII contient uniquement du café torréfié et du poivre de Guinée (Djar). Il ne contient ni gluten, ni produits laitiers, ni noix. Cependant, si vous avez des sensibilités alimentaires spécifiques, n'hésitez pas à nous contacter pour plus d'informations.",
      },
    ],
  },
  {
    category: 'Livraison',
    questions: [
      {
        q: 'Quelles zones livrez-vous ?',
        a: "Nous livrons actuellement dans tout Dakar et sa banlieue (Médina, Plateau, Parcelles Assainies, Guédiawaye, Pikine, Rufisque, Keur Massar). Pour les autres régions du Sénégal, nous expédions via des services de transport avec livraison sous 2-3 jours ouvrables.",
      },
      {
        q: 'Quel est le délai de livraison ?',
        a: "Dans Dakar, nous livrons généralement le jour même ou le lendemain. Pour la banlieue proche, comptez 24 heures. Pour les autres régions du Sénégal, la livraison prend généralement 2 à 3 jours ouvrables.",
      },
    ],
  },
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <motion.div
      className={`faq-item${isOpen ? ' open' : ''}`}
      initial={false}
      layout
    >
      <motion.button
        className="faq-question"
        onClick={onClick}
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <span>{question}</span>
        <motion.i
          className="fas fa-chevron-down"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (key) => {
    setOpenIndex(openIndex === key ? null : key)
  }

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Questions Fréquentes</h2>
          <p>Retrouvez les réponses aux questions les plus posées sur le Café IKFINII.</p>
        </motion.div>
      </section>

      <section className="faq-section section-padding">
        <div className="container">
          {faqData.map((category, catIdx) => (
            <motion.div
              key={category.category}
              className="faq-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="faq-category-title">
                <i className={
                  category.category === 'Commande' ? 'fas fa-shopping-cart' :
                    category.category === 'Produit' ? 'fas fa-coffee' :
                      'fas fa-truck'
                }></i>
                {category.category}
              </h3>
              <div className="faq-list">
                {category.questions.map((item, qIdx) => {
                  const key = `${catIdx}-${qIdx}`
                  return (
                    <FAQItem
                      key={key}
                      question={item.q}
                      answer={item.a}
                      isOpen={openIndex === key}
                      onClick={() => handleToggle(key)}
                    />
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="faq-cta section-padding bg-cream">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Vous avez d'autres questions ?</h3>
            <p>N'hésitez pas à nous contacter directement sur WhatsApp, nous vous répondrons rapidement.</p>
            <motion.a
              href="https://wa.me/221705961276?text=Bonjour,%20j'ai%20une%20question%20sur%20le%20Café%20IKFINII."
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Poser une question <i className="fab fa-whatsapp"></i>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
