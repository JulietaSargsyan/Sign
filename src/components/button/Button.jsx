import Link from "next/link";
import styles from "./Button.module.css";

function Button({ theme, text, href }) {
  return (
    <div>
      <Link href={href} className={`${styles.buttonContainer} ${styles[theme]}`}>
        <button className={styles.button}>{text}</button>
      </Link>
    </div>
  )
}

export default Button