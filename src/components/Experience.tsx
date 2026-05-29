import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolio'
import { glass } from '../lib/styles'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience"
          title="Work experience"
          subtitle="Building products in lending and automotive fintech."
        />
        <div className="relative space-y-0">
          <div className="absolute top-0 bottom-0 left-[19px] hidden w-px bg-border sm:block" />
          {experience.map((job, i) => (
            <motion.article
              key={job.company}
              className="relative pb-12 pl-0 sm:pl-14"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="absolute top-1 left-0 hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated sm:flex">
                <Briefcase className="h-4 w-4 text-teal-500" />
              </div>
              <div className={`${glass} rounded-2xl p-6 sm:p-8`}>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{job.company}</h3>
                    <p className="mt-1 font-medium text-teal-500">{job.role}</p>
                  </div>
                  <span className="font-mono text-xs text-text-muted sm:text-sm">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {job.highlights.map((point) => (
                    <li
                      key={point.slice(0, 40)}
                      className="flex gap-3 text-sm leading-relaxed text-text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
