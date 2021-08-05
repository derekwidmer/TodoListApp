import React, { useContext } from 'react'
import { Paper, TextField } from '@material-ui/core'
import useInputState from './hooks/useInputState'
import { DispatchContext } from './contexts/todos.context'

export default function TodoForm() {
    const [value, updateValue, resetValue] = useInputState("")
    const dispatch = useContext(DispatchContext);
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({ type: "ADD", task: value });
                resetValue();
            }}>
                <TextField
                    value={value}
                    onChange={updateValue}
                    margin="normal"
                    label="Add New Todo"
                    fullWidth
                />
            </form>
        </Paper>
    )
}