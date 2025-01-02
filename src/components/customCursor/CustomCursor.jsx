'use client'

import React, { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {["cursor__circle", "cursor__dot"].map((className) => (
        <div
          key={className}
          className={styles[className]}
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        ></div>
      ))}
    </>
  );
}
