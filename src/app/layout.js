import './globals.css'
import CursorGlow from '../components/CursorGlow'
import Header from '../components/Header'
import Footer from '../components/Footer'
// Layout mínimo para diagnóstico

export const metadata = {
  title: 'Portfólio | Darlann Douglas',
  description: 'Portfólio pessoal de alto impacto visual com tendências 2025'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <CursorGlow />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
