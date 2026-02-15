'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/site'
import { FiSend, FiPhone, FiMail, FiLinkedin, FiLoader, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [responseMsg, setResponseMsg] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setResponseMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setResponseMsg('Mensagem salva com sucesso!')
      } else {
        setStatus('error')
        setResponseMsg(data.message || 'Ocorreu um erro ao enviar.')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
      setResponseMsg('Erro de conexão. Tente novamente.')
    }
  }

  const sendToWhatsApp = () => {
    const text = `New message from ${formData.name} (${formData.email}): ${formData.message}`
    const url = `https://wa.me/5585985322374?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contato" className="section">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">Contato</h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-accent-electric to-accent-coral rounded" />
          <div className="mt-6 flex flex-col gap-3">
            <a href={profile.whatsappLink} target="_blank" rel="noreferrer" className="underline-anim inline-flex items-center gap-2">
              <FiPhone /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="underline-anim inline-flex items-center gap-2">
              <FiMail /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline-anim inline-flex items-center gap-2">
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {status === 'success' ? (
            <div className="text-center py-10 space-y-4">
              <FiCheckCircle className="text-5xl text-green-500 mx-auto" />
              <h3 className="text-2xl font-bold">Mensagem Enviada!</h3>
              <p className="opacity-80">Sua mensagem foi salva no banco de dados.</p>
              
              <div className="pt-4 border-t border-white/10 mt-6">
                <p className="mb-4 text-sm opacity-70">Para uma resposta mais rápida, notifique-me no WhatsApp:</p>
                <button 
                  onClick={sendToWhatsApp}
                  className="glass bg-green-500/20 hover:bg-green-500/30 px-6 py-3 rounded-xl inline-flex items-center gap-2 transition w-full justify-center"
                >
                  <FiPhone /> Enviar cópia no WhatsApp
                </button>
              </div>

              <button 
                onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', message: '' }) }}
                className="text-sm underline opacity-60 hover:opacity-100 mt-4"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Nome</label>
                  <input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full rounded-lg bg-white/60 dark:bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-accent-purple transition" 
                    placeholder="Seu nome" 
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">E-mail</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full rounded-lg bg-white/60 dark:bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-accent-purple transition" 
                    placeholder="voce@exemplo.com" 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm mb-2">Mensagem</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="w-full rounded-lg bg-white/60 dark:bg-white/10 border border-white/20 px-4 py-3 outline-none h-32 focus:border-accent-purple transition" 
                    placeholder="Escreva sua mensagem..." 
                  />
                </div>
              </div>
              
              {status === 'error' && (
                <div className="mt-4 p-3 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center gap-2 text-sm text-red-200">
                  <FiAlertCircle /> {responseMsg}
                </div>
              )}

              <button 
                disabled={status === 'loading'}
                className="mt-6 glass px-5 py-3 rounded-lg inline-flex items-center gap-2 hover:shadow-glass transition disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center"
              >
                {status === 'loading' ? <FiLoader className="animate-spin" /> : <FiSend />} 
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
