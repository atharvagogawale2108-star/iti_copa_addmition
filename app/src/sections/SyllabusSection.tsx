import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { BookOpen } from 'lucide-react'

const semester1 = [
  { week: '1-2', module: 'M1: Assemble a Desktop PC', topics: 'Computer components, peripherals, internal parts, safety' },
  { week: '3', module: 'M2: Install Windows OS', topics: 'Windows installation, drivers, configuration' },
  { week: '4-5', module: 'M3: Computer Basics & Software', topics: 'Software installation, Linux basics, DOS commands' },
  { week: '6-8', module: 'M4: MS Word', topics: 'Document creation, formatting, mail merge, templates' },
  { week: '9-11', module: 'M5: MS Excel', topics: 'Formulas, functions, charts, data analysis' },
  { week: '12-13', module: 'M6: Presentation Software', topics: 'PowerPoint slides, animations, presentations' },
  { week: '14-15', module: 'M7: MS Access', topics: 'Database creation, forms, queries, reports' },
  { week: '16-18', module: 'M8: Static HTML Pages', topics: 'HTML structure, tags, tables, forms, CSS basics' },
  { week: '19-24', module: 'M9: JavaScript & Web Pages', topics: 'JS syntax, DOM, events, dynamic web pages' },
]

const semester2 = [
  { week: '25-27', module: 'M10: Advanced Excel & VBA', topics: 'Macros, user forms, pivot tables, advanced formulas' },
  { week: '28-33', module: 'M11: Python Programming', topics: 'Python basics, control statements, loops, functions, file handling' },
  { week: '34-36', module: 'M12: Cyber Security', topics: 'Cyber crimes, threats, security measures, safe browsing' },
  { week: '37-38', module: 'M13: Cloud Computing', topics: 'Cloud concepts, services, storage, Google Drive, OneDrive' },
  { week: '39-40', module: 'M14: E-Commerce', topics: 'Online shopping, digital payments, UPI, e-governance' },
  { week: '41-43', module: 'M15: Networking', topics: 'Network setup, IP addressing, routers, troubleshooting' },
  { week: '44-45', module: 'M16: MySQL Database', topics: 'Database design, SQL queries, PHP connection' },
  { week: '46-48', module: 'M17: Tally Accounting', topics: 'Tally ERP, GST, vouchers, financial reports' },
  { week: '49-52', module: 'M18: Project & Review', topics: 'Industrial visit, project work, exam preparation' },
]

export default function SyllabusSection() {
  const [activeTab, setActiveTab] = useState(1)
  const { ref, isInView } = useInView()

  const currentSyllabus = activeTab === 1 ? semester1 : semester2

  return (
    <section id="syllabus" className="py-20 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3">Complete Syllabus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The COPA course is divided into 2 semesters covering computer basics, office applications, 
            web development, programming, and more.
          </p>
          <div className="h-1 w-20 bg-[#1a5fb4] rounded-full mx-auto mt-4" />
        </div>

        {/* Tabs */}
        <div
          ref={ref}
          className={`flex justify-center gap-4 mb-8 ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <button
            onClick={() => setActiveTab(1)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 1
                ? 'bg-[#1a5fb4] text-white shadow-md'
                : 'bg-white text-[#1a5fb4] border-2 border-[#1a5fb4] hover:bg-[#e8f0fe]'
            }`}
          >
            Semester 1
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 2
                ? 'bg-[#e66100] text-white shadow-md'
                : 'bg-white text-[#e66100] border-2 border-[#e66100] hover:bg-[#fff3e6]'
            }`}
          >
            Semester 2
          </button>
        </div>

        {/* Syllabus Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid gap-0 divide-y divide-gray-100">
            {currentSyllabus.map((item, i) => (
              <div
                key={i}
                className={`p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3 hover:bg-gray-50 transition-colors ${
                  isInView ? 'reveal-visible' : 'reveal-hidden'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className={`flex-shrink-0 w-20 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                  activeTab === 1
                    ? 'bg-[#e8f0fe] text-[#1a5fb4]'
                    : 'bg-[#fff3e6] text-[#e66100]'
                }`}>
                  Wk {item.week}
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <BookOpen size={20} className="text-gray-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1c1c1c]">{item.module}</h4>
                    <p className="text-gray-500 text-sm">{item.topics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Employability Skills Note */}
        <div className="mt-6 bg-[#fff3e6] border border-orange-200 rounded-lg p-4 text-center">
          <p className="text-gray-700 text-sm">
            <strong>Employability Skills (4 hrs/week):</strong> Communication skills, English literacy, 
            IT literacy, entrepreneurship, productivity tools, and workplace safety — included throughout both semesters.
          </p>
        </div>
      </div>
    </section>
  )
}
