import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, text: "Reminder 1", date: "Feb 3", reminder: true },
    { id: 2, text: "Reminder 2", date: "Feb 4", reminder: false },
    { id: 3, text: "Reminder 3", date: "Feb 5", reminder: true },
  ]);

  //add tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };

  //delete props
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  const toggleRemind = (id) => {
    // console.log("helo");
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />

      {tasks.length > 0 ? (
        <Tasks task={tasks} onDelete={deleteTask} onToggle={toggleRemind} />
      ) : (
        "There are no tasks left"
      )}
    </div>
  );
};

export default App;
