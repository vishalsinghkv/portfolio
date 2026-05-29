import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons'
import { profile } from '../data/portfolio'
import { glass } from '../lib/styles'
import { SectionHeading } from './SectionHeading'

const links = [
  { icon: Mail, label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
  { icon: Phone, label: 'Phone', href: `tel:${profile.phone}`, text: profile.phone },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: profile.linkedin,
    text: 'vishal-kumar-singh',
  },
  { icon: GitHubIcon, label: 'GitHub', href: profile.github, text: 'vishalsinghkv' },
]

export function Contact() {
  return (
    <section id="contact" className="bg-surface-elevated px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact"
          title="Let's connect"
          subtitle="Open to opportunities and interesting collaborations. Reach out anytime."
        />
        <motion.div
          className={`${glass} rounded-2xl p-8 sm:p-10`}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-xl border border-border p-4 transition-all hover:border-teal-500/40 hover:bg-teal-500/5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-500/10 text-teal-500 transition-colors group-hover:bg-teal-500/20">
                  <link.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-text-muted uppercase">
                    {link.label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium break-all">{link.text}</p>
                </div>
              </motion.a>
            ))}
          </div>
          <a
            href={`mailto:${profile.email}?subject=Hello%20from%20your%20portfolio`}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 py-4 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-transform hover:scale-[1.01] sm:w-auto sm:px-10"
          >
            <Send className="h-4 w-4" />
            Send an email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
