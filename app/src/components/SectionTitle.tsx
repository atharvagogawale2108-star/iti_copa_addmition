import { useInView } from '@/hooks/useInView'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`mb-10 ${centered ? 'text-center' : ''} ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`mt-4 h-1 w-20 bg-[#1a5fb4] rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
