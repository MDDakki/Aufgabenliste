import React, { useState } from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from "./TodoForm";

// funktion für die Darstellung der Todos
function Todo({ completeTodo, todos, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  // funktion zum aktualisierung
  const SubmitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null, 
      value: ''
    })
  }

  // prüfung ob ein edit-Vorgang aktiv ist
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={SubmitUpdate}/>
  }

  // mapping der Todos für die Anzeige
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo__row complete" : "todo__row"}
      key={index}
    > 
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine 
        onClick={() => removeTodo(todo.id)}
        className="icon__loschen"/>
        <TiEdit
        className="icon__bearbeiten"
        onClick={() => setEdit({ id: todo.id, value: todo.text})}/>
      </div>
    </div>
  ));
}

export default Todo;
