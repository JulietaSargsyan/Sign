import Link from 'next/link';

import styles from "./Header.module.css";
import LogoSvgComponent from '../LogoSvgComponent';
import { useSection } from '@/src/context/SectionContext';

const Header = ({ handleClick }) => {
  const { setCurrentSection } = useSection();

  const handleLogoClick = () => {
    handleClick();
    setCurrentSection('heroSection')
  }

  return (
      <Link href="/" onClick={handleLogoClick} className={styles.logo} passHref>
        <LogoSvgComponent className={styles.svgLogo}/>
      </Link>
  )
}

export default Header;