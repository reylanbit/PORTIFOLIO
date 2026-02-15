'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Inicializa tema a partir do localStorage ou preferência do sistema
    const saved = localStorage.getItem('theme')
    const initial = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggle = () => {
    // Alterna e persiste o tema
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <motion.button
      aria-label="Alternar tema"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 glass text-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {theme === 'dark' ? <FiMoon className="text-accent-purple" /> : <FiSun className="text-accent-electric" />}
      <span className="hidden sm:block">{theme === 'dark' ? 'Escuro' : 'Claro'}</span>
    </motion.button>
  )
}
