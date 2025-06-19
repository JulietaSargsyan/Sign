'use client'

import {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import styles from './SideBar.module.css';
import SideBarLink from './SideBarLink';

function SideBar({ open, handleClick }) {
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
      <SideBarLink handleClick={handleClick} href='/#heroSection'         text='hi there' />
      <SideBarLink handleClick={handleClick} href='/#whoWeAreSection'     text='who we are' />
      <SideBarLink handleClick={handleClick} href='/#whatWeveDoneSection' text='what we&apos;ve done' />
      <SideBarLink handleClick={handleClick} href='/#whatWeCanDo-section' text='what we can do' />
    </div>
  )
}

export default SideBar