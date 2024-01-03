import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './FirstSection.styles.scss'

export default function FirstSection() {
  return (
    <section className="main__firstSection">
      <div className="alignGrid">
        <div className="firstSection__infoContainer">
          <h1 className="infoContainer--name">José Pedro Bernardes</h1>
          <p className="infoContainer--description">
            <span className="bold-color">Desenvolvedor Full-Stack</span>{' '}
            especializado em criar e gerenciar sites de forma escalável e
            acessível. Busco constantemente soluções inovadoras, garantindo
            eficiência e aprimoramento contínuo para potencializar sua presença
            online.
          </p>
          <nav className="infoContainer__menuNavigate">
            <button className="menuNavigate--downloadCV">Baixar CV</button>
            <Link className="menuNavigate--link linkedIn" href={'#'}>
              <Image
                src="/images/links/Linkedin.svg"
                alt="Logo do linkedIn"
                width={35}
                height={35}
              />
            </Link>
            <Link className="menuNavigate--link github" href={'#'}>
              <Image
                src="/images/links/Github.svg"
                alt="Logo do linkedIn"
                width={33}
                height={33}
              />
            </Link>
            <Link className="menuNavigate--link whatsapp" href={'#contato'}>
              <Image
                src="/images/links/Whatsapp.svg"
                alt="Logo do linkedIn"
                width={30}
                height={30}
              />
            </Link>
            <Link className="menuNavigate--link email" href={'#contato'}>
              <Image
                src="/images/links/Gmail.svg"
                alt="Logo do linkedIn"
                width={28}
                height={30}
              />
            </Link>
          </nav>
        </div>
        <figure className="firstSection__imageContainerMOBILE">
          <Image
            src="/images/FotoPerfil.svg"
            alt="Foto de apresentação do portfólio, com o rosto do José Pedro."
            width={140}
            height={141.6}
          />
        </figure>
        <figure className="firstSection__imageContainerDESK">
          <Image
            src="/images/FotoPerfil.svg"
            alt="Foto de apresentação do portfólio, com o rosto do José Pedro."
            width={349}
            height={387}
          />
        </figure>
      </div>
    </section>
  )
}
