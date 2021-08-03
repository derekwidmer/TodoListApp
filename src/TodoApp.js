import React, { useState, useEffect } from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core'
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList'
import TodoForm from './TodoForm'


export default function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    })

    const addTodo = (newTodoText) => {
        setTodos(currentTodos => ([...currentTodos, { id: uuid(), task: newTodoText, completed: false }]))
    }
    const removeTodo = (todoId) => {
        setTodos(currentTodos => (currentTodos.filter(todo => todo.id !== todoId)))
    }
    const toggleTodo = (todoId) => {
        setTodos(currentTodos => (
            currentTodos.map(todo =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : { ...todo }
            ))
        )
    }
    const editTodo = (todoId, newTask) => {
        setTodos(currentTodos => (
            currentTodos.map(todo =>
                todo.id === todoId ? { ...todo, task: newTask } : { ...todo }
            ))
        )
    }

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
