import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { glass } from '../lib/styles'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${glass} flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:border-teal-500/40`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 text-indigo-600" />
      )}
    </button>
  )
}
