// keeps track of todos and all methods that interact with todos

import React, { createContext, useReducer } from 'react';
import useTodoState from '../hooks/useTodoState'
import todoReducer from '../reducers/todo.reducer'

const defaultTodos = [
    { id: 1, task: "Take out the trash", completed: false }
]
export const TodosContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </TodosContext.Provider>
    );
}