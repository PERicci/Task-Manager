import "./global.css";
import { TaskList } from "./components/TaskList";
import { TaskCounter } from "./components/TaskCounter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";

export function App() {
  const [taskToAdd, setTaskToAdd] = useState({});
  const [taskListCounter, setTaskListCounter] = useState(0);
  
  return (
    <>
      <Header onTaskToAdd={setTaskToAdd} />
      <main>
        <TaskCounter taskListCounter={taskListCounter}/>
        <TaskList
          taskToAdd={taskToAdd}
          onTaskListCounter={setTaskListCounter}
        />
      </main>
      <Footer />
    </>
  );
}
