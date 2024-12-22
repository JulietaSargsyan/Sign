'use client'

import React, { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
    const circleRef = useRef(null);
    const dotRef = useRef(null);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        if (circleRef.current && dotRef.current) {
          circleRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
          dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
        }
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

  return (
    <>
      <div className={styles.cursor__circle}></div>
      <div className={styles.cursor__dot}></div>
    </>
  );
}
