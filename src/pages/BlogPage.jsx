import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const articles = [
  {
    id: 1,
    title: "L'histoire fascinante du Café Touba",
    date: '15 Avril 2026',
    category: 'Culture',
    excerpt: "Le Café Touba tire son nom de la ville sainte de Touba, au Sénégal. Découvrez comment cette boisson est devenue un symbole culturel et spirituel pour des millions de Sénégalais à travers le monde.",
    content: "Le Café Touba est bien plus qu'une simple boisson chaude. Il porte en lui l'essence de la spiritualité mouride et de la culture sénégalaise. Son histoire remonte à Cheikh Ahmadou Bamba, fondateur du mouridisme, qui aurait introduit l'utilisation du poivre de Guinée (Jar) dans la préparation du café lors de son exil au Gabon au début du 20e siècle. Depuis, cette recette unique s'est transmise de génération en génération, faisant du Café Touba un incontournable du quotidien sénégalais. Que ce soit au petit-déjeuner, lors des cérémonies religieuses ou simplement entre amis, le Café Touba rassemble et réchauffe les cœurs.",
    readTime: '5 min',
    icon: 'fas fa-mosque',
  },
  {
    id: 2,
    title: 'Les bienfaits du poivre de Guinée (Jar)',
    date: '10 Avril 2026',
    category: 'Santé',
    excerpt: "Le Djar ou poivre de Guinée est l'ingrédient secret du Café Touba. Riche en propriétés médicinales, il offre de nombreux bienfaits pour la santé que la science moderne commence à confirmer.",
    content: "Le poivre de Guinée (Xylopia aethiopica), appelé Djar au Sénégal, est utilisé depuis des siècles en médecine traditionnelle africaine. Ses propriétés anti-inflammatoires, antioxydantes et digestives en font un allié précieux pour la santé. Ajouté au café lors de la torréfaction, il confère au Café Touba son goût unique et épicé. Des études récentes montrent que le Djar peut aider à la digestion, renforcer le système immunitaire et même avoir des effets bénéfiques sur la circulation sanguine. Chez IKFINII, nous sélectionnons les meilleurs grains de Djar pour garantir un café aussi savoureux que bienfaisant.",
    readTime: '4 min',
    icon: 'fas fa-leaf',
  },
  {
    id: 3,
    title: 'Comment bien préparer son Café Touba à la maison',
    date: '5 Avril 2026',
    category: 'Recette',
    excerpt: "Vous avez votre paquet de Café IKFINII mais vous ne savez pas comment le préparer ? Suivez notre guide étape par étape pour obtenir le café parfait à chaque fois.",
    content: "La préparation du Café Touba est un art simple mais qui demande de l'attention. Commencez par faire bouillir de l'eau dans une casserole. Pour un goût optimal, utilisez environ 2 cuillères à soupe de Café IKFINII pour 250ml d'eau. Une fois l'eau à ébullition, ajoutez le café et laissez mijoter à feu doux pendant 3 à 5 minutes. Le secret réside dans la filtration : utilisez un filtre en tissu traditionnel pour obtenir un café lisse et sans résidu. Servez chaud, avec ou sans sucre selon vos préférences. Pour les amateurs de Café Touba glacé, laissez refroidir et ajoutez des glaçons — une version rafraîchissante parfaite pour les après-midis dakarois.",
    readTime: '3 min',
    icon: 'fas fa-mug-hot',
  },
  {
    id: 4,
    title: 'IKFINII : De la Médina au reste du Sénégal',
    date: '28 Mars 2026',
    category: 'Notre Histoire',
    excerpt: "Retracez le parcours de Café IKFINII, depuis ses débuts modestes dans un petit atelier de la Médina jusqu'à sa présence dans les foyers sénégalais. Une aventure portée par la passion du café authentique.",
    content: "L'aventure IKFINII a commencé dans un petit atelier au cœur de la Médina à Dakar. Animés par une passion pour le Café Touba authentique, nous avons commencé par torréfier nos grains à la main, en suivant les méthodes traditionnelles transmises par nos aînés. Le bouche-à-oreille a fait le reste : nos voisins, puis le quartier entier, puis des clients de tout Dakar ont adopté notre café. Aujourd'hui, grâce à la commande via WhatsApp et la livraison, nous sommes fiers de servir des clients dans tout le Sénégal. Mais notre engagement reste le même : offrir un Café Touba 100% naturel, préparé avec amour et respect de la tradition.",
    readTime: '6 min',
    icon: 'fas fa-store',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

function BlogPage() {
  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Notre Blog</h2>
          <p>Plongez dans l'univers du Café Touba : culture, bienfaits, recettes et plus encore.</p>
        </motion.div>
      </section>

      {/* Blog Articles */}
      <section className="blog-section section-padding">
        <div className="container">
          <motion.div
            className="blog-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {articles.map((article) => (
              <motion.article
                key={article.id}
                className="blog-card"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(44, 24, 16, 0.12)',
                  transition: { duration: 0.3 },
                }}
              >
                <div className="blog-card-icon">
                  <i className={article.icon}></i>
                </div>
                <div className="blog-card-meta">
                  <span className="blog-category">{article.category}</span>
                  <span className="blog-date"><i className="far fa-calendar-alt"></i> {article.date}</span>
                </div>
                <h3>{article.title}</h3>
                <p className="blog-excerpt">{article.excerpt}</p>
                <div className="blog-card-content">
                  <p>{article.content}</p>
                </div>
                <div className="blog-card-footer">
                  <span className="read-time"><i className="far fa-clock"></i> {article.readTime} de lecture</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta section-padding bg-cream">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Envie de goûter au vrai Café Touba ?</h3>
            <p>Commandez votre Café IKFINII maintenant et vivez l'expérience authentique.</p>
            <motion.a
              href="https://wa.me/221705961276?text=Bonjour,%20je%20souhaite%20commander%20du%20Café%20IKFINII."
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commander sur WhatsApp <i className="fab fa-whatsapp"></i>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
