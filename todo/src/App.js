import React, { useState, useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/Reducer'

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="App">
      <header className="header">
        <h1>Shayne's MVP Reducer Todo List!!</h1>
      </header>
      <div className='todo-form-container'>
        <h2>Todo Form</h2>
        <TodoForm />
      </div>
      <div className='todo-list-container'>
        <h2>Todo List</h2>
        <TodoList 
          todos={state}
        />
      </div>
    </div>
  );
}

export default App;
