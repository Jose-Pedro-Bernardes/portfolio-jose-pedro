import React from 'react'
import './MenuNav.styles.scss'
import Image from 'next/image'

export default function MenuNav() {
  return (
    <>
      <button className="hamburguer_btn">
        <Image
          src="/images/MenuHamburguer.svg"
          alt="Botão para abrir o menu de navegação do site."
          width={27}
          height={25}
        />
      </button>
      <nav className="menuNav">
        <a href="#" title="Página Inicial">
          Início
        </a>
        <a href="#servicos" title="Nossos Serviços">
          Serviços
        </a>
        <a href="#sobre" title="Sobre Nós">
          Sobre
        </a>
        <a href="#portfolio" title="Nosso Portfólio">
          Portfólio
        </a>
        <a href="#contato" title="Entre em Contato">
          Contato
        </a>
      </nav>
    </>
  )
}
