import { useEffect, useState } from "react";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

export function TaskList({ taskToAdd, onTaskCounter, onTaskCompletedCounter }) {
  const [tasks, setTasks] = useState([]);

  useEffect(addTask, [taskToAdd]);

  useEffect(getListFromLocalStorage, []);

  function saveListInLocalStorage(taskList) {
    const taskListStringfied = JSON.stringify(taskList);
    localStorage.setItem("taskList", taskListStringfied);
  }

  function getListFromLocalStorage() {
    const taskListStringfied = localStorage.getItem("taskList");

    if (taskListStringfied) {
      const taskListArray = JSON.parse(taskListStringfied);
      setTasks(taskListArray);
      taskCounterUpdate(taskListArray);
    }
  }

  function taskCounterUpdate(newTaskList) {
    onTaskCounter(newTaskList.length);

    const completedTasksCount = newTaskList.filter(
      (task) => task.isDone
    ).length;
    onTaskCompletedCounter(completedTasksCount);
  }

  function addTask() {
    if (Object.keys(taskToAdd).length !== 0) {
      const newTaskList = [...tasks, taskToAdd];

      setTasks(newTaskList);
      taskCounterUpdate(newTaskList);
      saveListInLocalStorage(newTaskList);
    }
  }

  function updateTaskIsDone(taskId, newIsDone) {
    const newTaskList = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone: newIsDone };
      }
      return task;
    });
    setTasks(newTaskList);
    taskCounterUpdate(newTaskList);
    saveListInLocalStorage(newTaskList);
  }

  function deleteTask(taskId) {
    const newTaskList = tasks.filter((task) => task.id !== taskId);
    setTasks(newTaskList);
    taskCounterUpdate(newTaskList);
    saveListInLocalStorage(newTaskList);
  }

  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            isDone={task.isDone}
            onUpdateTaskIsDone={updateTaskIsDone}
            onDeleteTask={deleteTask}
          />
        );
      })}
    </ul>
  );
}
