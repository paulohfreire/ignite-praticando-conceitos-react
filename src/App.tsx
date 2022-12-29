import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <TaskList />
    </>
  );
}

export default App;
