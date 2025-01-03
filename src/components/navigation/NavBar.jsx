import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
import Footer from '../footer/Footer'

function NavBar({ open }) {
  return (
    <nav className={`${styles.navigation} ${open ? styles.open : ''}`}>
      <ul>
        <li><Link href=''>about us</Link></li>
        <li><Link href=''>portfolio</Link></li>
        <li><Link href=''>services</Link></li>
        <li><Link href=''>contact us</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar