import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './Services.styles.scss'

export default function Services() {
  return (
    <section id="servicos" className="services__container">
      <div className="alignGridx">
        <div className="text__container">
          <header className="services__header">
            <h3 className="services__h3">MEUS SERVIÇOS</h3>
            <h2 className="services__h2">
              Posso te <span className="colorBold">ajudar</span> com
            </h2>
            <span className="line"></span>
          </header>
          <article className="services__article">
            <p className="article__p">
              Minha experiência no WordPress, desenvolvo sites práticos que
              simplificam a gestão de conteúdo. Ideal para aqueles que buscam um
              parceiro comprometido e apaixonado por transformar ideias em
              realidade. Estou pronto para colaborar de perto e ajudar a
              alcançar seus objetivos online. Vamos trabalhar juntos para criar
              uma presença digital eficaz e memorável!
            </p>
            <p className="article__p">
              Além disso, sou especializado em front-end e proporciono soluções
              tecnológicas avançadas com JavaScript, Typescript, React,
              Styled-Components, Sass, Node.js e Express.js, garantindo
              aplicações web de qualidade.
            </p>
            <div className="btn__container">
              <button className="btnCall">Vamos conversar !</button>
              <Link className="link__whatsapp" href={'#contato'}>
                <Image
                  src="/images/links/Whatsapp.svg"
                  alt="Logo do WhatsApp"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </article>
        </div>
        <aside className="services_content">
          <div className="services__box">
            <Image
              className="boxImg"
              src="/images/BrandDesign.svg"
              alt="Ícone que sugere um design feito par uma marca."
              width={44}
              height={44}
            />
            <p className="text_box">Identidade Visual da Marca</p>
          </div>
          <div className="services__box special box2">
            <Image
              className="boxImg"
              src="/images/UIUX.svg"
              alt="Ícone que sugere design de UI e UX"
              width={44}
              height={44}
            />
            <p className="text_box">Design UI e UX</p>
          </div>
          <div className="services__box special">
            <Image
              className="boxImg"
              src="/images/wordpress.svg"
              alt="Ícone onde existe a logo do wordpress."
              width={44}
              height={44}
            />
            <p className="text_box">Sites WordPress</p>
          </div>
          <div className="services__box box4">
            <Image
              className="boxImg"
              src="/images/code.svg"
              alt="Ícone que sugere uma tag, que remete a programação."
              width={44}
              height={44}
            />
            <p className="text_box">Programação de sites</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
