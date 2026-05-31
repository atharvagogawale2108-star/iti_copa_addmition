import { useInView } from '@/hooks/useInView'
import { BookOpen, Download, ExternalLink, Monitor, FileText, BarChart3, Wrench, Languages } from 'lucide-react'

const officialBooks = [
  {
    title: 'COPA Trade Theory',
    subtitle: 'NIMI Official Theory Book',
    desc: 'Complete theory covering all modules — computer basics, MS Office, web dev, programming, and more. As per NSQF 2022 syllabus.',
    link: 'https://bharatskills.gov.in/pdf/E_Books/CTS/97/English/TT/COPA%20Theory%20-%20TT%20(NSQF%202022).pdf',
    icon: <BookOpen size={28} />,
    tag: 'PDF Download',
    tagColor: 'bg-[#e8f0fe] text-[#1a5fb4]',
  },
  {
    title: 'COPA Practical Vol I',
    subtitle: 'NIMI Practical Book (Semester 1)',
    desc: 'Hands-on exercises for Semester 1 — PC assembly, OS installation, MS Office, HTML, JavaScript. Step-by-step workshop guide.',
    link: 'https://bharatskills.gov.in/pdf/E_Books/CTS/97/English/TP/COPA%20-%20Volume%20I%20of%20II%20-%20TP%20(NSQF%202022).pdf',
    icon: <Download size={28} />,
    tag: 'PDF Download',
    tagColor: 'bg-[#e8f0fe] text-[#1a5fb4]',
  },
  {
    title: 'COPA Practical Vol II',
    subtitle: 'NIMI Practical Book (Semester 2)',
    desc: 'Hands-on exercises for Semester 2 — Advanced Excel, Python, Cyber Security, Cloud, Networking, MySQL, Tally, and project work.',
    link: 'https://bharatskills.gov.in/pdf/E_Books/CTS/97/English/TP/COPA%20-%20Volume%20II%20of%20II%20-%20TP%20(NSQF%202022).pdf',
    icon: <Download size={28} />,
    tag: 'PDF Download',
    tagColor: 'bg-[#e8f0fe] text-[#1a5fb4]',
  },
]

const additionalBooks = [
  {
    title: 'Workshop Calculation & Science',
    subtitle: 'Mathematics for ITI',
    desc: 'Essential math skills — algebra, geometry, trigonometry, and science fundamentals required for ITI trades.',
    link: 'https://bharatskills.gov.in/',
    icon: <BarChart3 size={24} />,
  },
  {
    title: 'Employability Skills Guide',
    subtitle: 'Soft Skills & Communication',
    desc: 'Communication skills, interview preparation, resume writing, English literacy, and workplace etiquette.',
    link: 'https://bharatskills.gov.in/',
    icon: <Languages size={24} />,
  },
  {
    title: 'Engineering Drawing Basics',
    subtitle: 'Technical Drawing Fundamentals',
    desc: 'Basic engineering drawing concepts — lines, shapes, projections, and diagram reading for technical work.',
    link: 'https://bharatskills.gov.in/',
    icon: <Wrench size={24} />,
  },
  {
    title: 'e-Content: COPA Semester 1',
    subtitle: 'Interactive Digital Lessons',
    desc: 'Week-by-week digital learning content with videos, quizzes, and interactive exercises for Semester 1.',
    link: 'https://blendedlearning.bharatskills.gov.in/course/view.php?id=6',
    icon: <Monitor size={24} />,
  },
  {
    title: 'e-Content: COPA Semester 2',
    subtitle: 'Interactive Digital Lessons',
    desc: 'Week-by-week digital learning content with videos, quizzes, and interactive exercises for Semester 2.',
    link: 'https://blendedlearning.bharatskills.gov.in/course/view.php?id=6',
    icon: <Monitor size={24} />,
  },
  {
    title: 'COPA Trade Syllabus PDF',
    subtitle: 'Official NCVT Syllabus',
    desc: 'Complete official syllabus PDF from BharatSkills — all modules, learning outcomes, and assessment criteria.',
    link: 'https://blendedlearning.bharatskills.gov.in/mod/resource/view.php?id=448',
    icon: <FileText size={24} />,
  },
]

export default function BooksSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="books" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3">Study Material &amp; Books</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Free official NIMI books and online reading materials. Download PDFs or access 
            interactive e-learning content from BharatSkills portal.
          </p>
          <div className="h-1 w-20 bg-[#1a5fb4] rounded-full mx-auto mt-4" />
        </div>

        {/* E-Learning Banner */}
        <div
          ref={ref}
          className={`bg-gradient-to-r from-[#1a5fb4] to-[#0d3d7a] rounded-xl p-6 md:p-8 text-white mb-10 ${
            isInView ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <Monitor size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold">BharatSkills e-Learning Portal</h3>
                <p className="text-blue-100 text-sm">
                  Access FREE online reading materials, videos, quizzes &amp; interactive content
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://blendedlearning.bharatskills.gov.in/course/view.php?id=6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#e66100] text-white font-semibold rounded-lg hover:bg-[#cc5500] transition-colors"
              >
                Access e-Learning
                <ExternalLink size={16} />
              </a>
              <a
                href="https://bharatskills.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors"
              >
                e-Books Library
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Government Approved</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Free Access</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">52 Weeks Content</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Hindi + English</span>
          </div>
        </div>

        {/* Official NIMI Books */}
        <h3 className="text-xl font-bold text-[#1c1c1c] mb-5 flex items-center gap-2">
          <BookOpen size={22} className="text-[#1a5fb4]" />
          Official NIMI Books (PDF)
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {officialBooks.map((book, i) => (
            <a
              key={i}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-2 hover:border-[#1a5fb4] transition-all duration-200 ${
                isInView ? 'reveal-visible' : 'reveal-hidden'
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#e8f0fe] rounded-lg flex items-center justify-center text-[#1a5fb4]">
                  {book.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${book.tagColor}`}>
                  {book.tag}
                </span>
              </div>
              <h4 className="font-bold text-[#1c1c1c] mb-1 group-hover:text-[#1a5fb4] transition-colors">
                {book.title}
              </h4>
              <p className="text-sm text-[#1a5fb4] font-medium mb-2">{book.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{book.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-[#1a5fb4] font-medium text-sm">
                <Download size={16} />
                Download PDF
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>

        {/* Additional Study Materials */}
        <h3 className="text-xl font-bold text-[#1c1c1c] mb-5 flex items-center gap-2">
          <FileText size={22} className="text-[#e66100]" />
          Additional Study Materials
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {additionalBooks.map((book, i) => (
            <a
              key={i}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-start gap-4 p-4 bg-[#f5f7fa] rounded-lg hover:bg-[#e8f0fe] transition-colors ${
                isInView ? 'reveal-visible' : 'reveal-hidden'
              }`}
              style={{ transitionDelay: `${(i + 4) * 100}ms` }}
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#e66100] flex-shrink-0 shadow-sm">
                {book.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-[#1c1c1c] text-sm group-hover:text-[#1a5fb4] transition-colors">
                  {book.title}
                </h4>
                <p className="text-xs text-[#e66100] font-medium mb-1">{book.subtitle}</p>
                <p className="text-gray-600 text-xs line-clamp-2">{book.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
