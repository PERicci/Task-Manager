import "./global.css";
import { TaskList } from "./components/TaskList";
import { TaskCounter } from "./components/TaskCounter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <main>
        <TaskCounter />
        <TaskList />
      </main>
      <Footer />
    </>
  );
}
