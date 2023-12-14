import Image from 'next/image'
import React from 'react'

import './Footer.styles.scss'

export default function Footer() {
  return (
    <footer className="footer__container">
      <section>
        <figure className="nome da classe">
          <Image
            src="/images/logoWhite.svg"
            alt="Logo da Empresa"
            width="24"
            height="24"
          />
          <figcaption>Texto do logotipo</figcaption>
        </figure>
        <p>josepedro.bernardes1@gmail.com</p>
      </section>
      <section>
        <p>
          Obrigado por visitar meu portfólio! Vamos conversar? Entre em contato!
        </p>
        <p>© Copyright 2023. Made by José Pedro Bernardes</p>
      </section>
    </footer>
  )
}
