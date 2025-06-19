'use client'

import { useState, useEffect, useRef  } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from "./Header.module.css";

import { useSection } from '../../context/SectionContext';

import signWhite from '../../assets/SignWhite.png'
import signBlack from '../../assets/SignBlack.png'

const Header = ({ open, handleClick }) => {
  const { currentSection, setCurrentSection } = useSection();

  const handleLinkClick = () => {
    handleClick();
    setCurrentSection('heroSection');
  }

  return (
      <Link href="/" onClick={handleLinkClick} className={styles.logo} passHref>
        <Image 
          src={((currentSection === 'heroSection' || currentSection === 'about-us-section') && !open) ? signWhite : signBlack}
          alt='Sign Digital logo' 
          width={140}
          height={44}
          className={`${styles.logoImage}`}
        />
      </Link>
  )
}

export default Header;