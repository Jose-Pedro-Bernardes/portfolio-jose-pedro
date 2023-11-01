import { user } from '@/user-info/user'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <section>
        <figure>
          <Image src="" alt="" width={10} height={10}></Image>
          <figcaption>
            <h3>{user.firstName}</h3>
          </figcaption>
        </figure>
        <nav>
          <Link href="#">início</Link>
          <Link href="#">sobre-mim</Link>
          <Link href="#">portfólio</Link>
          <Link href="#">contatos</Link>
        </nav>
        <form>
          <button></button>
          <select name="" id="">
            <option></option>
            <option></option>
          </select>
        </form>
      </section>
    </header>
  )
}
