import haederLogo from "../assets/headerLogo.png";
import styles from "./Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={haederLogo} alt="clipboard" />
      <div className={styles.addTaskField}>
        <textarea className={styles.addTaskContent} name="" id=""></textarea>
        <button className={styles.addTaskButton}>Add</button>
      </div>
    </header>
  );
}
