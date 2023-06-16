import styles from "./TaskCounter.module.css";

export function TaskCounter() {
  return (
    <div className={styles.taskCounter}>
      <div className={styles.allTasks}>
        <div className={styles.allTasksLabel}>Tasks</div>
        <div className={styles.tasksAmount}>5</div>
      </div>
      <div className={styles.completedTasks}>
        <div className={styles.completedTasksLabel}>Completed</div>
        <div className={styles.tasksAmount}>3</div>
      </div>
    </div>
  );
}
