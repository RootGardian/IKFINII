import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const products = [
  {
    icon: 'fas fa-mug-hot',
    title: 'Format Découverte',
    format: '250g',
    price: '1 500 FCFA',
    description: "Idéal pour goûter à l'arôme unique du Café IKFINII.",
    whatsappMsg: 'Bonjour,%20je%20souhaite%20commander%20le%20format%20250g%20(1500%20FCFA)%20du%20Café%20IKFINII.',
    btnClass: 'btn btn-secondary',
    premium: false,
  },
  {
    icon: 'fas fa-coffee',
    title: 'Format Familial',
    format: '500g',
    price: '3 000 FCFA',
    description: 'Le choix préféré de nos clients réguliers à la Médina.',
    whatsappMsg: 'Bonjour,%20je%20souhaite%20commander%20le%20format%20500g%20(3000%20FCFA)%20du%20Café%20IKFINII.',
    btnClass: 'btn btn-primary',
    premium: true,
  },
  {
    icon: 'fas fa-box-open',
    title: 'Format Premium',
    format: '1kg',
    price: '6 000 FCFA',
    description: 'Pour les véritables amateurs qui ne veulent jamais en manquer.',
    whatsappMsg: 'Bonjour,%20je%20souhaite%20commander%20le%20format%201kg%20(6000%20FCFA)%20du%20Café%20IKFINII.',
    btnClass: 'btn btn-secondary',
    premium: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

function ProductCard({ product, index }) {
  return (
    <motion.div
      className={`product-card${product.premium ? ' premium' : ''}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{
        y: -15,
        boxShadow: '0 25px 50px rgba(44, 24, 16, 0.15)',
        transition: { duration: 0.3 },
      }}
    >
      {product.premium && <div className="product-badge">Populaire</div>}
      <motion.div
        className="product-icon"
        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <i className={product.icon}></i>
      </motion.div>
      <h4>{product.title}</h4>
      <p className="format">{product.format}</p>
      <motion.p
        className="price"
        whileHover={{ scale: 1.1, color: '#D4AF37' }}
        transition={{ duration: 0.2 }}
      >
        {product.price}
      </motion.p>
      <p className="description">{product.description}</p>
      <motion.a
        href={`https://wa.me/221705961276?text=${product.whatsappMsg}`}
        className={product.btnClass}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        Commander
      </motion.a>
    </motion.div>
  )
}

function Products() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="products" className="products section-padding bg-cream" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3>Nos Formats</h3>
          <div className="underline"></div>
          <p>Choisissez le format qui vous convient le mieux pour savourer votre IKFINII à tout moment.</p>
        </motion.div>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
