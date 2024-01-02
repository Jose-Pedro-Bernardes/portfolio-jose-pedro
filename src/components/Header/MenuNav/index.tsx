'use client'
import { useState } from 'react'
import Image from 'next/image'
import './MenuNav.styles.scss'

export default function MenuNav() {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <>
      <button className="hamburguer_btn" onClick={toggleMenu}>
        <Image
          src="/images/MenuHamburguer.svg"
          alt="Botão para abrir o menu de navegação do site."
          width={27}
          height={25}
        />
      </button>
      <nav className={`menuNav ${menuVisible ? 'show' : ''}`}>
        <button className="close_btn" onClick={toggleMenu}>
          X
        </button>
        <a href="#" className="link_a" title="Página Inicial">
          Início
        </a>
        <a
          href="#servicos"
          className="link"
          title="Nossos Serviços"
          onClick={toggleMenu}
        >
          Serviços
        </a>
        <a
          href="#sobre"
          className="link"
          title="Sobre Nós"
          onClick={toggleMenu}
        >
          Sobre
        </a>
        <a
          href="#portfolio"
          className="link"
          title="Nosso Portfólio"
          onClick={toggleMenu}
        >
          Portfólio
        </a>
        <a
          href="#contato"
          className="link"
          title="Entre em Contato"
          onClick={toggleMenu}
        >
          Contato
        </a>
      </nav>
    </>
  )
}
