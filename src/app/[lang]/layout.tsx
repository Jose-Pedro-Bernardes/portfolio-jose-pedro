import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/globals.css'
import '../../styles/styles.scss'
import { i18n } from '@/config/i18n.config'
const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }))
  return languages
}

export const metadata: Metadata = {
  title: 'Portfolio - José Pedro Bernardes',
  description:
    'Full-Stack developer specialized in creating websites and managing them in a scalable and accessible manner.',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <header></header>
        {children}
        <footer></footer>
      </body>
    </html>
  )
}
