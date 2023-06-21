import { useState } from "react";
import headerLogo from "../assets/headerLogo.png";
import styles from "./Header.module.css";

export function Header({ onTaskToAdd }) {
  const [taskContentToAdd, setTaskContentToAdd] = useState("");

  function handleInput(event) {
    setTaskContentToAdd(event.target.value);
  }

  function handleSendTaskToAdd(event) {
    event.preventDefault();

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

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendTaskToAdd(event);
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={headerLogo} alt="clipboard" />
        <h1 className={styles.titleTo}>to</h1>
        <h1 className={styles.titleDo}>do</h1>
      </div>

      <form onSubmit={handleSendTaskToAdd} className={styles.addTaskField}>
        <textarea
          className={styles.addTaskContent}
          onChange={handleInput}
          value={taskContentToAdd}
          onKeyDown={handleKeyDown}
          required
        ></textarea>
        <button type="submit" className={styles.addTaskButton}>
          Add
        </button>
      </form>
    </header>
  );
}
