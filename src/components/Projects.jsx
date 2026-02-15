'use client'
import { motion } from 'framer-motion'
import { projects } from '../data/site'
import { FiMapPin, FiDatabase } from 'react-icons/fi'

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">Projetos</h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-accent-purple to-accent-coral rounded" />
        </motion.div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="group glass rounded-3xl overflow-hidden hover:shadow-glass transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-xl">{p.title}</h3>
                  <div className="flex items-center gap-2 opacity-75">
                    <FiMapPin />
                    <FiDatabase />
                  </div>
                </div>
                <p className="opacity-90">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full border border-white/20 group-hover:border-accent-purple/60 transition">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
