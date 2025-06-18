'use client'

import {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import styles from './SideBar.module.css';
import SideBarLink from './SideBarLink';

function SideBar({ open, handleClick }) {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('div[class*=section]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
            console.log('section', currentSection)
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <div className={styles.sideBar}>
      <motion.button  
        whileTap={{ scale: 1.1 }}
        className={`${styles.burgerMenu} ${open ? styles.open : ''}`} 
        onClick={() => handleClick()}
      >
        <div></div>
        <div></div>
        <div></div>
      </motion.button>
      <SideBarLink handleClick={handleClick} href='/#heroSection'         currentSection={currentSection} text='hi there' />
      <SideBarLink handleClick={handleClick} href='/#whoWeAreSection'     currentSection={currentSection} text='who we are' />
      <SideBarLink handleClick={handleClick} href='/#whatWeveDoneSection' currentSection={currentSection} text='what we&apos;ve done' />
      <SideBarLink handleClick={handleClick} href='/#whatWeCanDo-section' currentSection={currentSection} text='what we can do' />
    </div>
  )
}

export default SideBar