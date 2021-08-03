import React, { useEffect } from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core'
import useTodoState from './hooks/useTodoState'
import TodoList from './TodoList'
import TodoForm from './TodoForm'


export default function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || [];
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    })

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
                        <Typography color="inherit">TODOS WITH HOOKS</Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justify="center" style={{ marginTop: "1rem" }}>
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm handleSubmit={addTodo} />
                        <TodoList todos={todos} handleDelete={removeTodo} handleToggle={toggleTodo} handleEdit={editTodo} />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
