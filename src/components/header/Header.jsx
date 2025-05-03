'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Header.module.css";

const Header = ({ open, handleClick }) => {
  const [logoColor, setLogoColor] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 10 && rect.bottom >= 10) {
          currentSection = section;
        }
      });
      console.log('sections', sections)

      if (currentSection) {
        const isLightBG = window.getComputedStyle(currentSection).backgroundColor === 'rgb(255, 255, 255)';
        console.log(window.getComputedStyle(currentSection).backgroundColor)
        setLogoColor(open || isLightBG ? 'dark' : 'light');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  return (
      <Link href="/#homePage" onClick={() => handleClick()} className={styles.logo} passHref>
        <Image 
          src={logoColor === 'light' ? 'https://julietasargsyan.github.io/Sign/SignWhite.png' : 'https://julietasargsyan.github.io/Sign/SignBlack.png'}
          alt='Sign Digital logo' 
          width={140}
          height={44}
          className={`${styles.logoImage}`}
        />
      </Link>
  )
}

export default Header;