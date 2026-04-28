import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      if (isHome) {
        const sections = document.querySelectorAll('section')
        let current = 'home'
        sections.forEach(section => {
          const sectionTop = section.offsetTop
          if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id')
          }
        })
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  const handleNavClick = useCallback((e, targetId) => {
    if (!isHome) return // Let React Router handle it
    e.preventDefault()
    setMenuOpen(false)

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const headerOffset = 80
      const elementPosition = targetElement.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [isHome])

  const closeMenu = () => setMenuOpen(false)

  const homeNavItems = [
    { href: '#home', label: 'Accueil', section: 'home' },
    { href: '#about', label: 'À propos', section: 'about' },
    { href: '#products', label: 'Nos Formats', section: 'products' },
    { href: '#testimonials', label: 'Avis', section: 'testimonials' },
    { href: '#contact', label: 'Contact', section: 'contact' },
  ]

  const pageNavItems = [
    { to: '/blog', label: 'Blog' },
    { to: '/faq', label: 'FAQ' },
    { to: '/livraison', label: 'Livraison' },
  ]

  return (
    <header id="header" className={scrolled || !isHome ? 'scrolled' : ''}>
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <h1>CAFÉ <span>IKFINII</span></h1>
          </Link>
        </div>
        <nav id="nav-menu" className={menuOpen ? 'active' : ''}>
          <ul>
            {isHome && homeNavItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={activeSection === item.section ? 'active' : ''}
                  onClick={(e) => { handleNavClick(e, item.href); closeMenu() }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {!isHome && (
              <li>
                <Link to="/" className="" onClick={closeMenu}>Accueil</Link>
              </li>
            )}
            {pageNavItems.map(item => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={location.pathname === item.to ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={`hamburger${menuOpen ? ' toggle' : ''}`}
          id="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(-5px, 6px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(-5px, -6px)' } : {}} />
        </div>
      </div>
    </header>
  )
}

export default Header
