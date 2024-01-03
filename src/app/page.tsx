import Footer from '@/components/Footer'
import Header from '@/components/Header'

import './Home.styles.scss'
import FirstSection from '@/components/FirstSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="main__container">
        <FirstSection />
      </main>
      <Footer />
    </>
  )
}
