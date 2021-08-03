import React from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core'
import useTodoState from './hooks/useTodoState'
import TodoList from './TodoList'
import TodoForm from './TodoForm'


export default function TodoApp() {
    const initialTodos = [{ id: 0, task: "Wash Car", completed: false }]
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);

    return (
        <div>
            <Paper style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
                elevation={0}
            >
                <AppBar color="primary" position="static" style={{ height: "64px" }}>
                    <Toolbar>
                        <Typography color="inherit">TODO LIST</Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm handleSubmit={addTodo} />
                        <TodoList todos={todos} handleDelete={removeTodo} handleToggle={toggleTodo} handleEdit={editTodo} />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
