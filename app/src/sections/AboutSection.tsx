import { useInView } from '@/hooks/useInView'
import { Calendar, Users, Wallet, Award, CheckCircle } from 'lucide-react'

const infoCards = [
  { icon: <Calendar size={24} />, title: 'Duration', desc: '1 Year (2 Semesters, 52 Weeks)' },
  { icon: <Users size={24} />, title: 'Eligibility', desc: '10th Pass, Age 14-40 Years' },
  { icon: <Wallet size={24} />, title: 'Course Fee', desc: 'Govt ITI: Rs.1,000-5,000\nPrivate: Rs.15,000-30,000' },
  { icon: <Award size={24} />, title: 'Certificate', desc: 'NCVT Certificate (National Trade Certificate)' },
]

const skills = [
  'MS Office (Word, Excel, PowerPoint, Access)',
  'Web Development (HTML, CSS, JavaScript)',
  'Python Programming',
  'Computer Hardware & Networking',
  'Database Management (MySQL)',
  'Tally Accounting Software',
  'Cyber Security & Cloud Computing',
  'E-Commerce & Digital Payments',
]

export default function AboutSection() {
  const { ref: leftRef, isInView: leftVisible } = useInView()
  const { ref: rightRef, isInView: rightVisible } = useInView()

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3">About COPA Course</h2>
          <div className="h-1 w-20 bg-[#1a5fb4] rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Text */}
          <div ref={leftRef} className={leftVisible ? 'reveal-visible' : 'reveal-hidden'}>
            <p className="text-gray-700 leading-relaxed mb-4">
              COPA (Computer Operator and Programming Assistant) is one of the most sought-after 
              ITI courses in India, offered under the Craftsmen Training Scheme (CTS) by the 
              Directorate General of Training (DGT), Ministry of Skill Development and 
              Entrepreneurship, Government of India.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This 1-year course trains you in computer operations, office applications, 
              web development, and basic programming. It is an NSQF Level 3 course in the 
              IT &amp; ITeS sector, designed to make you job-ready from day one.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              On successful completion, you receive the National Trade Certificate (NTC) from 
              NCVT, which is recognized across India and internationally for employment in 
              both government and private sectors.
            </p>

            <h3 className="text-lg font-semibold text-[#1c1c1c] mb-3">Key Skills You Will Learn</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Info Cards */}
          <div ref={rightRef} className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${rightVisible ? 'reveal-visible reveal-delay-2' : 'reveal-hidden'}`}>
            {infoCards.map((card, i) => (
              <div
                key={i}
                className="bg-[#e8f0fe] rounded-xl p-5 border border-blue-100 hover:border-[#1a5fb4] transition-colors"
              >
                <div className="text-[#1a5fb4] mb-3">{card.icon}</div>
                <h4 className="font-semibold text-[#1c1c1c] mb-1">{card.title}</h4>
                <p className="text-gray-600 text-sm whitespace-pre-line">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
