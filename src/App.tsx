import "./global.css";
import { TaskList } from "./components/TaskList";
import { TaskCounter } from "./components/TaskCounter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";

export interface TaskToAdd {
  id: string;
  content: string;
  isDone: boolean;
}

export function App() {
  const [taskToAdd, setTaskToAdd] = useState<TaskToAdd>({} as TaskToAdd);
  const [taskCounter, setTaskCounter] = useState<number>(0);
  const [taskCompletedCounter, setTaskCompletedCounter] = useState<number>(0);
  
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
