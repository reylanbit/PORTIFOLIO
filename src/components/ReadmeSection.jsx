'use client'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ReadmeSection({ content }) {
  if (!content) return null

  return (
    <section id="readme" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">GitHub Profile</h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-accent-purple to-accent-electric rounded" />
        </motion.div>

        <motion.div
          className="mt-8 glass rounded-3xl p-6 md:p-10 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="prose prose-invert max-w-none prose-img:rounded-xl prose-img:mx-auto prose-headings:text-accent-electric prose-a:text-accent-coral hover:prose-a:text-accent-purple transition-colors">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
