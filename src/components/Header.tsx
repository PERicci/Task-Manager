import { useState, ChangeEvent, KeyboardEvent, FormEvent } from "react";
import headerLogo from "../assets/headerLogo.png";
import styles from "./Header.module.css";
import { TaskToAdd } from "../App";

interface HeaderProps {
  onTaskToAdd: (tasktoAdd: TaskToAdd) => void;
}

export function Header({ onTaskToAdd }: HeaderProps) {
  const [taskContentToAdd, setTaskContentToAdd] = useState("");

  function handleInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setTaskContentToAdd(event.target.value);
  }

  function onSendTaskEnterSubmit(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSendTaskToAdd();
    }
  }

  function onSendTaskOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSendTaskToAdd();
  }

  function onSendTaskToAdd() {
    if (taskContentToAdd !== "") {
      const date = new Date();
      const dateToKey = String(date).replace(/\s+/g, "");
      const firstAndLastLetterFromContent =
        taskContentToAdd.charAt(0) + taskContentToAdd.slice(-1);
      const dateMilliseconds = date.getMilliseconds();
      const id = firstAndLastLetterFromContent + dateToKey + dateMilliseconds;

      const taskToAdd = {
        id: id,
        content: taskContentToAdd,
        isDone: false,
      };
      onTaskToAdd(taskToAdd);
    }
    setTaskContentToAdd("");
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={headerLogo} alt="clipboard" />
        <h1 className={styles.titleTo}>to</h1>
        <h1 className={styles.titleDo}>do</h1>
      </div>

      <form
        onSubmit={onSendTaskOnSubmit}
        className={styles.addTaskField}
      >
        <textarea
          name="taskContent"
          className={styles.addTaskContent}
          onChange={handleInput}
          onKeyDown={onSendTaskEnterSubmit}
          value={taskContentToAdd}
          required
        ></textarea>
        <button type="submit" className={styles.addTaskButton}>
          Add
        </button>
      </form>
    </header>
  );
}
