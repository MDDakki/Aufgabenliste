import './App.css';
import TodoForm from './components/TodoForm';
import TodoListe from './components/TodoListe';

function App() {
  return (
    <div className="Todo__app">
      <TodoListe />
    </div>
  );
}

export default App;
