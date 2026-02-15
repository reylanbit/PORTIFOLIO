'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { profile } from '../data/site'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="font-display font-bold text-xl accent-text"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Marca minimalista com nome */}
          {profile.name.split(' ')[0]}
        </motion.a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="underline-anim">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <button className="md:hidden glass p-2 rounded-md" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-3 mb-3 glass rounded-xl p-4">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
                {l.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
