import Link from "next/link";
import styles from "./Button.module.css";

function Button({ theme, text, href }) {
  const isDownload = href.match(/\.(pdf|jpg|png|zip|txt|csv|json)$/i);

  return (
    <div>
      {isDownload ? (
        <a href={href} download className={`${styles.buttonContainer} ${styles[theme]}`}>
          <button className={styles.button}>{text}</button>
        </a>
      ) : (
        <Link href={href} className={`${styles.buttonContainer} ${styles[theme]}`}>
          <button className={styles.button}>{text}</button>
        </Link>
      )}
    </div>
  );
}


export default Button;