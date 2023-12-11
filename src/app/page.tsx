import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header>
        <figure className="logo-container">
          <Image
            src="caminho/do/seu/logotipo.png"
            alt="Logo da Empresa"
            width="2"
            height="2"
          />
          <figcaption>Texto do logotipo</figcaption>
          <nav>
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
        </figure>
      </header>
      <main></main>
      <footer></footer>
    </>
  )
}
