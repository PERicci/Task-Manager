import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <div>Github</div>
        <div>LinkedIn</div>
      </div>
      <div className={styles.iconReference}>
        <p>
          <a href="https://icons8.com/icon/11864/task" target="_blank">
            Task
          </a>{" "}
          icon by{" "}
          <a href="https://icons8.com" target="_blank">
            Icons8
          </a>
        </p>
      </div>
    </footer>
  );
}
