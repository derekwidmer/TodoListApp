import React from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'

export default function TodoList({ todos, handleDelete, handleToggle, handleEdit }) {
    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <Todo
                                task={todo.task}
                                key={todo.id}
                                id={todo.id}
                                completed={todo.completed}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                                handleEdit={handleEdit}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        )
    } else {
        return null;
    }
}
