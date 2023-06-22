import { useState, MouseEvent } from "react";
import styles from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";

interface TaskProps {
  id: string;
  content: string;
  isDone: boolean;
  onUpdateTaskIsDone: (taskId: string, isDone: boolean) => void;
  onDeleteTask: (taskId: string) => void;
}

export function Task({
  id,
  content,
  isDone,
  onUpdateTaskIsDone,
  onDeleteTask,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(isDone);

  function handleChangeTaskIsDone() {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onUpdateTaskIsDone(id, newCheckedState);
  }

  function handleDeleteTask(event: MouseEvent<HTMLDivElement>) {
    const taskIdToDelete = (event.currentTarget.previousSibling as HTMLElement).id;
    onDeleteTask(taskIdToDelete);
  }

  return (
    <li className={styles.taskItem}>
      <label
        id={id}
        className={isDone ? styles.taskLabelChecked : styles.taskLabel}
      >
        {content}
        <input
          className={styles.taskHiddenCheck}
          onChange={handleChangeTaskIsDone}
          type="checkbox"
          checked={isChecked}
        />
        <span className={styles.taskVisibleCheck}></span>
      </label>
      <div onClick={handleDeleteTask} className={styles.deleteTask}>
        <Trash />
      </div>
    </li>
  );
}
