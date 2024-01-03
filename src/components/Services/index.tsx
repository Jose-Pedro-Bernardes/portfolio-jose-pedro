import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './Services.styles.scss'

export default function Services() {
  return (
    <section id="servicos" className="services__container">
      <div className="alignGrid">
        <header className="services__header">
          <h3 className="services__h3">MEUS SERVIÇOS</h3>
          <h2 className="services__h2">
            Posso te <span className="colorBold">ajudar</span> com
          </h2>
          <span className="line"></span>
        </header>
        <article className="services__article">
          <p>
            Minha experiência no WordPress, desenvolvo sites práticos que
            simplificam a gestão de conteúdo. Ideal para aqueles que buscam um
            parceiro comprometido e apaixonado por transformar ideias em
            realidade. Estou pronto para colaborar de perto e ajudar a alcançar
            seus objetivos online. Vamos trabalhar juntos para criar uma
            presença digital eficaz e memorável!
          </p>
          <p>
            Além disso, sou especializado em front-end e proporciono soluções
            tecnológicas avançadas com JavaScript, Typescript, React,
            Styled-Components, Sass, Node.js e Express.js, garantindo aplicações
            web de qualidade.
          </p>
          <button>Vamos conversar !</button>
          <Link className="menuNavigate--link whatsapp" href={'#contato'}>
            <Image
              src="/images/BrandDesign.svg"
              alt="Ícone que sugere um design feito par uma marca."
              width={30}
              height={30}
            />
          </Link>
        </article>
        <aside>
          <div className="services__box">
            <Image
              src="/images/links/Whatsapp.svg"
              alt="Logo do WhatsApp"
              width={30}
              height={30}
            />
            <p>Identidade Visual da Marca</p>
          </div>
          <div className="services__box special">
            <Image
              src="/images/UIUX.svg"
              alt="Ícone que sugere design de UI e UX"
              width={30}
              height={30}
            />
            <p>Design UI e UX</p>
          </div>
          <div className="services__box special">
            <Image
              src="/images/wordpress.svg"
              alt="Ícone onde existe a logo do wordpress."
              width={30}
              height={30}
            />
            <p>Sites WordPress</p>
          </div>
          <div className="services__box">
            <Image
              src="/images/code.svg"
              alt="Ícone que sugere uma tag, que remete a programação."
              width={30}
              height={30}
            />
            <p>Programação de sites</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
