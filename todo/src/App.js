import React, { useState, useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/Reducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="header">
        <p>Hello World!</p>
      </header>
    </div>
  );
}

export default App;
