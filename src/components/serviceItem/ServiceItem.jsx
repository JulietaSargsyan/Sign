import React from 'react'
import { easeOut, motion } from 'framer-motion'

import styles from './ServiceItem.module.css'

function ServiceItem({ title, children, direction }) {
  return (
    <motion.div 
      className={styles.servicesListContainerItem}
      initial={{ opacity: 0, [direction]: -5000}}
      animate={{ opacity: 1, [direction]: 0}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
        <h3>{title}</h3>
        {children}
    </motion.div>
  )
}

export default ServiceItem