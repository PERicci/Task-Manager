import styles from "./Task.module.css";

export function Task({ content, isDone }) {
  return (
    <li className={styles.taskItem}>
      <label className={styles.taskLabel}>
        {content}
        <input
          className={styles.taskHiddenCheck}
          type="checkbox"
          defaultChecked={isDone}
        />
        <span className={styles.taskVisibleCheck}></span>
      </label>
      <div className={styles.deleteTask}>D</div>
    </li>
  );
}
