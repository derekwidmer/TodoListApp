import { useReducer, useEffect } from 'react'

function useLocalStorageReducer(key, defaultVal, reducer) {
    // Make piece of state based off of value in localStorage
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
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
    return [state, dispatch];
}

export default useLocalStorageReducer;