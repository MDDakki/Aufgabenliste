import React, { useState, useEffect, useRef } from "react";

// funktion für das erstellen eines todo formular
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  // funktion zum verarbeiten der eingabe änderung
  const GriffChange = (e) => {
    setInput(e.target.value);
  };

  // funktion zum verarbeiten des forumlar
  const Griff = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div>
      <form className="todo__form" onSubmit={Griff}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Aufgabe aktualisieren"
              value={input}
              name="text"
              className="todo__input edit"
              onChange={GriffChange}
              ref={inputRef}
            />
            <button className="todo__taste edit">aktualisieren</button>{" "}
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Aufgabe hinzufügen"
              value={input}
              name="text"
              className="todo__input"
              onChange={GriffChange}
              ref={inputRef}
            />
            <button className="todo__taste">Aufgabe hinzufügen</button>{" "}
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
