import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos);
    return {
        todos,
        addTodo: (newTodoText) => {
            setTodos(currentTodos => ([...currentTodos, { id: uuid(), task: newTodoText, completed: false }]))
        },
        removeTodo: (todoId) => {
            setTodos(currentTodos => (currentTodos.filter(todo => todo.id !== todoId)))
        },
        toggleTodo: (todoId) => {
            setTodos(currentTodos => (
                currentTodos.map(todo =>
                    todo.id === todoId ? { ...todo, completed: !todo.completed } : { ...todo }
                ))
            )
        },
        editTodo: (todoId, newTask) => {
            setTodos(currentTodos => (
                currentTodos.map(todo =>
                    todo.id === todoId ? { ...todo, task: newTask } : { ...todo }
                ))
            )
        }
    }
}