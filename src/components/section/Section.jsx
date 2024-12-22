import React from 'react'
import styles from './Section.module.css'
import Header from '../header/Header';

function Section({ children, sectionName, theme }) {
  return ( 
    <section className={`${styles.section} ${styles[sectionName]} ${styles[theme]}`}>
      {children}
    </section>
  )
}

export default Section;