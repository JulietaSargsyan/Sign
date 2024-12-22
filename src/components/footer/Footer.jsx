import Link from "next/link";
import styles from './Footer.module.css'

const Footer = () => (
    <footer className={styles.footer}>
      <p>&copy; 2024 All rights reserved. Sign Digital</p>
      <Link className={styles.social} href="https://www.linkedin.com/in/sign-digital-design-studio-109a56339/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
      <Link className={styles.social} href="https://www.facebook.com/Sign-2213681662203036" target="_blank" rel="noopener noreferrer">Facebook</Link>
      <Link className={styles.social} href="https://www.instagram.com/sign_digital.studio/" target="_blank" rel="noopener noreferrer">Instagram</Link>
    </footer>
  );
  
  export default Footer;
  