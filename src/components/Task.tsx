import { useState } from "react";
import styles from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";

export function Task({
  id,
  content,
  isDone,
  onUpdateTaskIsDone,
  onDeleteTask,
}) {
  const [isChecked, setIsChecked] = useState(isDone);

  function handleChangeTaskIsDone() {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onUpdateTaskIsDone(id, newCheckedState);
  }

  function handleDeleteTask(event) {
    const taskIdToDelete = event.currentTarget.previousSibling.id;
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
