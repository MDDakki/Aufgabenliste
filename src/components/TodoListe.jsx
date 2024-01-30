import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoListe() {
 const [todos, setTodos] = useState([]);

 // Funktion zum adden der Todos zur liste
 const addTodo = todo => {
     // checkt ob der neue Text des Todos leer ist oder nur aus Leerzeichen besteht
    if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
    }
    // erstellt eine neue liste von Todos 
    const newTodos = [todo, ...todos];

    // Aktualisieren des State mit der neuen Liste von Todos
    setTodos(newTodos);
    console.log(...todos);
 }

 // funktion zum entfernen eines Todos aus der Liste
 const removeTodo = id => {
    // erstellen einer neuen liste die alle todos außer dem zu entfernenden Todo enthält
    const RemoveArr = [...todos].filter(todo => todo.id !== id);
    
    setTodos(RemoveArr);
 }

 // Funktion zum Aktualisieren eines vorhandenen Todos in der Liste.
 const updateTodo = (todoID, newValue) => {
    // checkt ob der neue Text des Todos leer ist oder nur aus Leerzeichen besteht.
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    }
    setTodos(prev => prev.map(item => (item.id === todoID ? newValue : item)));
 }

 // funktion zum markieren eines Todos als abgeschlossen oder unvollständig.
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

 return (
    <div>
        <h1>Aufgabenliste</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}></Todo>
    </div>
  );
}

export default TodoListe;
