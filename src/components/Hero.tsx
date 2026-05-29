import { motion } from 'framer-motion'
import { ArrowDown, Mail, Phone } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons'
import { profile } from '../data/portfolio'
import { glass } from '../lib/styles'

const socials = [
  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
  { href: `tel:${profile.phone}`, icon: Phone, label: 'Phone' },
  { href: profile.linkedin, icon: LinkedInIcon, label: 'LinkedIn' },
  { href: profile.github, icon: GitHubIcon, label: 'GitHub' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.15)_0%,rgba(99,102,241,0.08)_40%,transparent_70%)]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.2),transparent_70%)] opacity-40" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-widest text-teal-500 uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-br from-teal-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="mt-4 text-2xl font-semibold text-text-muted sm:text-3xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-transform hover:scale-[1.02]"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`${glass} inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:border-teal-500/40`}
            >
              View experience
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${glass} group flex h-11 w-11 items-center justify-center rounded-full transition-all hover:border-teal-500/50 hover:shadow-md hover:shadow-teal-500/10`}
                aria-label={label}
              >
                <Icon className="h-4 w-4 transition-colors group-hover:text-teal-500" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 text-teal-500/70" />
        </motion.a>
      </div>
    </section>
  )
}
