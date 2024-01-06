import Footer from '@/components/Footer'
import Header from '@/components/Header'

import './Home.styles.scss'
import FirstSection from '@/components/FirstSection'
import Services from '@/components/Services'
import ServicePlus from '@/components/ServicePlus'

export default function Home() {
  return (
    <>
      <Header />
      <main className="main__container">
        <FirstSection />
        <Services />
        <ServicePlus />
      </main>
      <Footer />
    </>
  )
}
