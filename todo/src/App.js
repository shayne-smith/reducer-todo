import React, { useState, useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/Reducer'

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const toggleTask = taskId => {
    console.log('toggleTask is running: taskId', taskId);
    dispatch({ type: 'COMPLETED', payload: taskId });
  };

  const clearCompleted = (e) => {
    console.log('clear completed is running');
    dispatch({ type: 'CLEAR_COMPLETED' });
    e.preventDefault();
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Shayne's MVP Reducer Todo List!!</h1>
      </header>
      <div className='todo-form-container'>
        <h2>Todo Form</h2>
        <TodoForm 
          dispatch={dispatch}
          clearCompleted={clearCompleted}
        />
      </div>
      <div className='todo-list-container'>
        <h2>Todo List</h2>
        <TodoList 
          debugger
          todos={state}
          toggleTask={toggleTask}
        />
      </div>
    </div>
  );
}

export default App;
