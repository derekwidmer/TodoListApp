import React, { useContext } from 'react'
import { Paper, List, Divider } from '@material-ui/core'
import Todo from './Todo'
import { TodosContext } from './contexts/todos.context'

export default function TodoList() {
    const { todos } = useContext(TodosContext)
    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <Todo
                                {...todo}
                                key={todo.id}
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
