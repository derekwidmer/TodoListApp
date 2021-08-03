import React from 'react'
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction, } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import useToggleState from './hooks/useToggleState'
import TodoEditForm from './TodoEditForm'

export default function Todo({ task, completed, id, handleDelete, handleToggle, handleEdit }) {
    const [isEditing, toggleEditing] = useToggleState(false);
    return (
        <ListItem style={{ height: "64px" }}>
            {!isEditing ? (
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => handleToggle(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="edit" onClick={toggleEditing}>
                            <Edit />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDelete(id)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            ) : (
                <TodoEditForm handleEdit={handleEdit} task={task} id={id} toggleEditing={toggleEditing} />
            )
            }
        </ListItem>
    )
}
