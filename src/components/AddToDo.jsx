import { useState } from "react";

function AddToDo({ addTodo }) {
  const [titel, setTitel] = useState("");
  const [beskrivning, setBeskrivning] = useState("");

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Titel"
        value={titel}
        onChange={(e) => {setTitel(e.target.value)}}
      />
      <input
        type="text"
        placeholder="Beskrivning"
        value={beskrivning}
        onChange={(e) => {setBeskrivning(e.target.value)}}
      />
      <button onClick={() => {
        let nyTodo = {
          titel, beskrivning
        }
        addTodo(nyTodo)
      }}>Lägg till {titel}</button>
    </div>
  );
}

export default AddToDo;
