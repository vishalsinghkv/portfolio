import { motion } from 'framer-motion'
import { skillCategories } from '../data/portfolio'
import { glass } from '../lib/styles'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="bg-surface-elevated px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="skills"
          title="Skills & tools"
          subtitle="Technologies I use to build reliable, user-focused applications."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.label}
              className={`${glass} rounded-2xl p-6`}
              initial={{ opacity: 0, x: ci % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08, duration: 0.5 }}
            >
              <h3 className="font-mono text-xs font-medium tracking-widest text-teal-500 uppercase">
                {category.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:border-teal-500/50 hover:bg-teal-500/10"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + si * 0.03 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
