import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>CAFÉ <span>IKFINIII</span></h2>
            <p>Le vrai goût du Café Touba.</p>
          </div>
          <div className="footer-links">
            <Link to="/">Accueil</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/livraison">Livraison</Link>
          </div>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Café IKFINII. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
