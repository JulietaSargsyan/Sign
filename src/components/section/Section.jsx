import React from 'react'
import styles from './Section.module.css'

function Section({ children, sectionName, theme = '', id = '' }) {
  return ( 
    <section
      id={id} 
      className={`section ${styles.section} ${styles[sectionName]} ${styles[theme]}`}
    >
      {children}
    </section>
  )
}

export default Section;