import Link from "next/link";
import styles from "./Button.module.css";

function Button({ theme }) {
  return (
    <div>
      <Link href="/#portfolio" className={`${styles.buttonContainer} ${styles[theme]}`}>
        <button className={styles.button}>SEE WHAT WE DO</button>
      </Link>
    </div>
  )
}

export default Button