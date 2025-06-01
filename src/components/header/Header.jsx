'use client'

import { useState, useEffect, useRef  } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Header.module.css";

import signWhite from '../../assets/SignWhite.png'
import signBlack from '../../assets/SignBlack.png'

const Header = ({ open, handleClick }) => {
  const [logoColor, setLogoColor] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div[class*=section]');
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 10 && rect.bottom >= 10) {
          currentSection = section;
        }
      });

      if (currentSection) {
        const isLightBG = window.getComputedStyle(currentSection).backgroundColor === 'rgb(255, 255, 255)';
        setLogoColor(open || isLightBG ? 'dark' : 'light');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  return (
      <Link href="/" onClick={() => handleClick()} className={styles.logo} passHref>
        <Image 
          src={logoColor === 'light' ? signWhite : signBlack}
          alt='Sign Digital logo' 
          width={140}
          height={44}
          className={`${styles.logoImage}`}
        />
      </Link>
  )
}

export default Header;