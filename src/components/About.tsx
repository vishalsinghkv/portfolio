import { motion } from 'framer-motion'
import { Code2, Rocket, Shield, Users } from 'lucide-react'
import { glass } from '../lib/styles'
import { SectionHeading } from './SectionHeading'

const highlights = [
  {
    icon: Rocket,
    title: 'Product impact',
    text: 'Shipped fintech workflows that cut manual effort by up to 50% and improved engagement metrics.',
  },
  {
    icon: Shield,
    title: 'Compliance & reliability',
    text: 'RBI compliance features, zero-downtime migrations, and production fixes with ~40% lower MTTR.',
  },
  {
    icon: Code2,
    title: 'Full-stack craft',
    text: 'React, Angular, Next.js on the front; Spring Boot, Node.js, and Kafka on the back.',
  },
  {
    icon: Users,
    title: 'Team leadership',
    text: 'Mentored interns and collaborated across product, ops, and engineering.',
  },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about"
          title="About me"
          subtitle="Software engineer with 4+ years building lending and automotive fintech products at scale."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.article
              key={item.title}
              className={`${glass} group rounded-2xl p-6 transition-all hover:border-teal-500/30`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500 transition-colors group-hover:bg-teal-500/20">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
