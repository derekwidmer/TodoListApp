import React, { useContext } from 'react'
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction, } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import useToggleState from './hooks/useToggleState'
import TodoEditForm from './TodoEditForm'
import { TodosContext } from './contexts/todos.context'


export default function Todo({ task, completed, id }) {
    const [isEditing, toggleEditing] = useToggleState(false);
    const { removeTodo, toggleTodo } = useContext(TodosContext);
    return (
        <ListItem style={{ height: "64px" }}>
            {!isEditing ? (
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="edit" onClick={toggleEditing}>
                            <Edit />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            ) : (
                <TodoEditForm task={task} id={id} toggleEditing={toggleEditing} />
            )
            }
        </ListItem>
    )
}
