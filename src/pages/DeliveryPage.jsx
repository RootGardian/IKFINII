import { motion } from 'framer-motion'

const zones = [
  {
    zone: 'Dakar Centre',
    areas: 'Médina, Plateau, Fann, Point E, Mermoz, Almadies',
    delay: 'Jour même',
    icon: 'fas fa-map-pin',
  },
  {
    zone: 'Banlieue Dakar',
    areas: 'Parcelles Assainies, Guédiawaye, Pikine, Keur Massar, Rufisque, Thiaroye',
    delay: 'Jour même',
    icon: 'fas fa-motorcycle',
  },
  {
    zone: 'Régions du Sénégal',
    areas: 'Touba, Thiès, Saint-Louis, Kaolack, Ziguinchor, et toutes les régions',
    delay: '2-3 jours ouvrables',
    icon: 'fas fa-truck',
  },
]

const steps = [
  {
    number: '01',
    title: 'Choisissez votre format',
    description: 'Sélectionnez parmi nos 3 formats : Découverte (250g), Familial (500g) ou Premium (1kg).',
    icon: 'fas fa-hand-pointer',
  },
  {
    number: '02',
    title: 'Commandez via WhatsApp',
    description: 'Envoyez-nous un message avec votre choix, quantité et adresse de livraison.',
    icon: 'fab fa-whatsapp',
  },
  {
    number: '03',
    title: 'Confirmation rapide',
    description: 'Nous confirmons votre commande et vous communiquons le délai et le coût de livraison.',
    icon: 'fas fa-check-circle',
  },
  {
    number: '04',
    title: 'Livraison à domicile',
    description: 'Recevez votre Café IKFINII directement chez vous. Paiement à la livraison accepté.',
    icon: 'fas fa-home',
  },
]

function DeliveryPage() {
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
          <h2>Politique de Livraison</h2>
          <p>Commandez facilement et recevez votre Café IKFINII directement chez vous.</p>
        </motion.div>
      </section>

      {/* How to Order */}
      <section className="delivery-steps section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Comment commander ?</h3>
            <div className="underline"></div>
            <p>Un processus simple en 4 étapes pour recevoir votre café préféré.</p>
          </motion.div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="step-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-icon">
                  <i className={step.icon}></i>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="delivery-zones section-padding bg-cream">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Zones de Livraison</h3>
            <div className="underline"></div>
          </motion.div>
          <div className="zones-grid">
            {zones.map((zone, index) => (
              <motion.div
                key={zone.zone}
                className="zone-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(44, 24, 16, 0.12)',
                  transition: { duration: 0.3 },
                }}
              >
                <div className="zone-icon">
                  <i className={zone.icon}></i>
                </div>
                <h4>{zone.zone}</h4>
                <p className="zone-areas">{zone.areas}</p>
                <div className="zone-details">
                  <div className="zone-detail">
                    <i className="far fa-clock"></i>
                    <span>{zone.delay}</span>
                  </div>
                  <div className="zone-detail">
                    <i className="fas fa-tag"></i>
                    <span>{zone.cost}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="delivery-info section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Informations Importantes</h3>
            <div className="underline"></div>
          </motion.div>
          <motion.div
            className="info-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="delivery-info-card">
              <i className="fas fa-money-bill-wave"></i>
              <h4>Paiement</h4>
              <p>Paiement à la livraison en espèces, ou par mobile money (Wave, Orange Money, Free Money) avant l'expédition.</p>
            </div>
            <div className="delivery-info-card">
              <i className="fas fa-exchange-alt"></i>
              <h4>Retours & Échanges</h4>
              <p>Si votre commande présente un défaut, contactez-nous dans les 24h suivant la réception pour un échange ou remboursement.</p>
            </div>
            <div className="delivery-info-card">
              <i className="fas fa-box"></i>
              <h4>Emballage</h4>
              <p>Tous nos produits sont emballés avec soin dans des sachets hermétiques pour garantir la fraîcheur du café.</p>
            </div>
            <div className="delivery-info-card">
              <i className="fas fa-headset"></i>
              <h4>Support Client</h4>
              <p>Notre équipe est disponible du lundi au samedi, de 8h à 20h, via WhatsApp pour répondre à toutes vos questions.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="delivery-cta section-padding bg-cream">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Prêt à commander ?</h3>
            <p>Passez votre commande maintenant et recevez le vrai Café Touba chez vous.</p>
            <motion.a
              href="https://wa.me/221705961276?text=Bonjour,%20je%20souhaite%20passer%20une%20commande%20de%20Café%20IKFINII."
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commander maintenant <i className="fab fa-whatsapp"></i>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DeliveryPage
