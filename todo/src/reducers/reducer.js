import React from 'react';

const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

const reducer = (state, action) => {
    const newState = {...state};
    if (action.type === '')
    return newState;
};

export default (reducer, initialState);