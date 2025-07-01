'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data.js';

import './style.css'

const PortfolioPage = () => {
  return (
    <div className='portfolioPage-container'>
      <h1 className='title'>Our Clients</h1>
      <div className='portfolio-items'>
        {portfolioData.map((item, index) => (
          <motion.div 
            initial={{x: index % 2 === 0 ? 2000 : -2000}} 
            animate={{ x: 0}} 
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 10,
              duration: 1
            }} 
            key={item.id} 
          >
            <Link href={`/portfolio/${item.slug}`} className='portfolio-item'>
              <div className='portfolio-item__img'>
                <Image src={item.primaryImage} alt={item.name} fill/>
              </div>
              <span className='portfolio-item__name'>{item.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage