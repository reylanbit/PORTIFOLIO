import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import ReadmeSection from '../components/ReadmeSection'
import fs from 'fs'
import path from 'path'

export default async function Home() {
  let readme = ''
  try {
    const p = path.join(process.cwd(), 'README.md')
    readme = await fs.promises.readFile(p, 'utf8')
  } catch {}
  return (
    <main>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ReadmeSection content={readme} />
    </main>
  )
}
