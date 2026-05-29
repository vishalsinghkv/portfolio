import { profile } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-muted">
          © {year} {profile.name}. Built with React & Vite.
        </p>
        <p className="font-mono text-xs text-text-muted">SDE-II · Full-stack engineer</p>
      </div>
    </footer>
  )
}
