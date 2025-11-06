function ToDo({ todo, onToggle, onRemove }) {
  return (
    <li
      className={`todo-item ${todo.klar ? "done" : ""}`}
      onClick={onToggle}
    >
      <strong>{todo.titel}</strong>
      {!todo.klar && <p>{todo.beskrivning}</p>}

      <button
        className="remove-btn"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      >
        🗑 Ta bort
      </button>
    </li>
  );
}

export default ToDo;
