import { useEffect, useState } from "react";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

export function TaskList({ taskToAdd, onTaskListCounter }) {
  const [tasks, setTasks] = useState([]);

  useEffect(addTask, [taskToAdd]);

  function addTask() {
    if (Object.keys(taskToAdd).length !== 0) {
      const newTaskList = [...tasks, taskToAdd]
      setTasks(newTaskList);
      onTaskListCounter(newTaskList.length)
    }
  }

  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => {
        return (
          <Task key={task.key} content={task.content} isDone={task.isDone} />
        );
      })}
    </ul>
  );
}
