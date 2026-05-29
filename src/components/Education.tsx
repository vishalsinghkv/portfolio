import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'
import { glass } from '../lib/styles'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="education" title="Education" />
        <motion.div
          className={`${glass} flex flex-col gap-6 rounded-2xl p-8 sm:flex-row sm:items-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
            <GraduationCap className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold">{education.degree}</h3>
            <p className="mt-2 font-medium">{education.institution}</p>
            <p className="mt-1 text-sm text-text-muted">
              {education.location} · {education.period}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
