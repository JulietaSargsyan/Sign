'use client';

import Image from "next/image"
import Link from "next/link"
import { usePathname  } from 'next/navigation';

import styles from './NavBar.module.css'
import signStarImg from '../../assets/Sign_Star_Purple.svg';

function NavBarItem({ href, text, handleClick }) {
  const pathname = usePathname();

  return (
    <li className={styles.navigation__item}>
        <Link onClick={() => handleClick()} href={href}>{text}</Link>
        <Image className={`${pathname === href ? styles.active : ''} star-shape`} src={signStarImg} alt="sign digital star" width={61} height={85} />
    </li>
  )
}

export default NavBarItem