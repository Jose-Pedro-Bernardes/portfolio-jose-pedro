import Image from 'next/image'
import React from 'react'
import MenuNav from './MenuNav'
import './Header.styles.scss'

export default function Header() {
  return (
    <header className="headerContainer">
      <figure className="logoContainer">
        <Image
          src="/images/Logo.svg"
          alt="Logo da Empresa"
          width="33"
          height="30"
        />
        <figcaption className="logoText">JPBM</figcaption>
      </figure>
      <MenuNav />
    </header>
  )
}
