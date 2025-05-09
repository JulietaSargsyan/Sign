'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const positionRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const lerp = (start, end, amt) => start + (end - start) * amt;

    const animate = () => {
      // Smooth transition
      positionRef.current.x = lerp(positionRef.current.x, mousePosition.x, 0.1);
      positionRef.current.y = lerp(positionRef.current.y, mousePosition.y, 0.1);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePosition]);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor__circle}></div>
      <div ref={dotRef} className={styles.cursor__dot}></div>
    </>
  );
}
