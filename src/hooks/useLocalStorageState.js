import { useState, useEffect } from 'react'

function UseLocalStorageState(key, defaultVal) {
    // Make piece of state based off of value in localStorage
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        } catch (e) {
            val = defaultVal;
        }
        return val;
    });
    // Update localStorage whenever that state changes with useEffect
    useEffect(() => { window.localStorage.setItem(key, JSON.stringify(state)) }, [state]);
    return [state, setState];
}

export default UseLocalStorageState;

// EXAMPLE

// const [todos, setTodos] = useLocalStorageState("todos", []);

// Difference to useState: 
// Grabs value from localStorage if it exists 
// & updates localStorage automatically when it changes.