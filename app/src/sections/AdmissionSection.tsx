import { useInView } from '@/hooks/useInView'
import { ExternalLink, FileCheck, Phone, AlertCircle, ChevronRight } from 'lucide-react'

const steps = [
  'Visit DVET Admission Portal (admission.dvet.gov.in)',
  'Register with your mobile number and email ID',
  'Fill the application form with personal & educational details',
  'Select your preferred ITI and COPA trade',
  'Upload required documents (10th marksheet, Aadhaar, photo)',
  'Pay the application fee (if applicable)',
  'Download and print your admission confirmation',
]

const documents = [
  '10th Marksheet / School Leaving Certificate',
  'Aadhaar Card (for identity verification)',
  'Passport Size Photographs (4-6 copies)',
  'Caste Certificate (SC/ST/OBC - if applicable)',
  'Domicile Certificate (for state quota)',
  'Valid Mobile Number & Email ID',
]

export default function AdmissionSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="admission" className="py-20 bg-[#e8f0fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3">How to Apply</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to apply for the COPA course at your nearest Government ITI.
          </p>
          <div className="h-1 w-20 bg-[#1a5fb4] rounded-full mx-auto mt-4" />
        </div>

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-10"
        >
          {/* Left - Process & Documents */}
          <div className={`${isInView ? 'reveal-visible' : 'reveal-hidden'}`}>
            {/* Admission Steps */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-bold text-[#1c1c1c] mb-4 flex items-center gap-2">
                <ChevronRight size={20} className="text-[#1a5fb4]" />
                Admission Process
              </h3>
              <div className="space-y-3">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-[#1a5fb4] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-700 text-sm pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1c1c1c] mb-4 flex items-center gap-2">
                <FileCheck size={20} className="text-green-600" />
                Documents Required
              </h3>
              <div className="space-y-2">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className={`${isInView ? 'reveal-visible reveal-delay-2' : 'reveal-hidden'}`}>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 lg:sticky lg:top-24">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#e66100] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1c1c1c] mb-2">Apply for Admission</h3>
                <p className="text-gray-600 text-sm">
                  Click below to visit the official DVET admission portal and start your application.
                </p>
              </div>

              <a
                href="https://admission.dvet.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#e66100] text-white text-center font-bold rounded-lg hover:bg-[#cc5500] transition-colors shadow-md mb-4"
              >
                Go to DVET Portal
                <ExternalLink size={18} className="inline ml-2" />
              </a>

              <div className="bg-[#fff3e6] rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <AlertCircle size={18} className="text-[#e66100] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">
                    Admissions typically open in <strong>June-July</strong> every year. 
                    Seats are limited, so apply early!
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone size={16} className="text-[#1a5fb4]" />
                <span>For queries, contact your nearest Government ITI</span>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  Official Portal: admission.dvet.gov.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
