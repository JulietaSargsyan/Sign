import React from 'react'
import styles from './Section.module.css'

function Section({ children, sectionName, theme = '', id = '', isLastSection = false }) {
  return ( 
    <section
      id={id} 
      className={`section ${styles.section} ${styles[sectionName]} ${styles[theme]}`}
      style={{minHeight: isLastSection ? '90vh' : '100vh'}}
    >
      {children}
    </section>
  )
}

export default Section;