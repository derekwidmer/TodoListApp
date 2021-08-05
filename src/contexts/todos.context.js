// keeps track of todos and all methods that interact with todos

import React, { createContext } from 'react';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer'
import todoReducer from '../reducers/todo.reducer'

const defaultTodos = [
    { id: 1, task: "Take out the trash", completed: false }
]
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}