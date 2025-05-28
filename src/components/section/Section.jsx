import React from 'react'
import styles from './Section.module.css'
import { motion } from "framer-motion";

function Section({ children, sectionName, theme = '', id = '' }) {
  return ( 
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ amount: 0.2 }} 
      id={id} 
      className={`${styles.section} ${styles[sectionName]} ${styles[theme]}`}
    >
      {children}
    </motion.div>
  )
}

export default Section;