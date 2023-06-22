import styles from "./TaskCounter.module.css";

interface TaskCounterProps {
  taskCounter: number;
  taskCompletedCounter: number;
}

export function TaskCounter({taskCounter, taskCompletedCounter}: TaskCounterProps) {
  
  return (
    <div className={styles.taskCounter}>
      <div className={styles.allTasks}>
        <div className={styles.allTasksLabel}>Tasks</div>
        <div className={styles.tasksAmount}>{taskCounter}</div>
      </div>
      <div className={styles.completedTasks}>
        <div className={styles.completedTasksLabel}>Completed</div>
        <div className={styles.tasksAmount}>{taskCompletedCounter} of {taskCounter}</div>
      </div>
    </div>
  );
}
