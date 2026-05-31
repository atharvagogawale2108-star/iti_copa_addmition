import { useInView } from '@/hooks/useInView'
import { ExternalLink, GraduationCap, BookOpen, Monitor, Award, Building2, Landmark, Briefcase, Search, FileText, Globe } from 'lucide-react'

const links = [
  {
    title: 'DVET Admission Portal',
    url: 'https://admission.dvet.gov.in/',
    desc: 'Official portal for ITI admission in Maharashtra. Apply online for COPA and other trades.',
    icon: <GraduationCap size={24} />,
    color: 'bg-[#e66100] text-white',
    featured: true,
  },
  {
    title: 'BharatSkills e-Learning',
    url: 'https://blendedlearning.bharatskills.gov.in/course/view.php?id=6',
    desc: 'Free online COPA course content — videos, quizzes, reading materials for all 52 weeks.',
    icon: <Monitor size={24} />,
    color: 'bg-[#1a5fb4] text-white',
    featured: true,
  },
  {
    title: 'BharatSkills e-Books',
    url: 'https://bharatskills.gov.in/',
    desc: 'Download official NIMI books, syllabi, and study materials for all ITI trades.',
    icon: <BookOpen size={24} />,
    color: 'bg-[#1a5fb4] text-white',
    featured: true,
  },
  {
    title: 'NCVT MIS Portal',
    url: 'https://ncvtmis.gov.in/',
    desc: 'Check exam results, download mark sheets, and verify your NCVT certificate online.',
    icon: <Award size={24} />,
    color: 'bg-green-600 text-white',
    featured: false,
  },
  {
    title: 'NIMI Official Website',
    url: 'https://nimi.gov.in/',
    desc: 'National Instructional Media Institute — publisher of official ITI books and materials.',
    icon: <Building2 size={24} />,
    color: 'bg-[#1c1c1c] text-white',
    featured: false,
  },
  {
    title: 'DGT Website',
    url: 'https://dgt.gov.in/',
    desc: 'Directorate General of Training — official body overseeing ITI courses across India.',
    icon: <Landmark size={24} />,
    color: 'bg-[#1c1c1c] text-white',
    featured: false,
  },
  {
    title: 'Skill India Mission',
    url: 'https://www.skillindia.gov.in/',
    desc: 'National skill development portal — schemes, programs, and skill initiatives.',
    icon: <Globe size={24} />,
    color: 'bg-[#1a5fb4] text-white',
    featured: false,
  },
  {
    title: 'National Career Service',
    url: 'https://ncs.gov.in/',
    desc: 'Find jobs, register as a job seekker, and get career guidance from the government.',
    icon: <Briefcase size={24} />,
    color: 'bg-green-600 text-white',
    featured: false,
  },
  {
    title: 'NIELIT (DOEACC)',
    url: 'https://www.nielit.gov.in/',
    desc: 'Enroll for CCC, O-Level, and other computer courses recognized by the government.',
    icon: <FileText size={24} />,
    color: 'bg-[#1c1c1c] text-white',
    featured: false,
  },
  {
    title: 'ITI Directory',
    url: 'https://copa.iti.directory/',
    desc: 'Find ITI colleges, compare courses, and get guidance on ITI trades and admissions.',
    icon: <Search size={24} />,
    color: 'bg-[#1a5fb4] text-white',
    featured: false,
  },
]

export default function LinksSection() {
  const { ref, isInView } = useInView()

  const featuredLinks = links.filter(l => l.featured)
  const regularLinks = links.filter(l => !l.featured)

  return (
    <section id="links" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3">Important Links</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quick access to official government portals, e-learning platforms, and career resources 
            for COPA students.
          </p>
          <div className="h-1 w-20 bg-[#1a5fb4] rounded-full mx-auto mt-4" />
        </div>

        {/* Featured Links */}
        <div ref={ref} className="grid md:grid-cols-3 gap-4 mb-8">
          {featuredLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-xl text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ${
                isInView ? 'reveal-visible' : 'reveal-hidden'
              }`}
              style={{
                backgroundColor: link.color.includes('e66100') ? '#e66100' : '#1a5fb4',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  {link.icon}
                </div>
                <ExternalLink size={20} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-bold text-lg mb-2">{link.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{link.desc}</p>
            </a>
          ))}
        </div>

        {/* Regular Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regularLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-[#f5f7fa] rounded-lg p-4 hover:bg-[#e8f0fe] transition-colors ${
                isInView ? 'reveal-visible' : 'reveal-hidden'
              }`}
              style={{ transitionDelay: `${(i + 3) * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${link.color}`}>
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-[#1c1c1c] text-sm group-hover:text-[#1a5fb4] transition-colors truncate">
                    {link.title}
                  </h4>
                  <p className="text-gray-600 text-xs mt-1 line-clamp-2">{link.desc}</p>
                  <div className="flex items-center gap-1 mt-2 text-[#1a5fb4] text-xs font-medium">
                    Visit <ExternalLink size={12} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
