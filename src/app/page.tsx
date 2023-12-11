import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="main__container">
        <section className="main__firstSection">
          <div className="firstSection__infoContainer">
            <h1 className="infoContainer--name">José Pedro Bernardes</h1>
            <p className="infoContainer--description">
              Desenvolvedor Full-Stack especializado em criar e gerenciar sites
              de forma escalável e acessível. Busco constantemente soluções
              inovadoras, garantindo eficiência e aprimoramento contínuo para
              potencializar sua presença online.
            </p>
            <nav className="infoContainer__menuNavigate">
              <button className="menuNavigate--downloadCV"></button>
              <Link className="menuNavigate--linkedin" href={'#'}></Link>
              <Link className="menuNavigate--github" href={'#'}></Link>
              <a className="menuNavigate--formulario" href="#contato"></a>
              <Link className="menuNavigate--whatsapp" href={'#'}></Link>
            </nav>
          </div>
          <figure className="firstSection__imageContainer">
            <Image
              src="/images/minha_foto.svg"
              alt="Foto de apresentação do portfólio, com o rosto do José Pedro."
              width="2"
              height="2"
            />
          </figure>
        </section>
      </main>
      <Footer />
    </>
  )
}
