'use client'

import { useState, useEffect } from "react";
import styles from "./Intro.module.css";
import logo from '../../../public/SignBlack.png'
import Image from "next/image";

export default function IntroPage({ onAnimationEnd }) {
  const [moveUp, setMoveUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMoveUp(true), 500); // Wait for text animation
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (moveUp) {
      const timer = setTimeout(onAnimationEnd, 900); // Wait for move-up animation
      return () => clearTimeout(timer);
    }
  }, [moveUp, onAnimationEnd]);

  return (
    <div className={`${styles.intro} ${moveUp ? styles["move-up"] : ""}`}>
        <Image className={styles.logo} src={logo} alt='sign digital logo'/>
    </div>
  );
}
