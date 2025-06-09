import Image from "next/image"
import Link from "next/link"

import styles from './NavBar.module.css'
import signStarImg from '../../assets/Sign_Star_Purple.svg';

function NavBarItem({ href, text, handleClick }) {
  return (
    <li className={styles.navigation__item}>
        <Link onClick={() => handleClick()} href={href}>{text}</Link>
        <Image src={signStarImg} alt="sign digital star" width={61} height={85} className="star-shape" />
    </li>
  )
}

export default NavBarItem