import React from 'react'
import { Button, Paper, TextField } from '@material-ui/core'
import useInputState from './hooks/useInputState'

export default function TodoForm({ handleSubmit }) {
    const [value, updateValue, resetValue] = useInputState("")
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={e => {
                e.preventDefault();
                handleSubmit(value);
                resetValue();
            }}>
                <TextField
                    value={value}
                    onChange={updateValue}
                    margin="normal"
                    label="Add New Todo"
                    fullWidth
                />
                {/* <Button variant="contained" color="primary" type="submit">Add Todo</Button> */}
            </form>
        </Paper>
    )
}