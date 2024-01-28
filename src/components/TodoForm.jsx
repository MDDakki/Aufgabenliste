import React, { useState } from 'react';

// funktion für das erstellen eines todo formular
function TodoForm(props) {
 const [input, setInput] = useState('');

 // funktion zum verarbeiten der eingabe änderung
 const GriffChange = e => {
    setInput(e.target.value);
 }

 // funktion zum verarbeiten des forumlar
 const Griff = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

    setInput('');
 }

  return (
    <div>
        <form className='todo__form' onSubmit={Griff}>
            <input type="text" 
            placeholder='Aufgabe hinzufügen' 
            value={input} name='text' 
            className='todo__input'
            onChange={GriffChange}
            />
            <button className='todo__taste'>Aufgabe hinzufügen</button> 
        </form>
    </div>
  );
}

export default TodoForm;
