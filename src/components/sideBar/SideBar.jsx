'use client'

import {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { useSection } from '@/src/context/SectionContext';

import styles from './SideBar.module.css';
import SideBarLink from './SideBarLink';

function SideBar({ open, handleClick, isTouch }) {
  const { currentSection } = useSection();
  return (
    <>
      {isTouch ? (
        <div className={`${styles.sideBar} ${styles.touchScreen}`}>
          <motion.button  
            whileTap={{ scale: 1.1 }}
            className={`${styles.burgerMenu} 
                        ${open ? styles.open : ''}
                        ${((currentSection === 'heroSection' || currentSection === 'about-us-section') && !open) ? styles.white : ''}`
                      }
            onClick={handleClick}
          >
            <div></div>
            <div></div>
            <div></div>
          </motion.button>
        </div>
      ) : (
        <div className={styles.sideBar}>
          <motion.button  
            whileTap={{ scale: 1.1 }}
            className={`${styles.burgerMenu} ${open ? styles.open : ''}`} 
            onClick={handleClick}
          >
            <div></div>
            <div></div>
            <div></div>
          </motion.button>
          <SideBarLink handleClick={handleClick} href='/#heroSection'         text='hi there' />
          <SideBarLink handleClick={handleClick} href='/#whoWeAreSection'     text='who we are' />
          <SideBarLink handleClick={handleClick} href='/#whatWeveDoneSection' text="what we've done" />
          <SideBarLink handleClick={handleClick} href='/#whatWeCanDo-section' text='what we can do' />
        </div>
      )}
    </>
  )
}

export default SideBar