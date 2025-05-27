'use client'

import {useState} from 'react';
import Link from 'next/link';
import styles from './SideBar.module.css';
import Image from 'next/image';
import NavBar from '../navigation/NavBar';

import cross from '../../assets/sideBarCross.png'

function SideBar({ open, handleClick }) {
  return (
    <div className={styles.sideBar}>
      <div className={`${styles.burgerMenu} ${open ? styles.open : ''}`} onClick={() => handleClick()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Image src={cross} alt='sign cross' width={14} height={14}/>
      <Link onClick={(e) => handleClick(e.target)} className={styles.sideBar__navListItem} href="https://julietasargsyan.github.io/Sign/#heroSection">hi there</Link>
      <Link onClick={handleClick} className={styles.sideBar__navListItem} href="https://julietasargsyan.github.io/Sign/#whoWeAreSection">who we are</Link>
      <Link onClick={handleClick} className={styles.sideBar__navListItem} href="https://julietasargsyan.github.io/Sign/#whatWeveDoneSection">what we&apos;ve done</Link>
      <Link onClick={handleClick} className={styles.sideBar__navListItem} href="https://julietasargsyan.github.io/Sign/#whatWeCanDoSection">what we can do</Link>
    </div>
  )
}

export default SideBar