import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import { useSection } from '@/src/context/SectionContext';

import styles from './SideBar.module.css';
import cross from '../../assets/sideBarCross.png'

function SideBarLink({ handleClick, href, text }) {
  const { currentSection, setCurrentSection } = useSection();
  const sectionName = href.split('#')[1];

  const handleLinkClick = () => {
    handleClick;
    setCurrentSection(sectionName);
  }

  return (
    <div className={`${styles.linkContainer} ${currentSection === sectionName ? styles.active : ''}`}>
      <Image src={cross} alt='sign cross' width={14} height={14}/>
      <Link onClick={handleLinkClick} className={styles.sideBar__navListItem} href={href}>{text}</Link>
    </div>
  )
}

export default SideBarLink