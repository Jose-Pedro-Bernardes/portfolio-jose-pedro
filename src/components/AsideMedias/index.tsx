import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AsideMedias() {
  return (
    <aside>
      <figure>
        <Image
          src=""
          alt="Linha reta apontando para redes sociais logo abaixo."
          width={10}
          height={10}
        ></Image>
      </figure>
      <nav>
        <Link href="#">
          <Image src="" alt="" width={10} height={10}></Image>
        </Link>
        <Link href="#">
          <Image src="" alt="" width={10} height={10}></Image>
        </Link>
        <Link href="#">
          <Image src="" alt="" width={10} height={10}></Image>
        </Link>
      </nav>
      <section>
        <button></button>
      </section>
    </aside>
  )
}
