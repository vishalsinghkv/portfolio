import { motion } from 'framer-motion'
import { FolderGit2 } from 'lucide-react'
import { projects } from '../data/portfolio'
import { glass } from '../lib/styles'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="bg-surface-elevated px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects"
          title="Selected projects"
          subtitle="Side projects and products that showcase full-stack skills."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              className={`${glass} group flex flex-col rounded-2xl p-8 transition-all hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500/20">
                <FolderGit2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-text-muted">
                    <span className="text-teal-500">→ </span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-teal-500/10 px-2 py-1 font-mono text-xs text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
