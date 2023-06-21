import "./global.css";
import { TaskList } from "./components/TaskList";
import { TaskCounter } from "./components/TaskCounter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";

export function App() {
  const [taskToAdd, setTaskToAdd] = useState({});
  const [taskCounter, setTaskCounter] = useState(0);
  const [taskCompletedCounter, setTaskCompletedCounter] = useState(0);
  
  return (
    <>
      <Header onTaskToAdd={setTaskToAdd} />
      <main>
        <TaskCounter taskCounter={taskCounter} taskCompletedCounter={taskCompletedCounter}/>
        <TaskList
          taskToAdd={taskToAdd}
          onTaskCounter={setTaskCounter}
          onTaskCompletedCounter={setTaskCompletedCounter}
        />
      </main>
      <Footer />
    </>
  );
}
