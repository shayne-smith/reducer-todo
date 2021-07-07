import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    return (
        <div className='todo-list'>
            {props.todos.map(todo => (
                <Todo 
                    debugger
                    key={todo.id}
                    todo={todo}
                    toggleTask={props.toggleTask}
                />
            ))}
        </div>
    );
};

export default TodoList;