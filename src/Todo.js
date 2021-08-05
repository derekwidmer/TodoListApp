import React, { useContext, memo } from 'react'
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction, } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import useToggleState from './hooks/useToggleState'
import TodoEditForm from './TodoEditForm'
import { DispatchContext } from './contexts/todos.context'

export default memo(function Todo({ task, completed, id }) {
    const [isEditing, toggleEditing] = useToggleState(false);
    const dispatch = useContext(DispatchContext);
    return (
        <ListItem style={{ height: "64px" }}>
            {!isEditing ? (
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: "TOGGLE", id })} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="edit" onClick={toggleEditing}>
                            <Edit />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => dispatch({ type: "REMOVE", id })}>
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
})
