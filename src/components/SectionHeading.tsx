import { motion } from 'framer-motion'

interface SectionHeadingProps {
  id: string
  title: string
  subtitle?: string
}

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.header
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-mono text-sm font-medium tracking-widest text-teal-500 uppercase">
        {id}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-lg text-text-muted">{subtitle}</p>
      )}
    </motion.header>
  )
}
