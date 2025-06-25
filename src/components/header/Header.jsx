import Link from 'next/link';

import styles from "./Header.module.css";
import LogoSvgComponent from '../LogoSvgComponent';

const Header = ({ handleClick }) => {

  return (
      <Link href="/" onClick={handleClick} className={styles.logo} passHref>
        <LogoSvgComponent className={styles.svgLogo}/>
      </Link>
  )
}

export default Header;