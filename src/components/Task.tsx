import styles from "./Task.module.css";

export function Task() {
  const id = "test";

  return (
    <li className={styles.taskItem}>
      <label className={styles.taskLabel}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
        quaerat reprehenderit velit veritatis suscipit.
        <input className={styles.taskHiddenCheck} type="checkbox" id={id} />
        <span className={styles.taskVisibleCheck}></span>
      </label>
      <div className={styles.deleteTask}>D</div>
    </li>
  );
}
