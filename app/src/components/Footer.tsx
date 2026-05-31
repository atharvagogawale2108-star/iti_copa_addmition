const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Syllabus', href: '#syllabus' },
  { label: 'Books', href: '#books' },
  { label: 'Career', href: '#career' },
  { label: 'Admission', href: '#admission' },
  { label: 'Links', href: '#links' },
]

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1c1c1c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#1a5fb4] mb-2">COPA ITI Course Guide</h3>
            <p className="text-gray-400 text-sm">
              Your complete guide to the Computer Operator and Programming Assistant (COPA) 
              ITI course. Find syllabus, books, career info, and admission details.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Disclaimer</h4>
            <p className="text-gray-400 text-sm">
              This is an informational website for educational purposes. 
              For official admission, visit the{' '}
              <a
                href="https://admission.dvet.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a5fb4] hover:underline"
              >
                DVET Admission Portal
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Made for 12th-grade ITI aspirants | COPA Course Information Portal</p>
        </div>
      </div>
    </footer>
  )
}
