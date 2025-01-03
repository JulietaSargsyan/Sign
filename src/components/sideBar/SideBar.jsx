'use client'

import {useState} from 'react';
import Link from 'next/link';
import styles from './SideBar.module.css';
import Image from 'next/image';
import NavBar from '../navigation/NavBar';
// import cross from '@/sideBarCross.png'

function SideBar({ open, handleClick }) {
  return (
    <div className={styles.sideBar}>
      <div className={`${styles.burgerMenu} ${open ? styles.open : ''}`} onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Image src='/sideBarCross.png' alt='sign cross' width={14} height={14}/>
      <Link className={styles.sideBar__navListItem} href="#heroSection">hi there</Link>
      <Link className={styles.sideBar__navListItem} href="#whoWeAreSection">who we are</Link>
      <Link className={styles.sideBar__navListItem} href="#whatWeveDoneSection">what we&apos;ve done</Link>
      <Link className={styles.sideBar__navListItem} href="#whatWeCanDoSection">what we can do</Link>
    </div>
  )
}

export default SideBar