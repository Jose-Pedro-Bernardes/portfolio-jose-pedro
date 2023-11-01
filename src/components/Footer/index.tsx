import { user } from '@/user-info/user'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <section>
        <figure>
          <Image src="" width={10} height={10} alt="User Logo" />
          <figcaption>
            <h3>{user.firstName}</h3>
            <p>{user.email}</p>
          </figcaption>
          <p>{user.thanks}</p>
        </figure>
        <nav>
          <h3>Media</h3>
          <ul>
            <li>
              <Link href="#">
                <Image src="" width={10} height={10} alt="Media Link 1" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="" width={10} height={10} alt="Media Link 2" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="" width={10} height={10} alt="Media Link 3" />
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <p>{user.copyright}</p>
    </footer>
  )
}
