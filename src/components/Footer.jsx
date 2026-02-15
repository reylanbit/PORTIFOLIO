'use client'
export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <p className="opacity-70">© {new Date().getFullYear()} Darlann Douglas. Todos os direitos reservados.</p>
        <a href="#home" className="underline-anim">Voltar ao topo</a>
      </div>
    </footer>
  )
}
