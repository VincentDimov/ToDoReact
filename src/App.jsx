import { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import AddToDo from "./components/AddToDo";

function App() {
  // 🔹 1. Start-array med 5 todos
  const [todos, setTodos] = useState([
    { titel: "Skapa en React-app", beskrivning: "Initiera projektet med Vite eller CRA" },
    { titel: "Skriv App.jsx", beskrivning: "Bygg huvudkomponenten" },
    { titel: "Lägg till CSS", beskrivning: "Ge appen stil med CSS" },
    { titel: "Skapa komponenter", beskrivning: "Bryt upp i återanvändbara komponenter" },
    { titel: "Testa och debugga", beskrivning: "Kör appen och fixa buggar" }
  ]);

  // 🔹 Lägg till ny todo
  const addTodo = (nyTodo) => {
    setTodos([...todos, nyTodo]);
  };

  // 🔹 Ta bort todo
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // 🔹 Markera som klar/ej klar
  const toggleDone = (index) => {
    const updated = [...todos];
    updated[index].klar = !updated[index].klar;
    setTodos(updated);
  };

  return (
    <div className="app">
      <h1>📝 To Do List: {todos.length} st</h1>
      <AddToDo addTodo={addTodo} />

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <ToDo
            key={index}
            todo={todo}
            onToggle={() => toggleDone(index)}
            onRemove={() => removeTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
