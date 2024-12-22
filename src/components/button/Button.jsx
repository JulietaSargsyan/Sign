import Link from "next/link";
import styles from "./Button.module.css";

function Button() {
  return (
    <Link href="/#portfolio" class={styles.buttonContainer}>
      <button class={styles.button}>SEE WHAT WE DO</button>
    </Link>
  )
}

export default Button