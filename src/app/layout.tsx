import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Nunito_Sans, Yeseva_One } from 'next/font/google'
import '../styles/globals.css'
import '../styles/styles.scss'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

const yesevaOne = Yeseva_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-yeseva-one',
  display: 'swap',
})

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
    <html
      lang="pt-BR"
      className={`${inter.variable} ${yesevaOne.variable} ${nunitoSans.className}`}
    >
      <body>{children}</body>
    </html>
  )
}
