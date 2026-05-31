import { useInView } from '@/hooks/useInView'
import { useCountUp } from '@/hooks/useCountUp'
import { Award, BookOpen, Clock, GraduationCap, ExternalLink, CheckCircle } from 'lucide-react'

function StatCard({ icon, value, label, suffix = '' }: { icon: React.ReactNode; value: number; label: string; suffix?: string }) {
  const { ref, isInView } = useInView(0.5)
  const count = useCountUp(value, isInView)

  return (
    <div ref={ref} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
      <div className="flex justify-center mb-2 text-[#1a5fb4]">{icon}</div>
      <div className="text-2xl font-bold text-[#1c1c1c]">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  )
}

export default function HeroSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="hero"
      className="pt-24 pb-16 md:pt-32 md:pb-20"
      style={{ backgroundColor: '#e8f0fe', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(26,95,180,0.03) 35px, rgba(26,95,180,0.03) 70px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Content */}
          <div
            ref={ref}
            className={isInView ? 'reveal-visible' : 'reveal-hidden'}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-[#1a5fb4] shadow-sm mb-6">
              <CheckCircle size={16} className="text-green-600" />
              Government of India | NCVT Certified
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1c1c1c] leading-tight mb-4">
              Computer Operator <br />
              <span className="text-[#1a5fb4]">&amp; Programming Assistant</span> (COPA)
            </h1>

            <p className="text-lg text-gray-600 font-medium mb-3">
              1-Year ITI Course | NSQF Level 3 | IT &amp; ITeS Sector
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Start your career in IT with India&apos;s most popular ITI trade. Learn computer 
              operations, MS Office, web development, programming with Python, and more. 
              Get a government-recognized NCVT certificate.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://admission.dvet.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#e66100] text-white font-semibold rounded-lg hover:bg-[#cc5500] transition-colors shadow-md"
              >
                Apply for Admission
                <ExternalLink size={18} />
              </a>
              <a
                href="#syllabus"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1a5fb4] text-[#1a5fb4] font-semibold rounded-lg hover:bg-[#1a5fb4] hover:text-white transition-colors"
              >
                Explore Syllabus
              </a>
            </div>
          </div>

          {/* Right - Illustration */}
          <div className={`flex justify-center ${isInView ? 'reveal-visible reveal-delay-2' : 'reveal-hidden'}`}>
            <img
              src="/hero-illustration.jpg"
              alt="Student learning programming at computer"
              className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <StatCard icon={<Clock size={24} />} value={1} label="Year Duration" />
          <StatCard icon={<BookOpen size={24} />} value={2} label="Semesters" />
          <StatCard icon={<Award size={24} />} value={100} label="NCVT Certified" suffix="%" />
          <StatCard icon={<GraduationCap size={24} />} value={52} label="Weeks Course" />
        </div>
      </div>
    </section>
  )
}
