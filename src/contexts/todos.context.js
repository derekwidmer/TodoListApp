// keeps track of todos and all methods that interact with todos

import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState'

const defaultTodos = [
    { id: 1, task: "Take out the trash", completed: false }
]
export const TodosContext = createContext();

export function TodosProvider(props) {
    const todoStuff = useTodoState(defaultTodos);
    return (
        <TodosContext.Provider value={todoStuff}>
            {props.children}
        </TodosContext.Provider>
    );
}