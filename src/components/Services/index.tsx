import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Services() {
  return (
    <section id="servicos" className="Service__container">
      <div className="alignGrid">
        <header>
          <h3>MEUS SERVIÇOS</h3>
          <h2>
            Posso te <span>ajudar</span> com
          </h2>
          <span></span>
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
              src="/images/links/Whatsapp.svg"
              alt="Logo do WhatsApp"
              width={30}
              height={30}
            />
          </Link>
        </header>
      </div>
    </section>
  )
}
