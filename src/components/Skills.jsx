'use client'
import { motion } from 'framer-motion'
import { skills } from '../data/site'
import { FiZap, FiHeart } from 'react-icons/fi'

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">Habilidades</h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-accent-coral to-accent-purple rounded" />
        </motion.div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <motion.div
            className="glass rounded-3xl p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FiZap className="text-accent-electric" />
              <h3 className="font-semibold">Técnicas</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.tech.map((s) => (
                <motion.span
                  key={s}
                  className="px-4 py-2 rounded-full border border-white/20 hover:border-accent-purple/60 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass rounded-3xl p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FiHeart className="text-accent-coral" />
              <h3 className="font-semibold">Comportamentais</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((s) => (
                <motion.span
                  key={s}
                  className="px-4 py-2 rounded-full border border-white/20 hover:border-accent-coral/60 transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
