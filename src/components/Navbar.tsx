import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { glass } from '../lib/styles'
import { ResumeDownload } from './ResumeDownload'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? `${glass} py-3 shadow-lg shadow-black/5` : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="font-mono text-sm font-semibold tracking-tight"
        >
          <span className="bg-gradient-to-br from-teal-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            {profile.name.split(' ')[0]}
          </span>
          <span className="opacity-60">.dev</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="text-sm text-text-muted transition-colors hover:text-teal-500"
            >
              {link.label}
            </button>
          ))}
          <ResumeDownload className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-600 transition-colors hover:bg-teal-500/20 dark:text-teal-400" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`${glass} flex h-10 w-10 items-center justify-center rounded-full`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className={`${glass} mt-2 mx-4 rounded-2xl p-4 md:hidden`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="block w-full rounded-lg px-4 py-3 text-left text-sm transition-colors hover:bg-teal-500/10"
            >
              {link.label}
            </button>
          ))}
          <ResumeDownload
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500/10 px-4 py-3 text-sm font-semibold text-teal-600 dark:text-teal-400"
            onClick={() => setOpen(false)}
          />
        </motion.div>
      )}
    </motion.nav>
  )
}
