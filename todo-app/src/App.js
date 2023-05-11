
import { useState } from 'react';
//import './App.css';
import Form from './Form';
import TodoList from './TodoList';

function App() {

const [inputText, setInputText] = useState("");

const [todos, setTodos] = useState([]);

  return (
    <div className="App">
     <Form   inputText={inputText} setInputText={setInputText} todos={todos} settodos={setTodos} />
     <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
