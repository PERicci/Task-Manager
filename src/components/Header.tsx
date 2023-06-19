import React, { useState } from "react";
import haederLogo from "../assets/headerLogo.png";
import styles from "./Header.module.css";

export function Header({ onTaskToAdd }) {
  const [taskContentToAdd, setTaskContentToAdd] = useState("");

  function handleInput(event) {
    setTaskContentToAdd(event.target.value);
  }

  function handleSendTaskToAdd() {
    if (taskContentToAdd !== "") {
      const dateToKey = String(new Date()).replace(/\s+/g, "");
      const firstAndLastLetterFromContent =
        taskContentToAdd.charAt(0) + taskContentToAdd.slice(-1);
      const key = firstAndLastLetterFromContent + dateToKey;

      const taskToAdd = {
        key: key,
        content: taskContentToAdd,
        isDone: false,
      };
      onTaskToAdd(taskToAdd);
    }
  }

  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={haederLogo} alt="clipboard" />
      <div className={styles.addTaskField}>
        <textarea
          className={styles.addTaskContent}
          onInput={handleInput}
          required
        ></textarea>
        <button className={styles.addTaskButton} onClick={handleSendTaskToAdd}>
          Add
        </button>
      </div>
    </header>
  );
}
