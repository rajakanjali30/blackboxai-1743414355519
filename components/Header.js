import Link from 'next/link'
import { useEffect } from 'react'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

export default function Header({ theme, onThemeToggle, mobileMenuOpen, onMobileMenuToggle }) {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary dark:text-white">
            NextApp
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-primary transition">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-primary transition">
                About
              </Link>
              <Link href="/services" className="text-gray-700 dark:text-gray-200 hover:text-primary transition">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-primary transition">
                Contact
              </Link>
            </nav>

            <button 
              onClick={onThemeToggle}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={onMobileMenuToggle}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-primary transition">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-primary transition">
                About
              </Link>
              <Link href="/services" className="text-gray-700 dark:text-gray-200 hover:text-primary transition">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-primary transition">
                Contact
              </Link>
            </nav>
            <button 
              onClick={onThemeToggle}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
              <span>Toggle Theme</span>
            </button>
          </div>
        )}
      </div>
    </header>
  )
}