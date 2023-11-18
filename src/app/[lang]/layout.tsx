import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/globals.css'
import '../../styles/styles.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - José Pedro Bernardes',
  description:
    'Full-Stack developer specialized in creating websites and managing them in a scalable and accessible manner.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
