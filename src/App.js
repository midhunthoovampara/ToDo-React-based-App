import "./App.css";
import { useState, useEffect } from "react";
import IncompleteTasks from "./components/IncompleteTasks";
import OnProgressTasks from "./components/OnProgressTasks";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("toDos"));
    if (savedTodos) {
      // Migrate old boolean status to new string status if necessary
      const migratedTodos = savedTodos.map(task => {
        if (typeof task.status === 'boolean') {
          return { ...task, status: task.status ? 'completed' : 'pending' };
        }
        return task;
      });
      setToDos(migratedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = days[new Date().getDay()];

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentDay} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            if (toDo.trim() !== "") {
              setToDos([
                ...toDos,
                { id: Date.now(), text: toDo, status: 'pending' },
              ]);
              setToDo("");
            }
          }}
          className="fas fa-plus"
        ></i>
      </div>

      <div className="status-container">
        <IncompleteTasks 
          toDos={toDos.filter(obj => obj.status === 'pending')} 
          setToDos={setToDos} 
        />
        <OnProgressTasks 
          toDos={toDos.filter(obj => obj.status === 'onProgress')} 
          setToDos={setToDos} 
        />
        <CompletedTasks 
          toDos={toDos.filter(obj => obj.status === 'completed')} 
          setToDos={setToDos} 
        />
      </div>
    </div>
  );
}

export default App;
