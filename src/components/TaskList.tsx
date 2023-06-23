import { useEffect, useState } from "react";
import { Task } from "./Task";
import { TaskToAdd } from "../App";
import { ClipboardText } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";

interface TaskListProps {
  taskToAdd: TaskToAdd;
  onTaskCounter: (count: number) => void;
  onTaskCompletedCounter: (count: number) => void;
}

export function TaskList({ taskToAdd, onTaskCounter, onTaskCompletedCounter }: TaskListProps) {
  const [tasks, setTasks] = useState<TaskToAdd[]>([]);

  useEffect(addTask, [taskToAdd]);

  useEffect(getListFromLocalStorage, []);

  function saveListInLocalStorage(taskList: TaskToAdd[]) {
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

  function taskCounterUpdate(newTaskList: TaskToAdd[]) {
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

  function updateTaskIsDone(taskId: string, newIsDone: boolean) {
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

  function deleteTask(taskId: string) {
    const newTaskList = tasks.filter((task) => task.id !== taskId);
    setTasks(newTaskList);
    taskCounterUpdate(newTaskList);
    saveListInLocalStorage(newTaskList);
  }

  return (
    <>
    <div className={tasks.length === 0 ? styles.taskListEmpty: styles.hidden}>
      <ClipboardText className={styles.clipboard}/>
      <h2>You ain't got no tasks listed</h2>
      <p>Create tasks and sort out your to-do items</p>
    </div>
    <ul className={tasks.length === 0 ? styles.hidden : styles.taskList}>
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
    </>
  );
}
