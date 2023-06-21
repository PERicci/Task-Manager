import styles from "./Footer.module.css";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://github.com/PERicci" target="_blank">
          <GithubLogo />
        </a>
        <a href="https://www.linkedin.com/in/pedro-ricciardi/" target="_blank">
          <LinkedinLogo />
        </a>
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
