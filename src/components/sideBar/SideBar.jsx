'use client'

import {useState} from 'react';
import Link from 'next/link';
import styles from './SideBar.module.css';
import Image from 'next/image';
// import cross from '@/sideBarCross.png'

function SideBar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.sideBar}>
      <div className={`${styles.burgerMenu} ${open ? styles.open : ''}`} onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Image src='/sideBarCross.png' alt='sign cross' width={14} height={14}/>
      <Link className={styles.sideBar__navListItem} href="../../app/page/HomePage#section">hi there</Link>
      <Link className={styles.sideBar__navListItem} href="../../app/page/HomePage#section">who we are</Link>
      <Link className={styles.sideBar__navListItem} href="../../app/page/HomePage#section">what we&apos;ve done</Link>
      <Link className={styles.sideBar__navListItem} href="../../app/page/HomePage#section">what we can do</Link>
    </div>
  )
}

export default SideBar