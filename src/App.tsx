import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/layout/FloatingWhatsApp'
import BackToTopButton from './components/layout/BackToTopButton'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import SolutionsSection from './components/sections/SolutionsSection'
import MetricsSection from './components/sections/MetricsSection'
import WhySimtechSection from './components/sections/WhySimtechSection'
import PortfolioSection from './components/sections/PortfolioSection'
import ArchitectureSection from './components/sections/ArchitectureSection'
import TechStackSection from './components/sections/TechStackSection'
import ContactSection from './components/sections/ContactSection'
import AboutUsPage from './pages/AboutUsPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import TeamsPage from './pages/TeamsPage'
import PortfolioPage from './pages/PortfolioPage'
import OurClientsPage from './pages/OurClientsPage'

function ScrollReset() {
  const location = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const forceTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    document.documentElement.classList.remove('smooth-scroll')
    forceTop()

    const timers = [
      window.setTimeout(forceTop, 0),
      window.setTimeout(forceTop, 50),
      window.setTimeout(forceTop, 150),
      window.setTimeout(() => {
        document.documentElement.classList.add('smooth-scroll')
      }, 500),
    ]

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [location.pathname])

  return null
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <ServicesSection />
      <WhySimtechSection />
      <SolutionsSection />
      <PortfolioSection />
      <ArchitectureSection />
      <TechStackSection />
      <ContactSection />
    </>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <ScrollReset />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/our-clients" element={<OurClientsPage />} />
      </Routes>
      <Footer />
      <BackToTopButton />
      <FloatingWhatsApp />
    </main>
  )
}
