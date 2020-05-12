import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/Reducer';

const TodoForm = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [userInput, setUserInput] = useState('');

    const handleChanges = e => {
        setUserInput(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_NEW_TODO', payload: userInput });
        setUserInput('');
    };

    return (
        <form>
            <input 
                type='text'
                name='todo'
                placeholder='Enter your task...'
                onChange={handleChanges}
                value={userInput}
            />
            <button onClick={submitForm}>
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;