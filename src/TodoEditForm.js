import React from 'react'
import useInputState from './hooks/useInputState'
import { TextField } from '@material-ui/core';

export default function TodoEditForm({ task, id, handleEdit, toggleEditing }) {
    const [value, updateValue, resetValue] = useInputState(task);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                handleEdit(id, value);
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
