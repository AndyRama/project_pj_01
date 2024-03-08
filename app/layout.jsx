import { Inter } from 'next/font/google'
import './globals.scss'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unlcoaching.com',
  description:
    'Allier entraînement rigoureux et nutrition équilibrée pour un mode de vie sain et durable.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`{inter.className} bg-[#2f2e2e] overflow-x-hidden w-full`}
      >
        <Navigation />
        {children}
      </body>
      <Footer className="bg-white py-16 md:py-24" />
    </html>
  )
}
