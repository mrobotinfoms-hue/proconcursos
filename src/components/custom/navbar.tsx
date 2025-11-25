'use client'

import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">PC</span>
            </div>
            <span className="text-xl font-bold">PRO CONCURSOS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Funcionalidades
            </Link>
            <Link href="/planos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Planos
            </Link>
            <Link href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Depoimentos
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              href="/login"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium"
            >
              Entrar
            </Link>
            <Link
              href="/#get-started"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Começar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800 mt-2">
            <Link
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Funcionalidades
            </Link>
            <Link
              href="/planos"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Planos
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Depoimentos
            </Link>
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium"
            >
              Entrar
            </Link>
            <Link
              href="/#get-started"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mt-2"
            >
              Começar Agora
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
