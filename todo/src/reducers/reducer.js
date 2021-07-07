export const reducer = (state, action) => {
    // update state based on action
    switch (action.type) {
        case 'ADD_NEW_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()     
                }
            ];
        case 'COMPLETED':
            return (
                state.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }
                    } else {
                        return todo
                    }
                })
            )
        case 'CLEAR_COMPLETED':
            return(
                state.filter(todo => {
                    return !todo.completed
                })
            );

        default:
            return state;
    }
};

// create initial state
export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Cook dinner',
        completed: false,
        id: 3892987524
    },
    {
        item: 'Run 3 miles',
        completed: false,
        id: 3892987596
    }
];