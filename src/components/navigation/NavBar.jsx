import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
import Footer from '../footer/Footer'

function NavBar({ open, handleClick }) {
  return (
    <nav className={`${styles.navigation} ${open ? styles.open : ''}`}>
      <ul>
        <li><Link onClick={() => handleClick()} href='/about'>about us</Link></li>
        <li><Link onClick={() => handleClick()} href=''>portfolio</Link></li>
        <li><Link onClick={() => handleClick()} href='/services'>services</Link></li>
        <li><Link onClick={() => handleClick()} href='/contact'>contact us</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar