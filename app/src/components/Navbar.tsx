import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Syllabus', href: '#syllabus' },
  { label: 'Books', href: '#books' },
  { label: 'Career', href: '#career' },
  { label: 'Admission', href: '#admission' },
  { label: 'Links', href: '#links' },
]

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          hasScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="text-xl font-bold text-[#1a5fb4]"
            >
              COPA ITI
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#1a5fb4] bg-[#e8f0fe]'
                      : 'text-gray-700 hover:text-[#1a5fb4] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://admission.dvet.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 px-4 py-2 bg-[#e66100] text-white text-sm font-semibold rounded-md hover:bg-[#cc5500] transition-colors"
              >
                Apply Now
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-16 right-0 w-72 bg-white shadow-xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#1a5fb4] bg-[#e8f0fe]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://admission.dvet.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 px-4 py-3 bg-[#e66100] text-white text-center font-semibold rounded-md"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
