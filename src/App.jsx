import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Packages from './components/Packages'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import { Location, Footer } from './components/LocationFooter'
import WhatsAppFAB from './components/WhatsAppFAB'

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <Gallery />
      <CTA />
      <Location />
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
