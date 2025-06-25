import React from 'react'
import styles from './Section.module.css'

function Section({ children, sectionName, theme = '', id = '' }) {
  return ( 
    <section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ amount: 0.2 }} 
      id={id} 
      className={`section ${styles.section} ${styles[sectionName]} ${styles[theme]}`}
    >
      {children}
    </section>
  )
}

export default Section;