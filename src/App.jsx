import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import FAQPage from './pages/FAQPage'
import DeliveryPage from './pages/DeliveryPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/livraison" element={<DeliveryPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </Router>
  )
}

export default App
