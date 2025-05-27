import React from 'react'
import Image from 'next/image'

import styles from './Card.module.css'

function Card({ image, name, position }) {
  return (
    <div className={styles.cardContainer}>
        <Image src={image} alt='Team member image' style={{ width: '100%', height: 'auto'}}/>
        <h3>{name}</h3>
        <p>{position}</p>
    </div>
  )
}

export default Card