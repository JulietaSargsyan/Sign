import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

import signStarImg from '../../assets/Sign_Star.svg';
import whiteRounds from '../../assets/whiterounds.png';

function StarShape() {
  const [move, setMove] = useState(false)

  const handleClick = () => {
    setMove(true);
    setTimeout(() => setMove(false), 1000)
  }

  return (
    <motion.div className="starShape-container">
      <motion.div 
        initial={{ scale: 0, y: -1000 }} 
        animate={{ y: 0, scale: move ? 10 : 1 }}
        transition={{ type:'spring'}}
        onClick={handleClick}
      >
        <Image src={signStarImg} alt="flkfldf" width={61} height={85} className="star-shape" />
      </motion.div>
      <Image src={whiteRounds} alt='ldk'  width={50} height={50} className="star-round" />
    </motion.div>
  )
}

export default StarShape