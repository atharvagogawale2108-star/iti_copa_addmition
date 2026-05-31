import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import HeroSection from '@/sections/HeroSection'
import AboutSection from '@/sections/AboutSection'
import SyllabusSection from '@/sections/SyllabusSection'
import BooksSection from '@/sections/BooksSection'
import CareerSection from '@/sections/CareerSection'
import AdmissionSection from '@/sections/AdmissionSection'
import LinksSection from '@/sections/LinksSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SyllabusSection />
        <BooksSection />
        <CareerSection />
        <AdmissionSection />
        <LinksSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
