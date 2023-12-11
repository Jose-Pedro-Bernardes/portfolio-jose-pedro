import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <section>
        <figure className="nome da classe">
          <Image
            src="caminho/do/seu/logotipo.png"
            alt="Logo da Empresa"
            width="2"
            height="2"
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
