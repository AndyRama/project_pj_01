import { Inter } from 'next/font/google'
import './globals.scss'

import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unlcoaching.com',
  description:
    'Allier entraînement rigoureux et nutrition équilibrée pour un mode de vie sain et durable.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}