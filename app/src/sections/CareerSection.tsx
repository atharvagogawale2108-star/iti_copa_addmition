import { useInView } from '@/hooks/useInView'
import { Briefcase, TrendingUp, GraduationCap, Building2, Train, Shield, Zap, Landmark } from 'lucide-react'

const jobRoles = [
  { title: 'Computer Operator / DEO', salary: 'Rs.12,000 - 25,000/month', desc: 'Handle typing, data entry, file management in offices' },
  { title: 'IT Support / Office Assistant', salary: 'Rs.15,000 - 30,000/month', desc: 'Hardware/software troubleshooting, system maintenance' },
  { title: 'Junior Programmer / Web Assistant', salary: 'Rs.18,000 - 35,000/month', desc: 'Basic coding in C, Python, HTML/CSS, website updates' },
  { title: 'BPO / Customer Support', salary: 'Rs.15,000 - 25,000/month', desc: 'Non-voice email/chat support, CRM data management' },
  { title: 'E-Governance Assistant (CSC)', salary: 'Rs.12,000 - 20,000/month', desc: 'PAN, Aadhaar services, bill payments at CSC centers' },
  { title: 'Lab Assistant / Instructor', salary: 'Rs.15,000 - 28,000/month', desc: 'Teach computer skills in schools, ITIs, coaching centers' },
  { title: 'Freelancer / Self-Employed', salary: 'Rs.10,000 - 40,000/month', desc: 'Data entry, web updates, typing work, virtual assistant' },
  { title: 'Back Office / MIS Executive', salary: 'Rs.18,000 - 35,000/month', desc: 'Excel reporting, data analysis, documentation management' },
]

const govtJobs = [
  { dept: 'Indian Railways (RRB)', roles: 'Junior Clerk, Computer Operator, Typist', salary: 'Rs.19,000 - 35,000/month', icon: <Train size={20} /> },
  { dept: 'Staff Selection Commission', roles: 'LDC, Data Entry Operator (SSC CHSL/MTS)', salary: 'Rs.18,000 - 25,500/month + perks', icon: <Building2 size={20} /> },
  { dept: 'DRDO', roles: 'Technician Grade A (CBT + Skill Test)', salary: 'Rs.19,000 - 36,000/month', icon: <Shield size={20} /> },
  { dept: 'BSF / Defence', roles: 'Head Constable (Radio Operator)', salary: 'Rs.25,000 - 35,000/month', icon: <Shield size={20} /> },
  { dept: 'ONGC / PSUs', roles: 'Assistant Technician, IT Operator', salary: 'Rs.20,000 - 40,000/month', icon: <Zap size={20} /> },
  { dept: 'Banking Sector', roles: 'Data Entry Operator, Office Assistant', salary: 'Rs.20,000 - 35,000/month', icon: <Landmark size={20} /> },
]

const growthPath = [
  { stage: 'Entry Level', role: 'Computer Operator / Data Entry', salary: 'Rs.8,000 - 15,000', years: '0-1 Year', color: '#1a5fb4' },
  { stage: 'Junior Level', role: 'Office Executive / IT Support', salary: 'Rs.20,000 - 28,000', years: '2-3 Years', color: '#1565c0' },
  { stage: 'Mid Level', role: 'Programmer / Admin Lead', salary: 'Rs.35,000 - 50,000', years: '4-6 Years', color: '#0d47a1' },
  { stage: 'Senior Level', role: 'Senior Programmer / IT Manager', salary: 'Rs.50,000 - 1,00,000+', years: '7+ Years', color: '#1c1c1c' },
]

const higherEducation = [
  { course: 'NIELIT CCC', duration: '3 Months', fee: 'Rs.500 - 2,000', desc: 'Mandatory for many government jobs. NSQF Level 3.', link: 'https://www.nielit.gov.in/' },
  { course: 'NIELIT O-Level', duration: '1 Year', fee: 'Rs.5,000 - 20,000', desc: 'Recognized by MHRD. 4 theory papers + practical + project. NSQF Level 5.', link: 'https://www.nielit.gov.in/' },
  { course: 'Diploma in Computer Applications', duration: '6-12 Months', fee: 'Rs.5,000 - 15,000', desc: 'From private institutes or polytechnics. DCA/ADCA options available.', link: '#' },
  { course: 'Advanced Certifications', duration: 'Varies', fee: 'Varies', desc: 'Tally, Advanced Excel, Web Design, Python, Digital Marketing, CITS for instructor role.', link: '#' },
]

export default function CareerSection() {
  const { ref: jobRef, isInView: jobsVisible } = useInView()
  const { ref: govtRef, isInView: govtVisible } = useInView()
  const { ref: growthRef, isInView: growthVisible } = useInView()
  const { ref: eduRef, isInView: eduVisible } = useInView()

  return (
    <section id="career" className="py-20 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3">Career Opportunities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            COPA opens doors to multiple career paths in government, private sector, and freelancing. 
            With experience and additional certifications, you can earn Rs.50,000+ per month.
          </p>
          <div className="h-1 w-20 bg-[#1a5fb4] rounded-full mx-auto mt-4" />
        </div>

        {/* Job Roles */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#1c1c1c] mb-6 flex items-center gap-2">
            <Briefcase size={22} className="text-[#1a5fb4]" />
            Private Sector Job Roles
          </h3>
          <div
            ref={jobRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {jobRoles.map((job, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-[#1a5fb4] transition-all ${
                  jobsVisible ? 'reveal-visible' : 'reveal-hidden'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h4 className="font-semibold text-[#1c1c1c] mb-1">{job.title}</h4>
                <p className="text-[#e66100] font-bold text-sm mb-2">{job.salary}</p>
                <p className="text-gray-600 text-sm">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Government Jobs */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <div ref={govtRef} className={govtVisible ? 'reveal-visible' : 'reveal-hidden'}>
            <h3 className="text-xl font-bold text-[#1c1c1c] mb-6 flex items-center gap-2">
              <Building2 size={22} className="text-green-600" />
              Government Jobs
            </h3>
            <div className="space-y-3">
              {govtJobs.map((job, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-4 border border-gray-100 flex items-start gap-3 hover:shadow-sm transition-shadow"
                >
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                    {job.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1c1c1c] text-sm">{job.dept}</h4>
                    <p className="text-gray-600 text-xs">{job.roles}</p>
                    <p className="text-green-700 font-medium text-xs mt-1">{job.salary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Path */}
          <div ref={growthRef} className={growthVisible ? 'reveal-visible reveal-delay-2' : 'reveal-hidden'}>
            <h3 className="text-xl font-bold text-[#1c1c1c] mb-6 flex items-center gap-2">
              <TrendingUp size={22} className="text-[#e66100]" />
              Career Growth Path
            </h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="space-y-4">
                {growthPath.map((step, i) => (
                  <div key={i} className="relative flex items-start gap-4 pl-2">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 z-10"
                      style={{ backgroundColor: step.color }}
                    >
                      {i + 1}
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-100 flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{step.stage}</span>
                        <span className="text-xs text-gray-400">{step.years}</span>
                      </div>
                      <h4 className="font-semibold text-[#1c1c1c]">{step.role}</h4>
                      <p className="text-[#1a5fb4] font-bold text-sm">{step.salary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Higher Education */}
        <div ref={eduRef} className={eduVisible ? 'reveal-visible' : 'reveal-hidden'}>
          <h3 className="text-xl font-bold text-[#1c1c1c] mb-6 flex items-center gap-2">
            <GraduationCap size={22} className="text-[#1a5fb4]" />
            Higher Education Options After COPA
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {higherEducation.map((edu, i) => (
              <a
                key={i}
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:border-[#1a5fb4] transition-all duration-200 group"
              >
                <h4 className="font-bold text-[#1c1c1c] mb-2 group-hover:text-[#1a5fb4] transition-colors">
                  {edu.course}
                </h4>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="px-2 py-1 bg-[#e8f0fe] rounded text-[#1a5fb4] font-medium">{edu.duration}</span>
                  <span>{edu.fee}</span>
                </div>
                <p className="text-gray-600 text-sm">{edu.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Industries Hiring */}
        <div className="mt-12 bg-white rounded-xl p-6 border border-gray-100">
          <h4 className="font-bold text-[#1c1c1c] mb-4 text-center">Industries Hiring COPA Graduates</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['Government Departments', 'Schools & Colleges', 'Banks & Finance', 'BPO/KPO Centers', 'Software Companies', 'Hospitals', 'Retail Outlets', 'Cyber Cafes', 'Print Media', 'E-Governance'].map((ind, i) => (
              <span key={i} className="px-4 py-2 bg-[#e8f0fe] text-[#1a5fb4] rounded-full text-sm font-medium">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
