'use client'
import { motion } from 'framer-motion'
import { profile } from '../data/site'
import { FiLinkedin, FiPhone, FiMail, FiCar, FiShield, FiGithub } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="section pt-36">
      <div className="mx-auto max-w-7xl px-6 grid-asym items-center">
        <div>
          <motion.h1
            className="font-display leading-tight"
            style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 800 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Título grande com gradiente de destaque */}
            Darlann Douglas
            <span className="block accent-text">Portfólio 2025</span>
          </motion.h1>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* Badges de diferenciais */}
            <span className="glass px-4 py-2 rounded-full text-sm inline-flex items-center gap-2">
              <FiCar />
              {profile.cnh}
            </span>
            <span className="glass px-4 py-2 rounded-full text-sm inline-flex items-center gap-2">
              <FiShield />
              Disponível para projetos e desafios
            </span>
          </motion.div>

          <motion.p
            className="mt-6 max-w-2xl text-lg opacity-90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Construo experiências digitais com estética sofisticada, performance e atenção a detalhes.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            {/* CTAs de contato */}
            <a href={profile.whatsappLink} target="_blank" rel="noreferrer" className="glass px-5 py-3 rounded-lg inline-flex items-center gap-2 hover:shadow-glass transition">
              <FiPhone className="text-accent-electric" /> WhatsApp
            </a>
            <a href={`mailto:${profile.email}`} className="glass px-5 py-3 rounded-lg inline-flex items-center gap-2 hover:shadow-glass transition">
              <FiMail className="text-accent-coral" /> E-mail
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="glass px-5 py-3 rounded-lg inline-flex items-center gap-2 hover:shadow-glass transition">
              <FiLinkedin className="text-accent-purple" /> LinkedIn
            </a>
            <a href="#" className="glass px-5 py-3 rounded-lg inline-flex items-center gap-2 hover:shadow-glass transition">
              <FiGithub /> GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Ilustração abstrata em card glassmorphism */}
          <div className="glass rounded-3xl p-6">
            <img src="/images/wireframe.svg" alt="Ilustração abstrata" className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
