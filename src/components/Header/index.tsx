import Image from 'next/image'
import React from 'react'
import MenuNav from './MenuNav'

export default function Header() {
  return (
    <header>
      <figure className="logo-container">
        <Image
          src="caminho/do/seu/logotipo.png"
          alt="Logo da Empresa"
          width="2"
          height="2"
        />
        <figcaption>Texto do logotipo</figcaption>
      </figure>
      <MenuNav />
    </header>
  )
}
