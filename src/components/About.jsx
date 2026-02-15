'use client'
import { motion } from 'framer-motion'
import { about } from '../data/site'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-8 items-start">
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">Sobre mim</h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-accent-purple to-accent-electric rounded" />
        </motion.div>
        <motion.div
          className="lg:col-span-2 glass rounded-3xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed">{about}</p>
        </motion.div>
      </div>
    </section>
  )
}
