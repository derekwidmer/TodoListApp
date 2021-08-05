import React, { useContext } from 'react'
import useInputState from './hooks/useInputState'
import { TextField } from '@material-ui/core';
import { TodosContext } from './contexts/todos.context'


export default function TodoEditForm({ task, id, toggleEditing }) {
    const [value, updateValue] = useInputState(task);
    const { editTodo } = useContext(TodosContext);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                editTodo(id, value);
                toggleEditing();
            }}
            style={{ margin: "0 1rem", width: "100%" }}
        >
            <TextField
                value={value}
                onChange={updateValue}
                margin="normal"
                fullWidth
                autoFocus
            />
        </form>
    )
}
