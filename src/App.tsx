import "./global.css";
import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";


export function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <TaskList />
      </main>
      <footer>
        <a href="https://icons8.com/icon/11864/task" target="_blank">Task</a> icon by{" "}
        <a href="https://icons8.com" target="_blank">Icons8</a>
      </footer>
    </>
  );
}
