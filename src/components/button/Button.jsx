'use client'

import { useState } from "react";
import Link from "next/link";

import styles from "./Button.module.css";

function Button({ theme, text, href, transparent=false, openNewTab=false }) {
  const [isMouseEntered, setIsMouseEntered] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const isDownload = href.match(/\.(pdf|jpg|png|zip|txt|csv|json)$/i);

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCoords({ x, y });
    setIsMouseEntered(prevState => !prevState);
  };

  function handleMouseLeave(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCoords(prevCoords => ({ ...prevCoords, x: x, y: y }));
    setIsMouseEntered(prevState => !prevState);
  };

  return (
    <div className={styles.btnContainer}>
      {isDownload ? (
        <a href={href} download className={`${styles.buttonContainer} ${styles[theme]}`}>
          <button 
            className={styles.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p style={{ color: isMouseEntered ? 'white' : ''}}>{text}</p>
            <span className={`${styles.wave} ${isMouseEntered ? styles.finSize : ''}`} 
              style={{
              top: coords.y + 'px',
              left:coords.x + 'px',
              }}></span>
          </button>
        </a>
      ) : (
        <Link href={href} className={`${styles.buttonContainer} ${styles[theme]} ${transparent ? styles.transparentBG : ''}`} {...(openNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          <button 
            className={styles.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p style={{ color: isMouseEntered ? 'white' : ''}}>{text}</p>
            <span className={`${styles.wave} ${isMouseEntered ? styles.finSize : ''}`} 
              style={{
              top: coords.y + 'px',
              left:coords.x + 'px',
              }}></span>
          </button>
        </Link>
      )}
    </div>
  );
}


export default Button;